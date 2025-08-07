import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary.tsx';

export default function mainlayout() {
  return (
    <div className="flex flex-col min-h-dvh w-full items-center">

      < Header />

      <ErrorBoundary>
        <div className="w-full pt-23">
          <Outlet />
        </div>
      </ErrorBoundary>

      < Footer />

    </div>
  )
}
