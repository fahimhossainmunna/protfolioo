import React from "react";

const CustomButton = ({ text = "Contact Us", icon: Icon, className = "", onClick, href }) => {
  const content = (
    <div className="flex items-center gap-2 group">
      {Icon && (
        <Icon className="text-[18px] transition-all duration-300 group-hover:rotate-12 group-hover:translate-x-1" />
      )}
      <h3 className="mb-1 text-[16px]">{text}</h3>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        download={text.toLowerCase().includes("download")}
        className={`py-[12px] px-[25px] bg-white font-fahim text-[#121212] border-2 border-[#141e34] 
        transition-all duration-300 hover:bg-[#141e34] hover:text-white hover:border-cyan-400 
        hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`py-[12px] px-[25px] bg-white font-fahim text-[#121212] border-2 border-[#141e34] 
      transition-all duration-300 hover:bg-[#141e34] hover:text-white hover:border-cyan-400 
      hover:shadow-[0_0_10px_2px_rgba(0,255,255,0.8)] ${className}`}
    >
      {content}
    </button>
  );
};

export default CustomButton;
