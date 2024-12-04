import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login, Inventory, Products, InOut, Profile } from './pages'
import MainLayout from './layouts/MainLayout'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />,
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Inventory />,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/in-out',
                element: <InOut />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
