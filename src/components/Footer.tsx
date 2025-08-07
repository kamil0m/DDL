import Logo from "./Logo"
import { FaFacebookF } from "react-icons/fa";
import FooterNav from "./FooterNav";
import FooterConditions from "./FooterConditions";
import { useTranslation } from "react-i18next";
import useFetch from "../hooks/useFetch";
import { useLanguage } from "../contexts/LanguageContext";


export default function Footer() {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  const { data, loading, error } = useFetch(`about-us-page?locale=${currentLanguage}`);
  
  if (loading) return <p>{t("admin.loading")}</p>;
  if (error) return <p>{t("admin.error")}</p>;
  if (!data) return <p>No data available</p>;


  return (
    <div className="container flex flex-row justify-between h-[250px] my-20 text-darkgrey text-lg font-light bg-dots">
      <div className="flex flex-row gap-15">

        <div className="flex flex-col gap-2">
          < Logo size="h-[8rem]" />
          <p className="max-w-[20rem]">
            {data?.Motto?.[0]?.children?.[0]?.text}
          </p>
        </div>

        <div className="flex flex-row gap-6">
          < FooterNav />
          < FooterConditions />
        </div>

      </div>
      <div className="flex flex-col">
        <h5>{t("footer.followus")}</h5>
        <div className="flex flex-col mt-10 gap-4">
          <a target="_blank" href="https://www.facebook.com/p/Dzien-dobry-Lille-Bonjour-Lille-61559848594019/" className="button-blue w-[2rem] h-[2rem] inline-flex items-center justify-center rounded-full">
            <FaFacebookF />
          </a>
          <p className="">{t("footer.copyrights")}</p>
        </div>
      </div>
    </div>
  )
}
