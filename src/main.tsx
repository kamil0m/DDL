import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './Router.tsx';
import "./styles/main.css";
import "./translations/i18n.ts";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < Router />
  </StrictMode>,
);
