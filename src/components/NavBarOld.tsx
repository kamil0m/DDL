import { useState, useEffect } from "react";
import { FiMenu, FiX, FiFacebook, FiSun, FiMoon } from "react-icons/fi";
import logo from "../styles/images/logo.jpg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const NavbarLinks = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "Poznaj nas", link: "/about", dropdown: true },
        { id: 3, name: "Wydarzenia", link: "/events" },
        { id: 4, name: "Dołącz do nas", link: "/joinus" },
        { id: 5, name: "Kontakt", link: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMobileDropdownClick = () => {
        if (isMobileDropdownOpen) {
            window.location.href = "/about";
        } else {
            setIsMobileDropdownOpen(true);
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark", !isDarkMode);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-30 text-white transition duration-300 ${isScrolled ? "shadow-lg backdrop-blur-lg" : "bg-transparent"
                }`}
            data-aos="fade-up"
            data-aos-delay="300"
        >
            {/* LOGO outside navigation */}
            <div className="absolute top-5 left-1/16 transform -translate-x-1/2">
                <a href="/">
                    <img src={logo} alt="Logo" className="h-30 w-auto hidden sm:block" />
                </a>
            </div>

            <div className="container mx-auto flex items-center justify-between p-5">
                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FiMenu className="w-8 h-8 text-white" />
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-7 ml-auto">
                    {NavbarLinks.map((link) =>
                        link.dropdown ? (
                            <div
                                key={link.id}
                                className="relative"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <a
                                    href={link.link}
                                    className="pb-5 hover:text-gray-200 text-lg cursor-pointer"
                                >
                                    {link.name}
                                </a>
                                {/* Dropdown Menu */}
                                {isDropdownOpen && (
                                    <div className="absolute top-8 left-0 bg-blue-900 text-white p-4 space-y-2 rounded-lg">
                                        <a
                                            href="/about/#goals"
                                            className="block hover:text-gray-200 text-lg"
                                        >
                                            Cele
                                        </a>
                                        <a
                                            href="/about/#history"
                                            className="block hover:text-gray-200 text-lg"
                                        >
                                            Historia
                                        </a>
                                        <a
                                            href="/about/#people"
                                            className="block hover:text-gray-200 text-lg"
                                        >
                                            Ludzie
                                        </a>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <a
                                key={link.id}
                                href={link.link}
                                className="hover:text-gray-200 text-lg"
                            >
                                {link.name}
                            </a>
                        )
                    )}


                    {/* Facebook Icon */}
                    <a
                        href="https://www.facebook.com/p/Dzien-dobry-Lille-Bonjour-Lille-61559848594019/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200"
                    >
                        <FiFacebook className="w-6 h-6" />
                    </a>

                    {/* Dark/Light Mode Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="text-white hover:text-gray-200"
                    >
                        {isDarkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
                    </button>

                    {/* FR/PL Button */}
                    <button
                        className="text-white hover:text-gray-200"
                    >
                        FR/PL
                    </button>
                </nav>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`${isOpen ? "block" : "hidden"
                    } md:hidden bg-blue-900 absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-5 right-5 text-white"
                    onClick={() => setIsOpen(false)}
                >
                    <FiX className="w-8 h-8" />
                </button>
                {/* Mobile Navigation */}
                {NavbarLinks.map((link) => (
                    link.dropdown ? (
                        <div key={link.id} className="text-lg text-white">
                            <button
                                className="hover:text-gray-200"
                                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                            >
                                {link.name}
                            </button>
                            {isMobileDropdownOpen && (
                                <div className="mt-2 space-y-2">
                                    <a
                                        href="/about"
                                        className="block hover:text-gray-200 text-sm ml-4"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        O nas
                                    </a>
                                    <a
                                        href="/about/#goals"
                                        className="block hover:text-gray-200 text-sm ml-4"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Cele
                                    </a>
                                    <a
                                        href="/about/#history"
                                        className="block hover:text-gray-200 text-sm ml-4"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Historia
                                    </a>
                                    <a
                                        href="/about/#people"
                                        className="block hover:text-gray-200 text-sm ml-4"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Ludzie
                                    </a>
                                </div>
                            )}
                        </div>
                    ) : (
                        <a
                            key={link.id}
                            href={link.link}
                            className="text-lg text-white hover:text-gray-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    )
                ))}
                {/* Contact */}
                <a
                    href="/contact"
                    className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#1d3c91] rounded-full text-lg"
                    onClick={() => setIsOpen(false)}
                >
                    Kontakt
                </a>

                {/* Facebook Link */}
                <a
                    href="https://www.facebook.com/p/Dzien-dobry-Lille-Bonjour-Lille-61559848594019/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 mt-4 flex items-center space-x-2"
                >
                    <FiFacebook className="w-6 h-6" />
                </a>

                {/* FR/PL Button */}
                <button className="text-white hover:text-gray-200 mt-4">
                    FR/PL
                </button>
            </div>
        </header>
    );
}
