import React from 'react'

type PersonItemProps = {
  data?: any; // Add proper typing based on your person data structure
};

export default function PersonItem({ data }: PersonItemProps) {
  console.log("PersonItem data:", data);
  
  return (
    <div className="flex flex-col justify-center items-center gap-2 text-accent">
        <img src={data?.Zdjecie?.url || "/src/styles/images/logo.jpg"} alt={data?.Nazwisko || ""} className="w-30 rounded-full" />
        <h2 className="flex">

            <span>{data?.Imie || "PersonItem"}</span><span className="">{data?.Nazwisko || "PersonItem"}</span>
        </h2>
        <div className="italic">{data?.Funkcja}</div>
      {/* Render your person data here */}
    </div>
  )
}