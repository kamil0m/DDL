import { useState, useEffect } from "react";
import { FiMenu, FiX, FiFacebook, FiSun, FiMoon } from "react-icons/fi";
import logo from "../styles/images/logo.jpg";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === "pl" ? "fr" : "pl";
        i18n.changeLanguage(newLang);
    };

    const NavbarLinks = [
        { id: 1, name: t("nav.home"), link: "/" },
        { id: 2, name: t("nav.about"), link: "/about", dropdown: true },
        { id: 3, name: t("nav.events"), link: "/events" },
        { id: 4, name: t("nav.joinus"), link: "/joinus" },
        { id: 5, name: t("nav.contact"), link: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark", !isDarkMode);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-30 text-white transition duration-300 ${isScrolled ? "shadow-lg backdrop-blur-lg" : "bg-transparent"}`}
        >
            <div className="absolute top-5 left-1/16 transform -translate-x-1/2">
                <a href="/">
                    <img src={logo} alt="Logo" className="h-30 w-auto hidden sm:block" />
                </a>
            </div>

            <div className="container mx-auto flex items-center justify-between p-5">
                <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                    <FiMenu className="w-8 h-8 text-white" />
                </button>

                <nav className="hidden md:flex items-center space-x-7 ml-auto">
                    {NavbarLinks.map((link) =>
                        link.dropdown ? (
                            <div
                                key={link.id}
                                className="relative"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <a href={link.link} className="pb-5 hover:text-gray-200 text-lg cursor-pointer">
                                    {link.name}
                                </a>
                                {isDropdownOpen && (
                                    <div className="absolute top-8 left-0 bg-blue-900 text-white p-4 space-y-2 rounded-lg">
                                        <a href="/about/#goals" className="block hover:text-gray-200 text-lg">
                                            {t("nav.goals")}
                                        </a>
                                        <a href="/about/#history" className="block hover:text-gray-200 text-lg">
                                            {t("nav.history")}
                                        </a>
                                        <a href="/about/#people" className="block hover:text-gray-200 text-lg">
                                            {t("nav.people")}
                                        </a>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <a key={link.id} href={link.link} className="hover:text-gray-200 text-lg">
                                {link.name}
                            </a>
                        )
                    )}

                    <a href="https://www.facebook.com/p/Dzien-dobry-Lille-Bonjour-Lille-61559848594019/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                        <FiFacebook className="w-6 h-6" />
                    </a>

                    <button onClick={toggleDarkMode} className="text-white hover:text-gray-200">
                        {isDarkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
                    </button>

                    <button onClick={toggleLanguage} className="text-white hover:text-gray-200">
                        {i18n.language === "pl" ? "FR" : "PL"}
                    </button>
                </nav>
            </div>

            <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-blue-900 absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}>
                <button className="absolute top-5 right-5 text-white" onClick={() => setIsOpen(false)}>
                    <FiX className="w-8 h-8" />
                </button>

                {NavbarLinks.map((link) =>
                    link.dropdown ? (
                        <div key={link.id} className="text-lg text-white">
                            <button className="hover:text-gray-200" onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}>
                                {link.name}
                            </button>
                            {isMobileDropdownOpen && (
                                <div className="mt-2 space-y-2">
                                    <a href="/about/#goals" className="block hover:text-gray-200 text-sm ml-4" onClick={() => setIsOpen(false)}>
                                        {t("nav.goals")}
                                    </a>
                                    <a href="/about/#history" className="block hover:text-gray-200 text-sm ml-4" onClick={() => setIsOpen(false)}>
                                        {t("nav.history")}
                                    </a>
                                    <a href="/about/#people" className="block hover:text-gray-200 text-sm ml-4" onClick={() => setIsOpen(false)}>
                                        {t("nav.people")}
                                    </a>
                                </div>
                            )}
                        </div>
                    ) : (
                        <a key={link.id} href={link.link} className="text-lg text-white hover:text-gray-200" onClick={() => setIsOpen(false)}>
                            {link.name}
                        </a>
                    )
                )}

                <a href="/contact" className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#1d3c91] rounded-full text-lg" onClick={() => setIsOpen(false)}>
                    {t("nav.contact")}
                </a>

                <a href="https://www.facebook.com/p/Dzien-dobry-Lille-Bonjour-Lille-61559848594019/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 mt-4 flex items-center space-x-2">
                    <FiFacebook className="w-6 h-6" />
                </a>

                <button onClick={toggleLanguage} className="text-white hover:text-gray-200 mt-4">
                    {i18n.language === "pl" ? "FR" : "PL"}
                </button>
            </div>
        </header>
    );
}
