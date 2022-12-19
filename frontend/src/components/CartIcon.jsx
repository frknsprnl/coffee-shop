import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

function CartIcon({
  bVisible = false,
  ...props
}) {
  return (
    <>
      {bVisible && (
        <div className="relative">
          <span
            className={`inline-flex absolute left-6 top-1 justify-center items-center w-5 h-5 text-[0.6rem] font-bold bg-[#cda154] rounded-full border-2 border-gray-900`}
          >
            {props.quantity}
          </span>
        </div>
      )}
      <FontAwesomeIcon
        icon={faBasketShopping}
        className={`p-4 text-xl text-white hover:text-[#cda154]`}
      />
    </>
  );
}

export default CartIcon;
