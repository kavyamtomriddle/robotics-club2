// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 px-4 relative z-10 bg-gray-900 border-t border-cyan-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Robotics Club</h3>
            <p className="text-gray-400">
              Pushing the boundaries of robotics innovation at IIT BHU
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: FaGithub, url: '#' },
                { icon: FaLinkedin, url: '#' },
                { icon: FaTwitter, url: '#' },
                { icon: FaEnvelope, url: 'mailto:robotics@iitbhu.ac.in' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-xl"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} IIT BHU Robotics Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;