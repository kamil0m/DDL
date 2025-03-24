import useFetch from '../hooks/useFetch';
import Card from '../components/Card';
import homebackground from "../styles/images/homebackground.png";
import Navbar from '../components/NavBar';

export default function AboutUs() {

  const { data, loading, error } = useFetch('http://localhost:1337/api/Abouts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <>
      <div className="relative z-50">
        <Navbar />
      </div>
      <div className="relative flex flex-col min-h-screen">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover before:content-[''] before:absolute before:inset-0 before:bg-black/50"
          style={{ backgroundImage: `url(${homebackground})` }}
        ></div>
        <div className="relative container mx-auto max-w-screen-lg pt-40 pb-16 text-white">
          < Card content={data.data[1]} />
          < Card content={data.data[1]} />
          < Card content={data.data[1]} />
          < Card content={data.data[1]} />
          < Card content={data.data[1]} />
          <div id="goals">< Card content={data.data[0]} /></div>
          < Card content={data.data[0]} />
          < Card content={data.data[0]} />
          < Card content={data.data[0]} />

        </div>
      </div>
    </>
  )
}

//bg-linear-to-t from-sky-500 to-indigo-500 text-white text-slate-900