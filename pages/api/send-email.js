// pages/api/send-email.ts
import fs from "fs";
import path from "path";
import formidable from "formidable";
import fetch from "node-fetch";

// Ensure upload directory exists
const UPLOAD_DIR = path.join(process.cwd(), "uploads");
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const form = formidable({
    multiples: true,
    keepExtensions: true,
    uploadDir: UPLOAD_DIR,
    maxFileSize: 20 * 1024 * 1024, // 20MB limit
  });

  try {
    console.log("Starting form parsing...");
    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error("Form parsing error:", err);
          reject(err);
        } else {
          console.log("Form parsed successfully");
          resolve([fields, files]);
        }
      });
    });

    console.log("Files received:", files?.file ? "Yes" : "None");

    // Prepare attachments
    const attachments = [];
    if (files && files.file) {
      const uploadedFiles = Array.isArray(files.file)
        ? files.file
        : [files.file];
      console.log(`Processing ${uploadedFiles.length} file(s)`);

      for (const file of uploadedFiles) {
        try {
          console.log(`- Processing: ${file.originalFilename}`);
          console.log(`  Temp path: ${file.filepath}`);
          console.log(`  Size: ${(file.size / 1024).toFixed(2)} KB`);

          if (!fs.existsSync(file.filepath)) {
            console.error("File not found at path:", file.filepath);
            continue;
          }

          const fileContent = fs.readFileSync(file.filepath);
          console.log(`  Read ${fileContent.length} bytes`);

          attachments.push({
            filename: file.originalFilename || `attachment-${Date.now()}`,
            content: fileContent.toString("base64"),
            encoding: "base64",
          });
        } catch (fileError) {
          console.error("Error processing file:", fileError);
        }
      }
    }

    console.log(`Prepared ${attachments.length} attachment(s) for email`);

    // Send email via Resend API
    const emailData = {
      from: "info@victoriaschooloflondon.co.uk",
      to: "contact.sabbirbhuiyan@gmail.com",
      subject: `Application from ${fields.name}`,
      html: `
        <h2>Course Application</h2>
        <p><strong>Name:</strong> ${fields.name}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Phone:</strong> ${fields.phone}</p>
        <p><strong>Nationality:</strong> ${fields.nationality}</p>
        <p><strong>Address:</strong> ${fields.address}</p>
        <p><strong>Qualification:</strong> ${fields.qualification}</p>
        <p><strong>Message:</strong> ${fields.message}</p>
        <hr />
        <h3>Course Information</h3>
        <p><strong>Course:</strong> ${fields.courseName}</p>
        <p><strong>University:</strong> ${fields.university}</p>
        <p><strong>Campus:</strong> ${fields.campus}</p>
        <p><strong>Tuition Fees:</strong> ${fields.tuitionFees}</p>
        <p><strong>Scholarship:</strong> ${fields.scholarship}</p>
      `,
      attachments: attachments,
    };

    console.log("Sending email with attachments...");
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailData),
    });

    // Clean up files
    if (files && files.file) {
      const uploadedFiles = Array.isArray(files.file)
        ? files.file
        : [files.file];
      for (const file of uploadedFiles) {
        try {
          if (fs.existsSync(file.filepath)) {
            fs.unlinkSync(file.filepath);
            console.log(`Cleaned up: ${file.filepath}`);
          }
        } catch (cleanupError) {
          console.error("Error cleaning up file:", cleanupError);
        }
      }
    }

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Email sending failed:", errorText);
      return res.status(500).json({
        success: false,
        error: "Failed to send email",
        details: errorText,
      });
    }

    console.log("Email sent successfully!");
    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
      details: error.message,
    });
  }
}

// Previous solution (api/send-email/route.js)

// import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";
// import fetch from "node-fetch"; // Ensure node-fetch is installed

// export const config = {
//   api: {
//     bodyParser: false, // Disable default body parser for file uploads
//   },
// };

// export async function POST(req) {
//   // Create the uploads directory if it doesn't exist
//   const uploadDir = path.join(process.cwd(), "uploads");
//   if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
//   }

//   // Read the request body as a buffer
//   const chunks = [];
//   const reader = req.body.getReader();
//   while (true) {
//     const { done, value } = await reader.read();
//     if (done) break;
//     chunks.push(value);
//   }
//   const buffer = Buffer.concat(chunks);

//   // Parse the FormData object manually
//   const formData = new FormData();
//   const boundary = req.headers.get("content-type").split("boundary=")[1];
//   const parts = buffer.toString("utf-8").split(`--${boundary}`);

//   const fields = {};
//   const files = [];

//   for (const part of parts) {
//     if (part.includes("Content-Disposition: form-data;")) {
//       const match = part.match(/name="([^"]+)"/);
//       if (match) {
//         const name = match[1];
//         const value = part.split("\r\n\r\n")[1].trim();

//         if (part.includes("filename=")) {
//           // Handle file uploads
//           const filenameMatch = part.match(/filename="([^"]+)"/);
//           if (filenameMatch) {
//             const filename = filenameMatch[1];
//             const filePath = path.join(uploadDir, filename);

//             // Write the file to the uploads directory
//             fs.writeFileSync(filePath, value);

//             files.push({
//               name,
//               filename,
//               filePath,
//             });
//           }
//         } else {
//           // Handle form fields
//           fields[name] = value;
//         }
//       }
//     }
//   }

//   // Extract fields
//   const {
//     name,
//     nationality,
//     phone,
//     address,
//     email,
//     qualification,
//     message,
//     courseName,
//     university,
//     campus,
//     tuitionFees,
//     scholarship,
//   } = fields;

//   try {
//     // Send email using Resend or another service
//     // Example using Resend:
//     const emailResponse = await fetch("https://api.resend.com/emails", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
//       },
//       body: JSON.stringify({
//         from: "info@victoriaschooloflondon.co.uk",
//         to: "contact.sabbirbhuiyan@gmail.com",
//         subject: `Application from ${name}`,
//         html: `
//         <h2>Course Application</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Nationality:</strong> ${nationality}</p>
//         <p><strong>Address:</strong> ${address}</p>
//         <p><strong>Qualification:</strong> ${qualification}</p>
//         <p><strong>Message:</strong> ${message}</p>
//         <hr />
//         <h3>Course Information</h3>
//         <p><strong>Course:</strong> ${courseName}</p>
//         <p><strong>University:</strong> ${university}</p>
//         <p><strong>Campus:</strong> ${campus}</p>
//         <p><strong>Tuition Fees:</strong> ${tuitionFees}</p>
//         <p><strong>Scholarship:</strong> ${scholarship}</p>
//       `,
//         attachments: files.map((file) => ({
//           filename: file.filename,
//           content: fs.readFileSync(file.filePath).toString("base64"),
//           encoding: "base64",
//         })),
//       }),
//     });

//     if (!emailResponse.ok) {
//       throw new Error("Failed to send email");
//     }

//     // Clean up uploaded files
//     files.forEach((file) => {
//       fs.unlinkSync(file.filePath); // Delete the file after processing
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Email sent successfully!",
//     });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { success: false, error: "Error sending email" },
//       { status: 500 }
//     );
//   }
// }
