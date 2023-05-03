/* eslint-disable no-unused-vars */

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./Pages/Page/Home";
import Login from "./Pages/Page/Login";
import Register from "./Pages/Page/Register";
import HomeContents from "./Pages/Page/HomeContents/HomeContents";
import ChefDetails from "./Pages/Page/HomeContents/ChefDetails/ChefDetails";
import ErrorPage from "./Pages/Page/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
          element: <HomeContents></HomeContents>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/chef-details/:id",
          element: <ChefDetails></ChefDetails>,
          loader: ({params}) => fetch(`https://chef-recipe-hunter-server-tau.vercel.app/chef-data/${params.id}`)
        }
      ]
    },
  ]);

  export default router;