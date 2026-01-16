//seen


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', href: 'projects' },
    { name: 'Services', href: 'services' },
    { name: 'Contact', href: 'contact' },
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Remove hash from URL
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
          }`}
      >
        <div className="max-w-9xl mx-auto px-6 ">
          <div className={`mx-auto max-w-2xl glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-xl border-white/10' : 'bg-transparent border-transparent'
            }`}>
            {/* Logo */}
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                window.history.pushState(null, '', window.location.pathname);
              }}
              className="text-sm font-display font-bold text-white tracking-widest uppercase"
            >
              Vaibhav.
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-1"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-32 px-6"
          >
            <div className="flex flex-col gap-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => {
                    scrollToSection(e, item.href);
                    setIsOpen(false);
                  }}
                  className="text-4xl font-display font-bold text-white hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-12 flex gap-8">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaGithub size={24} /></a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
