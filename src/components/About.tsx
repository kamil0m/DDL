import React from 'react'
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

export default function About() {
    const { t } = useTranslation();

    return (
        <section className="flex flex-row justify-center items-between mt-40 gap-6">
            <div className="flex flex-row items-center w-1/2 gap-8">
                <div className="flex flex-col gap-8">
                    <div className="h-[320px] w-[270px] bg-slate-500 rounded-lg"></div>
                    <div className="h-[320px] w-[270px] bg-slate-500 rounded-lg"></div>
                </div>
                <div className="bg-polka-br-red">
                    <div className="relative h-[400px] w-[270px] z-index-30 rounded-lg bg-slate-500"></div>
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
