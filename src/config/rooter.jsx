import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/Login';
import SuccessPage from '../pages/Success';
import RootLayout from '../pages/Root';

const router = createBrowserRouter(
    [
        {
            path: '/', element: <RootLayout />, children: [
                { index: true, element: <LoginPage /> },
                { path: 'success', element: <SuccessPage /> },

            ]
        },


    ],
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    }
);

export default router