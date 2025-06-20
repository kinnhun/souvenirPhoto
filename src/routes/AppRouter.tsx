import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { userRoutes } from './userRoutes.tsx'

const router = createBrowserRouter(userRoutes, {
    basename: "/souvenirPhoto"
});

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
