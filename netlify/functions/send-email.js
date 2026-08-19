const nodemailer = require("nodemailer");

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { name, email, message } = data || {};
  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const toEmail = process.env.TO_EMAIL || process.env.SMTP_USER;
    const mailOptions = {
      from: process.env.SMTP_FROM || `${name} <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: toEmail,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: JSON.stringify({ ok: true, info }) };
  } catch (err) {
    console.error("Netlify function send-email error:", err);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to send email" }) };
  }
};
