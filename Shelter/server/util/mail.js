// see pokemon on nodemailer

import nodemailer from "nodemailer"

export async function sendMail(to, subject, text) {

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    })

    let info = await transporter.sendMail({
        from: `"Shelter" <shelter@mail.dk>`,
        to: `<${to}>`,
        subject: subject,
        text: text
    })

    console.log("Message send: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}