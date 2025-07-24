import React from 'react'

type PersonItemProps = {
  data?: any; // Add proper typing based on your person data structure
};

export default function PersonItem({ data }: PersonItemProps) {
  console.log("PersonItem data:", data);
  
  return (
    <div>
      <h3>{data?.Nazwisko || "PersonItem"}</h3>
      {/* Render your person data here */}
    </div>
  )
}