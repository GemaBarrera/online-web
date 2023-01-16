import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';

import { Route, Routes } from 'react-router-dom';

const availableRoutes = [
  {
    path: "/cursos",
    component: <CoursesPage />
  },
  {
    path: "/tutora",
    component: <AboutMePage />
  },
  {
    path: "/contacto",
    component: <ContactPage />
  },
];

const NoMatch = () => {
  return <p>ERROR 404 - Página no encontrada</p>
};

const routes = () => {
  return (
    <Routes>
      {
        availableRoutes.map(el => <Route path={el.path} element={el.component} />)
      }
      <Route path="*" element={<NoMatch />} />
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  )
};
 
export default routes;