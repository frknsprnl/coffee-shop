import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Basket from "./pages/Basket";
import Register from "./pages/Register";
import User from "./pages/User";
import Profile from "./pages/User/components/Profile/Profile";
import Order from "./pages/User/components/Order/Order";
import Password from "./pages/User/components/Edit/Password";
import Email from "./pages/User/components/Edit/Email";
import Edit from "./pages/User/components/Edit/Edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user",
    element: <User />,
    children: [
      { path: "/user/profile", element: <Profile /> },
      { path: "/user/orders", element: <Order /> },
      {
        path: "/user/edit",
        element: <Edit />,
        children: [
          { path: "/user/edit/password", element: <Password /> },
          { path: "/user/edit/email", element: <Email /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
