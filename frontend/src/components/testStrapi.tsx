import { useEffect,useRef, useState } from 'react';


export default function TestStrapi() {

  const [wydarzenia, setWydarzenia] = useState([]);
  const isFirstUpdate = useRef(0);

    useEffect(() => {

      fetch(`https://ddl-2imf.onrender.com/api/events`,  // Needs to be replaced with AXIOS
        {
          headers: {
            Authorization: '4b81d36a4b4ca5ec3c41c9510db66e81ae2edae7f6691c61791497f9e5707b812f29f23eb2e28c87a17d2b8bd9e3ce71137803a9b6cd62b7a896e363f7fb5b714bf111cb30aded8a7f84c3894badba9383c070a9b2b24f50128b7c39ee214b6a775df2f594e29a638be8a6a33efb953c6c86df56c0717dbf092ae48628c2840e'
          }
        }
      ).then(resp => {
        return resp.json(); // Returns the answer as a JSON object
      }
      ).then(json => {
        console.log(json.data);
        setWydarzenia(json.data);
        isFirstUpdate.current = 1;
      }
      ).catch(err => 
        console.log(err)
      )
    }, []);

return (
  <>
    <h1>TestStrapi</h1>
    <p className="underline decoration-double">
      Hello world!
    </p>
    <h2>Wydarzenia na grupie Dzien Dobry Lille:</h2>
    {wydarzenia.map((wydarzenie) => {
      return (
        <h2 key={wydarzenie.id}>Nazwa wydarzenia pobrana z API : {wydarzenie.name}</h2>
      )
    })}
  </>
)
}