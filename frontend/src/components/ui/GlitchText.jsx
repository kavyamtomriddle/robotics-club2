// src/components/ui/GlitchText.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const GlitchText = ({ text, className }) => {
  const containerRef = useRef();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const chars = containerRef.current.querySelectorAll('.char');
    
    // Individual character animations
    chars.forEach(char => {
      gsap.to(char, {
        y: () => gsap.utils.random(-3, 3),
        x: () => gsap.utils.random(-2, 2),
        color: () => `hsl(${gsap.utils.random(180, 220)}, 100%, 70%)`,
        opacity: () => gsap.utils.random(0.7, 1),
        repeat: -1,
        repeatRefresh: true,
        duration: 0.1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    });
    
    // Full glitch effect
    const glitch = () => {
      gsap.to(chars, {
        y: () => gsap.utils.random(-10, 10),
        x: () => gsap.utils.random(-5, 5),
        color: `hsl(${gsap.utils.random(180, 220)}, 100%, 80%)`,
        duration: 0.05,
        stagger: 0.005,
        onComplete: () => {
          gsap.to(chars, {
            y: 0,
            x: 0,
            color: 'inherit',
            duration: 0.2
          });
        }
      });
    };
    
    // Random glitch occurrences
    const interval = setInterval(() => {
      if (Math.random() > 0.7) glitch();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [text]);
  
  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="char inline-block"
          style={{ transition: 'all 0.1s ease' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default GlitchText;