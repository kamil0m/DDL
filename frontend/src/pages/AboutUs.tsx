import useFetch from '../hooks/useFetch';
import Card from '../components/Card';

export default function AboutUs() {

  const { data, loading, error } = useFetch('http://localhost:1337/api/Abouts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="relative container mx-auto max-w-screen-lg pt-40 pb-16 text-white">
        < Card content={data.data[1]} />
      <div id="goals">
          < Card content={data.data[0]} />
        </div>
      </div>
    </div>
  )
}

//bg-linear-to-t from-sky-500 to-indigo-500 text-white text-slate-900