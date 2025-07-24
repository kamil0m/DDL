import useFetch from '../hooks/useFetch';
// import RenderRichText from '../components/RenderRichText.tsx';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import Carousel from './Carousel.tsx';
import PersonItem from './PersonItem.tsx';



export default function People() {

  const { t } = useTranslation();
  const { currentLanguage } = useLanguage(); // Use the language context
  
  const { data, loading, error } = useFetch(`ludzies?locale=${currentLanguage}`);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const peopleData = data as any;

  console.log(peopleData);
  
  if (loading) return <p>{t("admin.loading")}</p>;
  if (error) return <p>{t("admin.error")}</p>;
  if (!peopleData) return <p>No data available</p>;

  return (
    <section>
      <h4>Ludzie</h4>
      <Carousel dataArray={peopleData} item={<PersonItem />} t={t}>
        
      </Carousel>
    </section>
  )
}
