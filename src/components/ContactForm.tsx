import { useState, FormEvent } from "react";
import Input from "./Input";
import FormData from "../models/interfaces/FormData";

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        title: "",
        message: "",
    });

    const [status, setStatus] = useState<string>("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nameInput = (e.currentTarget as HTMLElement).querySelector<HTMLInputElement>('#name')!.value;
        const titleInput = (e.currentTarget as HTMLElement).querySelector<HTMLInputElement>('#title')!.value;
        const emailInput = (e.currentTarget as HTMLElement).querySelector<HTMLInputElement>('#email')!.value;
        const messageInput = (e.currentTarget as HTMLElement).querySelector<HTMLTextAreaElement>('#message')!.value;

        const form = {
            name: nameInput,
            email: emailInput,
            title: titleInput,
            message: messageInput,
        };

        setFormData(form);
        setStatus("Wysyłanie...");

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("Wiadomość została wysłana!");
                setFormData({
                    name: "",
                    email: "",
                    title: "",
                    message: "",
                });
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus(`Błąd: ${result.message}`);
            }
        } catch (error) {
            console.error("Błąd:", error);
            setStatus("Wystąpił błąd podczas wysyłania wiadomości.");
        }
    };

    return (
        <div className=" flex justify-center items-center p-12 relative overflow-hidden">
            <div className="bg-polka-bl-green" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600 rounded-tr-full z-0" />
            <div className="bg-polka-br-green top-1/6 right-0" />
            <section id="contact" className="relative z-10 bg-white shadow-xl rounded-xl p-8 max-w-md w-full">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        type="text"
                        id="name"
                        placeholder="Your Name"

                    />
                    <Input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                    />
                    <Input
                        type="text"
                        id="phone"
                        placeholder="Your Phone"

                    />
                    <textarea
                        id="message"
                        placeholder="Your Message"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 h-32 resize-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                    {status && (
                        <p className="text-green-500 font-bold text-lg mt-4">
                            <span className="text-green-500">✓ </span>
                            {status}
                        </p>
                    )}
                </form>
            </section>
        </div>
    );
}


