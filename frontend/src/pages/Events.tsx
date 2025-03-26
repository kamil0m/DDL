import useFetch from '../hooks/useFetch';
import CardExpandable from '../components/CardExpandable';

export default function Events() {

    const { data, loading, error } = useFetch('http://localhost:1337/api/Events');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    const today = new Date().toISOString().split("T")[0];
    const futureEvents = data.data.filter(event => event.Date >= today);
    const pastEvents = data.data.filter(event => event.Date < today);

    return (
        <div className="relative container mx-auto max-w-screen-lg pt-40 pb-16 text-white">
            <div className="rounded-xl mb-3 p-8 bg-slate-800/90 text-white-900">
                <h2 className="card__title text-center width-full text-2xl font-bold">Nadchodzace wydarzenia:</h2>
                {futureEvents.map((event) => (
                    < CardExpandable key={event.id} content={event} />
                ))}
            </div>
            <div className="rounded-xl mb-3 p-8 bg-slate-800/90 text-white-900">     
                <h2 className="card__title text-center width-full text-2xl font-bold">Minione wydarzenia:</h2>
                {pastEvents.map((event) => (
                    < CardExpandable key={event.id} content={event} />
                ))}
            </div>
        </div>
    )
}