import React from 'react';
import MainPage from 'pages/MainPage.tsx';
import AboutPage from 'pages/AboutPage.tsx';

interface Route {
  path: string;
  element: React.ReactElement;
}

const routeData: Route[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
];

export default routeData;
