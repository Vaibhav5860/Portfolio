//seen

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { personalInfo } from '../data';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          title: "New Portfolio Inquiry",
          time: new Date().toLocaleString(),
          message: `Phone Number: ${formData.phone}\n\nMessage:\n${formData.message}`,
          to_name: personalInfo.name,
          my_name: personalInfo.name,
          my_email: personalInfo.email,
          my_phone: personalInfo.phone,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('idle');
      setFormData({ name: '', email: '', phone: '', message: '' });
      toast.success("Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      console.error('Email error:', error);
      setStatus('idle');
      toast.error('Something went wrong. Please try again later.');
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              Let's work <br />
              <span className="text-gray-500">together.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-md mb-12">
              Currently available for freelance projects and open to full-time opportunities.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {[
                { icon: Mail, href: `mailto:${personalInfo.email}` },
                { icon: FaGithub, href: personalInfo.github },
                { icon: FaLinkedin, href: personalInfo.linkedin },
                { icon: FaTwitter, href: personalInfo.twitter }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={item}
                  className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider text-gray-500">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-white outline-none transition-colors text-lg"
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider text-gray-500">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-white outline-none transition-colors text-lg"
                placeholder="Enter your email address"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider text-gray-500">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-white outline-none transition-colors text-lg"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm uppercase tracking-wider text-gray-500">How can I help you?</label>
              <textarea
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-white outline-none transition-colors text-lg resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              disabled={status === 'sending'}
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all mt-8 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

          </motion.form>

          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%)',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                padding: '16px 20px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.3px',
              },
              success: {
                style: {
                  background: 'linear-gradient(135deg, rgba(20, 40, 30, 0.95) 0%, rgba(15, 30, 20, 0.98) 100%)',
                  borderLeft: '4px solid #4ade80',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(74, 222, 128, 0.1)',
                },
                iconTheme: {
                  primary: '#4ade80',
                  secondary: '#0a1f0f',
                },
              },
              error: {
                style: {
                  background: 'linear-gradient(135deg, rgba(40, 20, 20, 0.95) 0%, rgba(30, 15, 15, 0.98) 100%)',
                  borderLeft: '4px solid #f87171',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(248, 113, 113, 0.1)',
                },
                iconTheme: {
                  primary: '#f87171',
                  secondary: '#1f0a0a',
                },
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
