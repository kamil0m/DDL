import { useState } from "react";
import { HiOutlineNewspaper } from "react-icons/hi2";
import RenderRichText from "./RenderRichText";

type NewsItemProps = {
    item: any;
    index: number;
    t: (key: string) => string;
};

export default function NewsItem({ item, t }: NewsItemProps) {
    const [expanded, setExpanded] = useState(false);

    const toggleDescription = () => setExpanded(prev => !prev);
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

    const image = item.Zdjecie && item.Zdjecie.length > 0
        ? item.Zdjecie[0].url
        : "/src/styles/images/logo.jpg";

    const type = item.type || "news";

    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <div className="relative h-75 w-full">
                <img
                    src={image}
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
                        {item.isImportant && type === "news" && (
                            <span className="bg-orange text-white font-medium px-2 py-1 rounded">
                                {t("news.badges.important")}
                            </span>
                        )}

                        {item.isSoon && type === "event" && (
                            <span className="bg-blue text-white font-medium px-2 py-1 rounded">
                                {t("news.badges.soon")}
                            </span>
                        )}

                        {item.isNew ? (
                            <span className="bg-skyblue text-white font-medium px-2 py-1 rounded">
                                {t("news.badges.new")}
                            </span>
                        ) : (
                            <span className="bg-green text-white font-medium px-2 py-1 rounded">
                                {t("news.badges.published")} {item.publishedDaysAgo} {t("news.badges.days")}
                            </span>
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
                {expanded ? (
                    <RenderRichText
                        content={descriptionBlocks}
                        pClasses="text-l text-darkgrey"
                    />
                ) : (
                    <p className="text-l text-darkgrey">{truncatedDescription}</p>
                )}
                <button
                    onClick={toggleDescription}
                    className="underline text-darkgrey text-xl mt-1 self-start"
                >
                    {/* TODO change to redirect */}
                    {expanded ? t("news.readLess") : t("news.readMore")}
                </button>
            </div>
        </div>
    );
}

