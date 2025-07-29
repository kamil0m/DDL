import useFetch from '../hooks/useFetch';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import Carousel from './Carousel.tsx';
import PersonItem from './PersonItem.tsx';



export default function People() {

  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  
  const { data, loading, error } = useFetch(`ludzies?populate=*&locale=${currentLanguage}`);
  const peopleData = data as any;

  // console.log(data);
  
  if (loading) return <p>{t("admin.loading")}</p>;
  if (error) return <p>{t("admin.error")}</p>;
  if (!peopleData || (Array.isArray(peopleData) && peopleData.length === 0)) return <p>No data available</p>;

  return (
    <section className='flex flex-col mt-15 gap-8'>
      <h4>{t("about.people")}</h4>
      <Carousel dataArray={peopleData} item={<PersonItem />} t={t} maxVisible={4} />
    </section>
  )
}
