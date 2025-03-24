import useFetch from '../hooks/useFetch';
import CardEvent from '../components/CardEvents';

export default function Events() {

    const { data, loading, error } = useFetch('http://localhost:1337/api/Events');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    const today = new Date().toISOString().split("T")[0];

    const futureEvents = data.data.filter(event => event.Date >= today);

    const pastEvents = data.data.filter(event => event.Date < today);

    return (
    <div className="flex flex-col h-full bg-linear-to-t from-sky-500 to-indigo-500">
        <div className="container flex-col mx-auto">
            <h2 className="card__title text-center width-full text-slate-900 text-2xl font-bold">Nadchodzace wydarzenia:</h2>
            {futureEvents.map((event) => (
                < CardEvent key={event.id} content={event} />
            ))}
            <h2 className="card__title text-center width-full text-slate-900 text-2xl font-bold">Minione wydarzenia:</h2>
            {pastEvents.map((event) => (
                < CardEvent key={event.id} content={event} />
            ))}
        </div>
    </div>
)}