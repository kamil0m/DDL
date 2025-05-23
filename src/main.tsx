import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './Router.tsx';
import "./styles/main.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < Router />
  </StrictMode>,
);
