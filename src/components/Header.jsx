import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// 👉 Import both logos
// import logoDark from "../assets/logoresize.png";
import  logoDark from "../assets/logoresize3.png";

import  logoWhite from "../assets/logoresize3.png";

const Header = ({ activePage, setActivePage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔥 Header state
  const isTransparentHeader = activePage === 'home' && !scrolled;

  const headerClass = isTransparentHeader
    ? 'bg-transparent text-white border-b border-white/10'
    : 'bg-white text-blue-950 shadow-md';

  const navLinkClass = isTransparentHeader
    ? 'text-white/90 hover:text-amber-400'
    : 'text-gray-700 hover:text-blue-900';

  const mobileBtnClass = isTransparentHeader ? 'text-white' : 'text-blue-950';

  const menuItems = ['Home', 'About', 'Packages', 'Plan-your-own-tour', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* 🔷 Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            <div className="w-40 h-24 flex items-center justify-center -ml-10">
              <img
                src={isTransparentHeader ? logoWhite : logoDark}
                alt="Logo"
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
          </div>

          {/* 🔷 Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-sans">
            {menuItems.map((item) => {
              const page = item.toLowerCase().replace(' ', '-');
              return (
                <button
                  key={item}
                  onClick={() => navigateTo(page)}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors ${navLinkClass} ${
                    activePage === page ? 'border-b-2 border-amber-500' : ''
                  }`}
                >
                  {item}
                </button>
              );
            })}

            <button
              onClick={() => navigateTo('plan-your-own-tour')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-sm font-bold uppercase text-xs tracking-widest shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Plan My Trip
            </button>
          </div>

          {/* 🔷 Mobile Button */}
          <button
            className={`md:hidden ${mobileBtnClass}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 🔷 Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-2xl py-6 px-6 flex flex-col space-y-4 border-t border-gray-100 font-sans animate-fade-in-down">
          {menuItems.map((item) => {
            const page = item.toLowerCase().replace(' ', '-');
            return (
              <button
                key={item}
                onClick={() => {
                  navigateTo(page);
                  setIsMenuOpen(false);
                }}
                className="text-left text-lg font-medium text-gray-800 py-2 border-b border-gray-100 hover:text-amber-600"
              >
                {item}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Header;
