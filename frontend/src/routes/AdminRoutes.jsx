import { Navigate, Outlet } from "react-router-dom";
import { useUserState } from "../Recoil/User/userState";

const AdminRoute = ({ children }) => {
  const { user, setUser } = useUserState();

  return !localStorage.getItem("isAdmin") && user.role !== "admin" ? (
    <Navigate to="/" />
  ) : (
    <Outlet />
  );
};

export default AdminRoute;
