import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Desktop1 from './pages/Desktop1';
import Desktop4 from './pages/Desktop4';
import Desktop5 from './pages/Desktop5';
import Desktop6 from './pages/Desktop6';
import Desktop7 from './pages/Desktop7';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Desktop1', element: <Desktop1 /> },
{ path: '/Desktop4', element: <Desktop4 /> },
{ path: '/Desktop5', element: <Desktop5 /> },
{ path: '/Desktop6', element: <Desktop6 /> },
{ path: '/Desktop7', element: <Desktop7 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}