import { useEffect,useRef, useState } from 'react';

export default function AboutUs() {

  const [wydarzenia, setWydarzenia] = useState([]);
    const isFirstUpdate = useRef(0);
  
      useEffect(() => {
  
        fetch(`http://localhost:1337/api/abouts`,  // Needs to be replaced with AXIOS
          {
            headers: {
              Authorization: '0e4458cef98026b2fa191e5822ae9e7e9a87903444a8f1ec2d6e5b352a4da6a0e70a7631270e37e2074fd9e18571956c37cea343089471ca2eac3dafee384036d33c9a9b9159dfc81efb06aef103d14a2f802f12c0b725223bad5e9c6e607fc88a5d4b856b3f178d6f153390c717157c13be76efc8c2e0e9b65fe211ef9aaba6'
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
    <div className="h-screen bg-linear-to-t from-sky-500 to-indigo-500">
      <h1 className="about__title">About Us</h1>
      <p className="underline decoration-double">
        Hello world!
      </p>
      <h2>Wydarzenia na grupie Dzien Dobry Lille:</h2>
    </div>
  )
}