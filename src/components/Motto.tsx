export default function Motto({motto}: {motto: string}) {
  return (
    <div className="h-30 w-full relative bg-white">
      <h3 className="flex items-center justify-center text-center h-full bg-accent/80 w-full text-white font-black z-10">
        {motto} 
      </h3>
    </div>
  )
}
