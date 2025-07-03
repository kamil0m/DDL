import { useEffect, useState } from 'react';
import useFetch from "./useFetch";

type Entry = {
    id: number;
    Tytul: string;
    Data_publikacji: string;
    Data_wydarzenia?: string;
    Wazne?: boolean;
    type?: string;
    isImportant?: boolean;
    isNew?: boolean;
    publishedDaysAgo?: number;
    isSoon?: boolean;
    [key: string]: unknown;
};

const useNewsEvents = () => {
    const { data: events, loading: eventsLoading, error: eventsError } = useFetch(`events?populate=*&sort[0]=Data_wydarzenia:asc&pagination[limit]=100`);
    const { data: news, loading: newsLoading, error: newsError } = useFetch(`aktualnosci?populate=*sort[0]=Data_publikacji:desc&pagination[limit]=100`);

    const [upcomingEvents, setUpcomingEvents] = useState<Entry[]>([]);
    const [pastEvents, setPastEvents] = useState<Entry[]>([]);
    const [sortedNews, setSortedNews] = useState<Entry[]>([]);

    const loading = newsLoading || eventsLoading;
    const error = newsError || eventsError;

    useEffect(() => {

        // Guard clause - will process only when data exists
        if (
            !events ||
            !news ||
            events === "" ||
            news === "" ||
            (typeof events === 'object' && Object.keys(events).length === 0) ||
            (typeof news === 'object' && Object.keys(news).length === 0) ||
            (Array.isArray(events) && events.length === 0) ||
            (Array.isArray(news) && news.length === 0)
        ) {

            console.log("No data available yet");

            return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const isTodayOrYesterday = (dateStr: string) => {
            const date = new Date(dateStr);
            const diffTime = today.getTime() - date.setHours(0, 0, 0, 0);
            const diffDays = diffTime / (1000 * 60 * 60 * 24);
            return diffDays <= 1;
        };

        const daysAgo = (dateStr: string) => {
            const pubDate = new Date(dateStr);
            pubDate.setHours(0, 0, 0, 0);
            const diff = Math.floor((today.getTime() - pubDate.getTime()) / (1000 * 60 * 60 * 24));
            return diff >= 0 ? diff : 0;
        };

        const isSoon = (dateStr: string, daysThreshold = 7) => {
            const eventDate = new Date(dateStr);
            eventDate.setHours(0, 0, 0, 0);
            const diff = (eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
            return diff >= 0 && diff <= daysThreshold;
        };

        const eventsArray = Array.isArray(events) ? events : [];
        const upcoming = eventsArray
            .filter(e => {
                if (!e.Data_wydarzenia) return false;
                const eventDate = new Date(e.Data_wydarzenia);
                eventDate.setHours(0, 0, 0, 0);
                return eventDate >= today;
            })
            .map(e => ({
                ...e,
                type: "event",
                isNew: isTodayOrYesterday(e.Data_wydarzenia),
                publishedDaysAgo: daysAgo(e.Data_publikacji),
                isSoon: isSoon(e.Data_wydarzenia),
            }))
            .sort((a, b) => new Date(a.Data_wydarzenia!).getTime() - new Date(b.Data_wydarzenia!).getTime());

        const past = eventsArray
            .filter(e => {
                if (!e.Data_wydarzenia) return false;
                const eventDate = new Date(e.Data_wydarzenia);
                eventDate.setHours(0, 0, 0, 0);
                return eventDate < today;
            })
            .map(e => ({
                ...e,
                type: "event",
                isNew: isTodayOrYesterday(e.Data_publikacji),
                publishedDaysAgo: daysAgo(e.Data_publikacji),
            }))
            .sort((a, b) => new Date(b.Data_wydarzenia!).getTime() - new Date(a.Data_wydarzenia!).getTime());

        const newsArray = Array.isArray(news) ? news : [];
        const sortedNewsItems = newsArray
            .filter(n => n.Data_publikacji)
            .map(n => ({
                ...n,
                type: "news",
                isImportant: n.Wazne === true,
                isNew: isTodayOrYesterday(n.Data_publikacji),
                publishedDaysAgo: daysAgo(n.Data_publikacji),
            }))
            .sort((a, b) => new Date(b.Data_publikacji!).getTime() - new Date(a.Data_publikacji!).getTime());

        setUpcomingEvents(upcoming);
        setPastEvents(past);
        setSortedNews(sortedNewsItems);
    }, [events, news]);

    return {
        upcomingEvents,
        pastEvents,
        sortedNews,
        loading,
        error,
        hasData: !!Object.keys(news).length
    };
};

export default useNewsEvents;

