import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Outlet
} from 'react-router-dom';

export default function mainlayout() {
  return (
    <div className="flex flex-col min-h-dvh w-full items-center">

      < Header />
      < Outlet />
      < Footer />

    </div>
  )
}
