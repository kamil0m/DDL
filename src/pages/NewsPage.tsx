import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HiOutlineNewspaper, HiArrowLeft } from "react-icons/hi2";
import RenderRichText from '../components/RenderRichText';
import useFetch from '../hooks/useFetch';
import { useTranslation } from 'react-i18next';

interface NewsItem {
    Tytul: string;
    Zdjecie?: { url: string }[];
    Data_publikacji: string;
    Tresc: unknown;
    Wazne?: boolean;
    Data_wydarzenia?: string;
    [key: string]: unknown;
}

export default function NewsPage() {
    const { id, type } = useParams<{ id: string; type: string }>();
    const navigate = useNavigate();
    const [item, setItem] = useState<NewsItem | null>(null);
    const { t } = useTranslation();

    // Determine the API endpoint based on type
    const endpoint = type === 'event' ? `events/${id}?populate=*` : `aktualnosci/${id}?populate=*`;
    const { data, loading, error } = useFetch(endpoint);

    useEffect(() => {
        if (
            !data || 
            data === "" ||    
            (typeof data === 'object' && Object.keys(data).length === 0) ||
            (Array.isArray(data) && data.length === 0)
        ) {
            console.log("No data available yet");
            return;
        }
        setItem(data);
    }, [data]);

    if (loading) {
        return (
            <div className="min-h-screen bg-linear-to-b from-white to-grey w-full flex items-center justify-center">
                <div className="text-xl">{t("common.loading")}</div>
            </div>
        );
    }

    if (error || !item) {
        return (
            <div className="min-h-screen bg-linear-to-b from-white to-grey w-full flex items-center justify-center">
                <div className="text-xl text-red-500">{t("common.error")}</div>
            </div>
        );
    }

    const title = item.Tytul;
    const image = item.Zdjecie && item.Zdjecie.length > 0
        ? item.Zdjecie[0].url
        : "/src/styles/images/logo.jpg";

    const publishDate = new Date(item.Data_publikacji).toLocaleDateString("en-GB");

    return (
        <div className="min-h-screen bg-linear-to-b from-white to-grey w-full">
            <div className="max-w-2/3 mx-auto px-4 py-8">
                {/* Back button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-accent hover:text-accent/80 mb-6 transition-colors"
                >
                    <HiArrowLeft size={20} />
                    <span className="text-lg">{t("common.back")}</span>
                </button>

                {/* Main content */}
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Header image */}
                    <div className="relative h-96 w-full">
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

                    {/* Content */}
                    <div className="p-8">
                        {/* Title and date */}
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
                            <div className="flex items-center gap-4 text-darkgrey">
                                <span className="text-lg">{t("news.publishedOn")} {publishDate}</span>
                                {item.Wazne && type === "news" && (
                                    <span className="bg-orange text-white font-medium px-3 py-1 rounded-lg">
                                        {t("news.badges.important")}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Event date if applicable */}
                        {item.Data_wydarzenia && (
                            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                <p className="text-lg text-darkgrey">
                                    <strong>{t("news.dateLabel")}</strong> {item.Data_wydarzenia}
                                </p>
                            </div>
                        )}

                        {/* Content */}
                        <div className="prose prose-lg max-w-none">
                            <RenderRichText
                                content={item.Tresc}
                                pClasses="text-lg text-gray-700 leading-relaxed mb-4"
                            />
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}