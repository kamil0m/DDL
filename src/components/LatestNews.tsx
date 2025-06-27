import { useEffect, useState } from 'react';
import useFetch from "../hooks/useFetch";

type Entry = {
    id: number;
    Tytul: string;
    Data_publikacji: string;
    Wazne?: boolean;
    type?: "news" | "event";
    isImportant?: boolean;
    isNew?: boolean;
    publishedDaysAgo?: number;
    [key: string]: any;
};

const useLatestCombined = () => {
    const news = useFetch('aktualnosci');
    const events = useFetch('events');

    const [latest, setLatest] = useState<Entry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!news.loading && !events.loading) {
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

            const newsItems = (news.data as Entry[]).map(item => ({
                ...item,
                type: "news",
                isImportant: item.Wazne === true,
                isNew: isTodayOrYesterday(item.Data_publikacji),
                publishedDaysAgo: daysAgo(item.Data_publikacji)
            }));

            const eventItems = (events.data as Entry[]).map(item => ({
                ...item,
                type: "event",
                isNew: isTodayOrYesterday(item.Data_publikacji),
                publishedDaysAgo: daysAgo(item.Data_publikacji)
            }));

            const allItems = [...newsItems, ...eventItems];

            const sorted = allItems
                .filter(item => item.Data_publikacji)
                .sort((a, b) => new Date(b.Data_publikacji).getTime() - new Date(a.Data_publikacji).getTime());

            setLatest(sorted.slice(0, 3));
            setLoading(false);
        }
    }, [news.data, events.data, news.loading, events.loading]);

    return {
        latest,
        loading: news.loading || events.loading,
        error: news.error || events.error,
    };
};

export default useLatestCombined;
