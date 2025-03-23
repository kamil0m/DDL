import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../styles/images/logo.jpg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const NavbarLinks = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "O nas", link: "/about", dropdown: true },
        { id: 3, name: "Wydarzenia", link: "/events" },
        { id: 4, name: "Dołącz do nas", link: "/joinus" },
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

    return (
        <header
            className={`fixed top-0 left-0 w-full z-30 text-white transition duration-300 ${isScrolled ? "shadow-lg backdrop-blur-lg" : "bg-transparent"
                }`}
            data-aos="fade-up"
            data-aos-delay="300"
        >
            <div className="container mx-auto flex items-center justify-between p-5">
                {/* LOGO */}
                <a href="#home">
                    <img src={logo} alt="Logo" className="h-30 w-auto hidden sm:block" />
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FiMenu className="w-8 h-8 text-white" />
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-7">
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
                                    className="hover:text-gray-200 text-lg cursor-pointer"
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
                    <a
                        href="#contact"
                        className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded-full text-lg"
                    >
                        Contact
                    </a>
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
                    <a
                        key={link.id}
                        href={link.link}
                        className="text-lg text-white hover:text-gray-200"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
                {/* Contact */}
                <a
                    href="#contact"
                    className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#1d3c91] rounded-full text-lg"
                    onClick={() => setIsOpen(false)}
                >
                    Contact
                </a>
            </div>
        </header>
    );
}
