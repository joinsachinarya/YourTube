import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Body from "../src/components/Body";
import Profile from "../src/components/Profile";
import MyChannel from "./components/MyChannel";
// import appRoutes from "../appRoutes";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "profile",
        element: <Profile />,
        // children: [
        //   {
        //     path: "my-channel",
        //     element: <MyChannel />
        //   }
        // ]
      },
      {
        path: "my-channel",
        element: <MyChannel />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRoutes} />
  </React.StrictMode>
);
