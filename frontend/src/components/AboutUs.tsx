import useFetch from '../hooks/useFetch';
import Card from './card';

export default function AboutUs() {

  const { data, loading, error } = useFetch('http://localhost:1337/api/Abouts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
  <div className="flex flex-col h-auto bg-linear-to-t from-sky-500 to-indigo-500">
    < Card content={data.data[0]} />
    < Card content={data.data[1]} />
  </div>
  
)}