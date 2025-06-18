import ContactForm from './ContactForm';
import { FiDownload } from 'react-icons/fi';
import { BiLogoFacebookCircle } from "react-icons/bi";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
    const { t } = useTranslation();

    return (
        <section className="flex flex-row justify-center items-between mt-40 gap-6">
            <div className="flex flex-col justify-center w-1/2 gap-6">
                <h2>{t("contact.title")}</h2>
                <h3>Get In Touch With Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id fugit pariatur dicta inventore, consequuntur error sequi deleniti earum, eveniet quidem maxime distinctio.</p>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-zinc-200 p-5 rounded-lg">
                            <BiLogoFacebookCircle className="text-blue-600 text-4xl" />
                        </div>
                        <div>
                            <p className="font-semibold underline text-black text-xl">{t("contact.facebookgroup")}</p>
                            <p className="text-xl">{t("contact.facebookgroupjoin")}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-zinc-200 p-5 rounded-lg">
                            <BiLogoFacebookCircle className="text-blue-600 text-4xl" />
                        </div>
                        <div>
                            <p className="font-semibold underline text-black text-xl">{t("contact.facebookpage")}</p>
                            <p className="text-xl">{t("contact.facebookpageinfo")}</p>
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

            <div className="flex flex-row items-center w-1/2 gap-8">
                < ContactForm />
            </div>

        </section >
    )

}