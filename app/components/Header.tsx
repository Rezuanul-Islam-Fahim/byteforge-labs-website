'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/20' 
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className={`h-9 w-9 transition-colors duration-500 ${
              isScrolled ? 'text-blue-600' : 'text-white'
            }`} />
            <span className={`text-2xl font-bold transition-colors duration-500 ${
              isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
            }`}>
              ByteForge Labs
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['About', 'Services', 'Tech Stack', 'AI Solutions', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-cyan-400 drop-shadow-md'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'hover:bg-gray-100' 
                : 'hover:bg-white/10 backdrop-blur-sm'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-7 w-7 transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`} />
            ) : (
              <Menu className={`h-7 w-7 transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden mt-6 pb-6 border-t transition-all duration-300 ${
            isScrolled ? 'border-gray-200' : 'border-white/20'
          }`}>
            <div className="pt-6 space-y-2">
            {['About', 'Services', 'Tech Stack', 'AI Solutions', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`block w-full text-left py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white hover:text-cyan-400 hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;