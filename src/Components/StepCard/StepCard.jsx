import React from 'react';

const StepCard = ({ number, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-[280px] relative z-10">
      
      {/* Number Circle */}
      <div className="w-14 h-14 bg-[#FFC800] rounded-full border-[3px] border-[#1A1614] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,200,0,0.3)]">
        <span className="text-2xl font-black text-white">{number}</span>
      </div>

      {/* Title */}
      <h3 className="text-white font-extrabold text-lg md:text-xl mb-3 px-2 whitespace-nowrap">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed px-4">
        {description}
      </p>
    </div>
  );
};

export default StepCard;