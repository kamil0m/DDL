import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HiOutlineNewspaper, HiArrowLeft } from "react-icons/hi2";
import RenderRichText from '../components/RenderRichText';
import useFetch from '../hooks/useFetch';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { PiHouseLight } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import StrapiFetchedData from '../models/interfaces/StrapiFetchedData';
import { BlocksContent } from '@strapi/blocks-react-renderer';


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
    const navigate = useNavigate();
    // const [item, setItem] = useState<NewsItem | null>(null);
    const { t } = useTranslation();
    const { currentLanguage } = useLanguage(); // Use the language context

    const { data, loading, error } = useFetch(type === 'event' ? `events/${id}?populate=*&locale=${currentLanguage}` : `aktualnosci/${id}?populate=*&locale=${currentLanguage}`) as { data: ContentData, loading: boolean, error: any };
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
    // const location = useLocation();

    // useEffect(() => {
    //     if (
    //         !data || 
    //         data === "" ||    
    //         (typeof data === 'object' && Object.keys(data).length === 0) ||
    //         (Array.isArray(data) && data.length === 0)
    //     ) {
    //         console.log("No data available yet");
    //         return;
    //     }
    //     setItem(data);
    // }, [data]);

    useEffect(() => {
    const createBreadcrumbs = () => {
        const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
        const breadcrumbArray = ['Home'];
        
        pathSegments.forEach((segment, index) => {
            switch(segment) {
                case 'news':
                    breadcrumbArray.push('News');
                    break;
                case 'event':
                    breadcrumbArray.push('Events');
                    break;
                default:
                    // For IDs, you could show the actual title if available
                    if (index === pathSegments.length - 1 && data?.Tytul) {
                        breadcrumbArray.push(data.Tytul);
                    } else {
                        breadcrumbArray.push(segment);
                    }
            }
        });
        
        return breadcrumbArray;
    };
    const breadcrumbArray = createBreadcrumbs();
        setBreadcrumbs(breadcrumbArray);
        console.log('Page breadcrumb:', breadcrumbArray.join(' > '));
        
}, [location.pathname, data]);

// useEffect(() => {
//     const createBreadcrumbs = () => {
//         const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
//         const breadcrumbs = ['Home'];
        
//         pathSegments.forEach((segment, index) => {
//             switch(segment) {
//                 case 'news':
//                     breadcrumbs.push('News');
//                     break;
//                 case 'event':
//                     breadcrumbs.push('Events');
//                     break;
//                 case 'events':
//                     breadcrumbs.push('Events');
//                     break;
//                 default:
//                     // For IDs, you could show the actual title if available
//                     if (index === pathSegments.length - 1 && item?.Tytul) {
//                         breadcrumbs.push(data.Tytul);
//                     } else {
//                         breadcrumbs.push(segment);
//                     }
//             }
//         });
        
//         return breadcrumbs.join(' > ');
//     };

//     console.log('Page breadcrumb:', createBreadcrumbs());
// }, [location.pathname, item]);

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
    
    return (
        <>
            <nav className="flex justify-center items-center bg-white z-10 h-20 w-full shadow-xl text-xl">
                {/* Breadcrumb Navigation */}
                <div className="container flex justify-center items-center gap-2 px-4">
                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center">
                            {index === breadcrumbs.length - 1 ? (
                                // Last item - render as span (current page, not clickable)
                                <span className="text-darkgrey font-medium truncate max-w-xs">
                                    {crumb}
                                </span>
                            ) : (
                                // Not last item - render as NavLink (clickable)
                                <NavLink 
                                    to={(() => {
                                        switch(crumb) {
                                            case 'News': return '/news';
                                            case 'Events': return '/events';
                                            case 'Home': return '/';
                                            default: return '/'; // Fallback to home
                                        }
                                    })()}
                                    className={({ isActive }) => 
                                        `transition-colors ${isActive 
                                            ? 'text-accent font-semibold' 
                                            : 'text-darkgrey hover:text-accent/80'
                                        }`
                                    }
                                >
                                    {crumb}
                                </NavLink>
                            )}
                            
                            {/* Separator */}
                            {index < breadcrumbs.length - 1 && (
                                <span className="mx-2 text-darkgrey">&gt;</span>
                            )}
                        </div>
                    ))}
                </div>
            </nav>

            <div className="min-h-screen bg-linear-to-b from-white to-grey w-full">
                <div className="max-w-2/3 mx-auto px-4 py-8">
                    {/* Back button */}
                    {/* <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-accent hover:text-accent/80 mb-6 transition-colors"
                    >
                        <HiArrowLeft size={20} />
                        <span className="text-lg">{t("common.back")}</span>
                    </button> */}

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
                                    {data.Wazne && type === "news" && (
                                        <span className="bg-orange text-white font-medium px-3 py-1 rounded-lg">
                                            {t("news.badges.important")}
                                        </span>
                                    )}
                                </div>
                            </div>

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
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}