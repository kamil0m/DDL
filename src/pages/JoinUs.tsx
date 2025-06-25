import useFetch from '../hooks/useFetch';
import RenderRichText from '../components/RenderRichText.tsx';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

export default function JoinUs() {

    const { t } = useTranslation();
    const { currentLanguage } = useLanguage(); // Use the language context
    
    const { data, loading, error } = useFetch(`join-us-page?locale=${currentLanguage}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const joinData = data as any;
    // console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;
    if (!joinData) return <p>No data available</p>;


    return (
        <div className="w-3/5">
            <section className="flex flex-col mt-20">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h4>{t("joinus.howToBecomeAMemeber")}</h4>
                        {<RenderRichText content={joinData.Jak_zostac_czlonkiem} />}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4>{t("joinus.whyJoinUs")}</h4>
                        {<RenderRichText content={joinData.Dlaczego_do_nas_dolaczyc} />}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4>{t("joinus.statute")}</h4>
                        <div className="h-[200px] overflow-y-auto border-darkgrey border-1 px-4">
                            {<RenderRichText content={joinData.Regulamin} />}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4>HelloAsso</h4>
                        {<RenderRichText content={joinData.Hello_Asso} />}
                        <a href="https://www.helloasso.com/associations/dzien-dobry-lille/adhesions/adhesion" target="_blank" className="button button-accent w-[250px] py-3 mt-10 self-center animate-bounce text-3xl">☞ HelloAsso</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
