// src/components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      gsap.to('.menu-button', { rotation: 90, duration: 0.3 });
    } else {
      gsap.to('.menu-button', { rotation: 0, duration: 0.3 });
    }
  }, [isMenuOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-gray-900/80 backdrop-blur-md' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center mr-3">
            <div className="w-6 h-6 rounded-full bg-gray-900"></div>
          </div>
          <h1 className="text-xl font-bold">ROBOTICS CLUB</h1>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['About', 'Projects', 'Events', 'Team', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <button 
          className="menu-button relative w-10 h-10 flex flex-col justify-center items-center md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : 'mb-1.5'}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Navigation;