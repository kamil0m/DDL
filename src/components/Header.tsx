import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import SearchBar from "./SearchBar";
import { useTranslation } from "react-i18next";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const handleLanguageChange = (newLang: string) => {
    console.log('Language changed to:', newLang);
    // + if needed additional logic for example: localStorage updates, etc.
  };
  
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // Already on home page, just scroll to contact
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page and then scroll to contact
      navigate('/');
      setTimeout(() => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="flex justify-center bg-white z-10 w-full">
      <div className="container flex flex-row justify-between items-center w-full py-4 text-xl">
        <div className="flex flex-row items-center gap-10">
          < Logo size="h-[4rem] w-auto" />
          < NavBar />
          {/* < SearchBar /> */}
        </div>
        <div className="flex flex-row justify-between items-center min-w-[30rem]">
          <LanguageToggle onLanguageChange={handleLanguageChange} />
          <div className="flex justify-end gap-4">
            <button onClick={handleContactClick} className="button button-transparent hover:button-accent px-8 py-2transition-colors duration-300 ease-out">{t("header.contact")}</button>
            <NavLink to="/joinus" className="button button-accent hover:button-transparent px-8 py-2 transition-colors duration-300 ease-out">{t("header.joinus")}</NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}
