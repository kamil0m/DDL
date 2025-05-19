import { NavLink } from "react-router-dom";

export default function FooterNav() {
  return (
    <div className="flex flex-col">
        <h5>Strony</h5>
        <nav className="flex flex-col mt-10 gap-4">
            <NavLink to="/" className="hover:text-black">Strona główna</NavLink>
            <NavLink to="/events" className="hover:text-black">Wydarzenia</NavLink>
            <NavLink to="/about" className="hover:text-black">O nas</NavLink>
        </nav>
    </div>
  )
}
