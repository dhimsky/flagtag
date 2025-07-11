import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AboutLight from "../Pages/AboutLight";
import ServicePage from "../Pages/ServicePage";
import ContactPage from "../Pages/ContactPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/about",
            element:<AboutLight></AboutLight> ,
        }, 
        {
          path: "/service",
          element:<ServicePage></ServicePage> ,
        },                                                                      
        {
          path: "/contact",
          element:<ContactPage></ContactPage> ,
        },
      ],
    },                 
  ]);