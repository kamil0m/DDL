export default function Motto({motto}: {motto: string}) {
  return (
    <div className="relative w-full bg-white">
      <h3 className="flex items-center justify-center text-center py-5 lg:py-8 bg-accent/80 text-white font-black z-10 text-wrap">
        {motto} 
      </h3>
    </div>
  )
}
