import { useTranslation } from "react-i18next";
import useNewsEvents from "../hooks/useNewsEvents";
import Carousel from "../components/CarouselItems";

export default function Events() {
    const { t } = useTranslation();
    const { upcomingEvents, pastEvents, sortedNews } = useNewsEvents();

    return (
        <section className="flex flex-col justify-between items-center mt-40 gap-10">
            <div className="shortItems max-w-4/5">
                <div className="text-left">
                    <h6 className="mb-4">{t("news.eventspage.upcomingEvents")}</h6>
                </div>
                <Carousel items={upcomingEvents} t={t} />
            </div>

            <div className="shortItems max-w-4/5 py-20">
                <div className="text-left ">
                    <h6 className="mb-4">{t("news.eventspage.readArticles")}</h6>
                </div>
                <Carousel items={sortedNews} t={t} />
            </div>

            <div className="shortItems max-w-4/5 pb-15">
                <div className="text-left">
                    <h6 className="mb-4">{t("news.eventspage.pastEvents")}</h6>
                </div>
                <Carousel items={pastEvents} t={t} />
            </div>
        </section>
    );
}
