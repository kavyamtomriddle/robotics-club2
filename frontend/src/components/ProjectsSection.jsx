// src/components/ProjectsSection.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef();
  const cardsRef = useRef([]);
  
  useGSAP(() => {
    // Card animations
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none none'
        },
        y: 60,
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
      x: 50,
      opacity: 0,
      duration: 0.8
    });
    
  }, { scope: sectionRef });
  
  // 3D card effect
  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = (x - centerX) / 20;
    const rotateX = (centerY - y) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 20px rgba(0, 236, 255, 0.2)`;
  };
  
  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    gsap.to(card, {
      duration: 0.5,
      transform: 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
      boxShadow: '0 10px 30px rgba(0, 236, 255, 0.1)',
      ease: 'power2.out'
    });
  };
  
  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="py-24 px-4 relative z-10 bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-16 text-center">
          Our Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Autonomous Rover",
              description: "A Mars rover prototype equipped with advanced navigation systems and scientific instruments for planetary exploration.",
              tags: ["Robotics", "Autonomy", "Computer Vision"]
            },
            {
              title: "Gesture Controlled Robot",
              description: "A robot that can be controlled through hand gestures using computer vision and machine learning algorithms.",
              tags: ["AI", "Computer Vision", "Embedded Systems"]
            },
            {
              title: "Swarm Robotics",
              description: "A coordinated group of robots that work together to accomplish complex tasks through decentralized control.",
              tags: ["Swarm Intelligence", "Algorithms", "Multi-agent Systems"]
            },
            {
              title: "Robotic Arm with Haptic Feedback",
              description: "A 6-DOF robotic arm that provides haptic feedback for remote operations in hazardous environments.",
              tags: ["Mechatronics", "Haptics", "Control Systems"]
            },
            {
              title: "AI-Powered Surveillance Drone",
              description: "An autonomous drone with real-time object detection and tracking capabilities for security applications.",
              tags: ["Drones", "Computer Vision", "AI"]
            },
            {
              title: "Exoskeleton for Rehabilitation",
              description: "A wearable robotic device designed to assist patients in physical therapy and rehabilitation.",
              tags: ["Biomechanics", "Rehabilitation", "Wearable Tech"]
            }
          ].map((project, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="project-card bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 transition-all duration-300"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="mb-4 h-48 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                <div className="bg-gray-700 border-2 border-dashed rounded-xl w-16 h-16" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="mt-4 w-full py-2 text-center border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;