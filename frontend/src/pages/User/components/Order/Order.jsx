import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import image from '../../../../assets/1kg.png'

function Order() {
  return (
    <div className="h-full w-full flex flex-col items-center px-4 py-16 text-white relative">
      <Link to="/user" className="absolute top-4 left-6">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="text-3xl hover:text-[#cda154]"
        />
      </Link>
      <div className="flex flex-col gap-3 w-full px-2 lg:px-4 overflow-auto">
        <a href="" className="flex justify-between items-center px-4 py-3 rounded-xl border-[1.6px] hover:border-[#cda154]">
          <img src={image} alt="" className="w-10 md:w-12" />
          <div className="flex flex-1 text-white justify-center items-center">
            <span className="text-sm font-medium">04.10.2022</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium">Tutar</span>
            <span className="text-xs">199.99 TL</span>
          </div>
        </a>
        <a href="" className="flex justify-between items-center px-4 py-3 rounded-xl border-[1.6px] hover:border-[#cda154]">
          <img src={image} alt="" className="w-10 md:w-12" />
          <div className="flex flex-1 text-white justify-center items-center">
            <span className="text-sm font-medium">02.09.2022</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium">Tutar</span>
            <span className="text-xs">199.99 TL</span>
          </div>
        </a>
        <a href="" className="flex justify-between items-center px-4 py-3 rounded-xl border-[1.6px] hover:border-[#cda154]">
          <img src={image} alt="" className="w-10 md:w-12" />
          <div className="flex flex-1 text-white justify-center items-center">
            <span className="text-sm font-medium">02.09.2022</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium">Tutar</span>
            <span className="text-xs">199.99 TL</span>
          </div>
        </a>
        <a href="" className="flex justify-between items-center px-4 py-3 rounded-xl border-[1.6px] hover:border-[#cda154]">
          <img src={image} alt="" className="w-10 md:w-12" />
          <div className="flex flex-1 text-white justify-center items-center">
            <span className="text-sm font-medium">02.09.2022</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium">Tutar</span>
            <span className="text-xs">199.99 TL</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Order;
