import React from "react";
import textLogo from "../../assets/coffee-shop-text-logo.png";
import logo from "../../assets/coffee-shop-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import CartIcon from "../../components/CartIcon";
import { Link, useLocation } from "react-router-dom";
import Helmet from "react-helmet";
import { useLoginState } from "../../Recoil/User/useLoginState";
import { useNavigate } from "react-router-dom";
import { useToastState } from "../../Recoil/Error/useToastState";
import { useCartState } from "../../Recoil/Cart/useCartState";
import Navigation from "../../components/Navigation";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useLoginState();
  const { setToastMsg } = useToastState();
  const { cartProducts, setCartProducts } = useCartState();

  const Logout = () => {
    if (isLoggedIn === true) {
      localStorage.removeItem("access-token");
      setIsLoggedIn(false);
      navigate("/");
      setToastMsg({ isError: false, message: "Başarıyla çıkış yaptınız." });
    }
  };

  return (
    <div className="flex px-2 md:px-4 py-3 md:py-0 w-full items-center justify-between sticky top-0 z-20 bg-black">
      <Helmet>
        <title>
          {location.pathname === "/"
            ? "The Coffee Shop"
            : `${
                location.pathname
                  .split("/")
                  .pop()
                  .charAt(0)
                  .toLocaleUpperCase() +
                location.pathname.split("/").pop().slice(1)
              } | The Coffee Shop`}
        </title>
      </Helmet>
      <Link to="/">
        <img
          src={textLogo}
          alt=""
          className="hidden lg:block max-h-24 select-none"
          draggable="false"
        />
      </Link>
      <Link to="/">
        <img
          src={logo}
          alt=""
          className="block md:hidden max-h-16 select-none"
          draggable="false"
        />
      </Link>

      <Navigation />
      <div className="flex mr-2 gap-2">
        {!isLoggedIn && (
          <Link
            to="/login"
            className="p-4 text-xl  text-white  hover:text-[#cda154]"
          >
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>
        )}
        {isLoggedIn && (
          <Link
            to="/user"
            className="p-4 text-xl  text-white  hover:text-[#cda154]"
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/basket" className="flex my-auto">
            <CartIcon
              bVisible={cartProducts.length > 0 ? true : false}
              bColor={"#cda154"}
              iconColor={"white"}
              quantity={cartProducts.reduce(
                (sum, value) => sum + value.quantity,
                0
              )}
            />
          </Link>
        )}
        {isLoggedIn && (
          <button
            onClick={Logout}
            className="p-4  text-white  text-xl hover:text-[#cda154]"
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
