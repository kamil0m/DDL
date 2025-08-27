// import { cloneElement } from 'react';
// import { useState } from "react";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import { useTranslation } from "react-i18next";

// type ItemProps = {
//     data: object;
// };

// type CarouselProps = {
//     dataArray: object[];
//     item: React.ReactElement<ItemProps>;
//     t: (key: string) => string;
//     maxVisible: number;
// };

// export default function Carousel({ dataArray, item, maxVisible }: CarouselProps) {
//     const [startIndex, setStartIndex] = useState(0);
//     const { t } = useTranslation();

//     const step = 4;

//     const canGoLeft = startIndex > 0;
//     const canGoRight = startIndex + maxVisible < dataArray.length;

//     const handleLeft = () => {
//         setStartIndex(prev => Math.max(0, prev - step));
//     };

//     const handleRight = () => {
//         setStartIndex(prev => {
//             const nextIndex = prev + step;
//                       return nextIndex + maxVisible > dataArray.length
//                 ? dataArray.length - maxVisible
//                 : nextIndex;
//         });
//     };

//     const visibleItems = dataArray.slice(startIndex, startIndex + maxVisible);

//     return (
//         <div className="relative w-full overflow-visible flex items-center">
//             {dataArray.length > maxVisible && (
//                 <button
//                     onClick={handleLeft}
//                     disabled={!canGoLeft}
//                     className={`absolute -left-16 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow ${!canGoLeft ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100"} z-10`}
//                     aria-label={t("nav.carousel.prev")}
//                 >
//                     <HiChevronLeft size={30} />
//                 </button>
//             )}

//             <div className="flex flex-row justify-between flex-grow">
//                 {visibleItems.map((dataItem, index) => (
//                     <div key={`${startIndex}-${index}`} className="flex justify-center">
//                         {cloneElement(item, { data: dataItem })}
//                     </div>
//                 ))}
//             </div>

//             {dataArray.length > maxVisible && (
//                 <button
//                     onClick={handleRight}
//                     disabled={!canGoRight}
//                     className={`absolute -right-16 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow ${!canGoRight ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100"} z-10`}
//                     aria-label={t("nav.carousel.next")}
//                 >
//                     <HiChevronRight size={30} />
//                 </button>
//             )}
//         </div>
//     );
// }

import { cloneElement, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";

type ItemProps = {
  data: object;
};

type CarouselProps = {
  dataArray: object[];
  item: React.ReactElement<ItemProps>;
  t: (key: string) => string;
  maxVisible: number;
};

export default function Carousel({
  dataArray,
  item,
  maxVisible,
}: CarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = isMobile ? 1 : maxVisible;
  const step = isMobile ? 1 : visibleCount;

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + visibleCount < dataArray.length;

  const handleLeft = () => {
    setStartIndex((prev) => Math.max(0, prev - step));
  };

  const handleRight = () => {
    setStartIndex((prev) => {
      const nextIndex = prev + step;
      return nextIndex + visibleCount > dataArray.length
        ? dataArray.length - visibleCount
        : nextIndex;
    });
  };

  const visibleItems = dataArray.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="relative w-full overflow-visible flex items-center">
      {dataArray.length > visibleCount && (
        <button
          onClick={handleLeft}
          disabled={!canGoLeft}
          className={`absolute ${
            isMobile ? "left-2" : "-left-16"
          } top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow ${
            !canGoLeft ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100"
          } z-10`}
          aria-label={t("nav.carousel.prev")}
        >
          <HiChevronLeft size={30} />
        </button>
      )}

      <div
        className={`flex flex-row flex-grow ${
          isMobile ? "justify-center" : "justify-between"
        }`}
      >
        {visibleItems.map((dataItem, index) => (
          <div key={`${startIndex}-${index}`} className="flex justify-center">
            {cloneElement(item, { data: dataItem })}
          </div>
        ))}
      </div>

      {dataArray.length > visibleCount && (
        <button
          onClick={handleRight}
          disabled={!canGoRight}
          className={`absolute ${
            isMobile ? "right-2" : "-right-16"
          } top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow ${
            !canGoRight ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100"
          } z-10`}
          aria-label={t("nav.carousel.next")}
        >
          <HiChevronRight size={30} />
        </button>
      )}
    </div>
  );
}
