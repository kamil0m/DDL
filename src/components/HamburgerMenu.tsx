import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa6";
import LanguageToggle from "./LanguageToggle";



export default function HamburgerMenu() {
    const { t } = useTranslation();
    const toggleMenu = () => {
        const mobileMenu = document.getElementById('navbar__mobile');
        mobileMenu?.classList.toggle("hidden");
    }

  return (
    <>
        <input 
            className="hidden"
            type="checkbox" 
            id="trigger"
            onChange={() => toggleMenu()}
        />                
        <label className="text-[2em] pr-3" htmlFor="trigger" >
            <FaBars />
        </label>

        <nav 
            id="navbar__mobile"
            className="
            animate-fade-in-down flex flex-col items-center justify-center absolute left-0 top-0 w-full bg-white h-screen z-10 uppercase font-semibold text-2xl"
            onClick={() => toggleMenu()} 
            >
                <NavLink to="/" className="flex justify-center xw-45 text-accent hover:text-red">{t("nav.home")}</NavLink>
                <NavLink to="/events" className="flex justify-center xw-45 text-accent hover:text-red">{t("nav.events")}</NavLink>
                <NavLink to="/news" className="flex justify-center Xw-45 text-accent hover:text-red">{t("nav.news")}</NavLink>
                <NavLink to="/about" className="flex justify-center xw-45 text-accent hover:text-red">{t("nav.about")}</NavLink>
                <LanguageToggle />
        </nav>

    </>
  )
}
