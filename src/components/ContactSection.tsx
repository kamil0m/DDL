import ContactForm from './ContactForm';
import { FiDownload } from 'react-icons/fi';
import { BiLogoFacebookCircle } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="flex flex-row justify-center items-between mt-40 gap-6">
            <div className="flex flex-col justify-center w-1/2 gap-6">
                <h2>{t("contact.title")}</h2>
                <h3>Skontaktuj się z nami</h3>
                <p>Masz pytania, chcesz dowiedzieć się więcej o naszej działalności lub zaproponować współpracę? Skontaktuj się z nami za pomocą poniższego formularza – z przyjemnością odpowiemy na Twoją wiadomość. Jesteśmy otwarci na nowe pomysły, inicjatywy i wszelkie formy zaangażowania. Napisz do nas, niezależnie od tego, czy jesteś członkiem społeczności polonijnej, sympatykiem kultury polskiej, czy po prostu chcesz się z nami spotkać!</p>
                <div className="flex flex-col gap-6">

                    {/* Facebook group */}
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/groups/1403266290513975" target="_blank" className="bg-zinc-200 p-5 rounded-lg">
                            <BiLogoFacebookCircle className="text-blue-600 text-4xl" />
                        </a>
                        <div>
                            <a href="https://www.facebook.com/groups/1403266290513975" target="_blank" className="font-semibold underline text-black text-xl mt-0">{t("contact.facebookgroup")}</a>
                            <p className="text-xl mt-0">{t("contact.facebookgroupjoin")}</p>
                        </div>
                    </div>
                    {/* Facebook page */}
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61559848594019" target="_blank" className="bg-zinc-200 p-5 rounded-lg">
                            <BiLogoFacebookCircle className="text-blue-600 text-4xl" />
                        </a>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=61559848594019" target="_blank" className="font-semibold underline text-black text-xl mt-0">{t("contact.facebookpage")}</a>
                            <p className="text-xl mt-0">{t("contact.facebookpageinfo")}</p>
                        </div>
                    </div>

                    {/* <div className="flex items-center gap-4">
                        <div className="bg-zinc-200 p-5 rounded-lg">
                            <FiDownload className="text-blue-600 text-3xl" />
                        </div>
                        <div>
                            <p className="font-semibold text-black text-xl">{t("contact.lilleguide")}</p>
                            <a href="#" className="underline text-xl text-darkgrey font-light">{t("contact.lilleguidedownload")}</a>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Contact form */}
            <div className="flex flex-row items-center w-1/2 gap-8">
                < ContactForm />
            </div>

        </section >
    )

}