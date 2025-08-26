import useFetch from '../hooks/useFetch';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import Carousel from './Carousel.tsx';
import PersonItem from './PersonItem.tsx';
import { sortPeople } from '../utils/sortPeople.tsx';
import { Person as PersonType } from '../models/types/Person';


export default function People() {

  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();
  
  const { data, loading, error } = useFetch(`ludzies?populate=*&locale=${currentLanguage}`);
  const peopleData = data as PersonType[] | null;
  
  if (loading) return <p>{t("admin.loading")}</p>;
  if (error) return <p>{t("admin.error")}</p>;
  if (!peopleData || (Array.isArray(peopleData) && peopleData.length === 0)) return <p>No data available</p>;

  const orderedPeople = sortPeople(peopleData, currentLanguage);

  return (
    <section className='flex flex-col mt-15 gap-8'>
      <h4>{t("about.people")}</h4>
      <Carousel dataArray={orderedPeople} item={<PersonItem />} maxVisible={4} t={t}/>
    </section>
  )
}