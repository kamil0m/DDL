import { useState, FormEvent } from "react";
import Input from "./Input";
import FormData from "../models/interfaces/FormData";

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
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
        const phoneInput = (e.currentTarget as HTMLElement).querySelector<HTMLTextAreaElement>('#phone')!.value;


        const form = {
            name: nameInput,
            email: emailInput,
            title: titleInput,
            message: messageInput,
            phone: phoneInput,
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
                    phone: "",
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
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue rounded-tr-full z-0" />
            <div className="bg-polka-br-green top-1/6 right-0" />
            <section id="contact" className="relative z-10 bg-white shadow-xl rounded-xl p-8 max-w-full w-lg">

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        type="text"
                        id="name"
                        placeholder="Twoje imię"

                    />
                    <Input
                        type="email"
                        id="email"
                        placeholder="Twój email"
                    />
                    <Input
                        type="text"
                        id="title"
                        placeholder="Tytuł"
                    />
                    <Input
                        type="text"
                        id="phone"
                        placeholder="Twój telefon"

                    />
                    <Input
                        type="textarea"
                        id="message"
                        placeholder="Twoja wiadomość"
                    />
                    <button
                        type="submit"
                        className="button button-blue size-fit px-6 py-3 text-xl font-light w-full mt-2"

                    >
                        Wyślij wiadomość
                    </button>
                    {status && (<p className={`font-bold text-lg mt-4 ${status === "Wiadomość została wysłana!" ? "text-green" :
                        status === "Wysyłanie..." ? "text-white" :
                            "text-red"}`}>
                        {status === "Wiadomość została wysłana!"
                            ? `✓ ${status}`
                            : status.startsWith("Błąd:") || status === "Wystąpił błąd podczas wysyłania wiadomości."
                                ? `✗ ${status}`
                                : status
                        }
                    </p>
                    )}
                </form>
            </section>
        </div>
    );
}


