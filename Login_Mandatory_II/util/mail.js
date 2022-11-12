// https://nodemailer.com/about/

import nodemailer  from "nodemailer";

export async function sendMail(name, to, subject, text, html) {
   
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    });


let info = await transporter.sendMail({
    from: `"Nybroe" <nybroe@mail.dk>`,
    to: `${name} <${to}>`,
    subject: subject,
    text: text,
    html: html
})

console.log("Message send: %s", info.messageId);

console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
