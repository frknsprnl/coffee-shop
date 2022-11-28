import { Navigate, Outlet } from "react-router-dom";
import { useLoginState } from "../Recoil/User/useLoginState";
import { useEffect } from "react";

const LoggedInPrivateRoute = ({ children }) => {
  const { isLoggedIn, setIsLoggedIn } = useLoginState();

  useEffect(() => {
    if (localStorage.getItem("access-token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};

export default LoggedInPrivateRoute;
