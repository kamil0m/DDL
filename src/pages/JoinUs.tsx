import useFetch from '../hooks/useFetch';
import NewCard from '../components/NewCard';
import homebackground from "../styles/images/homebackground.png";

export default function JoinUs() {

  const { data, loading, error } = useFetch('join-us-page');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;


  return (
    <div className="relative flex flex-col min-h-screen">

      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${homebackground})` }}
      />

      <div className="relative container mx-auto max-w-screen-lg pt-40 pb-16 text-white">

        < NewCard content={data.data["JakZostacCzlonkiem"]} />
        < NewCard content={data.data["Regulamin"]} />

      </div>

    </div>
  )
}

