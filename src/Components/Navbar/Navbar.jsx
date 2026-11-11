
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navbarData } from '../../Data/navbarData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1A1614] border-b border-[#8C6E54]/40 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between md:justify-evenly relative z-50">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={navbarData.logo}
            alt="Logo"
            className="w-9 h-9 object-contain group-hover:scale-110 transition-transform"
          />

          <span
            className="text-2xl font-black text-white uppercase tracking-wider"
            style={{
              WebkitTextStroke: '1px black',
              textShadow: '2px 2px 0px #8C6E54'
            }}
          >
            $DOLLA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navbarData.links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="text-white font-bold text-base bg-[#A67C5B] px-4 py-2 rounded-lg hover:bg-[#FFC800] hover:text-black transition-colors"
              style={{ textShadow: '1px 1px 0px #8C6E54' }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Socials & Button */}
        <div className="hidden md:flex items-center gap-5">

          <div className="flex items-center gap-3">
            {navbarData.socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#2B1D13] rounded-full flex items-center justify-center border border-[#8C6E54] hover:bg-[#FFC800] hover:border-transparent group transition-all"
                >
                  <Icon
                    className="text-white group-hover:text-black transition-colors"
                    size={16}
                  />
                </a>
              );
            })}
          </div>

          <button className="bg-[#A67C5B] text-white font-bold text-sm py-2.5 px-6 rounded-full border border-[#8C6E54] hover:bg-[#FFC800] hover:text-black hover:border-transparent transition-all">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={28} />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Full Screen Brown Mobile Menu */}
      <div
        className={`fixed inset-0 w-full h-screen bg-[#3D2C1F] z-[70] flex flex-col items-center justify-center px-8 gap-7 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >

        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white p-2 hover:rotate-90 transition-transform"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={30} />
        </button>

        {/* Mobile Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 mb-5"
        >
          <img
            src={navbarData.logo}
            alt="Logo"
            className="w-12 h-12 object-contain"
          />

          <span className="text-3xl font-black text-white">
            $DOLLA
          </span>
        </Link>

        {/* Mobile Links */}
        {navbarData.links.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="text-white font-bold text-2xl bg-[#A67C5B] hover:bg-[#FFC800] hover:text-black transition-colors w-full max-w-sm text-center rounded-lg py-3"
          >
            {link.name}
          </Link>
        ))}

        {/* Mobile Connect Button */}
        <button className="mt-3 w-full max-w-sm bg-[#A67C5B] hover:bg-[#FFC800] text-white hover:text-black font-black text-lg py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none transition-all">
          Connect Wallet
        </button>

        {/* Mobile Socials */}
        <div className="flex items-center gap-5 mt-5">
          {navbarData.socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#1A1614] rounded-full flex items-center justify-center border border-[#8C6E54] hover:bg-[#FFC800] group transition-all"
              >
                <Icon
                  className="text-white group-hover:text-black transition-colors"
                  size={20}
                />
              </a>
            );
          })}
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
