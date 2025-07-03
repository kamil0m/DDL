import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HiOutlineNewspaper, HiArrowLeft } from "react-icons/hi2";
import RenderRichText from '../components/RenderRichText';
import useFetch from '../hooks/useFetch';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
// import { PiHouseLight } from "react-icons/pi";
// import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import StrapiFetchedData from '../models/interfaces/StrapiFetchedData';
import { BlocksContent } from '@strapi/blocks-react-renderer';
// import { SlArrowRight } from "react-icons/sl";
import BreadCrumbsNav from '../components/BreadCrumbsNav';



interface ContentData extends StrapiFetchedData {
    Tytul: string;
    Tresc: BlocksContent;
    Data_publikacji: string;
    Miejsce_wydarzenia?: string;
    Link_do_Facebook?: string;
    Podpis?: string;
    Data_wydarzenia?: string;
    Zdjecie: null | { url: string }[];
    Wazne?: boolean;
    type?: 'news' | 'event';
    // [key: string]: unknown;
}

export default function NewsPage() {
    const { id, type } = useParams<{ id: string; type: string }>();
    // const navigate = useNavigate();
    // const [item, setItem] = useState<NewsItem | null>(null);
    const { t } = useTranslation();
    const { currentLanguage } = useLanguage(); // Use the language context

    const { data, loading, error } = useFetch(type === 'event' ? `events/${id}?populate=*&locale=${currentLanguage}` : `aktualnosci/${id}?populate=*&locale=${currentLanguage}`) as { data: ContentData, loading: boolean, error: any };
    // const location = useLocation();


    

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

    const publishDate = new Date(data.Data_publikacji).toLocaleDateString("fr-FR");

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

                <div className="w-2/3 bg-white rounded-xl shadow-lg overflow-hidden p-6">
                    
                    {/* Main content */}
                    <article className="flex flex-col w-full gap-9 ">
                        
                        {/* Type and title */}
                        <div className="flex flex-col gap-8 text-center">
                            <h2>{type === "event" ? t("news.tags.event") : t("news.tags.news") }</h2>
                            <h1 className="text-center">{title}</h1>
                        </div>

                        <div className="h-[1px] w-full bg-accent"></div>


                        <div className="flex items-center gap-4 text-darkgrey">
                            <span className="text-lg">{t("news.publishedOn")} {publishDate}</span>
                        </div>

                        {data.Wazne && type === "news" && (
                            <span className="bg-orange text-white font-medium px-3 py-1 rounded-lg">
                                {t("news.badges.important")}
                            </span>
                        )}
                        {/* Event date if applicable */}
                        {data.Data_wydarzenia && (
                            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                <p className="text-lg text-darkgrey">
                                    <strong>{t("news.dateLabel")}</strong> {data.Data_wydarzenia}
                                </p>
                            </div>
                        )}

                        {/* Content */}
                        <div className="prose prose-lg max-w-none">
                            <RenderRichText
                                content={data.Tresc}
                                pClasses="text-lg text-gray-700 leading-relaxed mb-4"
                            />
                        </div>

                    </article>
                </div>
            </div>
        </>
    );
}