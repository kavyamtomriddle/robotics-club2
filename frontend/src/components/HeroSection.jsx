// src/components/HeroSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlitchText from './ui/GlitchText';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ setVideosLoaded }) => {
  const contentRef = useRef();
  const scrollIndicatorRef = useRef();
  const videoRef = useRef();
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const videos = [
    "/videos/robotics-1.mp4",
    "/videos/robotics-2.mp4",
    "/videos/robotics-3.mp4"
  ];
  
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };
  
  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideosLoaded(prev => prev + 1);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(contentRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out'
    });
    
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'sine.inOut'
    });
    
    // Video transition effect
    gsap.to(videoRef.current, {
      opacity: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-purple-900/10">
        <video 
          ref={videoRef}
          src={videos[currentVideo]}
          autoPlay
          muted
          loop
          onEnded={handleVideoEnd}
          onLoadedData={handleVideoLoad}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900/30 z-10"></div>
      </div>
      
      <div 
        ref={contentRef}
        className="relative z-20 text-center px-4 max-w-6xl"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <GlitchText 
            text="ROBOTICS CLUB" 
            className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,236,255,0.7)]"
          />
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-2xl mx-auto text-gray-200 font-light tracking-wider">
          INDIAN INSTITUTE OF TECHNOLOGY (BHU) VARANASI
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          <button className="relative overflow-hidden px-8 py-4 text-lg font-medium bg-cyan-500 text-gray-900 rounded-full transform transition-all duration-300 hover:bg-cyan-400 hover:scale-105 group">
            <span className="relative z-10">EXPLORE PROJECTS</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full scale-0 group-hover:scale-100 transition-all duration-500"></span>
          </button>
          
          <button className="px-8 py-4 text-lg font-medium border-2 border-cyan-400 text-cyan-400 rounded-full transform transition-all duration-300 hover:bg-cyan-400/10 hover:scale-105">
            JOIN OUR TEAM
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-4 border-cyan-400 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;