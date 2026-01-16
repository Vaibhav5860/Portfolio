import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const percent = documentHeight > 0 ? Math.round((scrollTop / documentHeight) * 100) : 0;
      setScrollPercent(percent);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const sections = document.querySelectorAll('section');
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    
    for (const section of sections) {
      const sectionTop = section.offsetTop;
      // Find the next section that starts below current viewport
      if (sectionTop > currentScroll + 100) {
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        return;
      }
    }
    
    // If no next section, scroll to bottom
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50 cursor-hover"
      onClick={scrollToNextSection}
    >
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Background circle */}
        <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="6"
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-150 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Percentage text */}
        <span className="text-sm font-medium text-white/90">
          {scrollPercent}%
        </span>
      </div>
      
      {/* Scroll down arrow - shows when not at bottom */}
      {scrollPercent < 95 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 4, 0] }}
          transition={{ y: { repeat: Infinity, duration: 1.5 } }}
          className="absolute -bottom-6 left-1/2 -translate-x-1/2"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="rgba(255,255,255,0.5)" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ScrollIndicator;
