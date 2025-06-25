import useFetch from '../hooks/useFetch';
import RenderRichText from '../components/RenderRichText.tsx';
import Motto from '../components/Motto.tsx';
import logo from '../assets/images/logo.jpg';
import { useTranslation } from 'react-i18next';

export default function AboutUs() {

  const { data, loading, error } = useFetch('about-us-page');
  const { t } = useTranslation();
  
  if (loading) return <p>{t("admin.loading")}</p>;
  if (error) return <p>{t("admin.error")}</p>;

  const motto = data.Motto[0].children[0].text;

  return (
    <div className="flex flex-col gap-20 mt-20">
      <img src={logo} alt="logo" className="absolute h-full -translate-2/7 z-0 opacity-10"/>
      <div className="container max-w-3/5 mx-auto px-4 z-10">
        <section className="flex flex-col">
          <h4>{t("about.history")}</h4>
          <RenderRichText 
            content={data.Historia} 
            pClasses="text-black"
            />
        </section>
      </div>

      <Motto motto={motto} />

      <div className="container max-w-3/5 mx-auto px-4 z-10">
        <section className="flex flex-col gap-4">
          <h4>{t("about.goals")}</h4>
          <RenderRichText 
            content={data.Cele} 
            olClasses="centered-list" 
            liClasses="square-markers"
          />
          
        </section>
        <section className="flex"></section>
        
      </div>
    </div>
  )
}
