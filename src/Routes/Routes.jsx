import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root.jsx';
import Home from '../pages/Home/Home.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.jsx';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner.jsx';

const appsPromise = fetch('./appsData.json').then(res => res.json());

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Suspense fallback={<LoadingSpinner />}><ErrorPage></ErrorPage></Suspense>,
    children: [
        {
            index: true,
            path: '/',
            element: <Suspense fallback={<LoadingSpinner />}>
                <Home appsPromise={appsPromise}></Home>
            </Suspense>
            // loader:()=>fetch('appsData.json'),
            // Component: Home
        },
    ]
  },
]);

