const nodemailer = require("nodemailer");


const sendMail = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 587,
        secure: false,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: "fanny.runolfsson22@ethereal.email",
            pass: "ke1r1FUzv9vDMxvTEc",
        },
    });
try{
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <fanny.runolfsson22@ethereal.email>', // sender address
        to: "bar@example.com, malovikasinha08@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
} catch (error) {
    console.error("Error sending mail:", error);
    res.status(500).json({ error: "Internal Server Error" });
}

    
}
module.exports = sendMail;