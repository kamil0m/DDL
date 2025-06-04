import useFetch from '../hooks/useFetch';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';


export default function JoinUs() {

    const { data, loading, error } = useFetch('join-us-page');
    console.log(data);


  return (
    <div className="w-3/5">
        <section className="flex flex-col mt-20">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h4>How to join us</h4>
                    { <BlocksRenderer content={data.Content}  />}
                </div>
                <div className="flex flex-col gap-2">
                    <h4>Dlaczego do nas dołączyć?</h4>
                    <p className="">Explain here all avantages your future member will have access to, if they join you. Can be a long description or not, it’s up to you to decide. Just make sure it’s transparent, not too long, not too detailed, with just enough informations for people to choose you.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4>Rules of our association</h4>
                    <p className="">Explain here  rules your future member will have to follow, if they join you. Can be a long description or not, it’s up to you to decide. Just make sure it’s transparent, not too long, not too detailed, with just enough informations for people to choose you.</p>
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
