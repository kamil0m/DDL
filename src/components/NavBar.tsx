import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavBar() {
    const { t } = useTranslation();

    return (
        <nav className="flex flex-row gap-8">

            <NavLink to="/" className="nav-link">{t("nav.home")}</NavLink>
            <NavLink to="/events" className="nav-link">{t("nav.events")}</NavLink>
            <NavLink to="/news" className="nav-link">{t("nav.news")}</NavLink>
            <NavLink to="/about" className="nav-link">{t("nav.about")}</NavLink>

        </nav>
    )
}
