
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import News from './pages/News';
import Contact from "./pages/Contact";
import JoinUs from "./pages/JoinUs";
import StylesTester from "./pages/StylesTester";
import Mainlayout from "./layouts/Mainlayout";
import NewsPage from './pages/NewsPage';
import { LanguageProvider } from './contexts/LanguageContext';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="new" element={<News />} />
            <Route path=":type/:id" element={<NewsPage />} />
            <Route path="events" element={<Events />} />
            <Route path=":type/:id" element={<NewsPage />} />
            <Route path="joinus" element={<JoinUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="styles" element={<StylesTester />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
};

