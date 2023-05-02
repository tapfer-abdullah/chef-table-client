/* eslint-disable no-unused-vars */

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./Pages/Page/Home";
import Login from "./Pages/Page/Login";
import Register from "./Pages/Page/Register";
import HomeContents from "./Pages/Page/HomeContents/HomeContents";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
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
        }
      ]
    },
  ]);

  export default router;