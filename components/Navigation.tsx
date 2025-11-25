
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
          scrolled 
            ? 'bg-navy-950/95 backdrop-blur-md border-white/10 py-0 shadow-xl' 
            : 'bg-transparent border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Area */}
            <div 
              className="cursor-pointer flex-shrink-0 z-50 relative" 
              onClick={() => scrollTo(SectionId.HOME)}
            >
              <Logo scrolled={scrolled || isOpen} className="transform transition-transform hover:scale-105" />
            </div>

            {/* Desktop Navigation - Editorial Style */}
            <div className="hidden lg:flex items-center space-x-12">
              <div className="flex space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.id)}
                    className="relative group py-2"
                  >
                    <span className={`text-xs font-bold tracking-[0.2em] uppercase font-display transition-colors duration-300 ${
                      scrolled ? 'text-slate-300 group-hover:text-blue-400' : 'text-slate-200 group-hover:text-white'
                    }`}>
                      {link.name}
                    </span>
                    {/* Technical underline effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>

              {/* Action Button - Sharp & geometric */}
              <div className="pl-8 border-l border-white/10">
                <button 
                  onClick={() => scrollTo(SectionId.CONTACT)}
                  className={`
                    flex items-center space-x-2 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 border
                    ${scrolled
                      ? 'border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white'
                      : 'border-white/30 text-white hover:bg-white hover:text-navy-950'}
                  `}
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center z-50">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-2 transition-colors duration-300 ${
                  isOpen ? 'text-white' : (scrolled ? 'text-white' : 'text-white')
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Overlay - "App" Feel */}
      <div 
        className={`fixed inset-0 z-40 bg-navy-950 transition-transform duration-500 cubic-bezier(0.7, 0, 0.3, 1) ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col justify-center px-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="space-y-6">
            <span className="text-blue-500 text-xs font-mono mb-4 block tracking-widest">NAVIGATION</span>
            {navLinks.map((link, idx) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="block text-4xl sm:text-5xl font-display font-bold text-white hover:text-blue-500 transition-colors text-left"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t border-white/10">
             <button 
              onClick={() => scrollTo(SectionId.CONTACT)}
              className="w-full py-4 bg-blue-600 text-white font-bold text-lg tracking-widest uppercase hover:bg-blue-700 transition-colors flex items-center justify-center space-x-3"
            >
              <span>Book Consultation</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
