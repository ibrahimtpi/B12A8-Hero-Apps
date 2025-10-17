import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root.jsx';
import Home from '../pages/Home/Home.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Suspense fallback={<span>Loading...</span>}><ErrorPage></ErrorPage></Suspense>,
    children: [
        {
            index: true,
            path: '/',
            element: <Suspense fallback={<span>Loading...</span>}>
                <Home></Home>
            </Suspense>
            // loader:()=>fetch('appsData.json'),
            // Component: Home
        },
    ]
  },
]);

