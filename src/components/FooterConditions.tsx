import { NavLink } from "react-router-dom";

export default function FooterConditions() {
  return (
    <div className="flex flex-col">
        <h5>Warunki</h5>
        <nav className="flex flex-col mt-10 gap-4">
            <NavLink to="/" className="hover:text-black">RGPD</NavLink>
            <NavLink to="/" className="hover:text-black">Regulamin</NavLink>
        </nav>
    </div>
  )
}
