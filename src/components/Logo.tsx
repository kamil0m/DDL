import { NavLink } from "react-router-dom";
import logo from "../assets/images/DDL_logo_poziome.png";

interface LogoProps {
    size: string;
  }

export default function Logo({ size }: LogoProps) {
    
    return (
        <NavLink to="/" className="">
            <img src={logo} alt="Logo" className={`${size} flex-shrink-0`} />
        </NavLink>
    )
}
