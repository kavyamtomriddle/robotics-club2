// src/components/AboutSection.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutSection = () => {
  const sectionRef = useRef();
  const cardsRef = useRef([]);
  
  useGSAP(() => {
    // Card animations
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1
      });
    });
    
    // Section title animation
    gsap.from('.section-title', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none'
      },
      x: -50,
      opacity: 0,
      duration: 0.8
    });
    
    // Background animation
    gsap.fromTo(sectionRef.current,
      { backgroundPosition: '50% 0%' },
      {
        backgroundPosition: '50% 100%',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
    
  }, { scope: sectionRef });
  
  return (
    <section 
      ref={sectionRef}
      id="about"
      className="py-24 px-4 relative z-10 bg-gradient-to-b from-gray-900 to-cyan-900/20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-16 text-center">
          About the Club
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              content: "To foster innovation in robotics and automation, providing students with the platform to transform ideas into reality through hands-on projects and collaborative learning."
            },
            {
              title: "What We Do",
              content: "We conduct workshops, competitions, and projects spanning various domains of robotics including AI, computer vision, mechatronics, and autonomous systems."
            },
            {
              title: "Our History",
              content: "Established in 2005, the Robotics Club at IIT BHU has been at the forefront of technological innovation, producing award-winning projects and talented engineers."
            }
          ].map((card, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/30 p-8 rounded-xl hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">{card.title}</h3>
              <p className="text-gray-300">{card.content}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-8 max-w-3xl">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Why Join Us?</h3>
            <p className="text-gray-300">
              The Robotics Club provides a unique opportunity to work on cutting-edge projects, 
              collaborate with like-minded peers, and gain hands-on experience that bridges 
              theoretical knowledge with practical implementation. Our members have gone on to 
              prestigious internships, research positions, and successful careers in robotics 
              and AI.
            </p>
            <button className="mt-6 px-6 py-3 bg-cyan-500 text-gray-900 font-medium rounded-full hover:bg-cyan-400 transition-colors">
              Learn More About Membership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;