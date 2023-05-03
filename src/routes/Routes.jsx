import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import ServiceLayout from "../layouts/ServiceLayout";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Service from "../pages/Service/Service";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {

            }
        ]
    },

    {
        path:'services',
        element:<ServiceLayout></ServiceLayout>,
        children:[
            {
                path:'/service',
                element:<Service></Service>
            },
            {
                path:':id',
                element:<ServiceDetails></ServiceDetails>
            }
        ]
    }
])

export default router;