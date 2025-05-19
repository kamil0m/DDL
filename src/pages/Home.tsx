import React from "react";
import Greeting from "../components/Greeting";
import InfoBar from "../components/InfoBar";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <InfoBar />

        <div className="container">
            < Greeting />

            
         </div>
        </div>
    
    );
};

export default Home;