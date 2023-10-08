import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Details from "../Pages/Details/Details";
import Booked from "../Pages/Booked/Booked";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Bookmarks from "../Pages/Bookmarks/Bookmarks";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";




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
          element: <PrivateRouter><Details/></PrivateRouter>,
          loader: () => fetch('../events.json')
        },
        {
          path: "/booked",
          element: <PrivateRouter><Booked/></PrivateRouter>
        },
        {
          path: "/bookmarks",
          element: <PrivateRouter><Bookmarks/></PrivateRouter>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/blog",
          element: <Blog/>
        }
      ]
    },
  ]);