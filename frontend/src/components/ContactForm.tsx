import { useState, ChangeEvent, FormEvent } from "react";
import Input from "./Input";
import FormData from "../models/interfaces/FormData";

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<string>("");


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nameInput:string = (e.currentTarget as HTMLElement).querySelector<HTMLInputElement>('#name')!.value
        
        const emailInput:string = (e.currentTarget as HTMLElement).querySelector<HTMLInputElement>('#email')!.value
        
        const messageInput:string = (e.currentTarget as HTMLElement).querySelector<HTMLTextAreaElement>('#message')!.value

        setFormData({
            name: nameInput,
            email: emailInput,
            message: messageInput,
        });

        setStatus("Wysyłanie...");

    };

    return (
        <div className="min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative">

            {/* Contact Form */}
            < section id="contact" className="p-8 center shadow-lg rounded-lg flex flex-col max-w-xl w-full relative outline-black/5 bg-slate-800/90" >
                <header className="mb-6">
                    <h2 className="text-4xl font-bold text-center text-white">
                        Napisz do nas!
                    </h2>
                </header>
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    < Input
                        label="Imię i nazwisko/Nazwa"
                        type="text"
                        id="name"
                        placeholder="Twoje imię i nazwisko bądź nazwa"
                    />

                    < Input
                        label="E-mail"
                        type="email"
                        id="email"
                        placeholder="Twój e-mail"
                    />

                    < Input
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
                    {status && <p className="text-white mt-4">{status}</p>}
                </form>
            </section>
        </div>
    );
}

