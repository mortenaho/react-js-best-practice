
import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./views/home/home";
import ErrorPage from "./views/errors/error";
import Login from "./views/login/login";

export const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
     
    },
    {
      path: "login",
      element: <Login />,
    }
  ]);