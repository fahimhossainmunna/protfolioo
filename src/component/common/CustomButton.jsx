import React from "react";

const CustomButton = ({ text = "Contact Us", className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-[12px] px-[25px] bg-white font-fahim text-[#121212] border-2 border-[#141e34]
      transition-all duration-300
      hover:bg-[#141e34] 
      hover:text-white 
      hover:border-cyan-400 
      hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)]
      ${className}`}
    >
      <div className="flex items-center gap-x-2">
        <h3 className="mb-1 text-[16px]">{text}</h3>
      </div>
    </button>
  );
};

export default CustomButton;
