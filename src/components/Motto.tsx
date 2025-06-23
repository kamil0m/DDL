export default function Motto({motto}: {motto: string}) {
  return (
    <h3 className="text-center py-10 bg-accent/80 w-full text-white font-black z-1">
        {motto} 
    </h3>
  )
}
