import useFetch from '../hooks/useFetch';
import RenderRichText from '../components/RenderRichText.tsx';



export default function JoinUs() {

    const { data, loading, error } = useFetch('join-us-page');
    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

  return (
    <div className="w-3/5">
        <section className="flex flex-col mt-20">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h4>Jak zostać członkiem?</h4>
                    { <RenderRichText content={data.Jak_zostac_czlonkiem} pClasses="text-red" />}
                </div>
                <div className="flex flex-col gap-2">
                    <h4>Dlaczego do nas dołączyć?</h4>
                    { <RenderRichText content={data.Dlaczego_do_nas_dolaczyc}  />}
                </div>
                <div className="flex flex-col gap-2">
                    <h4>Regulamin</h4>
                    <div className="h-[200px] overflow-y-auto border-darkgrey border-1 px-4">
                        { <RenderRichText content={data.Regulamin}  />}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4>HelloAsso</h4>
                    <p className="">Explain here what HelloAsso is here, and also explain how your members’ and future members’ donations will be used. Can be a long description or not, it’s up to you to decide. Just make sure it’s transparent, not too long, not too detailed, with just enough informations for people to choose you.</p>
                    <a href="https://www.helloasso.com/associations/dzien-dobry-lille/adhesions/adhesion" target="_blank" className="button button-accent w-[250px] py-3 mt-10 self-center animate-bounce text-3xl">☞ HelloAsso</a>
                </div>
            </div>
        </section>
    </div>
  )
}
