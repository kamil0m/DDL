import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <>
            <div className="absolute w-40 h-40 sm:w-120 sm:h-120 bg-[#3a0a1a] rounded-full blur-3xl opacity-50 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col items-center">
                <h1 className="text-6xl md:text-5xl font-extrabold mb-4 pb-6 z-20">
                    Dzień Dobry Lille! <br /><span className="text-[rgba(195,14,26,1)]">Bonjour Lille!</span>
                </h1>
                <p className="text-2xl font-semibold md:text-xl mb-6 pt-2 pb-4 z-10">
                    "Your inspiring motto goes here." <br />Stowarzyszenie <span className="text-red-700">Polaków</span> w Lille
                </p>
                <Link to="/about">
                    <button className="px-8 py-4 text-xl text-white rounded-lg animate-pulse hover:animate-none xtransition xease-in-out xduration-300 bg-[rgba(195,14,26,1)] xhover:bg-red-800">
                        Dowiedz się więcej
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Home;