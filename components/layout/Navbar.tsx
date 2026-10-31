'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, MessageSquare, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-stone-800/80 py-3 shadow-xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-lg border border-gold/40 flex items-center justify-center bg-stone-900/80 group-hover:border-gold transition-all duration-300 relative overflow-hidden shadow-sm">
              <Image
                src="/logos/elegant-logo-luxury-crest.jpg"
                alt="Elegant Contractors and Interiors Crest"
                width={40}
                height={40}
                priority
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel font-bold tracking-[0.2em] text-sm sm:text-base text-stone-100 uppercase block">
                  ELEGANT
                </span>
                <span className="text-[9px] font-mono tracking-widest text-gold bg-gold/10 px-1.5 py-0.2 rounded border border-gold/20 hidden sm:inline-block">
                  TURNKEY
                </span>
              </div>
              <span className="font-mono text-[9px] tracking-[0.25em] text-stone-400 uppercase block">
                CONTRACTORS & INTERIORS · MOHALI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            <a
              href="#services"
              className="font-mono text-xs tracking-wider uppercase text-stone-300 hover:text-gold transition-colors relative py-1 group"
            >
              Capabilities
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#transformation"
              className="font-mono text-xs tracking-wider uppercase text-stone-300 hover:text-gold transition-colors relative py-1 group"
            >
              Raw to Finished
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#calculator"
              className="font-mono text-xs tracking-wider uppercase text-stone-300 hover:text-gold transition-colors relative py-1 group"
            >
              Cost Estimator
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#portfolio"
              className="font-mono text-xs tracking-wider uppercase text-stone-300 hover:text-gold transition-colors relative py-1 group"
            >
              Sites
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#process"
              className="font-mono text-xs tracking-wider uppercase text-stone-300 hover:text-gold transition-colors relative py-1 group"
            >
              Process
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#testimonials"
              className="font-mono text-xs tracking-wider uppercase text-stone-300 hover:text-gold transition-colors relative py-1 group"
            >
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors%20and%20Interiors,%20I%20want%20to%20discuss%20an%20Interior%20/%20Civil%20project%20in%20Mohali/Kharar.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-xs font-mono tracking-wider uppercase text-stone-100 bg-gold/10 hover:bg-gold hover:text-black transition-all duration-300 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-gold group-hover:text-black" />
              <span>WhatsApp Estimate</span>
            </a>

            <button
              onClick={() => setMobileDrawerOpen(true)}
              aria-label="Open mobile navigation"
              className="p-2 rounded border border-stone-800 text-stone-300 hover:text-gold hover:border-gold/40 md:hidden bg-stone-900/60"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer */}
      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </>
  );
}
