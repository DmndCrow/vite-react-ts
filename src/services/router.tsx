import { Route, Routes } from 'react-router-dom';
import { RouterElement } from 'modules/Router';

import { 
  Settings,
  Items,
  Home,
} from 'features';

export const router = (routes: RouterElement[]): JSX.Element => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export const routes: RouterElement[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/products',
    element: <Items />,
  },
];
