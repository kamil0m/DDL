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

export default function NewsPage() {
    const { id, type } = useParams<{ id: string; type: string }>();
    const { t } = useTranslation();
    const { currentLanguage } = useLanguage(); // Use the language context
    const { data, loading, error } = useFetch(type === 'event' ? `events/${id}?populate=*&locale=${currentLanguage}` : `aktualnosci/${id}?populate=*&locale=${currentLanguage}`) as { data: EventNews, loading: boolean, error: any };

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
    const image = data.Zdjecie && data.Zdjecie.length > 0
        ? data.Zdjecie[0].url
        : "/src/styles/images/logo.jpg";

    console.log(data);
    
    return (
        <>
            {data && (<BreadCrumbsNav data={data} />)}

            <div className="flex flex-col items-center gap-2 mt-7 min-h-screen bg-linear-to-b from-white to-grey w-full">
                {/* Header image */}
                <div className="relative h-96 w-2/3 rounded-xl shadow-lg overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                        {type === "news" && (
                            <span className="bg-white text-accent text-lg font-semibold px-3 py-2 rounded-lg shadow-md">
                                <HiOutlineNewspaper className="inline-block mr-2 -scale-x-100 translate-y-[-2px]" size={20} />
                                {t("news.tags.news")}
                            </span>
                        )}
                        {type === "event" && (
                            <span className="bg-accent text-white text-lg font-semibold px-3 py-2 rounded-lg shadow-md">
                                ★ {t("news.tags.event")}
                            </span>
                        )}
                    </div>
                </div>

                {/* Main content */}
                <div className="flex flex-col gap-9 w-2/3 bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-20">

                    {/* Type and title */}
                    <div className="flex flex-col gap-8 text-center">
                        <h2>{type === "event" ? t("news.tags.event") : t("news.tags.news") }</h2>
                        <h1 className="text-center">{title}</h1>
                    </div>

                    {/* <div className="h-[1px] w-full bg-accent"></div> */} {/* Divider line */}

                    {/* badges, meta info, buttons */}
                    <div className="flex flex-row justify-between gap-3">
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
                        <div className="flex flex-row text-darkgrey gap-6">
                            {data.Podpis && (
                                <div className="">
                                    {data.Podpis}
                                </div>
                            )}
                            <div>
                                {t("news.badges.published")} {data.Data_publikacji && new Date(data.Data_publikacji).toLocaleDateString("fr-FR")}
                            </div>
                        </div>

                        {/* TO DO : implement share and print functions here */}

                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">
                        <RenderRichText
                            content={data.Tresc}
                            pClasses="text-lg text-gray-700 leading-relaxed mb-4"
                        />
                    </div>

                </div>
            </div>
        </>
    );
}