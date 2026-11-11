import React, { useState, useEffect } from 'react';

const TimerBox = () => {
  const initialTimeInSeconds = (55 * 24 * 60 * 60) + (4 * 60 * 60) + (32 * 60) + 23;
  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const intervalId = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;
  const formatTime = (time) => time < 10 ? `0${time}` : time;

  return (
    <div className="w-full bg-[#2B1D13] rounded-lg px-2 py-2.5 flex justify-between items-center text-center">
      <div className="flex-1 flex flex-col items-center"><span className="block text-xl font-black text-white leading-none">{formatTime(days)}</span><span className="text-[9px] font-bold text-gray-400 uppercase mt-1">Days</span></div>
      <span className="text-gray-500 font-bold text-lg mb-2">:</span>
      <div className="flex-1 flex flex-col items-center"><span className="block text-xl font-black text-white leading-none">{formatTime(hours)}</span><span className="text-[9px] font-bold text-gray-400 uppercase mt-1">Hours</span></div>
      <span className="text-gray-500 font-bold text-lg mb-2">:</span>
      <div className="flex-1 flex flex-col items-center"><span className="block text-xl font-black text-white leading-none">{formatTime(minutes)}</span><span className="text-[9px] font-bold text-gray-400 uppercase mt-1">Mins</span></div>
      <span className="text-gray-500 font-bold text-lg mb-2">:</span>
      <div className="flex-1 flex flex-col items-center"><span className="block text-xl font-black text-white leading-none">{formatTime(seconds)}</span><span className="text-[9px] font-bold text-gray-400 uppercase mt-1">Secs</span></div>
    </div>
  );
};
export default TimerBox;