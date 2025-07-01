import { useTranslation } from "react-i18next";
import useNewsEvents from "../hooks/useNewsEvents";
import NewsItem from "../components/NewsItem";

export default function Events() {
    const { t } = useTranslation();
    const { upcomingEvents, pastEvents, sortedNews } = useNewsEvents();

    return (
        <section className="flex flex-col justify-between items-center mt-40 gap-10">
            <div className="shortItems">
                <div className="text-left">
                    <h6 className="mb-4">{t("news.eventspage.upcomingEvents")}</h6>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {upcomingEvents.map((item, index) => (
                        <NewsItem key={item.id || index} item={item} index={index} t={t} />
                    ))}
                </div>
            </div>
            <div className="shortItems py-20">
                <div className="text-left ">
                    <h6 className="mb-4">{t("news.eventspage.readArticles")}</h6>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {sortedNews.map((item, index) => (
                        <NewsItem key={item.id || index} item={item} index={index} t={t} />
                    ))}
                </div>
            </div>
            <div className="shortItems pb-15">
                <div className="text-left">
                    <h6 className="mb-4">{t("news.eventspage.pastEvents")}</h6>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {pastEvents.map((item, index) => (
                        <NewsItem key={item.id || index} item={item} index={index} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}