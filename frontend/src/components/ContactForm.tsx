import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Wysyłanie...");

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Wiadomość wysłana pomyślnie!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Wystąpił błąd podczas wysyłania wiadomości');

            }
        } catch (error) {
            console.error(error);
            setStatus('Wystąpił błąd. Spróbuj ponownie.');
        }
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
                    <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2">
                            Imię i nazwisko/Nazwa
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Twoje imię i nazwisko bądź nazwa"
                            className="w-full px-4 py-2 text-white bg-gray-600 rounded-lg focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2">
                            E-mail
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Twój e-mail"
                            className="w-full px-4 py-2 text-white bg-gray-600 rounded-lg focus:outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-white font-medium mb-2">
                            Wiadomość
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tutaj wpisz swoją wiadomość"
                            className="w-full px-4 py-2 h-40 text-white bg-gray-600 rounded-lg focus:outline-none"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#4d6699] 
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

