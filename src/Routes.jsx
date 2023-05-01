/* eslint-disable no-unused-vars */

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./Pages/Page/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        
      ]
    },
  ]);

  export default router;