import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (urlExtention: string) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        const url = "https://ddlille-9b0a6ce9f6c7.herokuapp.com/api/" + urlExtention;
        axios.get(url)
            .then(res => {setData(res.data.data)})
            .catch(err => {setError(err)})
            .finally(() => {setLoading(false)});
    }, [urlExtention]);
        
    return { data, loading, error };
}

export default useFetch;
