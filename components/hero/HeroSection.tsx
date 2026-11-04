'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Defer video mount slightly so initial LCP poster image & critical content load immediately
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-screen w-full overflow-hidden bg-stone-950 flex items-end">
      {/* ============================================================== */}
      {/* 1. Fast Background: Luminous Full-Screen Video + WebP Poster   */}
      {/* ============================================================== */}
      <div className="absolute inset-0 w-full h-full">
        {/* Instant High-Priority LCP Image */}
        <Image
          src="/images/finished-luxury-interior.webp"
          alt="Elegant Spaces – Turnkey Interior Design and Construction in Mohali"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-center brightness-110 contrast-[1.02] transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        />

        {/* Dynamic Video: Bright, vibrant, full-screen playback */}
        {shouldLoadVideo && (
          <video
            ref={videoRef}
            src="/videos/hero-main.mp4"
            poster="/images/finished-luxury-interior.webp"
            preload="none"
            playsInline
            autoPlay
            loop
            muted
            onPlaying={() => setVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none brightness-115 contrast-[1.02]"
          />
        )}

        {/* Soft, gentle bottom gradient for text contrast (keeps the rest of the video bright & vibrant) */}
        <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent pointer-events-none" />
      </div>

      {/* ============================================================== */}
      {/* 2. Compact, Refined Hero Content (Lifted Above Bottom)         */}
      {/* ============================================================== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-20 sm:pb-28 lg:pb-32 pt-28">
        <div className="max-w-xl">
          {/* Subtle Location Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/50 backdrop-blur-md border border-[#EADBCA]/30 text-[#F5E9D3] text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
            <span>Mohali · Kharar · Tricity</span>
          </div>

          {/* Business Name (Increased Size) */}
          <h1 className="font-cinzel font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] text-white tracking-[0.14em] uppercase leading-tight drop-shadow-lg">
            ELEGANT SPACES
          </h1>

          {/* Subtitle / Core Identity */}
          <p className="font-mono text-xs sm:text-sm text-[#C5A059] tracking-[0.24em] uppercase font-semibold mt-1">
            Contractors &amp; Interiors
          </p>

          {/* Small, Refined Action Links */}
          <div className="mt-5 flex items-center gap-3">
            <Link
              href="/design-gallery"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase hover:bg-[#d6b36a] transition-all shadow-sm group"
            >
              <span>View Designs</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-950/40 hover:bg-stone-900/60 backdrop-blur-md border border-white/20 text-white font-sans text-xs sm:text-sm font-medium tracking-wider uppercase transition-all"
            >
              <span>Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
