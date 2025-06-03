import { useState } from "react";

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
                    <div key={index} className="w-[500px] h-[450px] flex flex-col gap-4">

                        <div className="relative rounded-lg overflow-hidden shadow-md">
                            <img src={item.image} alt="News" className="w-full h-full object-cover" />
                            <div className="absolute top-2 left-2">
                                {item.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded"
                                    >
                                        ★ {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-row flex-wrap items-center gap-2 text-sm text-gray-500">
                            {item.badges.map((badge, i) => (
                                <span
                                    key={i}
                                    className={`px-2 py-1 text-xs rounded font-medium ${badge.includes('Published')
                                        ? 'bg-green-200 text-green-800'
                                        : badge === 'New'
                                            ? 'bg-sky-200 text-sky-800'
                                            : 'bg-yellow-300 text-yellow-800'
                                        }`}
                                >
                                    {badge}
                                </span>
                            ))}
                            <span>{item.dateLabel}</span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-600">Event date: {item.eventDate}</p>
                            <p className="text-sm text-gray-600">
                                {expandedIndexes.includes(index)
                                    ? item.description
                                    : truncate(item.description, 100)}
                            </p>
                            <button
                                onClick={() => toggleDescription(index)}
                                className="text-blue-600 underline text-sm mt-1 self-start"
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
