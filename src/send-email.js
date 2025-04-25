// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const express = require('express');

import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT_MAIL || 5000;
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: "smtp.mail.ovh.net", //ssl0.ovh.net
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post('/send-email', (req, res) => {
    const { name, title, email, message } = req.body;

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `Wiadomość od ${name} w temacie ${title}`,
        replyTo: email,
        text: `Imię i nazwisko/Nazwa: ${name}\nEmail: ${email}\n\nTemat: ${title}\n\nWiadomość:\n${message}`,
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Błąd podczas wysyłania:', error);
            res.status(500).send({ message: 'Błąd przy wysyłce wiadomości.' });
        } else {
            console.log('Wiadomość wysłana: ' + info.response);
            res.status(200).send({ message: 'Wiadomość została wysłana pomyślnie!' });
        }
    });
});
app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});