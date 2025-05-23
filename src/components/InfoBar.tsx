import { GrAnnounce } from "react-icons/gr";

export default function InfoBar() {
  return (
    <div className="flex flex-row items-center w-full bg-accent h-[3em] text-white gap-2 overflow-hidden group">
        <div className="container absolute whitespace-nowrap animate-marquee flex gap-2 group-hover:[animation-play-state:paused] "
            >
            <span>Some very important information</span>
            < GrAnnounce />
            <span>Some very important information</span>
            < GrAnnounce />
            <span>Some very important information</span>
            < GrAnnounce />
            <span>Some very important information</span>
            < GrAnnounce />
            <span>Some very important information</span>
            < GrAnnounce />
            <span>Some very important information</span>
            < GrAnnounce />
            <span>Some very important information</span>
            < GrAnnounce />
        </div>
    </div>
  )
}
