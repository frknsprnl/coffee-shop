import React from "react";

function ShopItem({button = true, ...props }) {
  return (
    <div
      className={`${props.className} border-[1.6px] border-white rounded-xl overflow-hidden flex flex-col items-center`}
    >
      <img src={props.img} alt="" className={`h-24 w-24 md:h-32 md:w-32 mt-6`} />
      <div className="flex flex-col items-center justify-evenly h-full">
        <span className="text-sm md:text-lg text-white font-semibold">{props.name}</span>
        <span className="text-xs md:text-base text-white font-medium">
          {props.price} TL
        </span>
      </div>
      {button === true && (
        <div className="w-full">
          <button className="py-4 text-white w-full block border-t border-white hover:bg-[#2b2627] font-medium duration-500">
            Sepete ekle
          </button>
        </div>
      )}
    </div>
  );
}

export default ShopItem;
