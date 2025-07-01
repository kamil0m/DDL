import { useTranslation } from "react-i18next";
import useLatestCombined from "../hooks/LatestNews";
import NewsItem from "../components/NewsItem";

export default function Events() {
    const { t } = useTranslation();
    const { latest } = useLatestCombined();

    return (
        <section className="flex flex-col justify-between items-center mt-40 gap-10">
            <div className="w-full max-w-screen-2xl px-4">
                <div className="text-left">
                    <h6 className="mb-4">{t("news.eventspage.upcomingEvents")}</h6>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {latest.map((item, index) => (
                        <NewsItem key={item.id || index} item={item} index={index} t={t} />
                    ))}
                </div>
            </div>
            <div className="w-full max-w-screen-2xl px-4">
                <div className="text-left">
                    <h6 className="mb-4">{t("news.eventspage.readArticles")}</h6>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {latest.map((item, index) => (
                        <NewsItem key={item.id || index} item={item} index={index} t={t} />
                    ))}
                </div>
            </div>
            <div className="w-full max-w-screen-2xl px-4">
                <div className="text-left">
                    <h6 className="mb-4">{t("news.eventspage.pastEvents")}</h6>
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