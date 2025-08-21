import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FooterConditions() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <h5>{t("footer.conditions")}</h5>
      <nav className="flex flex-col mt-4 lg:mt-10 gap-1 lg:gap-4">
        <NavLink to="/privacy" className="hover:text-black">{t("footer.GDPR")}</NavLink>
        <NavLink to="/terms" className="hover:text-black">{t("footer.statute")}</NavLink>
      </nav>
    </div>
  )
}
