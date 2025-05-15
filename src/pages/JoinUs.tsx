import useFetch from '../hooks/useFetch';
import NewCard from '../components/NewCard';

export default function JoinUs() {

  const { data, loading, error } = useFetch('join-us-page');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;


  return (
      <div className="relative flex flex-col min-h-screen">

        <div className="relative container mx-auto max-w-screen-lg pt-40 pb-16 text-white">

          < NewCard content={data.data["JakZostacCzlonkiem"]} />
            <div className="flex justify-center mb-8">
              <a href="https://www.helloasso.com/associations/dzien-dobry-lille/adhesions/adhesion" className="button button-accent">Wesprzyj nas</a>
            </div>
          < NewCard content={data.data["Regulamin"]} />

        </div>

      </div>
  )
}

