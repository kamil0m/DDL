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
        <div className="min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative">
            <section id="contact" className="p-8 center shadow-lg rounded-lg flex flex-col max-w-xl w-full relative outline-black/5 bg-slate-800/90">
                <header className="mb-6">
                    <h2 className="text-4xl font-bold text-center text-white">
                        Napisz do nas!
                    </h2>
                </header>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Imię i nazwisko/Nazwa"
                        type="text"
                        id="name"
                        placeholder="Twoje imię i nazwisko bądź nazwa"
                    />
                    <Input
                        label="E-mail"
                        type="email"
                        id="email"
                        placeholder="Twój e-mail"
                    />
                    <Input
                        label="Temat"
                        type="text"
                        id="title"
                        placeholder="Wpisz temat wiadomości"
                    />
                    <Input
                        label="Wiadomość"
                        type="textarea"
                        id="message"
                        placeholder="Tutaj wpisz swoją wiadomość"
                    />
                    <button
                        type="submit"
                        className="w-full text-white border-2 py-2 px-6 mt-2 focus:outline-none hover:bg-[#4d6699] 
                            hover:shadow-[0_0_40px_rgba(100,149,237,0.7)] rounded-full text-lg"
                    >
                        Wyślij
                    </button>
                    {status && (<p className={`font-bold text-lg mt-4 ${status === "Wiadomość została wysłana!" ? "text-green-500" :
                        status === "Wysyłanie..." ? "text-white" :
                            "text-red-500"}`}>
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


