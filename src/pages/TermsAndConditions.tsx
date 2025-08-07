import { useTranslation } from 'react-i18next';
import RenderRichText from '../components/RenderRichText';
import useFetch from '../hooks/useFetch';
import { useLanguage } from '../contexts/LanguageContext';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  const { data, loading, error } = useFetch(`strona-polityka-prywatnosci?locale=${currentLanguage}`);

  if (loading) return <p>{t("admin.loading")}</p>;
  if (error) return <p>{t("admin.error")}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div className=" container max-w-3/5 flex flex-col text-black mt-20 text-xl text-darkgrey font-light">
      <h3>{t("privacyPolicy.title")}</h3>
      <RenderRichText content={data?.Polityka} liClasses="ml-10 list-disc" />
    </div>
  )
}