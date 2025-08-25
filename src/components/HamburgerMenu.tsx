import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import HeaderButtons from "./HeaderButtons";

export default function HamburgerMenu() {
    const { t } = useTranslation();
    const toggleMenu = () => {
        const mobileMenu = document.getElementById('navbar__mobile');
        mobileMenu?.classList.toggle("hidden");
        // prevent scrolling when menu is open
        document.body.classList.toggle("overflow-hidden");
    }

  return (
    <>
        <input 
            className="hidden"
            type="checkbox" 
            id="trigger"
            onChange={() => toggleMenu()}
        />                
        <label className="text-[2em] xp-4" htmlFor="trigger" >
            <FaBars />
        </label>

        <nav 
            id="navbar__mobile"
            className="
            hidden animate-fade-in-down flex flex-col items-center justify-center absolute left-0 top-0 w-full bg-white h-screen z-20 uppercase font-semibold text-2xl gap-10"
            onClick={() => toggleMenu()} 
            >
                <div className="absolute text-[2em] p-4 top-0 left-0">
                    <RxCross2 />
                </div>
                <div className="flex flex-col items-center gap-6">
                    <NavLink to="/" className="flex justify-center xw-45 text-accent hover:text-red">{t("nav.home")}</NavLink>
                    <NavLink to="/events" className="flex justify-center xw-45 text-accent hover:text-red">{t("nav.events")}</NavLink>
                    <NavLink to="/news" className="flex justify-center Xw-45 text-accent hover:text-red">{t("nav.news")}</NavLink>
                    <NavLink to="/about" className="flex justify-center xw-45 text-accent hover:text-red">{t("nav.about")}</NavLink>
                </div>
                <HeaderButtons/>
        </nav>

    </>
  )
}
