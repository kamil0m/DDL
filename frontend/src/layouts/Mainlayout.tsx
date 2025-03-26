import {
    Outlet
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import homebackground from "../styles/images/homebackground.png";

{/* <div class="bg-[url(/img/mountains.jpg)] ..."></div> */}

export default function mainlayout() {
  return (
    <div
      className="absolute w-full min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${homebackground})` }}
    >

      <NavBar />
      <Outlet />

    </div>
  )
}
