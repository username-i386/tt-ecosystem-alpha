import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './routes/home-page';
import { Provider } from 'react-redux';
import { store } from './store/store';
import CardPage from './routes/card-page';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/:id',
            element: <CardPage />,
        },
    ],
    { basename: import.meta.env.BASE_URL },
);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
);
