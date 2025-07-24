import { useEffect, useState } from 'react';
import useFetch from "./useFetch";
import { useLanguage } from '../contexts/LanguageContext';

type Entry = {
    id: number;
    Tytul: string;
    Data_publikacji: string;
    Wazne?: boolean;
    type?: string;
    isImportant?: boolean;
    isNew?: boolean;
    publishedDaysAgo?: number;
    [key: string]: unknown;
};

const useLatestCombined = () => {
    const { currentLanguage } = useLanguage();
    const { data: events, loading: eventsLoading, error: eventsError } = useFetch(`events?populate=*&sort[0]=Data_publikacji:desc&pagination[limit]=3&locale=${currentLanguage}`);
    const { data: news, loading: newsLoading, error: newsError } = useFetch(`aktualnosci?populate=*sort[0]=Data_publikacji:desc&pagination[limit]=3&locale=${currentLanguage}`);
    const [latest, setLatest] = useState<Entry[]>([]);

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

        const eventItems = (events as Entry[]).map(item => ({
            ...item,
            type: "event",
            isNew: isTodayOrYesterday(item.Data_publikacji),
            publishedDaysAgo: daysAgo(item.Data_publikacji)
        }));
        const newsItems = (news as Entry[]).map(item => ({
            ...item,
            type: "news",
            isImportant: item.Wazne === true,
            isNew: isTodayOrYesterday(item.Data_publikacji),
            publishedDaysAgo: daysAgo(item.Data_publikacji)
        }));


        const allItems = [...newsItems, ...eventItems];

        const sorted = allItems
            .filter(item => item.Data_publikacji)
            .sort((a, b) => new Date(b.Data_publikacji).getTime() - new Date(a.Data_publikacji).getTime());

        setLatest(sorted.slice(0, 3));
        // console.log(latest[0]);
    }, [events, news]);

    return {
        latest,
        loading,
        error,
        hasData: !!Object.keys(news).length
    };



};

export default useLatestCombined;

