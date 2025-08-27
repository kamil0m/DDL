import { useTranslation } from 'react-i18next';
import RenderRichText from '../components/RenderRichText';
import useFetch from '../hooks/useFetch';
import { useLanguage } from '../contexts/LanguageContext';

export default function TermsAndConditions() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  const { data, loading, error } = useFetch(`join-us-page?locale=${currentLanguage}`);

  if (loading) return <p>{t("admin.loading")}</p>;
  if (error) return <p>{t("admin.error")}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div className="flex flex-col items-center w-full bg-linear-to-b from-white to-grey">
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:max-w-3/5 flex flex-col mt-20 text-sm text-black font-light">
        <h3>{t("termsAndConditions.title")}</h3>
        <RenderRichText content={data?.Regulamin} pClasses="text-black text-sm" liClasses="ml-10 list-disc" h2Classes="text-black mt-8" />
      </div>
    </div>
  )
}