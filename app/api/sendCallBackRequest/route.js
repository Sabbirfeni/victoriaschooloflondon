import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { fullname, email, phone, message, emailTo } = await req.json();

  if (!fullname || !email || !phone || !message) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
    });
  }

  try {
    const emailResponse = await resend.emails.send({
      from: "info@victoriaschooloflondon.co.uk", // ✅ Verified domain
      to: emailTo,
      reply_to: email, // ✅ So replies go to the user, not your no-reply email
      subject: "Callback Request",
      html: `
        <h1>New Callback Request</h1>
        <p><strong>Full Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("Resend email response:", emailResponse);

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

// export async function POST(req) {
//   const { fullname, email, phone, message, emailTo } = await req.json();

//   if (!fullname || !email || !phone || !message) {
//     return new Response(JSON.stringify({ error: "All fields are required" }), {
//       status: 400,
//     });
//   }

//   // 1. Create transport
//   const transporter = nodemailer.createTransport({
//     host: "smtpout.secureserver.net",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.SMTP_EMAIL,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   // 2. Create mail options
//   const mailOptions = {
//     from: `"Victoria School" <${process.env.SMTP_EMAIL}>`,
//     to: emailTo,
//     replyTo: email,
//     subject: "Callback Request",
//     text: `
//       New Callback Request

//       Full Name: ${fullname}
//       Email: ${email}
//       Phone: ${phone}
//       Message: ${message}
//     `,
//     html: `
//       <h1>New Callback Request</h1>
//       <p><strong>Full Name:</strong> ${fullname}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone Number:</strong> ${phone}</p>
//       <p><strong>Message:</strong> ${message}</p>
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return new Response(
//       JSON.stringify({ success: true, message: "Email sent successfully" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return new Response(JSON.stringify({ error: "Failed to send email" }), {
//       status: 500,
//     });
//   }
// }
