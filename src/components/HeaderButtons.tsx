import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeaderButtons() {

    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation();


    const scrollToContact = () => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            const elementPosition = contactElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 100;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleContactClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (location.pathname === '/') {
        // Already on home page, just scroll to a little higher than contact section
        scrollToContact();
        } else {
        navigate('/');
        setTimeout(() => {
            scrollToContact();
        }, 1000);
        }
    };

    return (
        <div className="flex flex-col mt-10 lg:mt-0 lg:flex-row justify-end gap-4 text-sm lg:text-xl">
            <button onClick={handleContactClick} className="button button-transparent uppercase lg:normal-case hover:button-accent px-8 py-2 transition-colors duration-300 ease-out">{t("header.contact")}</button>
            <NavLink to="/joinus" className="button button-accent hover:button-transparent px-8 py-2 transition-colors duration-300 ease-out">{t("header.joinus")}</NavLink>
        </div>
    )
}
