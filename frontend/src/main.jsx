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
import Address from "./pages/User/components/Edit/Address";
import Article from "./pages/Article";
import UserMenu from "./pages/User/components/UserMenu/UserMenu";
import Edit from "./pages/User/components/Edit/Edit";
import Error from "./pages/Error";
import PrivateRoute from "./routes/PrivateRoutes";
import { RecoilRoot } from "recoil";
import LoggedInPrivateRoute from "./routes/LoggedInPrivateRoutes";
import AdminRoute from "./routes/AdminRoutes";
import AdminPanel from "./pages/AdminPanel";
import OrderSingle from "./pages/User/components/Order/OrderSingle";
import AdminUsers from "./pages/AdminPanel/pages/AdminUsers";
import AdminBlog from "./pages/AdminPanel/pages/AdminBlog";
import AdminShop from "./pages/AdminPanel/pages/AdminShop";

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
    path: "/blog/article/:id",
    element: <Article />,
  },
  {
    path: "/contact",
    element: <Contact />,
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
        path: "user",
        element: <User />,
        children: [
          { path: "", element: <UserMenu /> },
          { path: "profile", element: <Profile /> },
          { path: "orders", element: <Order /> },
          { path: "orders/:orderId", element: <OrderSingle /> },
          { path: "edit", element: <Edit /> },
          { path: "edit/password", element: <Password /> },
          { path: "edit/email", element: <Email /> },
          { path: "edit/address", element: <Address /> },
        ],
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminRoute />,
    children: [
      {
        path: "admin",
        element: <AdminPanel />,
      },
      { path: "admin/users", element: <AdminUsers /> },
      { path: "admin/shop", element: <AdminShop /> },
      { path: "admin/blog", element: <AdminBlog /> },
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
