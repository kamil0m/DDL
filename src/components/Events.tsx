import { useState } from "react";
import { Newspaper } from 'lucide-react';


export default function News() {
    const newsItems = [
        {
            image: 'src/styles/images/news-1.jpg',
            tags: ['Event'],
            badges: ['Important', 'New'],
            dateLabel: 'Published today',
            title: 'Event or informations title',
            eventDate: '12/04/2025',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            image: 'src/styles/images/news-1.jpg',
            tags: ['News'],
            badges: ['New'],
            dateLabel: '12/04/2025',
            title: 'Event or informations title',
            eventDate: '12/04/2025',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            image: 'src/styles/images/news-1.jpg',
            tags: ['News'],
            badges: ['Published 2 days ago'],
            dateLabel: '10/04/2025',
            title: 'Event or informations title',
            eventDate: '12/04/2025',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
    ];

    const [expandedIndexes, setExpandedIndexes] = useState([]);

    const toggleDescription = (index) => {
        setExpandedIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const truncate = (text, length = 100) => {
        return text.length > length ? text.substring(0, length) + '...' : text;
    };

    return (
        <section className="flex flex-col items-center mt-40 gap-6">
            <div className="text-center">
                <h3 className="mb-4">Our Recent News</h3>
                <p>There are many variations of passages of Lorem Ipsum available<br /> but the majority have suffered alteration in some form.</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-8 mt-8">
                {newsItems.map((item, index) => (
                    <div key={index} className="w-[500px] h-[750px] flex flex-col gap-4">

                        <div className="relative rounded-lg overflow-hidden shadow-md">
                            <img src={item.image} alt="News" className="w-full h-full object-cover" />
                            <div className="absolute top-2 left-2 flex flex-col gap-1">
                                {item.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className={`flex items-center gap-1 text-l font-semibold px-2 py-1 rounded ${tag.includes('Event')
                                            ? 'bg-blue text-white'
                                            : tag === 'News'
                                                ? 'bg-white text-blue'
                                                : 'bg-skyblue text-white'
                                            }
                                            `}
                                    >
                                        {tag === 'News' ? <Newspaper size={16} /> : '★'} {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center w-full text-l text-gray-500 flex-wrap gap-2">
                            <div className="flex flex-wrap items-center gap-2">
                                {item.badges.map((badge, i) => (
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
                            <span className="ml-auto text-xl">{item.dateLabel}</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4>{item.title}</h4>
                            <p>Event date: {item.eventDate}</p>
                            <p>
                                {expandedIndexes.includes(index)
                                    ? item.description
                                    : truncate(item.description, 100)}
                            </p>
                            <button
                                onClick={() => toggleDescription(index)}
                                className="underline text-2xl text-darkgrey mt-1 self-start"
                            >
                                {expandedIndexes.includes(index) ? 'see less' : 'see more'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )

}
