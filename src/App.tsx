import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Mainlayout from "./layouts/Mainlayout";

const App: React.FC = () => {
  return (

    <main className="p-6">
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
