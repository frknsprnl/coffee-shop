import React from "react";
import CartIcon from "./CartIcon";

function ShopItem({ button = true, isInCart = false, ...props }) {
  return (
    <div
      className={`${props.className} border-[1.6px] border-white rounded-xl overflow-hidden flex flex-col items-center relative`}
    >
      {isInCart && (
        <div className="absolute top-0 right-0 pointer-events-none">
          <CartIcon quantity={props.quantity} bVisible={true} />
        </div>
      )}
      <img
        src={props.img}
        alt=""
        className={`h-24 w-24 md:h-32 md:w-32 mt-6`}
      />
      <div className="flex flex-col items-center justify-evenly h-full">
        <span className="text-xs md:text-lg text-white font-semibold">
          {props.name.split("(")[0]}
          <span className="text-[#cda154]">
            {props.name.indexOf("(") > -1
              ? props.name.substr(props.name.indexOf("("))
              : ""}
          </span>
        </span>
        <span className="text-xs md:text-base text-white font-semibold">
          {props.price} TL
        </span>
      </div>
      {button === true && (
        <div className="w-full">
          <button
            className="py-4 text-white text-xs md:text-base w-full block border-t hover:border-t-[#cda154] border-white hover:bg-[#cda154] hover:text-black font-medium duration-500"
            onClick={props.onClick}
          >
            Sepete ekle
          </button>
        </div>
      )}
    </div>
  );
}

export default ShopItem;
