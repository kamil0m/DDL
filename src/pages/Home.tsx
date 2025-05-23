import React from "react";
import Greeting from "../components/Greeting";
import InfoBar from "../components/InfoBar";
import About from "../components/About";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full">

            <InfoBar />

            <div className="flex flex-col items-center w-full bg-linear-to-b from-white to-grey">

                <div className="container">
                    < Greeting />
                    < About />
                </div>

            </div>


        </div>
    
    );
};

export default Home;