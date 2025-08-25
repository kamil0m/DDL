import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import Greeting from "../components/Greeting";
import InfoBar from "../components/InfoBar";
import About from "../components/About";
import ContactSection from "../components/ContactSection";
import NewsSection from "../components/NewsSection";
import useFetch from "../hooks/useFetch";

const Home: React.FC = () => {
    const location = useLocation();
    const { currentLanguage } = useLanguage();
    const { t } = useTranslation();

    const { data, loading, error } = useFetch(`strona-glowna?populate=*&locale=${currentLanguage}`);

    // hash-based navigation needed fot Contact button in the header
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

  if (loading) return <p>{t("admin.loading")}</p>;
  if (error) return <p>{t("admin.error")}</p>;
  if (!data) return <p>No data available</p>;

    return (
        <div className="flex flex-col items-center w-full">

            <InfoBar />

            <div className="flex flex-col items-center w-full bg-linear-to-b from-white to-grey pb-10">

                <div className="container">
                    < Greeting data={data} />
                    < NewsSection />
                    < About data={data} />
                    < ContactSection data={data} />
                </div>

            </div>

        </div>

    );
};

export default Home;