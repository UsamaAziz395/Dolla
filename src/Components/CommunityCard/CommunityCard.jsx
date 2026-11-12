
import React from 'react';
import { Link } from 'react-router-dom';
import { communityData } from '../../Data/communityData';
import character from '../../assets/images/character.png';

const CommunityCard = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center px-5 sm:px-7 md:px-8 py-5 md:py-6">

      {/* Brown Background Shape */}
      <div
        className="absolute inset-0 bg-[#5A3E29] rounded-[25px] sm:rounded-[30px] md:rounded-none [clip-path:none] md:[clip-path:polygon(0_0,100%_0,100%_10%,90%_100%,0_100%)]"
      />

      {/* Left Side Image */}
      <div className="relative w-full md:w-[35%] flex justify-center md:justify-start z-20 mb-3 md:mb-0 md:-ml-16">
        <img
          src={character}
          alt="Money Character"
          className="w-40 sm:w-44 md:w-[200px] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Right Side Content */}
      <div className="relative w-full md:w-[65%] flex flex-col items-center md:items-start text-center md:text-left z-10">

        <h2
          className="text-3xl sm:text-4xl font-black tracking-tight mb-2 text-white"
          style={{
            WebkitTextStroke: '0.5px black',
            textShadow: '2px 2px 3px rgba(0, 0, 0, 0.75)'
          }}
        >
          {communityData.heading}
        </h2>

        <p className="text-gray-200 text-xs sm:text-sm leading-relaxed max-w-[400px] mb-4">
          {communityData.description}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {communityData.socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.id}
                to={link.url}
                className="w-9 h-9 bg-[#FFC800] rounded-full flex items-center justify-center border-2 border-transparent hover:border-white transition-all shadow-md active:translate-y-1"
                aria-label={link.name}
              >
                <Icon className="text-white" size={16} />
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default CommunityCard;
