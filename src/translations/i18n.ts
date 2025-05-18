import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./fr.json";
import pl from "./pl.json";

i18n
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
        }
    });

export default i18n;
