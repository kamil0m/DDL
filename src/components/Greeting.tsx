import homebackground from "../assets/images/homebackground.jpeg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Greeting({data}: {data: any}) {
    const { t } = useTranslation();

    return (
        <div
            className="relative w-full bg-cover bg-bottom mt-4 lg:mt-10 lg:rounded-4xl aspect-3/2 lg:aspect-2/1"
            style={{
                backgroundImage: `url(${homebackground})`,
            }}
        >

            <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col items-center">

                <h1 className="[text-shadow:7px_7px_6px_rgba(0,0,0,0.8)]">
                    {data.Tytul}
                </h1>

            </div>
            <div className="
            absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2
            flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-8  z-10
            lg:min-w-6/10 px-3 py-2 lg:px-10 lg:py-4
            text-center text-black bg-white rounded-2xl shadow-lg"
            >

                <div className="flex flex-col justify-center gap-1 font-semilight">
                    <p className="text-sm lg:text-2xl whitespace-nowrap mt-0">{t("greetings.greetings")}</p>
                </div>
                <NavLink to="/about" className="button button-accent text-xs lg:text-md lg:px-4 lg:py-2">{t("greetings.more")}</NavLink>
            </div>

        </div>
    )
}
