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

      <div className="flex flex-col gap-20 mt-20">
        <img src={logo} alt="logo" className="absolute h-full -translate-2/7 z-0 opacity-10"/>
        <div className="container max-w-3/5 mx-auto px-4 z-10">
          <section className="flex flex-col">
            <h4>{t("about.history")}</h4>
            <RenderRichText 
              content={aboutData.Historia} 
              pClasses="text-black"
              />
          </section>
        </div>

        <Motto motto={motto} />

        <div className="container max-w-3/5 mx-auto px-4 z-10">
          <section className="flex flex-col gap-4">
            <h4>{t("about.goals")}</h4>
            <RenderRichText 
              content={aboutData.Cele} 
              olClasses="centered-list" 
              liClasses="square-markers"
            />
            
          </section>
          
          <People />
        </div>
      </div>
      
    </ ErrorBoundary >
  )
}
