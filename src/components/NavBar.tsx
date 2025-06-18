import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavBar() {
    const { t } = useTranslation();

    return (
        <nav className="flex flex-row gap-8">

            <NavLink to="/" className="text-accent hover:text-red">{t("nav.home")}</NavLink>
            <NavLink to="/events" className="text-accent hover:text-red">{t("nav.events")}</NavLink>
            <NavLink to="/about" className="text-accent hover:text-red">{t("nav.about")}</NavLink>

        </nav>
    )
}
