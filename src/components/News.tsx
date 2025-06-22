import { useState } from "react";
import { Newspaper } from 'lucide-react';
import useFetch from '../hooks/useFetch';

export default function News() {
    const { data, loading, error } = useFetch('news?populate=*'); /
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

    const toggleDescription = (index: number) => {
        setExpandedIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const truncate = (text: string, length = 100) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading news</p>;
    if (!Array.isArray(data)) return <p>No news found</p>;

    return (
        <section className="flex flex-col items-center mt-40 gap-6">
            <div className="text-center">
                <h3 className="mb-4">Our Recent News</h3>
                <p>There are many variations of passages of Lorem Ipsum available<br /> but the majority have suffered alteration in some form.</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-8 mt-8 flex-wrap">
                {data.map((item: any, index: number) => {
                    const attributes = item.attributes;
                    const title = attributes.title;
                    const description = attributes.description;
                    const eventDate = attributes.eventDate;
                    const tags = attributes.tags || [];
                    const badges = attributes.badges || [];
                    const dateLabel = new Date(attributes.publishedAt).toLocaleDateString();
                    const imageUrl = attributes.image?.data?.attributes?.url
                        ? `https://ddlille-9b0a6ce9f6c7.herokuapp.com${attributes.image.data.attributes.url}`
                        : 'src/styles/images/news-1.jpg'; // fallback

                    return (
                        <div key={item.id} className="w-[500px] h-[750px] flex flex-col gap-4">
                            <div className="relative rounded-lg overflow-hidden shadow-md">
                                <img src={imageUrl} alt="News" className="w-full h-full object-cover" />
                                <div className="absolute top-2 left-2 flex flex-col gap-1">
                                    {tags.map((tag: string, i: number) => (
                                        <span
                                            key={i}
                                            className={`flex items-center gap-1 text-l font-semibold px-2 py-1 rounded ${tag.includes('Event')
                                                ? 'bg-blue text-white'
                                                : tag === 'News'
                                                    ? 'bg-white text-blue'
                                                    : 'bg-skyblue text-white'
                                                }`}
                                        >
                                            {tag === 'News' ? <Newspaper size={16} /> : '★'} {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between items-center w-full text-l text-gray-500 flex-wrap gap-2">
                                <div className="flex flex-wrap items-center gap-2">
                                    {badges.map((badge: string, i: number) => (
                                        <span
                                            key={i}
                                            className={`px-2 py-1 text-l rounded font-medium ${badge.includes('Published')
                                                ? 'bg-green text-white'
                                                : badge === 'New'
                                                    ? 'bg-skyblue text-white'
                                                    : 'bg-orange text-white'
                                                }`}
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                                <span className="ml-auto text-xl">{dateLabel}</span>
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
                                    {expandedIndexes.includes(index) ? 'see less' : 'see more'}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
