import { NextResponse, NextRequest } from "next/server";

const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
    const EMAIL_TO = process.env.EMAIL_TO;
    const EMAIL_FROM = process.env.EMAIL_FROM;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const { messageHTML } = await request.json();
    console.log(messageHTML);
    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: { user: EMAIL_FROM, pass: EMAIL_PASS },
    });

    const options = {
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: "Sefanoaltavista.com Message",
        html: messageHTML,
    };

    try {
        const email = await transporter.sendMail(options);

        return NextResponse.json({
            e: null,
            message: "success",
        });
    } catch (e) {
        return NextResponse.json({
            e,
            message: "error",
        });
    }
}
