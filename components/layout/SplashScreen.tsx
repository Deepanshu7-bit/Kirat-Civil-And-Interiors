'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF8F5] overflow-hidden select-none"
        >
          {/* Subtle Ambient Golden Glow Behind Logo (#F5E9D3) */}
          <div className="absolute w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-[radial-gradient(circle_at_center,#F5E9D3_0%,rgba(245,233,211,0.4)_50%,transparent_75%)] rounded-full -z-10 animate-pulse pointer-events-none" />

          {/* Architectural Subtle CAD Grid Lines in Gold */}
          <div className="absolute inset-0 cad-grid opacity-40 pointer-events-none" />

          <div className="max-w-xl mx-auto px-6 text-center flex flex-col items-center">
            {/* Logo Crest with Golden Glow */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6 rounded-2xl p-1 bg-gradient-to-b from-[#FAF8F5] to-[#F5E9D3] border-2 border-[#EADBCA] shadow-[0_15px_40px_rgba(245,233,211,0.9),0_5px_15px_rgba(197,160,89,0.15)] flex items-center justify-center overflow-hidden"
            >
              <Image
                src="/logos/elegant-logo-luxury-crest.jpg"
                alt="Elegant Contractors and Interiors Crest"
                fill
                priority
                className="object-cover rounded-xl"
              />
            </motion.div>

            {/* Small Pre-Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5E9D3]/80 border border-[#EADBCA] text-[#9E7D3B] text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-3 shadow-sm"
            >
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>TURNKEY CIVIL & BESPOKE LUXURY INTERIORS</span>
            </motion.div>

            {/* Bold Brand Name Prominently Displayed */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 tracking-[0.08em] uppercase leading-tight mb-2"
            >
              ELEGANT CONTRACTORS <br />
              <span className="text-[#C5A059]">& INTERIORS</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="text-xs sm:text-sm text-stone-600 font-sans tracking-wide max-w-md mx-auto mb-6"
            >
              From Solid Civil Foundations to Bespoke Luxury Handover.
              <span className="block text-[11px] font-mono text-[#9E7D3B] mt-1">
                ACME Heights-2, Sector 117 · Kharar & Mohali Tricity
              </span>
            </motion.p>

            {/* Progress / Enter Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col items-center gap-3 w-full max-w-xs"
            >
              {/* Progress Line */}
              <div className="w-full h-1 bg-[#F5E9D3] rounded-full overflow-hidden border border-[#EADBCA]">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.2, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-[#C5A059] to-[#9E7D3B]"
                />
              </div>

              {/* Instant Enter Studio Button */}
              <button
                onClick={handleEnter}
                className="mt-2 inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-stone-700 hover:text-stone-900 bg-white/90 hover:bg-white border border-[#EADBCA] px-5 py-2 rounded-full shadow-sm hover:shadow transition-all group cursor-pointer"
              >
                <span>Enter Studio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
