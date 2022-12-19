import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BasketItem({ decrement, increment, remove, ...props }) {
  return (
    <div className="flex justify-between items-center p-4 md:p-5">
      <img src={`http://localhost:3000/product/${props.image}`} alt="" className="w-12 md:w-16" />
      <div className="flex flex-1 text-white px-2 md:px-2 lg:px-10 justify-between items-center">
        <span className="text-sm font-medium">{props.name}</span>
        <div className="whitespace-nowrap rounded-lg">
          <button className="px-1.5 md:px-2 border-[1.6px] rounded-tl-lg rounded-bl-lg hover:border-[#cda154] hover:text-[#cda154] duration-500" onClick={decrement}>
            -
          </button>
          <input
            type="text"
            className="w-5 md:w-8 bg-transparent text-center outline-none border-t-[1px] border-b-[1px]"
            {...props}
            pattern="[0-9]*"
          />
          <button className="px-1.5 md:px-2 border-[1.6px] rounded-tr-lg rounded-br-lg hover:border-[#cda154] hover:text-[#cda154] duration-500" onClick={increment}>
            +
          </button>
        </div>
      </div>
      <button onClick={remove}>
        <FontAwesomeIcon icon={faTrash} className="px-2 hover:text-[#cda154]" />
      </button>
    </div>
  );
}

export default BasketItem;
