import { useTranslation } from "react-i18next";
import useNewsEvents from "../hooks/useNewsEvents";
import Carousel from "../components/CarouselItems";
import BreadCrumbsNav from "../components/BreadCrumbsNav";

export default function News() {
    const { t } = useTranslation();
    const { sortedNews } = useNewsEvents();

    return (
        <>
            <BreadCrumbsNav data={{ Tytul: t("nav.news") }} />

            <section className="flex flex-col justify-between items-center mt-20 gap-10 bg-linear-to-b from-white to-grey">

                <div className="shortItems max-w-4/5 pb-15">
                    <div className="text-left ">
                        <h6 className="mb-4">{t("news.eventspage.readArticles")}</h6>
                    </div>
                    <Carousel items={sortedNews} t={t} />
                </div>

            </section>
        </>
    );
}


