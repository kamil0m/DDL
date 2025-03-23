import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./route/Home";
import About from "./route/About";

const App: React.FC = () => {
  return (
    <main className="p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>

  );
};

export default App;
