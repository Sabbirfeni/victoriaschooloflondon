import { Resend } from "resend"; // Using named import for the Resend module

const resend = new Resend(process.env.RESEND_API_KEY); // Your Resend API key

export async function POST(req) {
  const { fullname, email, phone, message, emailTo } = await req.json();

  if (!fullname || !email || !phone || !message) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
    });
  }

  try {
    // Using the correct method to send an email
    const emailResponse = await resend.emails.send({
      from: "noreply@resend.dev", // Replace with your verified sender email
      to: emailTo, // Replace with the recipient email
      subject: "Callback Request",
      html: `
        <h1>New Callback Request</h1>
        <p><strong>Full Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
