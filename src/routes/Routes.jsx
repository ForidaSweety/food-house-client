import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import ServiceLayout from "../layouts/ServiceLayout";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

import Login from "../pages/Login/Login";
import Services from "../pages/Service/Services";
import Rsgister from "../pages/Register/Rsgister";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement:<NotFound></NotFound>,
        children: [
            
            {
                path:<Navigate to="/info/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Rsgister></Rsgister>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]
    },

    {
        path: '/',
        element: <ServiceLayout></ServiceLayout>,
        children: [
            {
                path: '/allData',
                element: <Services></Services>
            },
            {
                path: ':id',
                element: <PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>
            }
        ]
    }
])

export default router;