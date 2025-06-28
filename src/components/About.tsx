import { useTranslation } from "react-i18next";
import kino from '../assets/images/IMG_8312 - Moyenne.jpeg';
import teatr from '../assets/images/Teatr1 - Moyenne.jpeg';
import { NavLink } from "react-router-dom";

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="flex flex-row justify-center items-between mt-40 gap-6">
            <div className="flex flex-row items-center w-1/2 gap-8">
                <div className="flex flex-col gap-8">
                    <div className="h-[320px] w-[270px] rounded-lg overflow-hidden relative bg-slate-500">
                        <img 
                            src={teatr} 
                            alt="teatr" 
                            className="min-w-[270px] object-cover absolute bottom-0"
                        />
                    </div>
                    <div className="h-[320px] w-[270px] rounded-lg overflow-hidden relative bg-slate-500">
                        <img 
                            src={kino} 
                            alt="kino" 
                            className="min-w-[270px] object-cover absolute top-0 translate-y-[-5%]"
                        />
                    </div>
                </div>
                <div className="bg-polka-br-red">
                    {/* <div className="relative h-[400px] w-[270px] z-index-30 rounded-lg bg-slate-500"></div> */}
                    <video 
                        id="video" 
                        className="relative h-[400px] w-[270px] z-index-30 rounded-lg object-cover"
                        // controls
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source 
                            src="https://res.cloudinary.com/daqj3iucx/video/upload/v1750872360/WhatsApp_Video_2025-01-18_at_10.19.39_sadlqf.mp4" 
                            type="video/mp4" 
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="flex flex-col justify-center w-1/2 gap-6">
                <h2>{t("about.title")}</h2>
                <h3>{t("about.aboutUsSubTitle")}</h3>
                <p>{t("about.aboutUsParagraph")}</p>
                <NavLink to="/about" className="text-xl font-light text-darkgrey hover:text-black"> 
                    <span className="underline">{t("about.seeMore")}</span>
                    <span className=""> ➜</span></NavLink>
                <a href="" className="button button-blue size-fit px-6 py-3 text-xl font-light">{t("about.button")}</a>
            </div>
        </section>
    )

}
