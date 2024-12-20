import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../pages/Home/Home/Home"
import Menu from "../pages/Menu/Menu"
import Dashboard from "../pages/Dashboard/Dashboard"
import ContactUs from "../pages/ContactUs/ContactUs"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            }
        ]
    }
])