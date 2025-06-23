import logo from "../assets/images/DDL_logo_poziome.png";

interface LogoProps {
    size: string;
  }

export default function Logo({ size }: LogoProps) {
    
    return (
        <img src={logo} alt="Logo" className={size} />
    )
}
