//seen

import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  // Reset hover state when route changes
  useEffect(() => {
    setIsHovering(false);
  }, [location.pathname]);

  const setupHoverListeners = useCallback(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .cursor-hover');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    // Setup hover listeners
    const cleanup = setupHoverListeners();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cleanup();
    };
  }, [setupHoverListeners]);

  // Re-attach listeners when route changes (new elements appear)
  useEffect(() => {
    // Small delay to let new elements render
    const timeout = setTimeout(() => {
      setupHoverListeners();
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname, setupHoverListeners]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          mass: 0.2
        }}
      />
    </>
  );
};

export default Cursor;