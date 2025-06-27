import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import useLatestCombined from "../hooks/LatestNews";
import NewsItem from "./NewsItem";

export default function News() {
    const { t } = useTranslation();
    const { currentLanguage } = useLanguage();
    const { latest } = useLatestCombined();

    return (
        <section className="flex flex-col justify-between items-center mt-40 gap-10">
            <div className="w-full max-w-screen-2xl px-4">
                <div className="text-center">
                    <h3 className="mb-4">{t("news.heading")}</h3>
                    <p className="whitespace-pre-line">{t("news.subheading")}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {latest.map((item, index) => (
                        <NewsItem key={item.id || index} item={item} index={index} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}
