import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageToggle() {
    const { i18n } = useTranslation();
    const { changeLanguage, isLanguageChanging } = useLanguage();

    const switchLanguage = () => {
        const newLang = i18n.language === "pl" ? "fr" : "pl";
        changeLanguage(newLang);
        return newLang;
    };

    return (
        <label
            onClick={switchLanguage}
            id="toggle"
            className={`relative flex flex-row justify-between items-center gap-1.5 h-[2.5em] bg-accent rounded-full text-sm px-1 py-3 cursor-pointer font-semibold ${
                isLanguageChanging ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
            <div className={`z-1 absolute flex justify-center items-center left-1 top-1 h-8/10 w-[2.2em] rounded-full bg-white transition-transform duration-300 ease-in-out ${i18n.language === "fr" ? "translate-x-0" : "translate-x-[2.3em]"}`}></div>
            <span className={`z-10 switch ${i18n.language === "fr" ? "text-red" : ""} transition-colors duration-300 ease-in-out`}>FR</span>
            <span className={`z-10 switch ${i18n.language === "pl" ? "text-red" : ""} transition-colors duration-300 ease-in-out`}>PL</span>
        </label>
    )
}