import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex flex-row gap-8">

        <NavLink to="/" className="text-accent hover:text-red">Strona główna</NavLink>
        <NavLink to="/events" className="text-accent hover:text-red">Wydarzenia</NavLink>
        <NavLink to="/about" className="text-accent hover:text-red">O nas</NavLink>

    </nav>
  )
}
