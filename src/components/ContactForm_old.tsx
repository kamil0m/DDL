import { useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import Input from "./Input";
import FormData from "../models/interfaces/FormData";

export default function ContactForm() {
    const { t } = useTranslation();

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
        setStatus(t("form.status.sending"));

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
                setStatus(t("form.status.success"));
                setFormData({
                    name: "",
                    email: "",
                    title: "",
                    message: "",
                });
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus(t("form.status.apiError", { message: result.message }));
            }
        } catch (error) {
            console.error("Błąd:", error);
            setStatus(t("form.status.error"));
        }
    };

    return (
        <div className="min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative">
            <section id="contact" className="p-8 center shadow-lg rounded-lg flex flex-col max-w-xl w-full relative outline-black/5 bg-slate-800/90">
                <header className="mb-6">
                    <h2 className="text-4xl font-bold text-center text-white">
                        {t("contact.title")}
                    </h2>
                </header>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label={t("form.name.label")}
                        type="text"
                        id="name"
                        placeholder={t("form.name.placeholder")}
                    />
                    <Input
                        label={t("form.email.label")}
                        type="email"
                        id="email"
                        placeholder={t("form.email.placeholder")}
                    />
                    <Input
                        label={t("form.title.label")}
                        type="text"
                        id="title"
                        placeholder={t("form.title.placeholder")}
                    />
                    <Input
                        label={t("form.message.label")}
                        type="textarea"
                        id="message"
                        placeholder={t("form.message.placeholder")}
                    />
                    <button
                        type="submit"
                        className="w-full text-white border-2 py-2 px-6 mt-2 focus:outline-none hover:bg-[#4d6699] 
                            hover:shadow-[0_0_40px_rgba(100,149,237,0.7)] rounded-full text-lg"
                    >
                        {t("form.submit")}
                    </button>
                    {status && (
                        <p className="text-green-500 font-bold text-lg mt-4">
                            <span className="text-green-500">✓ </span>{status}
                        </p>
                    )}
                </form>
            </section>
        </div>
    );
}

