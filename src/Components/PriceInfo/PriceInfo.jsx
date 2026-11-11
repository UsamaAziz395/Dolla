import React from 'react';

const PriceInfo = () => {
  return (
    <div className="w-full flex flex-col gap-1 mb-8">
      <div className="flex justify-between items-center text-xs md:text-sm">
        <span className="text-gray-400 font-semibold">Current Price:</span>
        <span className="text-white font-bold">$0.00231</span>
      </div>
      <div className="flex justify-between items-center text-xs md:text-sm">
        <span className="text-gray-400 font-semibold">Listing Price:</span>
        <span className="text-white font-bold">$0.02000</span>
      </div>
    </div>
  );
};
export default PriceInfo;