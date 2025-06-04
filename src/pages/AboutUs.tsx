import useFetch from '../hooks/useFetch';

export default function AboutUs() {

  const { data, loading, error } = useFetch('about-us-page');
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="container max-w-3/5 mx-auto px-4">
      <section className="flex flex-col gap-4">
        <h4>Nasze cele</h4>
        <ol className="flex flex-col gap-4 list-decimal">
          {data.Cele[0].children.map((child, index) => (
            <div className="flex flex-row items-center gap-6">
              <div className="w-[50px] h-[50px] bg-[rgba(0,25,179,0.1)] text-accent font-bold flex items-center justify-center rounded">
                {index + 1}
              </div>
              <span className="">{child.children[0].text}</span>
            </div>
          ))}
        </ol>
        {/* {data.Cele.} */}
        {/* <BlocksRenderer content={data.Cele} blocks={{
          list: ({ children }) => (
            <ul className="list-disc pl-5">
              {React.Children.map(children, (child, i) => (
                <li key={i} className="text-red-500 font-semibold">{child}</li>
              ))}
            </ul>
          )
        }} /> */}
      </section>
      <section className="flex"></section>
      
    </div>
  )
}
