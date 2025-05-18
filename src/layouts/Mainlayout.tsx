import Header from '../components/Header';
import {
  Outlet
} from 'react-router-dom';
import NavBar from '../components/NavBarOld';

export default function mainlayout() {
  return (
    <div className="flex flex-col min-h-dvh w-full items-center">

      <div className="container">
      <Header/>

      <Outlet/>
      </div>
      {/* <Footer/> */}

    </div>
  )
}
