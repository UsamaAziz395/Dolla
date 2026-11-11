import React from 'react';
import { Link } from 'react-router-dom';
import MoneyImg from '../../assets/images/Money.png'; 
import TimerBox from '../TimerBox/TimerBox';
import ProgressBar from '../ProgressBar/ProgressBar';
import PriceInfo from '../PriceInfo/PriceInfo';

const PresaleCard = () => {
  return (
    <div className="relative w-full max-w-[360px] bg-[#3D2C1F] rounded-[25px] px-5 py-6 md:px-6 flex flex-col items-center border-[3px] border-black/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="absolute -top-12 md:-top-14 left-1/2 transform -translate-x-1/2">
        <img src={MoneyImg} alt="Money Bag" className="w-20 md:w-24 h-auto object-contain drop-shadow-2xl" />
      </div>
      <h2 className="text-xl md:text-2xl font-black text-[#F4EDE0] uppercase tracking-wider mt-6 mb-5 text-center" style={{ WebkitTextStroke: '1px black', textShadow: '2px 2px 0px #1A1614' }}>
        GRAB YOUR $DOLLA
      </h2>
      <div className="w-full mb-5">
        <p className="text-white font-bold text-xs mb-2 text-left">PRE SALE ENDS IN:</p>
        <TimerBox />
      </div>
      <ProgressBar raised={1500} target={5000} />
      <PriceInfo />
      <div className="w-full flex flex-col gap-2.5">
        <Link to="/how-to-buy-card" className="w-full text-center bg-[#FFC800] text-black font-black text-base py-2.5 rounded-lg border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 active:translate-y-[2px] active:shadow-none transition-all">
          Buy With Card
        </Link>
        <Link to="/how-to-buy-crypto" className="w-full text-center bg-[#FFC800] text-black font-black text-base py-2.5 rounded-lg border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 active:translate-y-[2px] active:shadow-none transition-all">
          Buy With Crypto
        </Link>
      </div>
    </div>
  );
};
export default PresaleCard;