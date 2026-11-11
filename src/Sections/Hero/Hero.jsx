import React from 'react';
import PresaleCard from '../../Components/PresaleCard/PresaleCard';

const Hero = () => {
  const heroData = {
    heading: "$DOLLA",
    subHeading: "PRE-SALE",
    description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    buttonText: "LEARN MORE",
  };

  return (
    <section className="relative w-full min-h-[70vh] bg-[#1A1614] flex items-center justify-center py-16 px-6 md:px-20 overflow-hidden">
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-[#F4EDE0] uppercase tracking-tighter leading-[0.9] mb-2" style={{ WebkitTextStroke: '2px black', textShadow: '3px 3px 0px rgba(166, 124, 82, 0.7)' }}>
            {heroData.heading}
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-[#F4EDE0] uppercase tracking-tighter leading-[0.9] mb-6" style={{ WebkitTextStroke: '2px black', textShadow: '3px 3px 0px rgba(166, 124, 82, 0.7)' }}>
            {heroData.subHeading}
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[420px] mb-8">
            Lorem ipsum is placeholder text commonly <br /> used in the graphic, print, and publishing <br /> industries for previewing layouts and visual <br /> mockups.
          </p>
          <button className="bg-[#E89E33] text-white font-black text-sm md:text-base py-3 px-8 rounded-xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#FFC800] hover:text-black active:translate-y-[2px] active:shadow-none transition-all">
            {heroData.buttonText}
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
          <PresaleCard />
        </div>
      </div>
    </section>
  );
};
export default Hero;