'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exactly the 4 core navigation items requested
  const navLinks = [
    { label: 'Civil Work', href: '/civil-construction-contractor-kharar-mohali' },
    { label: 'Interior Design', href: '/turnkey-interior-designer-kharar-mohali' },
    { label: 'Modular Kitchen', href: '/modular-kitchen-maker-mohali-kharar' },
    { label: 'Our Projects', href: '/#portfolio' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-16 sm:h-[72px] flex items-center ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EADBCA] shadow-[0_4px_20px_rgba(245,233,211,0.5)]'
            : 'bg-[#FAF8F5]/85 backdrop-blur-md border-b border-[#EADBCA]/50'
        }`}
      >
        {/* Even padding on both sides (px-6 sm:px-8 lg:px-12) */}
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* ========================================================= */}
          {/* 1. Left: Business Name & New Gold Crest Logo              */}
          {/* ========================================================= */}
          <Link
            href="/"
            aria-label="Elegant Contractors and Interiors Homepage"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#C5A059]/40 bg-black flex items-center justify-center p-0.5 shadow-sm group-hover:border-[#C5A059] group-hover:shadow-[0_0_15px_rgba(197,160,89,0.35)] transition-all duration-300 relative overflow-hidden shrink-0">
              <Image
                src="/logos/elegant-logo-luxury-crest.jpg"
                alt="Elegant Contractors and Interiors Logo"
                width={44}
                height={44}
                priority
                className="object-contain w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-cinzel font-bold text-sm sm:text-base text-stone-900 tracking-[0.14em] leading-none uppercase group-hover:text-[#9E7D3B] transition-colors">
                ELEGANT
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] text-[#9E7D3B] tracking-[0.2em] uppercase font-semibold leading-tight mt-1 whitespace-nowrap">
                CONTRACTORS &amp; INTERIORS
              </span>
            </div>
          </Link>

          {/* ========================================================= */}
          {/* 2. Center: The 4 Primary Navigation Links (Even Gaps)      */}
          {/* ========================================================= */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center justify-center gap-7 lg:gap-9 xl:gap-11"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-wider uppercase text-stone-800 hover:text-[#9E7D3B] transition-colors relative py-1.5 font-semibold group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* ========================================================= */}
          {/* 3. Right: The Two Action Buttons                          */}
          {/* ========================================================= */}
          <div className="flex items-center gap-3 sm:gap-3.5 shrink-0">
            {/* Button 1: Direct Phone Call */}
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
              aria-label={`Call Elegant Contractors at ${BUSINESS_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#EADBCA] bg-white/90 text-stone-800 font-mono text-xs hover:border-[#C5A059] hover:bg-[#F5E9D3]/40 transition-all shadow-sm font-semibold whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" aria-hidden="true" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* Button 2: Get Consultation */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors%20and%20Interiors,%20I%20would%20like%20to%20get%20a%20consultation%20for%20my%20interior/civil%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Consultation with Elegant Contractors and Interiors"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs tracking-wider uppercase hover:bg-stone-800 hover:text-white transition-all shadow-md group shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" aria-hidden="true" />
              <span className="font-semibold whitespace-nowrap">Get Consultation</span>
            </a>

            {/* Mobile Hamburger Button (Visible on screens < md) */}
            <button
              onClick={() => setMobileDrawerOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileDrawerOpen}
              className="md:hidden p-2 rounded-xl border border-[#EADBCA] bg-white text-stone-800 hover:border-[#C5A059] hover:bg-[#F5E9D3]/40 transition-colors cursor-pointer shrink-0"
            >
              <Menu className="w-5 h-5 text-stone-800" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </>
  );
}
