import { useEffect, useState } from 'react';
import useFetch from "../hooks/useFetch";

type Entry = {
    id: number;
    Tytul: string;
    Data_publikacji: string;
    [key: string]: any;
};

const useLatestCombined = () => {
    const aktualnosci = useFetch('aktualnosci');
    const wydarzenia = useFetch('events');

    const [latest, setLatest] = useState<Entry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!aktualnosci.loading && !wydarzenia.loading) {
            const allItems = [...(aktualnosci.data as Entry[]), ...(wydarzenia.data as Entry[])];

            const sorted = allItems
                .filter(item => item.Data_publikacji)
                .sort((a, b) => new Date(b.Data_publikacji).getTime() - new Date(a.Data_publikacji).getTime());

            setLatest(sorted.slice(0, 3));
            setLoading(false);
        }
    }, [aktualnosci.data, wydarzenia.data, aktualnosci.loading, wydarzenia.loading]);

    return {
        latest,
        loading: aktualnosci.loading || wydarzenia.loading,
        error: aktualnosci.error || wydarzenia.error,
    };
};

export default useLatestCombined;
