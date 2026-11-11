import React from 'react';
import Shot from '../assets/images/Shot.png';

const About = () => {
  return (
    <section className="relative w-full bg-[#1A1614] flex flex-col items-center py-16 px-4 overflow-hidden font-sans">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="bg-[#A67C52]/20 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-6 rounded-full mb-5 border border-[#A67C52]/30">About us</div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-5" style={{ WebkitTextStroke: '2px black', textShadow: '3px 3px 0px rgba(166, 124, 82, 0.6)' }}>
              Making WEB3 <br /> EASY
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[420px]">
              Lorem ipsum is placeholder text commonly <br /> used in the graphic, print, and publishing <br /> industries for previewing layouts and visual <br /> mockups. Lorem ipsum is placeholder text <br /> commonly used in the graphic.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <img src={Shot} alt="Shot" className="w-64 md:w-80 h-auto object-contain drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;