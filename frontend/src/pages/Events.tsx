import useFetch from '../hooks/useFetch';
import CardEvent from '../components/CardEvents';
import homebackground from "../styles/images/homebackground.png";

export default function Events() {

    const { data, loading, error } = useFetch('http://localhost:1337/api/Events');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    const today = new Date().toISOString().split("T")[0];
    const futureEvents = data.data.filter(event => event.Date >= today);
    const pastEvents = data.data.filter(event => event.Date < today);

    return (
        <div className="relative flex flex-col min-h-screen">
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover before:content-[''] before:absolute before:inset-0 before:bg-white/50"
                style={{ backgroundImage: `url(${homebackground})` }}
            ></div>
            <div className="relative container mx-auto max-w-screen-lg pt-40 pb-16 text-white">
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
    )
}