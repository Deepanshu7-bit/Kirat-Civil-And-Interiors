'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Calculator, ChevronRight, Play, Pause, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-6 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] cad-grid">
      {/* Ambient Golden Glow Spheres (#F5E9D3) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[750px] h-[400px] sm:h-[750px] bg-[radial-gradient(circle_at_center,#F5E9D3_0%,rgba(245,233,211,0.5)_50%,transparent_75%)] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Brand Statement & Quick Conversion */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          {/* Prominent Verification Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#EADBCA] bg-[#F5E9D3]/80 backdrop-blur-sm text-xs font-mono text-stone-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-[#9E7D3B] font-semibold uppercase tracking-wider">MOHALI · KHARAR TRICITY</span>
            <span className="text-stone-400 hidden sm:inline">|</span>
            <span className="text-stone-600 hidden sm:inline font-sans">SECTOR 117 · ACME HEIGHTS-2</span>
          </div>

          {/* Business Name & Main Headline */}
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#9E7D3B] uppercase block font-semibold">
              ELEGANT CONTRACTORS AND INTERIORS
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-cinzel font-bold tracking-tight text-stone-900 leading-[1.18]">
              From Solid Civil Foundations to <span className="text-[#C5A059] block sm:inline">Luxury Living.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
            Eliminate contractor conflicts and finger-pointing. We manage heavy <strong>structural civil construction</strong> and <strong>bespoke turnkey interiors</strong> under one master team across Mohali, Kharar, and Sunny Enclave.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <a
              href="#calculator"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-stone-900 text-[#F5E9D3] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-stone-800 transition-all duration-300 shadow-lg gold-glow-sm group"
            >
              <Calculator className="w-4 h-4 text-[#C5A059]" />
              <span>Calculate Project Cost</span>
              <ChevronRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#transformation"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#EADBCA] text-stone-800 font-mono text-xs tracking-wider uppercase hover:border-[#C5A059] hover:bg-white transition-all duration-300 bg-white/70 flex items-center justify-center gap-2 shadow-sm"
            >
              <span>See Master Bedroom Transformation</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
            </a>
          </div>

          {/* Trust Metrics Bar */}
          <div className="pt-6 border-t border-[#EADBCA] grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900 block">180+</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-stone-500 uppercase tracking-wider block">Delivered Sites</span>
            </div>
            <div className="text-center lg:text-left border-x border-[#EADBCA] px-2 sm:px-4">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#C5A059] block">10 Yrs</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-stone-500 uppercase tracking-wider block">Marine Ply Warranty</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900 block">45 Days</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-stone-500 uppercase tracking-wider block">Move-In Guarantee</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Main Video Showcase */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-lg aspect-[16/10] sm:aspect-[4/3] rounded-2xl p-2 border-2 border-[#EADBCA] bg-white shadow-[0_20px_50px_rgba(245,233,211,0.9),0_5px_15px_rgba(197,160,89,0.15)] overflow-hidden group">
            {/* Ambient Gold Glow Halo behind video */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#F5E9D3_0%,transparent_75%)] opacity-80 pointer-events-none" />

            {/* Main Video Element */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-stone-900 border border-[#EADBCA]">
              <video
                ref={videoRef}
                src="/videos/hero-main.mp4"
                poster="/images/finished-luxury-interior.jpg"
                preload="metadata"
                playsInline
                autoPlay
                loop
                muted={isMuted}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
              />

              {/* Floating Top Left Badge */}
              <div className="absolute top-3 left-3 bg-stone-950/80 border border-[#EADBCA]/60 px-3 py-1 rounded-lg text-xs font-mono text-[#F5E9D3] backdrop-blur-md shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase">OUR CRAFT IN ACTION</span>
              </div>

              {/* Video Play/Pause & Sound Controls */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <button
                  onClick={toggleSound}
                  aria-label={isMuted ? 'Unmute main video' : 'Mute main video'}
                  className="w-8 h-8 rounded-full bg-stone-950/80 hover:bg-stone-900 border border-[#EADBCA]/60 text-[#F5E9D3] flex items-center justify-center backdrop-blur-md shadow-md transition-all cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#C5A059]" />}
                </button>
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="w-8 h-8 rounded-full bg-[#C5A059] hover:bg-[#B38E46] text-stone-950 font-bold flex items-center justify-center shadow-md transition-all cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                </button>
              </div>

              {/* Floating Bottom Left Brand Pill */}
              <div className="absolute bottom-3 left-3 bg-stone-950/85 border border-[#EADBCA]/40 px-3 py-1.5 rounded-lg backdrop-blur-md shadow-lg flex items-center gap-2">
                <div className="w-5 h-5 rounded-md overflow-hidden relative">
                  <Image
                    src="/logos/elegant-logo-luxury-crest.jpg"
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-cinzel text-[10px] sm:text-[11px] font-bold text-[#F5E9D3] tracking-wider uppercase">
                  ELEGANT CONTRACTORS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
