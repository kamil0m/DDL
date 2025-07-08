import { useTranslation } from "react-i18next";
import useNewsEvents from "../hooks/useNewsEvents";
import Carousel from "../components/CarouselItems";
import BreadCrumbsNav from "../components/BreadCrumbsNav";

export default function Events() {
    const { t } = useTranslation();
    const { upcomingEvents, pastEvents, sortedNews } = useNewsEvents();

    return (
        <>
            <BreadCrumbsNav data={{ Tytul: t("nav.events") }} />
            <section className="flex flex-col justify-between items-center mt-40 gap-10 bg-linear-to-b from-white to-grey">
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
        </>
    );
}
