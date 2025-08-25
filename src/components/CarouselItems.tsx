import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import NewsItem from "./NewsItem";

type CarouselProps = {
    items: any[];
    t: (key: string) => string;
};

export default function Carousel({ items, t }: CarouselProps) {
    const [startIndex, setStartIndex] = useState(0);

    // console.log("Carousel items:", items);

    const maxVisible = 3;

    const canGoLeft = startIndex > 0;
    const canGoRight = startIndex + maxVisible < items.length;

    const handleLeft = () => {
        if (canGoLeft) setStartIndex(startIndex - 1);
    };

    const handleRight = () => {
        if (canGoRight) setStartIndex(startIndex + 1);
    };

    const visibleItems = items.slice(startIndex, startIndex + maxVisible);

    return (
        <div className="relative w-full overflow-visible flex items-center">
            {items.length > maxVisible && (
                <button
                    onClick={handleLeft}
                    disabled={!canGoLeft}
                    className={`absolute -left-16 sm:-left-20 md:-left-24 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow ${!canGoLeft ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100"
                        } z-10`}
                    aria-label={t("news.carousel.prev")}
                >
                    <HiChevronLeft size={30} />
                </button>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow">
                {visibleItems.map((item, index) => (
                    <NewsItem key={item.id || index} item={item} index={index} t={t} />
                ))}
            </div>

            {items.length > maxVisible && (
                <button
                    onClick={handleRight}
                    disabled={!canGoRight}
                    className={`absolute right-[-75px] top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow ${!canGoRight ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100"
                        } z-10`}
                    aria-label={t("news.carousel.next")}
                >
                    <HiChevronRight size={30} />
                </button>
            )}
        </div>
    );
}

