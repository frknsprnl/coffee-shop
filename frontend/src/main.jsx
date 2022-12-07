import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
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
import Address from './pages/User/components/Edit/Address';
import Article from "./pages/Article";
import Edit from "./pages/User/components/Edit/Edit";
import Error from "./pages/Error";
import PrivateRoute from "./routes/PrivateRoutes";
import { RecoilRoot } from "recoil";
import LoggedInPrivateRoute from "./routes/LoggedInPrivateRoutes";

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
    path: '/blog/article/:id',
    element: <Article />
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/",
    element: <LoggedInPrivateRoute />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/user",
        element: <User />,
        children: [
          { path: "profile", element: <Profile /> },
          { path: "orders", element: <Order /> },
          {
            path: "edit",
            element: <Edit />,
            children: [
              { path: "password", element: <Password /> },
              { path: "email", element: <Email /> },
              { path: "address", element: <Address /> },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/error",
    element: <Error />,
  },
  {
    path: "*",
    element: <Navigate to="/error" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
