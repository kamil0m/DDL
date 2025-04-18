const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_RECEIVER,
            subject: "Nowa wiadomość z formularza kontaktowego",
            text: message,
            html: `<p><strong>Imię/Nazwa:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Wiadomość:</strong><br/>${message}</p>`,
        });

        res.status(200).json({ message: "Wysłano" });
    } catch (err) {
        console.error("Błąd podczas wysyłania e-maila:", err);
        res.status(500).json({ message: "Błąd serwera" });
    }
});

app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
