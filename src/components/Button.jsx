import React from "react";

function Button({name = "", ...props}) {
  return (
    <button {...props} className="text-[#777] hover:text-white border-[1.6px] w-full py-2 rounded-xl hover:border-[#cda154] focus:border-[#cda154] duration-500">
      {name}
    </button>
  );
}

export default Button;
