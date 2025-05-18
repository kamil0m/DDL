// import { useState, useEffect } from "react";
// import { FiMenu, FiX, FiFacebook, FiSun, FiMoon } from "react-icons/fi";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
// import { CgRowFirst } from "react-icons/cg";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full py-2">
        < Logo />
        < NavBar />
        < SearchBar />
        {/* <LanguageToggle /> */}
        <NavLink to="/contact" className="button button-accent hover:button-transparent">Kontakt</NavLink>
        <NavLink to="/joinus" className="button button-transparent hover:button-accent">Dołącz do nas</NavLink>
        
        
    </header>
  )
}
