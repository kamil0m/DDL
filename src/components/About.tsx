import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import RenderRichText from "./RenderRichText";
import ErrorBoundary from './ErrorBoundary';

export default function About({data}: {data: any}) {
    const { t } = useTranslation();

    return (
        <ErrorBoundary>
            <section className="flex flex-col lg:flex-row justify-center items-between mt-10 lg:mt-40 gap-6 mx-4 lg:mx-0">
                <div className="hidden lg:flex flex-row items-center lg:w-1/2 lg:gap-8 ml-4 lg:ml-0">
                    <div className="flex flex-col gap-2 lg:gap-8">
                        <div className="h-[320px] w-[270px] rounded-lg overflow-hidden relative bg-slate-500">
                            <img 
                                src={data?.Zdjecie1?.url} 
                                alt={data?.Zdjecie1?.alternativeText || t("home.photoGenericAlt")} 
                                className="min-w-[270px] object-cover absolute bottom-0"
                            />
                        </div>
                        <div className="h-[320px] w-[270px] rounded-lg overflow-hidden relative bg-slate-500">
                            <img 
                                alt={data?.Zdjecie1?.alternativeText || t("home.photoGenericAlt")} 
                                src={data?.Zdjecie2?.url} 
                                className="min-w-[270px] object-cover absolute top-0 translate-y-[-5%]"
                            />
                        </div>
                    </div>
                    <div className="bg-polka-br-red">
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
                                src={data?.Wideo?.url} 
                                type="video/mp4" 
                            />
                            {t("home.videoNotSupported")}
                        </video>
                    </div>
                </div>
                <div className="flex flex-col justify-center lg:w-1/2 gap-2 lg:gap-6">
                    <h2>{t("about.title")}</h2>
                    <h3>{data?.ONasPodtytul}</h3>
                    <RenderRichText content={data?.ONasTekst} />
                    <NavLink to="/about" className="text-sm lg:text-xl font-light text-darkgrey hover:text-black"> 
                        <span className="underline">{t("about.seeMore")}</span>
                        <span className=""> ➜</span>
                    </NavLink>
                    <div className="flex w-full justify-center lg:justify-start mt-4 lg:mt-0">
                        <a href="https://www.facebook.com/p/Dzien-dobry-Lille-Bonjour-Lille-61559848594019/" className="button button-blue size-fit px-2 lg:px-6 py-2 lg:py-3 text-xs lg:text-xl font-light">{t("about.button")}</a>
                    </div>
                </div>
            </section>
        </ErrorBoundary>
    )

}
