import React from 'react';
import { motion } from 'framer-motion';
import { Construction, ArrowLeft, Clock, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceUnavailable = () => {
  const textReveal = {
    hidden: { y: "100%" },
    visible: {
      y: "0%",
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const iconFloat = {
    initial: { scale: 1, opacity: 0 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: 1,
      transition: {
        scale: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    }
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Animated Icon */}
        <motion.div
          variants={iconFloat}
          initial="initial"
          animate="animate"
          className="mb-8 mt-4 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full"></div>
            <div className="relative glass-card p-6 rounded-2xl">
              <Construction className="w-16 h-16 text-white/80" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </div>
          <span className="text-sm font-medium text-yellow-400 tracking-wide">Under Construction</span>
        </motion.div>

        {/* Main Heading */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            variants={textReveal}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight"
          >
            <span className="text-gradient">Coming Soon</span>
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed"
        >
          This link isn't available yet. I'm working on getting it ready for you.
          <br />
          Check back soon!
        </motion.p>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="glass-card px-5 py-3 rounded-xl flex items-center gap-3">
            <Clock className="w-5 h-5 text-white/60" />
            <span className="text-sm text-gray-300">Launching Soon</span>
          </div>
          <div className="glass-card px-5 py-3 rounded-xl flex items-center gap-3">
            <Wrench className="w-5 h-5 text-white/60" />
            <span className="text-sm text-gray-300">Work in Progress</span>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-3 glass px-6 py-3 mb-12 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-500 text-sm"
      >
        <div className="h-[1px] w-6 bg-white/20"></div>
        <span>503</span>
        <div className="h-[1px] w-6 bg-white/20"></div>
      </motion.div>
    </section>
  );
};

export default ServiceUnavailable;
