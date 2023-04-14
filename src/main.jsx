import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home";
import Statistics from "./component/Statistics";
import Details from "./component/Details";
import Blog from "./component/Blog"
import First from "./component/First";
import Job from "./component/Job";
import Error from "./component/Error";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <First></First>,
        loader: () => fetch('Category.json'),
        
        
      },
     
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/Job",
        element: <Job></Job>,
      },
     
      {
        path: "/Details",
        element: <Details></Details>,
        
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
