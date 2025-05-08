import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App from './App.tsx';
import Construction from './pages/Construction.tsx';
import "./styles/main.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Construction />
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>,
);
