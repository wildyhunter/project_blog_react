import { Children, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import Home from './routes/Home.jsx';
import NewPost from './routes/NewPost.jsx';

const router = createBrowserRouter([
    {
        Element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/new',
                element: <NewPost />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
