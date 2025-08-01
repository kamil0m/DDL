import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FooterNav() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <h5>{t("footer.pages")}</h5>
      <div className="flex flex-col mt-10 gap-4">
        <NavLink to="/" className="hover:text-black">{t("footer.mainpage")}</NavLink>
        <NavLink to="/events" className="hover:text-black">{t("footer.events")}</NavLink>
        <NavLink to="/news" className="hover:text-black">{t("footer.news")}</NavLink>
        <NavLink to="/about" className="hover:text-black">{t("footer.aboutus")}</NavLink>
      </div>
    </div>
  )
}
