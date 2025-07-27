import { cloneElement } from 'react';
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

type CarouselProps = {
    dataArray: object[];
    item: React.ReactElement;
    t: (key: string) => string;
    maxVisible: number;
};

export default function Carousel({ dataArray, item, t, maxVisible }: CarouselProps) {
    const [startIndex, setStartIndex] = useState(0);
    // maxVisible = maxVisible || 3;

    const canGoLeft = startIndex > 0;
    const canGoRight = startIndex + maxVisible < dataArray.length;

    const handleLeft = () => {
        if (canGoLeft) setStartIndex(startIndex - 1);
    };

    const handleRight = () => {
        if (canGoRight) setStartIndex(startIndex + 1);
    };

    const visibleItems = dataArray.slice(startIndex, startIndex + maxVisible);

    return (
        <div className="relative w-full overflow-visible flex items-center">
            {dataArray.length > maxVisible && (
                <button
                    onClick={handleLeft}
                    disabled={!canGoLeft}
                    className={`absolute left-[-75px] top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow ${!canGoLeft ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100"
                        } z-10`}
                    aria-label={t("nav.carousel.prev")}
                >
                    <HiChevronLeft size={30} />
                </button>
            )}

            <div className="flex flex-row justify-between flex-grow">
                {visibleItems.map((dataItem, index) => (
                    <div key={index} className="flex justify-center">
                        {cloneElement(item, { data: dataItem, key: index })}
                    </div>
                ))}
            </div>

            {dataArray.length > maxVisible && (
                <button
                    onClick={handleRight}
                    disabled={!canGoRight}
                    className={`absolute right-[-75px] top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow ${!canGoRight ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100"
                        } z-10`}
                    aria-label={t("nav.carousel.next")}
                >
                    <HiChevronRight size={30} />
                </button>
            )}
        </div>
    );
}

