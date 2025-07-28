import { GrAnnounce } from "react-icons/gr";
import useNewsEvents from "../hooks/useNewsEvents";

export default function InfoBar() {
  const { upcomingEvents, sortedNews, loading, error } = useNewsEvents();

  if (loading || error) return null;

  const importantTitles = [
    ...upcomingEvents.filter(e => e.Wazne).map(e => e.Tytul),
    ...sortedNews.filter(n => n.isImportant).map(n => n.Tytul)
  ];

  if (importantTitles.length === 0) return null;

  const scrollingTitles = [...importantTitles, ...importantTitles];

  return (
    <div className="whitespace-nowrap w-full overflow-x-hidden bg-accent group">
        <div className="flex flex-row items-center gap-4 animate-marquee h-[3em] text-xl text-white group-hover:[animation-play-state:paused] w-full">

           {scrollingTitles.map((title, index) => (
          <div key={index} className="flex items-center gap-2">
            <GrAnnounce className="h-6 w-6 text-white flex-shrink-0" />
            <span className="h-[3em] flex items-center">{title}</span>
             <GrAnnounce className="h-6 w-6 text-white flex-shrink-0" />
            <span className="h-[3em] flex items-center">{title}</span>
             <GrAnnounce className="h-6 w-6 text-white flex-shrink-0" />
            <span className="h-[3em] flex items-center">{title}</span>
          </div>
        ))}
        
        </div>
    </div>
  )
}
