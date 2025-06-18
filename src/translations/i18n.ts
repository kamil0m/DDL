import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import fr from "./fr.json";
import pl from "./pl.json";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            fr: { translation: fr },
            pl: { translation: pl }
        },
        lng: "pl",
        fallbackLng: "pl",
        interpolation: {
            escapeValue: false
        },
        debug: false,
    });

export default i18n;
