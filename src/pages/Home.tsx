import React from "react";
import { Link } from "react-router-dom";
import homebackground from "../styles/images/homebackground.png";

const Home: React.FC = () => {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center border-none p-0"
            style={{
                backgroundImage: `url(${homebackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col items-center">
                <div className="absolute z-0 w-40 h-40 sm:w-120 sm:h-120 bg-[#3a0a1a] rounded-full blur-3xl opacity-50 top-1 left-2 bottom-5"></div>
                <h1 className="text-6xl md:text-5xl font-extrabold mb-4 pb-6 z-20">
                    Dzień Dobry Lille! <br /><span className="text-red-700">Bonjour Lille!</span>
                </h1>
                <p className="text-2xl font-semibold md:text-xl mb-6 pt-2 pb-4 z-10">
                    "Your inspiring motto goes here." <br />Stowarzyszenie <span className="text-red-700">Polaków</span> w Lille
                </p>
                <div >
                    <Link to="/about">
                        <button className="z-30 px-8 py-4 text-xl bg-red-700 text-white rounded-lg hover:bg-red-800 transition ease-in-out duration-300 animate-pulse hover:animate-none">
                            Dowiedz się więcej
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;