'use client';

import React from 'react';
import Image from 'next/image';
import { Calculator, ChevronRight, Shield, Compass, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 cad-grid">
      {/* Background Radial Gold Glow - GPU Accelerated Gradient (No Heavy Blur CPU Cost) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & Value Proposition */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* CAD Coordinates & Verified Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-800 bg-stone-900/80 backdrop-blur-sm text-xs font-mono text-stone-300">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold font-semibold uppercase tracking-wider">MOHALI · KHARAR TRICITY</span>
            <span className="text-stone-600 hidden sm:inline">|</span>
            <span className="text-stone-400 hidden sm:inline">LAT 30.7316° N · LON 76.6537° E</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-bold tracking-tight text-stone-100 leading-[1.15]">
            From Solid Civil Foundations to <span className="text-gold-gradient block sm:inline">Luxury Living.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-stone-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
            Eliminate contractor conflicts and delayed handovers. We engineer heavy <strong>civil construction</strong> and execute <strong>bespoke turnkey interiors</strong> under one accountable master team across Kharar, Sunny Enclave, and Mohali.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <a
              href="#calculator"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gold text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#e8cf78] transition-all duration-300 shadow-lg gold-glow-sm group"
            >
              <Calculator className="w-4 h-4 text-black" />
              <span>Calculate Project Cost</span>
              <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#transformation"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-stone-700/80 text-stone-200 font-mono text-xs tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300 bg-stone-900/40 flex items-center justify-center gap-2"
            >
              <span>Explore Raw to Finished</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Metrics */}
          <div className="pt-8 border-t border-stone-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-stone-100 block">180+</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-stone-400 uppercase tracking-wider block">Delivered Sites</span>
            </div>
            <div className="text-center lg:text-left border-x border-stone-800/80 px-2 sm:px-4">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-gold block">10 Yrs</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-stone-400 uppercase tracking-wider block">Marine Warranty</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-stone-100 block">45 Days</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-stone-400 uppercase tracking-wider block">Guaranteed Move-In</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Visual Centerpiece */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-md sm:max-w-lg aspect-square rounded-2xl p-2 border border-stone-800/80 bg-gradient-to-b from-stone-900/60 to-obsidian/90 shadow-2xl overflow-hidden group">
            {/* Ambient Gold Glow Halo behind image */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_75%)] rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />

            {/* Main 3D Brand Artwork */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-stone-700/50">
              <Image
                src="/logos/elegant-logo-luxury-crest.jpg"
                alt="Elegant Contractors and Interiors Luxury Architectural Crest & Insignia"
                fill
                priority
                quality={75}
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 450px, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating CAD Badge Top Right */}
            <div className="absolute top-4 right-4 bg-obsidian/90 border border-stone-700 px-3 py-1.5 rounded-lg text-xs font-mono text-stone-200 backdrop-blur-md shadow-lg flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-gold" />
              <span>CONTRACTORS + INTERIORS</span>
            </div>

            {/* Floating Verification Badge Bottom Left */}
            <div className="absolute bottom-4 left-4 right-4 bg-obsidian/95 border border-gold/30 p-3 rounded-xl backdrop-blur-md shadow-xl flex items-center justify-between">
              <div>
                <span className="font-cinzel text-xs font-bold text-stone-100 block">ELEGANT CONTRACTORS & INTERIORS</span>
                <span className="text-[10px] font-mono text-stone-400 block">Single Point Accountability</span>
              </div>
              <div className="flex items-center gap-1 bg-gold/10 px-2 py-1 rounded border border-gold/30 text-gold text-xs font-mono">
                <Shield className="w-3.5 h-3.5" />
                <span>BWP 710</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
