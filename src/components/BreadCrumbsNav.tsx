import { PiHouseLight } from "react-icons/pi";
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SlArrowRight } from "react-icons/sl";
import { useLocation } from 'react-router-dom';

export default function BreadCrumbsNav({ data }: any) {
    const { t } = useTranslation();
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

    useEffect(() => {

        const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
        const breadcrumbsArray = ['Home'];

        pathSegments.forEach((segment, index) => {
            switch (segment) {
                case 'news':
                    breadcrumbsArray.push('News');
                    break;
                case 'event':
                    breadcrumbsArray.push('Events');
                    break;
                default:
                    // For IDs, show the actual title if available
                    if (index === pathSegments.length - 1 && data?.Tytul) {
                        // Adapt Tytul string length to the screen's width
                        const truncate = (text: string) =>
                            {
                                const length: number = window.innerWidth < 1024 ? 18 : 100;
                                return text.length > length ? text.substring(0, length) + "..." : text;
                            }
                        breadcrumbsArray.push(truncate(data.Tytul));
                    } else {
                        breadcrumbsArray.push(segment);
                    }
            }
        });
        setBreadcrumbs(breadcrumbsArray);
    }, [data]);

    if (!breadcrumbs || breadcrumbs.length === 0) {
        return null; // No breadcrumbs to display
    }

    return (
        <nav className="flex justify-center items-center bg-white z-10 h-20 w-full shadow-xl text-xs sm:text-sm lg:text-xl">
            {/* Breadcrumb Navigation */}
            <div className="container flex justify-center items-center lg:gap-2 px-4">
                {breadcrumbs.map((crumb, index) => (
                    <div key={index} className="flex items-center">
                        {index === breadcrumbs.length - 1 ?
                            // Last item - render as span (current page, not clickable)
                            (
                                <span className="text-accent font-medium truncate">
                                    {(() => {
                                        switch (crumb) {
                                            case 'News':
                                                return t("nav.news");
                                            case 'Events':
                                                return t("nav.events");
                                            case 'Home':
                                                return t("nav.home");
                                            default:
                                                return crumb;
                                        }
                                    })()}
                                </span>
                            ) : 
                            // Not last item - render as NavLink (clickable)
                            (
                                <NavLink
                                    to={(() => {
                                        switch (crumb) {
                                            case 'News': return '/news';
                                            case 'Events': return '/events';
                                            case 'Home': return '/';
                                            default: return '/'; // Fallback to home
                                        }
                                    })()}
                                    className={"flex flex-row items-center gap-2 font-light transition-colors hover:text-accent"}
                                >
                                    {crumb === 'News' && t("nav.news")}
                                    {crumb === 'Events' && t("nav.events")}
                                    {crumb === 'Home' && (
                                        <>
                                            <PiHouseLight className="text-2xl" /> {t("nav.home")}
                                        </>
                                    )}
                                </NavLink>
                            )
                        }

                        {/* Separator */}
                        {index < breadcrumbs.length - 1 && (
                            <span className="mx-1 lg:mx-2 text-darkgrey">
                                <SlArrowRight />
                            </span>

                        )}
                    </div>
                ))}
            </div>
        </nav>
    )
}
