 import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Login/Register";
import ViewRecipe from "../pages/Home/ViewRecipe/ViewRecipe";
import PrivateRoute from "../layouts/PrivateRoute/PrivateRoute";

const router =createBrowserRouter([

    
      {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
             {
                path: 'chef/:id',
                element: <PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/data/${params.id}`)
              } 
        ]
    }
])

export default router;  

/* import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import ServicesLayout from "../layouts/ServicesLayout/ServicesLayout";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";
import ServiceDetails from "./../pages/ServiceDetails/ServiceDetails";
import Register from "./../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "services",
    element: <ServicesLayout></ServicesLayout>,
    children: [
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router; */