import React from "react";
import Greeting from "../components/Greeting";
import InfoBar from "../components/InfoBar";
import About from "../components/About";
import ContactSection from "../components/ContactSection";
import News from "../components/News";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full">

            <InfoBar />

            <div className="flex flex-col items-center w-full bg-linear-to-b from-white to-grey">

                <div className="container">
                    < Greeting />
                    < News />
                    < About />
                    < ContactSection />
                </div>

            </div>


        </div>

    );
};

export default Home;