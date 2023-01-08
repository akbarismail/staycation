import React from 'react';
import { useRoutes } from 'react-router-dom';
import './assets/scss/style.scss';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';

const App = () => {
  const element = useRoutes([
    { path: '/', element: <LandingPage /> },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return element;
};

export default App;
