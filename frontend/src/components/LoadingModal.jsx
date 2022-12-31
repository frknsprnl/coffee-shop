import React from "react";
import coffeeCup from "../assets/coffee-cup.jpg";

function LoadingModal() {
  return (
    <div className="h-full w-full">
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 select-none">
        <div
          className="w-64 md:w-80 shadow-lg bg-black py-10 px-16 md:px-24 rounded-xl 
        border-[1.6px]"
        >
          <img
            src={coffeeCup}
            alt=""
            className="h-24 w-24 md:h-32 md:w-32 animate-pulse mx-auto"
            draggable="false"
          />
          <span className="text-[#cda154] whitespace-nowrap py-2">Demleniyoruz...</span>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-30 bg-black"></div>
    </div>
  );
}

export default LoadingModal;
