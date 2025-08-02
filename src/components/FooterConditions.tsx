import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FooterConditions() {
  const { t } = useTranslation();

  return (
    <div className="footer-col">
      <h5>{t("footer.conditions")}</h5>
      <nav className="footer-col mt-10 gap-4">
        <NavLink to="/privacy" className="hover:text-black">{t("footer.GDPR")}</NavLink>
        <NavLink to="/" className="hover:text-black">{t("footer.statute")}</NavLink>
      </nav>
    </div>
  )
}
