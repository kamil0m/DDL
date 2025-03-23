import React from "react";
import homebackground from "../styles/images/homebackground.png"

const MainViewHome: React.FC = () => {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center border-none p-0"
            style={{
                backgroundImage: `url(${homebackground})`,
            }}
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="text-6xl md:text-5xl font-extrabold mb-4">
                    Dzień Dobry Lille
                </h1>
                <p className="text-2xl font-semibold md:text-xl">
                    "Your inspiring motto goes here."
                </p>
            </div>
        </div>
    );
};

export default MainViewHome;
