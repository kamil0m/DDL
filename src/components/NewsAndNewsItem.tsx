import { useState } from "react";
import { HiOutlineNewspaper } from "react-icons/hi2";
import useLatestCombined from "../hooks/LatestNews";
import { useTranslation } from 'react-i18next';

export default function News() {
    const { t } = useTranslation();

    const { latest } = useLatestCombined();
    console.log("Latest news:", latest);
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

    const toggleDescription = (index: number) => {
        setExpandedIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const truncate = (text: string, length = 100) =>
        text.length > length ? text.substring(0, length) + "..." : text;

    return (
        <section className="flex flex-col justify-between items-center mt-40 gap-10">
            <div className="w-full max-w-screen-2xl px-4">
                <div className="text-center">
                    <h3 className="mb-4">{t("news.heading")}</h3>
                    <p className="whitespace-pre-line">{t("news.subheading")}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {latest.map((item: any, index: number) => {
                        const title = item.Tytul || "Untitled";
                        const descriptionBlocks = item.Tresc || [];
                        const descriptionText = Array.isArray(descriptionBlocks)
                            ? descriptionBlocks
                                .map((block: any) =>
                                    block.children?.map((child: any) => child.text).join(" ")
                                )
                                .join(" ")
                            : descriptionBlocks;

                        const image = item.Zdjecie && item.Zdjecie.length > 0
                            ? item.Zdjecie[0].url
                            : "/src/styles/images/logo.jpg";


                        const type = item.type || "news";

                        return (
                            <div
                                key={item.id || index}
                                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                            >
                                <div className="relative h-75 w-full">
                                    <img
                                        src={image}
                                        alt="News"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-2 left-2 flex gap-2 flex-wrap">
                                        {type === "news" && (
                                            <span className="bg-white text-accent text-l font-semibold px-2 py-1 rounded">
                                                <HiOutlineNewspaper className="inline-block mr-1 -scale-x-100" size={16} />
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
                                    {/* I left the p below in case we want to display information about the lack of a date for news*/}
                                    {/* <p className="text-l text-darkgrey">Event date: {eventDate}</p> */}
                                    {item.Data_wydarzenia && (
                                        <p className="text-l text-darkgrey">
                                            {t("news.dateLabel")} {item.Data_wydarzenia}
                                        </p>
                                    )}
                                    <p className="text-l text-darkgrey">
                                        {expandedIndexes.includes(index)
                                            ? descriptionText
                                            : truncate(descriptionText, 100)}
                                    </p>
                                    <button
                                        onClick={() => toggleDescription(index)}
                                        className="underline text-darkgrey text-xl mt-1 self-start"
                                    >
                                        {expandedIndexes.includes(index) ? t("news.readLess") : t("news.readMore")}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}

