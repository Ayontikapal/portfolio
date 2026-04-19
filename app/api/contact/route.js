import nodemailer from "nodemailer";

export async function POST(req){
    try{
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        await transporter.sendMail({
            from: process.env.EMAIL_USER, 
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `New message from ${name}`,
            text: `From: ${email} \nName: ${name} \nMessage: ${message}`,
        });
        return Response.json({ message: "Email sent successfully" }, { status: 200 });
    }
    catch (error) {
    console.error("EMAIL ERROR:", error);

    return Response.json({ error: "Failed to send email" },{ status: 500 });
}}