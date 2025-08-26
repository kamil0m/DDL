import { GrAnnounce } from "react-icons/gr";
import useNewsEvents from "../hooks/useNewsEvents";

export default function InfoBar() {
  const { upcomingEvents, sortedNews, loading, error } = useNewsEvents();

  if (loading || error) return null;
  
  const importantItems = [
    ...upcomingEvents.filter(e => e.Wazne),
    ...sortedNews.filter(n => n.isImportant)
  ];
  
  if (importantItems.length === 0) return null;
  
  const repeatCount = 10;
  const scrollingItems = Array.from({ length: repeatCount }, () => importantItems).flat();

  return (
    <div className="whitespace-nowrap w-full overflow-x-hidden bg-accent group">
      <div className="flex flex-row items-center gap-14 animate-marquee h-[2em] lg:h-[3em] text-sm lg:text-xl text-white group-hover:[animation-play-state:paused] w-full">
        {scrollingItems.map((item, index) => (
          <a href={`/${item.type}/${item.documentId}`} key={index} className="flex items-center gap-2 cursor-pointer">
            <GrAnnounce className="h-6 w-6 text-white flex-shrink-0" />
            <span className="h-[3em] flex items-center">{item.Tytul}</span>
          </a>
        ))}
      </div>
    </div>
  );
}


