import { useEffect,useRef, useState } from 'react';


export default function TestStrapi() {

  const [wydarzenia, setWydarzenia] = useState([]);
  const isFirstUpdate = useRef(0);

    useEffect(() => {

      fetch(`https://wealthy-wealth-e452827a91.strapiapp.com/api/events`,  // Needs to be replaced with AXIOS
        {
          headers: {
            Authorization: '669a03c917bdc3f4c75929aa9ccc15504024248ebf1e496ece1f7487a545976ec4d3623657e66bf61e92bbf6453cfcd5503dd2c1488d2f377d4eff54f43ed2fcf1d46fe2f6ed88e539c7be9fbe8c1fddbdb8ca4e17ab1e0cb910db19d3e79ecc650f6774ce4ceb83cdf5b966d04b7f0ced02e82305e6257ca3d048060fc825f7'
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
    <h2>Wydarzenia na grupie Dzien Dobry Lille:</h2>
    {wydarzenia.map((wydarzenie) => {
      return (
        <h2 key={wydarzenie.id}>Nazwa wydarzenia pobrana z API : {wydarzenie.name}</h2>
      )
    })}
  </>
)
}