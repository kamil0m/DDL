import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useTranslation } from "react-i18next";

export default function Header() {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { t } = useTranslation();

  return (
    <header className="container flex flex-row justify-between items-center w-full py-4 text-xl">

      <div className="flex flex-row items-center gap-10">
        < Logo size="h-[4rem] w-[4rem]" />
        < NavBar />
        < SearchBar />
      </div>

      <div className="flex flex-row justify-end items-center gap-4">
        <LanguageToggle />
        <button onClick={scrollToContact} className="button button-transparent hover:button-accent px-8 py-2">{t("header.contact")}</button>
        <NavLink to="/joinus" className="button button-accent hover:button-transparent px-8 py-2">{t("header.joinus")}</NavLink>
      </div>

    </header>
  )
}
