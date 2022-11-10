import React from "react";
import textLogo from "../../assets/coffee-shop-text-logo.png";
import logo from "../../assets/coffee-shop-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBasketShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="flex px-2 md:px-4 w-full items-center justify-between sticky top-0 z-20 bg-transparent">
      <img src={textLogo} alt="" className="hidden lg:block max-h-24 select-none" draggable="false"/>
      <img src={logo} alt="" className="max-h-24 lg:hidden select-none" draggable="false"/>
      <div className="text-white text-lg font-semibold hidden md:flex flex-1 whitespace-nowrap">
        <a href="" className="p-5 lg:p-7 nav-item">Dükkan</a>
        <a href="" className="p-5 lg:p-7 nav-item">Hakkımızda</a>
        <a href="" className="p-5 lg:p-7 nav-item">Blog</a>
        <a href="" className="p-5 lg:p-7 nav-item">İletişim</a>
      </div>
      <div className="flex text-white mr-2 gap-2">
        <a href="" className="p-4 text-xl hover:text-[#cda154]">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="" className="p-4 text-xl hover:text-[#cda154]">
          <FontAwesomeIcon icon={faBasketShopping} />
        </a>
      </div>
    </div>
  );
}

export default Header;
