import logo from '../styles/images/logo.jpg'

export default function Construction() {
  return (
    <div className="flex flex-col justify-center items-center h-dvh w-full">
        <img src={logo} alt="Logo" className="w-[350px] h-auto mb-10 animate-wiggle" />
        <div>To tutaj niebawem będzie nasza strona internetowa</div>
        <div className="h-[2px] w-[200px] bg-blue-500 my-5"></div>
        <div className="">C'est ici que notre site web sera bientôt disponible</div>
    </div>
  )
}
