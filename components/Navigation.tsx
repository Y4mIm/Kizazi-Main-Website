import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';
import Logo from './Logo';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: SectionId.HOME },
    { name: 'About', id: SectionId.ABOUT },
    { name: 'Services', id: SectionId.SERVICES },
    { name: 'Portfolio', id: SectionId.PORTFOLIO },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center pt-4 px-4`}>
      <div className={`
        relative w-full max-w-5xl transition-all duration-500 rounded-2xl
        ${scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border border-white/40 py-2 px-6' 
          : 'bg-transparent py-4 px-4'}
      `}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="cursor-pointer transform hover:scale-105 transition-transform duration-300 origin-left" onClick={() => scrollTo(SectionId.HOME)}>
            <Logo scrolled={scrolled || isOpen} className="scale-90 sm:scale-100" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group
                  ${scrolled 
                    ? 'text-slate-600 hover:text-blue-600' 
                    : 'text-slate-200 hover:text-white'}
                `}
              >
                {link.name}
                <span className={`absolute bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2`}></span>
              </button>
            ))}
            <button 
              onClick={() => scrollTo(SectionId.CONTACT)}
              className={`
                ml-4 px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg
                ${scrolled
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30'
                  : 'bg-white text-blue-900 hover:bg-blue-50 shadow-white/20'}
              `}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X size={24} className="text-slate-800" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 animate-in slide-in-from-top-5 z-40 overflow-hidden">
          <div className="flex flex-col p-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-left px-6 py-4 text-slate-800 font-medium hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="h-px bg-gray-100 my-2 mx-4"></div>
            <button 
              onClick={() => scrollTo(SectionId.CONTACT)}
              className="mx-4 my-2 bg-blue-600 text-white py-3 rounded-xl font-bold text-center shadow-lg shadow-blue-600/20"
            >
              Start Your Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;