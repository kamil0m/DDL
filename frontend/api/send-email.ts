import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        console.log('Received form data:', req.body);
        try {
            const transporter = nodemailer.createTransport({
                //service: 'gmail',
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            // Message settings
            const mailOptions = {
                from: `"${name}" <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_TO,
                subject: `New message from ${name}`,
                replyTo: email,
                text: `
You have received a new message from the contact form on your website:

Name: ${name}
E-mail address: ${email}

Message content:
${message}
        `,
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Failed to send email.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
