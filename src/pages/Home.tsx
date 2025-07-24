import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Greeting from "../components/Greeting";
import InfoBar from "../components/InfoBar";
import About from "../components/About";
import ContactSection from "../components/ContactSection";
import NewsSection from "../components/NewsSection";

const Home: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        // Check if there's a hash in the URL and scroll to it
        if (location.hash === '#contact') {
            // Small delay to ensure the page has rendered
            setTimeout(() => {
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location.hash]);

    return (
        <div className="flex flex-col items-center w-full">

            <InfoBar />

            <div className="flex flex-col items-center w-full bg-linear-to-b from-white to-grey">

                <div className="container">
                    < Greeting />
                    < NewsSection />
                    < About />
                    < ContactSection />
                </div>

            </div>


        </div>

    );
};

export default Home;