import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.formData();
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });
  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      subject: `Feedback from Website`,
      html: `
        <p>Name: ${data.get("fullName")} </p>
        <p>Email: ${data.get("email")} </p>
        <p>Mobile: ${data.get("mobile")} </p>
        <p>Feedback: ${data.get("Feedback")} </p>
        <p>Feedback Related To: ${data.get("relatedTo")} </p>
        <p>AwbNumber: ${data.get("awbNumber")} </p>
        <p>CallMailAccepted: ${data.get("callMailAccepted")} </p>
        `,
    });
    return NextResponse.json(
      { message: "Success: email was sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
