import React from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';

const LoadingScreen = ({ progress }) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  const safeProgress = clampedProgress >= 100 ? 100 : Math.floor(clampedProgress / 5) * 5;
  const [activeStatusIndex, setActiveStatusIndex] = useState(0);
  const statusLines = [
    'Booting up interface...',
    'Analyzing code & creativity...',
    'Preparing something awesome...'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveStatusIndex((prev) => (prev + 1) % statusLines.length);
    }, 700);

    return () => clearInterval(intervalId);
  }, [statusLines.length]);

  return (
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[120] overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_35%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:3.5rem_3.5rem]" />

      <div className="relative flex min-h-screen flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-16">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.45em] text-white/40 sm:text-xs">
          <span>Opening Portfolio</span>
          <span>{safeProgress}%</span>
        </div>

        <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
          <Motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[18vw] font-bold uppercase leading-none tracking-[-0.08em] text-white sm:text-[10rem] lg:text-[12rem]"
          >
            Vaibhav.
          </Motion.h1>

          <div className="mt-4 flex min-h-[1.5rem] items-center justify-center text-[11px] uppercase tracking-[0.35em] text-white/45 sm:min-h-[1.75rem] sm:text-sm">
            <AnimatePresence mode="wait">
              <Motion.p
                key={statusLines[activeStatusIndex]}
                initial={{ opacity: 0, y: 10, filter: 'blur(2px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
                transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              >
                {statusLines[activeStatusIndex]}
              </Motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-12 w-full max-w-3xl sm:mt-16">
            <div className="mb-3 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.35em] text-white/45 sm:text-xs">
              <span>Loading Experience</span>
              <span>{safeProgress}%</span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 sm:h-3">
              <Motion.div
                className="h-full rounded-full bg-white"
                animate={{ width: `${clampedProgress}%` }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-white/30 sm:text-xs">
          <span>Based In India</span>
          <span>Vaibhav Raj</span>
        </div>
      </div>
    </Motion.div>
  );
};

export default LoadingScreen;