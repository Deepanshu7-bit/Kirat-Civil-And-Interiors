'use client';

import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure muted property is explicitly set for mobile autoplay policies
    if (mobileVideoRef.current) mobileVideoRef.current.muted = true;
    if (desktopVideoRef.current) desktopVideoRef.current.muted = true;

    const handleViewportVideo = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        if (mobileVideoRef.current && mobileVideoRef.current.paused) {
          mobileVideoRef.current.play().catch(() => {});
        }
        if (desktopVideoRef.current && !desktopVideoRef.current.paused) {
          desktopVideoRef.current.pause();
        }
      } else {
        if (desktopVideoRef.current && desktopVideoRef.current.paused) {
          desktopVideoRef.current.play().catch(() => {});
        }
        if (mobileVideoRef.current && !mobileVideoRef.current.paused) {
          mobileVideoRef.current.pause();
        }
      }
    };

    handleViewportVideo();
    window.addEventListener('resize', handleViewportVideo);
    return () => window.removeEventListener('resize', handleViewportVideo);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[100vh] w-full overflow-hidden bg-stone-900 select-none flex items-end">
      {/* ============================================================== */}
      {/* 1. Video Background: Mobile In-Frame vs Desktop Landscape       */}
      {/* ============================================================== */}
      {/* Mobile Video (< 768px): Vertical mobile frame sequence         */}
      <video
        ref={mobileVideoRef}
        src="/videos/hero-mobile.mp4"
        poster="/images/finished-luxury-interior.jpg"
        preload="auto"
        playsInline
        autoPlay
        loop
        muted
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-center pointer-events-none brightness-110 contrast-[1.02] saturate-[1.05]"
      />

      {/* Big Screen Video (>= 768px): Desktop landscape showcase        */}
      <video
        ref={desktopVideoRef}
        src="/videos/hero-main.mp4"
        poster="/images/finished-luxury-interior.jpg"
        preload="auto"
        playsInline
        autoPlay
        loop
        muted
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center sm:scale-[1.03] sm:origin-center pointer-events-none brightness-110 contrast-[1.02] saturate-[1.05]"
      />

      {/* ============================================================== */}
      {/* 2. Feather-Light Shading (Keeps Video Bright & Vibrant)        */}
      {/* ============================================================== */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* ============================================================== */}
      {/* 3. Ultra-Minimal Content (Woods Decor Clean Luxury Aesthetic)  */}
      {/* ============================================================== */}
      <div className="relative z-10 max-w-xl px-5 sm:px-10 lg:px-16 pb-24 sm:pb-20 text-left">
        <h1 className="font-cormorant font-bold text-4xl sm:text-6xl lg:text-7xl text-white leading-[1.04] tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
          Luxury Redefined
        </h1>

        <p className="font-sans text-xs sm:text-sm text-[#F5E9D3] tracking-widest uppercase font-normal mt-2 sm:mt-2.5 mb-3.5 sm:mb-4 drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
          Turnkey Civil &amp; Bespoke Interiors
        </p>

        <a
          href="#transformation"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans tracking-wide text-white pb-0.5 border-b border-[#C5A059] hover:text-[#C5A059] active:opacity-75 transition-all group cursor-pointer drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]"
        >
          <span>Explore Transformation</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
