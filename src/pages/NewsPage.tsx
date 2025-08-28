import { useParams } from 'react-router-dom';
import { HiOutlineNewspaper } from "react-icons/hi2";
import RenderRichText from '../components/RenderRichText';
import useFetch from '../hooks/useFetch';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { EventNews } from '../models/interfaces/EventNews';
import BreadCrumbsNav from '../components/BreadCrumbsNav';
import { ImportantBadge, SoonBadge, NewBadge, PublishedBadge } from '../components/Badges';
import { isSoon, isNew, publishedDaysAgo } from '../components/FilteringMethods';
import getImageUrl from '../utils/getImageUrl';

export default function NewsPage() {
    const { id, type } = useParams<{ id: string; type: string }>();
    const { t } = useTranslation();
    const { currentLanguage } = useLanguage(); // Use the language context
    const { data, loading, error } = useFetch(type === 'event' ? `events/${id}?populate=*&locale=${currentLanguage}` : `aktualnosci/${id}?populate=*&locale=${currentLanguage}`) as { data: EventNews, loading: boolean, error: any };

    const formatDateToFullFormat = (dateString: string): string => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString(currentLanguage === 'fr' ? 'fr-FR' : 'pl-PL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-linear-to-b from-white to-grey w-full flex items-center justify-center">
                <div className="text-xl">{t("common.loading")}</div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="min-h-screen bg-linear-to-b from-white to-grey w-full flex items-center justify-center">
                <div className="text-xl text-red-500">{t("common.error")}</div>
            </div>
        );
    }

    const title = data.Tytul;
    const image = getImageUrl(data);

    return (
        <>
            {data && (<BreadCrumbsNav data={data} />)}

            <div className="flex flex-col items-center gap-2 mt-7 min-h-screen bg-linear-to-b from-white to-grey w-full">
                {/* Header image */}
                <div className="relative h-48 w-full sm:h-64 md:h-96 md:w-2/3 lg:rounded-xl shadow-lg overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex gap-2">
                        {type === "news" && (
                            <span className="bg-white text-accent text-sm sm:text-base md:text-lg font-semibold px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-md">
                            <HiOutlineNewspaper className="inline-block mr-1 sm:mr-2 -scale-x-100 translate-y-[-2px]" size={18} />
                            {t("news.tags.news")}
                        </span>
                        )}
                        {type === "event" && (
                            <>
                                <span className="bg-accent text-white text-sm sm:text-base md:text-lg font-semibold px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-md">
                                ★ {t("news.tags.event")}
                                </span>
                            </>
                        )}

                    </div>
                </div>

                {/* Main content */}
                <div className="flex flex-col gap-3 sm:gap-8 w-full sm:w-5/6 md:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden p-4 sm:p-6 mb-10 md:mb-20">

                    {/* Type and title */}
                    <div className="flex flex-col gap-4 sm:gap-8 text-center">
                        <div className="flex justify-center">
                            <div className="flex flex-col">
                                {/* <h2>{type === "event" ? t("news.tags.event") : t("news.tags.news")}{type === "event" && " " + formatDateToFullFormat(data.Data_wydarzenia) + ` ${t("news.eventspage.cityAdverb")} ` + data.Miejsce_wydarzenia}</h2> */}
                                <h2 className="text-sm sm:text-base md:text-lg">
                                    {type === "news" && t("news.tags.news")}
                                    {type === "event" && " " + formatDateToFullFormat(data.Data_wydarzenia ?? '') + ` ${t("news.eventspage.cityAdverb")} ` + data.Miejsce_wydarzenia}
                                </h2>
                            </div>
                        </div>
                        <h1 className="text-center">{title}</h1>
                    </div>

                    {/* <div className="h-[1px] w-full bg-accent"></div> */} {/* Divider line */}

                    {/* badges, meta info, buttons */}
                    <div className="flex flex-col lg:flex-row justify-between gap-3">
                        <div className="flex flex-row gap-3">
                            {data.Wazne && type === "news" && (
                                < ImportantBadge />
                            )}

                            {isSoon(data) && type === "event" && (
                                < SoonBadge />
                            )}

                            {isNew(data) ? (
                                < NewBadge />
                            ) : (
                                < PublishedBadge daysAgo={publishedDaysAgo(data)} />
                            )}
                        </div>
                        <div className="flex flex-row justify-center text-darkgrey font-light lg:font-normal text-sm sm:text-base">
                            {data.Podpis && (
                                <div className="">
                                    {data.Podpis}
                                </div>
                            )}
                            <span className="mx-2 text-2xl font-extrabold relative -translate-y-1.25">·</span>
                            <div>
                                {t("news.badges.published")} {data.Data_publikacji && new Date(data.Data_publikacji).toLocaleDateString("fr-FR")}
                            </div>
                        </div>

                        {/* TO DO : implement share and print functions here */}

                    </div>

                    {/* Content */}
                    <div className=" text-sm sm:text-base max-w-none">
                        <RenderRichText
                            content={data.Tresc}
                            pClasses="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 mt-0"
                        />
                    </div>

                </div>
            </div>
        </>
    );
}