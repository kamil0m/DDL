import homebackground from "../styles/images/homebackground.png";
import { NavLink } from "react-router-dom";

export default function Greeting() {
  return (
    <div
        className="relative w-full bg-cover bg-center mt-10 rounded-4xl aspect-2/1"
        style={{
            backgroundImage: `url(${homebackground})`,
        }}
    >

        <div className="absolute w-full top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col items-center">
                
            <h1 className="[text-shadow:7px_7px_6px_rgba(0,0,0,0.8)]">
                <span className="">Dzień Dobry Lille! </span>
                <span className="">Bonjour Lille !</span>
            </h1>
                
        </div>
        <div className="
            absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2
            flex flex-row items-center justify-center gap-8
            min-w-6/10 px-10 py-4
            text-center text-black bg-white rounded-2xl shadow-lg"
        >
                
            <div className="flex flex-col justify-center gap-1 font-semilight">
                <p className="whitespace-nowrap">Witamy na stronie stowarzyszenia Dzień Dobry Lille!</p>
                <p className="whitespace-nowrap text-darkgrey">Bienvenue sur le site de l'association Bonjour Lille !</p>
            </div>
            <NavLink to="/about" className="button button-accent px-4 py-2">Więcej informacji</NavLink>
        </div>
            
    </div>
  )
}
