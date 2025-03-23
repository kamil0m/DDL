import useFetch from '../hooks/useFetch';
import Card from '../components/card';
import CardEvent from '../components/CardEvent';

export default function Events() {

  const { data, loading, error } = useFetch('http://localhost:1337/api/Events');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;


  console.log(data.data[0]);

  return (
  <div className="flex flex-col h-full bg-linear-to-t from-sky-500 to-indigo-500">
    <div className="container flex-col mx-auto">
      < CardEvent content={data.data[0]} />
      < Card content={data.data[0]} />
      < Card content={data.data[1]} />
    </div>
  </div>
  
)}

// To do list :
// - Add filtering by date to seperate past and upcoming Events
// - Add blockrenderer formating
// - Add localization ?