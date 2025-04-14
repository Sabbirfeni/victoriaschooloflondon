import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import fetch from "node-fetch"; // Ensure node-fetch is installed

export const config = {
  api: {
    bodyParser: false, // Disable default body parser for file uploads
  },
};

export async function POST(req) {
  // Create the uploads directory if it doesn't exist
  const uploadDir = path.join(process.cwd(), "uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Read the request body as a buffer
  const chunks = [];
  const reader = req.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }
  const buffer = Buffer.concat(chunks);

  // Parse the FormData object manually
  const formData = new FormData();
  const boundary = req.headers.get("content-type").split("boundary=")[1];
  const parts = buffer.toString("utf-8").split(`--${boundary}`);

  const fields = {};
  const files = [];

  for (const part of parts) {
    if (part.includes("Content-Disposition: form-data;")) {
      const match = part.match(/name="([^"]+)"/);
      if (match) {
        const name = match[1];
        const value = part.split("\r\n\r\n")[1].trim();

        if (part.includes("filename=")) {
          // Handle file uploads
          const filenameMatch = part.match(/filename="([^"]+)"/);
          if (filenameMatch) {
            const filename = filenameMatch[1];
            const filePath = path.join(uploadDir, filename);

            // Write the file to the uploads directory
            fs.writeFileSync(filePath, value);

            files.push({
              name,
              filename,
              filePath,
            });
          }
        } else {
          // Handle form fields
          fields[name] = value;
        }
      }
    }
  }

  // Extract fields
  const {
    name,
    nationality,
    phone,
    address,
    email,
    qualification,
    message,
    courseName,
    university,
    campus,
    tuitionFees,
    scholarship,
  } = fields;

  try {
    // Send email using Resend or another service
    // Example using Resend:
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "info@victoriaschooloflondon.co.uk",
        to: "contact.sabbirbhuiyan@gmail.com",
        subject: `Application from ${name}`,
        html: `
        <h2>Course Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Qualification:</strong> ${qualification}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr />
        <h3>Course Information</h3>
        <p><strong>Course:</strong> ${courseName}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Campus:</strong> ${campus}</p>
        <p><strong>Tuition Fees:</strong> ${tuitionFees}</p>
        <p><strong>Scholarship:</strong> ${scholarship}</p>
      `,
        attachments: files.map((file) => ({
          filename: file.filename,
          content: fs.readFileSync(file.filePath).toString("base64"),
          encoding: "base64",
        })),
      }),
    });

    if (!emailResponse.ok) {
      throw new Error("Failed to send email");
    }

    // Clean up uploaded files
    files.forEach((file) => {
      fs.unlinkSync(file.filePath); // Delete the file after processing
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Error sending email" },
      { status: 500 }
    );
  }
}
