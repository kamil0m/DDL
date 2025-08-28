import { useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import Input from "./Input";
import FormData from "../models/interfaces/FormData";

export default function ContactForm() {
  const { t } = useTranslation();

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

    const { name, email, title, message, phone } = formData;

    if (!name || !email || !title || !message) {
      setStatus(t("contact.form.status.fillAllRequired"));
      return;
    }

    setStatus(t("contact.form.status.sending"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "72dca3bb-1c99-46d1-bad6-40dbca210eb8", 
          name,
          email,
          phone,
          title,
          message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(t("contact.form.status.success"));
        setFormData({
          name: "",
          email: "",
          title: "",
          message: "",
          phone: "",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus(
          t("contact.form.status.apiError", { message: result.message })
        );
      }
    } catch (error) {
      // console.error("Błąd:", error);
      setStatus(t("contact.form.status.error"));
    }
  };

  return (
    <div className="flex justify-center items-center p-4 lg:p-12 relative overflow-hidden">
      <div className="bg-polka-bl-green" />
      <div className="hidden lg:block absolute top-0 right-0 w-24 h-24 bg-blue rounded-tr-full z-0" />
      <div className="bg-polka-br-green top-1/6 right-0" />
      <section
        id="contact"
        className="relative z-10 bg-white shadow-xl rounded-xl p-8 max-w-full w-lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            id="name"
            label=""
            placeholder={`${t("contact.form.name.placeholder")}*`}
            t={t}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            type="email"
            id="email"
            label=""
            placeholder={`${t("contact.form.email.placeholder")}*`}
            t={t}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Input
            type="text"
            id="title"
            label=""
            placeholder={`${t("contact.form.title.placeholder")}*`}
            t={t}
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Input
            type="tel"
            id="phone"
            label=""
            placeholder={t("contact.form.phone.placeholder")}
            t={t}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <Input
            type="textarea"
            id="message"
            label=""
            placeholder={`${t("contact.form.message.placeholder")}*`}
            t={t}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <p className="text-xs md:text-sm italic text-green text-left">
            *{t("contact.form.explain")}
          </p>
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="button button-blue size-fit px-2 lg:px-6 py-2 lg:py-3 text-sm lg:text-xl font-light lg:w-full mt-2"
            >
              {t("contact.form.submit")}
            </button>
          </div>
          {status && (
            <p
              className={`font-bold text-lg mt-4 ${
                status === t("contact.form.status.success")
                  ? "text-green"
                  : status === t("contact.form.status.sending")
                  ? "text-white"
                  : "text-red"
              }`}
            >
              {status === t("contact.form.status.success")
                ? `✓ ${status}`
                : status.startsWith("Błąd:") ||
                  status === t("contact.form.status.error")
                ? `✗ ${status}`
                : status}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
