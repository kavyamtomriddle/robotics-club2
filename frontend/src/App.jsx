// src/App.jsx
import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for videos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
          <div className="loader">
            <div className="hexagon"></div>
          </div>
        </div>
      )}
      
      <ParticleBackground />
      <ScrollProgress />
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/95 z-40 flex items-center justify-center">
          <div className="text-center">
            <nav className="space-y-8">
              {['About', 'Projects', 'Team', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-4xl md:text-5xl font-bold text-cyan-400 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;