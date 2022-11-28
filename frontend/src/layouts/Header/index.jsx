import React from "react";
import textLogo from "../../assets/coffee-shop-text-logo.png";
import logo from "../../assets/coffee-shop-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import Helmet from "react-helmet";

function Header() {
  const location = useLocation();
  return (
    <div className="flex px-2 md:px-4 w-full items-center justify-between sticky top-0 z-20 bg-black">
      <Helmet>
        <title>
          {location.pathname === "/"
            ? "The Coffee Shop"
            : `${
                location.pathname.split("/").pop().charAt(0).toLocaleUpperCase() +
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
          className="max-h-24 lg:hidden select-none"
          draggable="false"
        />
      </Link>
      <div className="text-white text-lg font-semibold hidden md:flex flex-1 whitespace-nowrap">
        <Link to="/shop" className="p-5 lg:p-7 nav-item">
          Dükkan
        </Link>
        <Link to="/about" className="p-5 lg:p-7 nav-item">
          Hakkımızda
        </Link>
        <Link to="/blog" className="p-5 lg:p-7 nav-item">
          Blog
        </Link>
        <Link to="/contact" className="p-5 lg:p-7 nav-item">
          İletişim
        </Link>
      </div>
      <div className="flex text-white mr-2 gap-2">
        <Link to="/login" className="p-4 text-xl hover:text-[#cda154]">
          <FontAwesomeIcon icon={faRightToBracket} />
        </Link>
        <Link to="/user" className="p-4 text-xl hover:text-[#cda154]">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/basket" className="p-4 text-xl hover:text-[#cda154]">
          <FontAwesomeIcon icon={faBasketShopping} />
        </Link>
      </div>
    </div>
  );
}

export default Header;