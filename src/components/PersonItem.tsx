import React from 'react'
import RenderRichText from './RenderRichText';

type PersonItemProps = {
  data?: any; // Add proper typing based on your person data structure
};

export default function PersonItem({ data }: PersonItemProps) {
  console.log("PersonItem data:", data);
  
  return (
    <div className="flex flex-col justify-start items-center gap-8 text-accent">
      <img src={data?.Zdjecie?.url || "/src/styles/images/logo.jpg"} alt={data?.Nazwisko || ""} className="w-30 rounded-full" />
      <div className="flex flex-col items-center ">
        <h2 className="flex">
            <span>{data?.Imie} {data?.Nazwisko}</span>
        </h2>
        <div className="italic">{data?.Funkcja}</div>
        <div className="w-40">
          <RenderRichText content={data?.Opis} pClasses="text-sm text-center"/>
        </div>
      </div>
    </div>
  )
}