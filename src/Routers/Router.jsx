import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Details from "../Pages/Details/Details";
import Booked from "../Pages/Booked/Booked";
import Login from "../Pages/Login/Login";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/details/:id",
          element: <Details/>,
          loader: () => fetch('../events.json')
        },
        {
          path: "/booked",
          element: <Booked/>
        },
        {
          path: "/login",
          element: <Login/>
        }
      ]
    },
  ]);