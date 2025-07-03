import { useTranslation } from "react-i18next";
import useNewsEvents from "../hooks/useNewsEvents";
import Carousel from "../components/CarouselItems"

export default function News() {
    const { t } = useTranslation();
    const { sortedNews } = useNewsEvents();

    return (
        <section className="flex flex-col justify-between items-center mt-40 gap-10">
            <div className="shortItems max-w-4/5 py-20">
                <div className="text-left ">
                    <h6 className="mb-4">{t("news.eventspage.readArticles")}</h6>
                </div>
                <Carousel items={sortedNews} t={t} />
            </div>
        </section>
    );
}
