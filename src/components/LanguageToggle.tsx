import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";

interface LanguageToggleProps {
    onLanguageChange?: (newLang: string) => void;
}

export default function LanguageToggle({ onLanguageChange }: LanguageToggleProps) {
    const { i18n } = useTranslation();
    const { changeLanguage, isLanguageChanging } = useLanguage();

    const switchLanguage = () => {
        const newLang = i18n.language === "pl" ? "fr" : "pl";
        changeLanguage(newLang);
        
        // Call the callback if provided
        if (onLanguageChange) {
            onLanguageChange(newLang);
        }
        
        return newLang;
    };

    return (
        <label
            onClick={switchLanguage}
            id="toggle"
            className={`flex flex-row justify-between items-center gap-1.5 h-[2.5em] bg-accent rounded-full text-sm px-1 py-3 cursor-pointer ${
                isLanguageChanging ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
            <span className={`switch ${i18n.language === "pl" ? "switch-on" : ""}`}>PL</span>
            <span className={`switch ${i18n.language === "fr" ? "switch-on" : ""}`}>FR</span>
        </label>
    );



    // Version 1
    // export default function LanguageToggle() {

    //     const switchLanguage = (e) => {
    //         const toggle: HTMLInputElement = e.currentTarget;
    //         const languageSwitches = toggle.querySelectorAll('.switch');
    //         languageSwitches.forEach((languageSwitch) => {
    //             languageSwitch.classList.toggle('switch-on');
    //         });
    //         // ToDo : Add animated transition in CSS
    //     }

    //     return (
    //         <label onClick={switchLanguage} id="toggle" className="flex flex-row justify-between items-center gap-1.5 h-[2.5em] bg-accent rounded-full text-sm px-1 py-3 cursor-pointer">
    //             {/* ToDo : Integrate the checkbox to the multilingual handler */}
    //             {/* <input id="language-toggle" className="hidden" type="checkbox" /> */}
    //             <span className="switch switch-on">PL</span>
    //             <span className="switch">FR</span>
    //         </label>
    //     )


}