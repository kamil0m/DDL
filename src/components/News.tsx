import { useState } from "react";
import { Newspaper } from "lucide-react";
import useFetch from "../hooks/useFetch";
import useLatestCombined from "./LatestNews";

export default function News() {
    // Using the custom hook to fetch latest news and events
    const { latest, loading, error } = useLatestCombined();
    console.log(latest);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Something went wrong.</div>;

    const { data, loading, error } = useFetch("events");
    console.log(data);
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

    const toggleDescription = (index: number) => {
        setExpandedIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const truncate = (text: string, length = 100) => {
        return text.length > length ? text.substring(0, length) + "..." : text;
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Something went wrong.</div>;

    return (
        <section className="flex flex-col items-center mt-40 gap-6">
            <div className="text-center">
                <h3 className="mb-4">Our Recent News</h3>
                <p>
                    There are many variations of passages of Lorem Ipsum available
                    <br /> but the majority have suffered alteration in some form.
                </p>
            </div>

            <div className="flex flex-row flex-wrap justify-center gap-8 mt-8">
                {data?.data?.map((item: any, index: number) => {
                    const attr = item;

                    if (!attr.Tytul && !attr.Tresc) return null;

                    const title = attr.Tytul || "Untitled";
                    const description = attr.Tresc || "";
                    const eventDate = attr.Data_wydarzenia || "Brak daty";
                    const image = attr.Zdjecie?.data?.attributes?.url
                        ? `https://ddlille-9b0a6ce9f6c7.herokuapp.com${attr.Zdjecie.data.attributes.url}`
                        : "src/styles/images/news-1.jpg";

                    return (
                        <div key={index} className="w-[500px] h-[750px] flex flex-col gap-4">
                            <div className="relative rounded-lg overflow-hidden shadow-md">
                                <img
                                    src={image}
                                    alt="News"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 left-2 flex flex-col gap-1">
                                    <span className="flex items-center gap-1 text-l font-semibold px-2 py-1 rounded bg-blue text-white">
                                        <Newspaper size={16} /> News
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <h4>{title}</h4>
                                <p>Event date: {eventDate}</p>
                                <p>
                                    {expandedIndexes.includes(index)
                                        ? description
                                        : truncate(description, 100)}
                                </p>
                                <button
                                    onClick={() => toggleDescription(index)}
                                    className="underline text-2xl text-darkgrey mt-1 self-start"
                                >
                                    {expandedIndexes.includes(index) ? "see less" : "see more"}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
