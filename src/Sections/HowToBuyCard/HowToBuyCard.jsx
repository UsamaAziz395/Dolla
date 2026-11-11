import React from 'react';
import { paymentData } from '../../Data/paymentData';

const HowToBuyCard = () => {
  return (
    <section className="relative w-full min-h-[60vh] bg-[#1A1614] flex flex-col items-center justify-center py-8 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#F4EDE0] uppercase tracking-tighter mb-2" style={{ WebkitTextStroke: '2px black', textShadow: '3px 3px 0px #4A3B27' }}>{paymentData.heading}</h2>
        <h3 className="text-2xl md:text-4xl font-black text-[#F4EDE0] uppercase tracking-wider mb-8" style={{ WebkitTextStroke: '1.5px black', textShadow: '2px 2px 0px #4A3B27' }}>{paymentData.subHeading}</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full mb-6">
          {paymentData.paymentMethods.map((method) => (
            <div key={method.id} className={method.boxClasses}>
              {method.images && method.images.length > 0 ? (
                method.images.map((img, index) => (
                  <img key={index} src={img} alt={`${method.name} - ${index}`} className="h-8 md:h-10 w-auto object-contain" />
                ))
              ) : (
                <span className="text-white font-bold text-lg md:text-xl">{method.name}</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-4">{paymentData.description}</p>
        <div className="mb-4"><p className="text-white font-black text-2xl tracking-widest">{paymentData.footerText}</p></div>
      </div>
    </section>
  );
};
export default HowToBuyCard;