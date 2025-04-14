import formidable from "formidable";
import { createReadStream } from "fs";
import { Readable } from "stream";
import fetch from "node-fetch";

export const config = {
  api: {
    bodyParser: false,
  },
};

function parseForm(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: true,
      maxFileSize: 25 * 1024 * 1024, // 25MB
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const stream = file.filepath
      ? createReadStream(file.filepath)
      : Readable.from(file.buffer || []);

    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => {
      resolve(Buffer.concat(chunks).toString("base64"));
    });
  });
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    console.log("Starting request processing");
    const { fields, files } = await parseForm(req);
    console.log("Form parsed successfully");

    if (!files?.file) {
      console.warn("No files received in request");
      return res.status(400).json({ error: "No files received" });
    }

    const fileList = Array.isArray(files.file) ? files.file : [files.file];
    console.log(`Processing ${fileList.length} files`);

    const attachments = [];
    for (const file of fileList) {
      try {
        console.log(`Processing file: ${file.originalFilename}`);
        const content = await fileToBase64(file);
        attachments.push({
          filename: file.originalFilename || `attachment-${Date.now()}`,
          content,
          encoding: "base64",
        });
      } catch (error) {
        console.error("Error processing file:", error);
      }
    }

    console.log("Sending email with attachments");
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "info@victoriaschooloflondon.co.uk",
        to: "contact.sabbirbhuiyan@gmail.com",
        subject: `Application from ${fields.name}`,
        html: buildEmailHtml(fields),
        attachments,
      }),
    });

    if (!emailRes.ok) {
      const error = await emailRes.text();
      throw new Error(`Email failed: ${error}`);
    }

    return res.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
}

function buildEmailHtml(fields) {
  return `
    <h2>Course Application</h2>
    ${Object.entries(fields)
      .filter(([key]) => key !== "file")
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
      .join("")}
  `;
}
