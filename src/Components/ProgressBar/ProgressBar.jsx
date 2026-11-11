import React from 'react';

const ProgressBar = ({ raised = 1500, target = 5000 }) => {
  const percentage = target > 0 ? (raised / target) * 100 : 0;
  const barWidth = Math.min(percentage, 100);

  return (
    <div className="w-full mb-6">
      <p className="text-white font-bold text-xs mb-2">Raised: {raised} Sol / {target} Sol</p>
      <div className="w-full h-3 bg-[#2B1D13] rounded-full relative">
        <div className="absolute top-0 left-0 h-full bg-[#E89E33] rounded-full transition-all duration-500 ease-out" style={{ width: `${barWidth}%` }}></div>
        <div className="absolute top-1/2 -translate-y-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#FFD000] rounded-full border-2 border-[#E89E33] flex items-center justify-center text-[10px] font-black text-black transition-all duration-500 ease-out" style={{ left: `${barWidth}%` }}>$</div>
      </div>
    </div>
  );
};
export default ProgressBar;