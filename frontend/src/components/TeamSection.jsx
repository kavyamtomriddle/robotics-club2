// src/components/TeamSection.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TeamSection = () => {
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
    
    // 3D effect on hover
    cardsRef.current.forEach((card, index) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = (x - centerX) / 20;
        const rotateX = (centerY - y) / 20;
        
        gsap.to(card, {
          duration: 0.5,
          rotateX: -rotateX,
          rotateY: rotateY,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.5,
          rotateX: 0,
          rotateY: 0,
          ease: 'power2.out'
        });
      });
    });
    
  }, { scope: sectionRef });
  
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Faculty Advisor",
      bio: "Expert in autonomous systems with 15+ years of research experience in robotics and AI."
    },
    {
      name: "Aarav Sharma",
      role: "Club President",
      bio: "Senior in Mechanical Engineering specializing in robotic manipulators and control systems."
    },
    {
      name: "Priya Patel",
      role: "Vice President",
      bio: "Computer Science major with expertise in computer vision and machine learning for robotics."
    },
    {
      name: "Vikram Singh",
      role: "Technical Lead",
      bio: "Electrical Engineering student focused on embedded systems and hardware integration."
    },
    {
      name: "Ananya Gupta",
      role: "Project Manager",
      bio: "Dual major in Robotics and AI, leading our Mars rover simulation project."
    },
    {
      name: "Rohan Mehta",
      role: "Outreach Coordinator",
      bio: "Manages partnerships and community engagement for robotics education initiatives."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="team"
      className="py-24 px-4 relative z-10 bg-gradient-to-b from-gray-900 to-purple-900/20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-4xl md:text-5xl font-bold mb-16 text-center">
          Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="team-card bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 transition-all duration-300 transform perspective-1000"
            >
              <div className="mb-4 h-48 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center">
                <div className="bg-gray-700 border-2 border-dashed rounded-xl w-16 h-16" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-purple-400">{member.name}</h3>
              <p className="text-cyan-400 mb-2">{member.role}</p>
              <p className="text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;