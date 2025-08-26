import useFetch from '../hooks/useFetch';
import RenderRichText from '../components/RenderRichText.tsx';
import Motto from '../components/Motto.tsx';
import People from '../components/People.tsx';
import logo from '../assets/images/logo.jpg';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import ErrorBoundary from '../components/ErrorBoundary';


export default function AboutUs() {

  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  
  const { data, loading, error } = useFetch(`about-us-page?locale=${currentLanguage}`);
  const aboutData = data as any;
  
  if (loading) return <p>{t("admin.loading")}</p>;
  if (error) return <p>{t("admin.error")}</p>;
  if (!aboutData) return <p>No data available</p>;

  const motto = aboutData.Motto?.[0]?.children?.[0]?.text || '';

  return (
    < ErrorBoundary >

      <div className="flex flex-col items-center w-full bg-linear-to-b from-white to-grey pb-10 gap-8 lg:gap-20 mt-5 lg:mt-20">

        <img src={logo} alt="logo" className="absolute w-full lg:w-3/4 -translate-x-1/4 lg:-translate-x-1/2 -translate-y-1/4 z-0 opacity-10"/>
        
        <div className="lg:max-w-3/5 mx-auto px-4 z-10">

          <section className="flex flex-col">
            <h4>{t("about.history")}</h4>
            <RenderRichText 
              content={aboutData.Historia} 
              pClasses="text-black"
              ulClasses="list-disc pl-5"
              liClasses="font-light"
              />
          </section>

        </div>

        <Motto motto={motto} />

        <div className="container lg:max-w-3/5 mx-auto px-4 z-10">

          <section className="flex flex-col gap-4">
            <h4>{t("about.goals")}</h4>
            <RenderRichText 
              content={aboutData.Cele} 
              olClasses="centered-list text-xl" 
              liClasses="square-markers font-light text-sm lg:text-xl"
              ulClasses="ml-30 list-disc"
            />
            
          </section>
          
          <People />
        </div>
      </div>
      
    </ ErrorBoundary >
  )
}
