import logo from "../assets/images/logo.jpg";

interface LogoProps {
    size: string;
  }

export default function Logo({ size }: LogoProps) {
    
    return (
        <img src={logo} alt="Logo" className={size} />
    )
}
