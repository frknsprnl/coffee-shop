import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import Profile from "./components/Profile/Profile";
import UserMenu from "./components/UserMenu/UserMenu";
import Order from "./components/Order/Order";
import Edit from "./components/Edit/Edit";
import Password from "./components/Edit/Password";
import Email from "./components/Edit/Email";
import Address from "./components/Edit/Address";
import { useUserState } from "../../Recoil/User/userState";
import { useLoginState } from "../../Recoil/User/useLoginState";
import { useToastState } from "../../Recoil/Error/useToastState";
import axios from "axios";
import OrderSingle from "./components/Order/OrderSingle";
import { useLoadingState } from "../../Recoil/Loading/useLoadingState";

function User() {
  const location = useLocation();
  const { orderId } = useParams();
  const { user, setUser } = useUserState();
  const { setIsLoggedIn } = useLoginState();
  const { setToastMsg } = useToastState();
  const { setIsLoading } = useLoadingState();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await axios
        .get(`${import.meta.env.VITE_BASE_URL}/user/getuser`, {
          headers: {
            "x-access-token": `${localStorage.getItem("access-token")}`,
          },
        })
        .then((resp) => {
          setUser(resp.data.user);
        })
        .catch((err) => {
          localStorage.removeItem("access-token");
          setIsLoggedIn(false);
          setToastMsg({
            isError: false,
            message: "Çıkış işleminiz gerçekleştirildi.",
          });
        })
        .finally(() => setIsLoading(false));
    })();
  }, [location.pathname === "/user"]);

  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center py-4 px-4">
        <h1 className="text-2xl text-white pb-4">
          {location.pathname === "/user" && "Hesabım"}
          {location.pathname === "/user/profile" && "Profilim"}
          {location.pathname === "/user/orders" && "Siparişlerim"}
          {location.pathname === `/user/orders/${orderId}` && "Siparişim"}
          {location.pathname === "/user/edit" && "Değiştir"}
          {location.pathname === "/user/edit/password" && "Şifre Değiştir"}
          {location.pathname === "/user/edit/email" && "Email Değiştir"}
          {location.pathname === "/user/edit/address" && "Adres Değiştir"}
        </h1>
        <h1 className="text-sm text-white pb-8">
          Hoş geldin <span className="text-[#cda154]">{user.name}</span>!
        </h1>
        <div className="w-full md:w-3/4 lg:w-1/2 flex h-96 border-[1.6px] rounded-xl">
          {location.pathname === "/user" && <UserMenu />}
          {location.pathname === "/user/profile" && <Profile />}
          {location.pathname === "/user/orders" && <Order />}
          {location.pathname === `/user/orders/${orderId}` && <OrderSingle />}
          {location.pathname === "/user/edit" && <Edit />}
          {location.pathname === "/user/edit/password" && <Password />}
          {location.pathname === "/user/edit/email" && <Email />}
          {location.pathname === "/user/edit/address" && <Address />}
        </div>
      </div>
    </MainLayout>
  );
}

export default User;
