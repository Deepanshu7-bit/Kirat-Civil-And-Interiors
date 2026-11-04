'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Graceful auto-dismiss after initial animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setIsVisible(false)}
          aria-label="Welcome screen - Click anywhere to skip"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF8F5] select-none cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center px-6 text-center max-w-lg mx-auto">
            {/* Logo Crest with Upward Entrance Animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-[0_12px_40px_rgba(245,233,211,0.9),0_4px_15px_rgba(197,160,89,0.25)] bg-black p-1"
            >
              <Image
                src="/logos/elegant-logo-luxury-crest.jpg"
                alt="Elegant Contractors and Interiors"
                fill
                priority
                sizes="(max-width: 640px) 128px, 160px"
                className="object-cover rounded-xl"
              />
            </motion.div>

            {/* Business Name with Staggered Upward Entrance Animation */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-center"
            >
              <h1 className="font-cinzel font-bold text-2xl sm:text-3xl md:text-4xl text-stone-900 tracking-[0.1em] uppercase leading-tight">
                ELEGANT CONTRACTORS
              </h1>
              <p className="font-cinzel text-lg sm:text-2xl font-semibold text-[#C5A059] tracking-[0.16em] uppercase mt-1.5">
                AND INTERIORS
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
