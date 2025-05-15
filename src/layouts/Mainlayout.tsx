import {
    Outlet
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import homebackground from "../styles/images/homebackground.png";

export default function mainlayout() {
  return (
    <>
        <NavBar />
        <div
          className="relative flex flex-col min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${homebackground})` }}
        >
          <Outlet />
        </div>
    </>
  )
}
