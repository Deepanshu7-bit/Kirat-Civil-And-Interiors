'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, Info, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { TRANSFORMATION_ROOMS } from '@/lib/data';

export default function RawToFinishedSection() {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<{ label: string; detail: string } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentRoom = TRANSFORMATION_ROOMS[selectedRoomIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-stone-800/80 relative" id="transformation">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-mono uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>THE DUAL CAPABILITY ENGINE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            From Raw Civil Site to <span className="text-gold-gradient">Finished Luxury</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
            Drag the tactile slider below (or use the tap buttons on mobile) to witness how raw brick masonry and laser-leveled civil channeling transform into bespoke luxury living spaces.
          </p>

          {/* Quick Tap Buttons for Mobile Ergonomics */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setSliderPosition(95)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors border ${
                sliderPosition > 70
                  ? 'bg-stone-800 border-gold/50 text-gold'
                  : 'bg-stone-900 border-stone-800 text-stone-400'
              }`}
            >
              Raw Civil View
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors border ${
                sliderPosition >= 30 && sliderPosition <= 70
                  ? 'bg-stone-800 border-gold/50 text-gold'
                  : 'bg-stone-900 border-stone-800 text-stone-400'
              }`}
            >
              50/50 Split
            </button>
            <button
              onClick={() => setSliderPosition(5)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-colors border ${
                sliderPosition < 30
                  ? 'bg-stone-800 border-gold/50 text-gold'
                  : 'bg-stone-900 border-stone-800 text-stone-400'
              }`}
            >
              Luxury Finish View
            </button>
          </div>
        </div>

        {/* Interactive Comparison Slider Container with Local Reliable Images */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 shadow-2xl">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[4/3] sm:aspect-[16/10] w-full select-none cursor-ew-resize overflow-hidden touch-pan-y"
          >
            {/* Background: Raw Civil Construction Local Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/raw-civil-site.jpg"
                alt="Raw Civil Construction Stage"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
              <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-stone-700/80 px-3 py-1 rounded-md text-[11px] font-mono text-stone-300 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span>STAGE 1: RAW CIVIL & MASONRY</span>
              </div>
            </div>

            {/* Foreground: Finished Luxury Interior (Clipped dynamically by sliderPosition) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <Image
                src="/images/finished-luxury-interior.jpg"
                alt="Finished Luxury Interior Stage"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
              <div className="absolute top-4 right-4 bg-obsidian/90 backdrop-blur-md border border-gold/40 px-3 py-1 rounded-md text-[11px] font-mono text-gold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span>STAGE 2: FINISHED BESPOKE LUXURY</span>
              </div>
            </div>

            {/* The Vertical Divider Bar & Tactile Thumb Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-white to-gold pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Tactile 48px Thumb Grip */}
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-obsidian border-2 border-gold shadow-2xl flex items-center justify-center text-gold cursor-ew-resize gold-glow-sm pointer-events-auto">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Bottom Context Strip */}
          <div className="bg-[#101014] p-4 px-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-2">
            <span className="font-mono text-stone-300">
              Verified Project Site: <strong className="text-gold">Sunny Enclave, Sector 125, Kharar</strong>
            </span>
            <span className="text-[11px] text-stone-500 font-mono">
              Touch and drag handle left/right to compare
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
