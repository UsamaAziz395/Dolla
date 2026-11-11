import React from 'react';
import { Link } from 'react-router-dom';
import { partnersData } from '../../Data/partnersData';

const PartnersSection = () => {
  return (
    <section className="relative w-full bg-[#1A1614] flex flex-col items-center py-6 px-4 overflow-hidden font-sans">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-black text-[#F4EDE0] uppercase tracking-tighter leading-[1.1] mb-6" style={{ WebkitTextStroke: '2px black', textShadow: '3px 3px 0px rgba(166, 124, 82, 0.6)' }}>
          Our Partners
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-10 w-full">
          {partnersData.map((partner) => (
            <Link key={partner.id} to={partner.url} className="opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer whitespace-nowrap">
              <span className="text-white font-serif font-bold text-base md:text-xl tracking-tight hover:text-[#FFD000] transition-colors">{partner.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PartnersSection;