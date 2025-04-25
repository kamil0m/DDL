import { useEffect, useState } from 'react';

const useFetch = (urlExtention: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const url = "https://ddlille-9b0a6ce9f6c7.herokuapp.com/api/" + urlExtention;
                console.log(url);
                const res = await fetch(url);
                const json = await res.json();

                setData(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [urlExtention]);
    return { data, loading, error };
}

export default useFetch;
