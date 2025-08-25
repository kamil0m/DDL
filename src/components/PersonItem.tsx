import RenderRichText from './RenderRichText';

type PersonItemProps = {
  data?: any;
};

export default function PersonItem({ data }: PersonItemProps) {
  
  return (
    <div className="flex flex-col justify-start items-center gap-8 text-accent">
      <img src={data?.Zdjecie?.url || "/src/styles/images/logo.jpg"} alt={data?.Nazwisko || ""} className="size-30 object-cover rounded-full" />
      <div className="flex flex-col items-center ">
        <h2 className="flex text-accent">
          <div className="flex flex-row gap-1">
            <span>{data?.Imie + " "}</span>
            <span>{data?.Nazwisko}</span>
          </div>
        </h2>
        <div className="italic">{data?.Funkcja}</div>
        <div className="w-40">
          <RenderRichText content={data?.Opis} pClasses="text-sm text-black text-center"/>
        </div>
      </div>
    </div>
  )
}