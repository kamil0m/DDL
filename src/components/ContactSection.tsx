import ContactForm from './ContactForm';
import { BiLogoFacebookCircle } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import RenderRichText from './RenderRichText';

export default function ContactSection({data}: {data?: any}) {
    const { t } = useTranslation();

    return (
        <section id="contact" className="flex flex-col lg:flex-row justify-center items-between mx-4 lg:mx-0 mt-10 lg:mt-40 gap-6">
            <div className="flex flex-col justify-center lg:w-1/2 gap-6">
                <h2>{t("contact.title")}</h2>
                <h3>{data?.KontaktPodtytul}</h3>
                < RenderRichText content={data?.KontaktTekst} />
                <div className="flex flex-col gap-6">

                    {/* Facebook group */}
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/groups/1403266290513975" target="_blank" className="bg-zinc-200 p-2 lg:p-5 rounded-lg">
                            <BiLogoFacebookCircle className="text-blue-600 text-4xl" />
                        </a>
                        <div>
                            <a href="https://www.facebook.com/groups/1403266290513975" target="_blank" className="font-semibold underline text-black text-sm lg:text-xl mt-0">{t("contact.facebookgroup")}</a>
                            <p className="mt-0">{t("contact.facebookgroupjoin")}</p>
                        </div>
                    </div>

                    {/* Facebook page */}
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61559848594019" target="_blank" className="bg-zinc-200 p-2 lg:p-5 rounded-lg">
                            <BiLogoFacebookCircle className="text-blue-600 text-4xl" />
                        </a>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=61559848594019" target="_blank" className="font-semibold underline text-black text-sm lg:text-xl mt-0">{t("contact.facebookpage")}</a>
                            <p className="mt-0">{t("contact.facebookpageinfo")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact form */}
            <div className="flex flex-row items-center justify-end lg:w-1/2 gap-8">
                < ContactForm />
            </div>

        </section >
    )

}