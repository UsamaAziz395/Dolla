import React from 'react';
import { cryptoStepsData } from '../../Data/cryptoStepsData';
import StepCard from '../../Components/StepCard/StepCard';

const HowToBuyCrypto = () => {
  return (
    // Section: Top/Bottom space kam rakha hai (py-8)
    <section className="relative w-full min-h-[60vh] bg-[#1A1614] flex flex-col items-center justify-center py-8 px-4 overflow-hidden font-sans">
      
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Top Text Area */}
        <div className="text-center mb-10 flex flex-col items-center">
          
          {/* Main Heading */}
          <h2 
            className="text-4xl md:text-6xl font-black text-[#F4EDE0] uppercase tracking-tighter mb-2"
            style={{ 
              WebkitTextStroke: '2px black', 
              textShadow: '4px 4px 0px rgba(166, 124, 82, 0.6)' 
            }}
          >
            {cryptoStepsData.heading}
          </h2>

          {/* Sub Heading */}
          <h3 
            className="text-2xl md:text-4xl font-black text-[#F4EDE0] uppercase tracking-widest relative inline-block"
            style={{ 
              WebkitTextStroke: '1.5px black', 
              textShadow: '4px 4px 0px rgba(166, 124, 82, 0.6)' 
            }}
          >
            {cryptoStepsData.subHeading}
          </h3>
          
        </div>

        {/* Steps & Progress Bar Container */}
        <div className="relative w-full max-w-4xl mx-auto mt-4">
          
          {/* Horizontal Progress Line (Sirf Desktop par dikhegi) */}
          <div className="hidden md:block absolute top-6 -left-4 -right-4 h-4 bg-[#3D2C1F] rounded-full -z-10"></div>

          {/* Step Cards Wrapper: Mobile par column (center) aur Desktop par row */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-6">
            {cryptoStepsData.steps.map((step) => (
              <StepCard 
                key={step.id}
                number={step.id}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowToBuyCrypto;