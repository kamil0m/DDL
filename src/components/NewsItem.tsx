import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { isSoon, isNew, publishedDaysAgo } from '../components/FilteringMethods';
import { ImportantBadge, NewBadge, PublishedBadge, SoonBadge } from "./Badges"; // Assuming you have a separate Badges component
import { EventNews } from '../models/interfaces/EventNews';
import { FaFacebookF } from "react-icons/fa";

type NewsItemProps = {
    item: EventNews;
    index: number;
    t: (key: string) => string;
};

export default function NewsItem({ item, t }: NewsItemProps) {

    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleReadMore = (e: React.MouseEvent) => {
        // Prevent navigation if user is selecting text
        const selection = window.getSelection();
        if (selection && selection.toString().length > 0) {
            return;
        }
        // Prevent navigation if user is clicking on the Facebook link
        if ((e.target as HTMLElement).closest("a")) {
            return;
        }

        const type = item.type || "news";
        navigate(`/${type}/${item.documentId}`);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const truncate = (text: string, length = 100) =>
        text.length > length ? text.substring(0, length) + "..." : text;

    const title = item.Tytul;
    const descriptionBlocks = item.Tresc;
    const descriptionText = Array.isArray(descriptionBlocks)
        ? descriptionBlocks
            .map((block: any) =>
                block.children?.map((child: any) => child.text).join(" ")
            )
            .join(" ")
        : descriptionBlocks;

    const truncatedDescription = truncate(descriptionText);

    const type = item.type || "news";

    const getPhotoUrl = (item: EventNews) => {
        if (item.type === "event" && Array.isArray(item.Zdjecie) && item.Zdjecie[0]?.url) {
        return item.Zdjecie[0].url;
    } else if (item.type === "news" && item.Zdjecie && 'url' in item.Zdjecie) {
        return (item.Zdjecie as { url: string }).url;
    }
        return "/src/styles/images/logo.jpg";
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
                e.stopPropagation();
                handleReadMore(e);
            }}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden flex flex-col cursor-pointer">
            <div className="relative h-75 w-full">
                <img
                    src={getPhotoUrl(item)}
                    alt="News"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 flex gap-2 flex-wrap">
                    {type === "news" && (
                        <span className="bg-white text-accent text-l font-semibold px-2 py-1 rounded">
                            <HiOutlineNewspaper className="inline-block mr-1 -scale-x-100 translate-y-[-2px]" size={18} />
                            {t("news.tags.news")}
                        </span>
                    )}
                    {type === "event" && (
                        <span className="bg-accent text-white text-l font-semibold px-2 py-1 rounded">
                            ★ {t("news.tags.event")}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-3 p-4 flex-grow">
                <div className="flex justify-between items-center flex-wrap text-sm">
                    <div className="flex flex-wrap gap-2">

                        {item.Wazne && type === "news" && (
                            < ImportantBadge />
                        )}

                        {isSoon(item) && type === "event" && (
                            < SoonBadge />
                        )}

                        {isNew(item) ? (
                            < NewBadge />
                        ) : (
                            < PublishedBadge daysAgo={publishedDaysAgo(item)} />
                        )}

                    </div>

                    <div className="text-darkgrey text-xl font-medium px-2 py-1">
                        {item.publishedDaysAgo === 0
                            ? t("news.date.today")
                            : new Date(item.Data_publikacji).toLocaleDateString("en-GB")}
                    </div>
                </div>

                <h4>{title}</h4>
                {item.Data_wydarzenia && (
                    <p className="text-l text-darkgrey">
                        {t("news.dateLabel")} {item.Data_wydarzenia}
                    </p>
                )}
                <p className="text-l text-darkgrey">{truncatedDescription}</p>
                <div className="flex justify-between">
                    <button
                        onClick={handleReadMore}
                        className={`underline text-xl mt-1 self-start ${isHovered ? "text-black" : "text-darkgrey"} transition-colors cursor-pointer`}
                    >
                        {t("news.readMore")}
                    </button>
                    {item.Link_do_Facebook && (
                        <a target="_blank" href={item.Link_do_Facebook} className="button-blue w-[2rem] h-[2rem] inline-flex items-center justify-center rounded-full">
                            <FaFacebookF className="shade-xl"/>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

