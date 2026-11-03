'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { SlidersHorizontal, Layers } from 'lucide-react';

export default function RawToFinishedSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-[#EADBCA] relative" id="transformation">
      {/* Golden Glow Accent (#F5E9D3) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,#F5E9D3_0%,transparent_70%)] opacity-70 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>THE DUAL CAPABILITY ENGINE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-stone-900 tracking-tight">
            From Raw Civil Site to <span className="text-[#C5A059]">Furnished Master Bedroom</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed max-w-2xl mx-auto">
            Drag the tactile slider below to witness how bare masonry, plastering, and conduit carving were engineered into an architectural master suite with ambient cove lighting and bespoke woodwork.
          </p>

          {/* Quick Tap Buttons */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setSliderPosition(95)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all border cursor-pointer ${
                sliderPosition > 70
                  ? 'bg-stone-900 border-stone-900 text-[#F5E9D3] shadow'
                  : 'bg-white border-[#EADBCA] text-stone-600 hover:text-stone-900'
              }`}
            >
              Raw Civil View
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all border cursor-pointer ${
                sliderPosition >= 30 && sliderPosition <= 70
                  ? 'bg-stone-900 border-stone-900 text-[#F5E9D3] shadow'
                  : 'bg-white border-[#EADBCA] text-stone-600 hover:text-stone-900'
              }`}
            >
              50/50 Split
            </button>
            <button
              onClick={() => setSliderPosition(5)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all border cursor-pointer ${
                sliderPosition < 30
                  ? 'bg-stone-900 border-stone-900 text-[#F5E9D3] shadow'
                  : 'bg-white border-[#EADBCA] text-stone-600 hover:text-stone-900'
              }`}
            >
              Luxury Finish View
            </button>
          </div>
        </div>

        {/* Interactive Comparison Slider Container with Master Bedroom Images */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border-2 border-[#EADBCA] bg-white shadow-[0_20px_50px_rgba(245,233,211,0.9),0_5px_15px_rgba(197,160,89,0.15)]">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative aspect-[4/3] sm:aspect-[16/10] w-full select-none cursor-ew-resize overflow-hidden touch-pan-y"
          >
            {/* Background: Raw Civil Construction Master Bedroom Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/raw-master-bedroom.jpg"
                alt="Raw Civil Construction Master Bedroom Stage"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
              <div className="absolute top-4 left-4 bg-stone-950/85 backdrop-blur-md border border-[#EADBCA]/60 px-3 py-1 rounded-md text-[11px] font-mono text-stone-200 uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>STAGE 1: RAW CIVIL & MASONRY (MASTER BEDROOM)</span>
              </div>
            </div>

            {/* Foreground: Furnished Luxury Master Bedroom Image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <Image
                src="/images/furnished-master-bedroom.jpg"
                alt="Finished Bespoke Luxury Master Bedroom Stage"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
              <div className="absolute top-4 right-4 bg-stone-950/85 backdrop-blur-md border border-[#C5A059] px-3 py-1 rounded-md text-[11px] font-mono text-[#F5E9D3] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                <span>STAGE 2: FINISHED BESPOKE LUXURY BEDROOM</span>
              </div>
            </div>

            {/* The Vertical Divider Bar & Tactile Thumb Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C5A059] via-white to-[#C5A059] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div 
                role="slider"
                aria-label="Civil to Finished Interior Comparison Slider"
                aria-valuenow={sliderPosition}
                aria-valuemin={0}
                aria-valuemax={100}
                tabIndex={0}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#C5A059] shadow-xl flex items-center justify-center text-[#9E7D3B] cursor-ew-resize pointer-events-auto hover:scale-105 transition-transform"
              >
                <SlidersHorizontal className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Bottom Context Strip */}
          <div className="bg-[#FAF6EE] p-4 px-6 border-t border-[#EADBCA] flex flex-col sm:flex-row items-center justify-between text-xs text-stone-600 gap-2">
            <span className="font-mono text-stone-700">
              Verified Project Site: <strong className="text-stone-900">Sector 117 ACME Heights-2 & Kharar</strong>
            </span>
            <span className="text-[11px] text-stone-500 font-mono">
              Touch and drag handle left/right to compare transformation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
