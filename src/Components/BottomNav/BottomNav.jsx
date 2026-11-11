import React from 'react';
import { Link } from 'react-router-dom';
import { navbarData } from '../../Data/navbarData';

const BottomNav = () => {
  return (
    <div className="w-full bg-[#1A1614] border-t border-white/10 py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-evenly gap-6 md:gap-0">
      <Link to="/" className="flex items-center gap-2 group">
        <img src={navbarData.logo} alt="Logo" className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
        <span className="text-xl font-black text-white uppercase tracking-wider" style={{ WebkitTextStroke: '1px black', textShadow: '2px 2px 0px #8C6E54' }}>$DOLLA</span>
      </Link>
      <div className="flex items-center gap-6 md:gap-10">
        {navbarData.links.map((link) => (
          <Link key={link.id} to={link.path} className="text-white font-bold text-sm md:text-base hover:text-[#FFC800] transition-colors" style={{ textShadow: '1px 1px 0px #8C6E54' }}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {navbarData.socials.map((social) => {
          const Icon = social.icon;
          return (
            <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#2B1D13] rounded-full flex items-center justify-center border border-[#4A3B27] hover:bg-[#FFC800] hover:border-transparent group transition-all">
              <Icon className="text-white group-hover:text-black transition-colors" size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default BottomNav;