'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MessageSquare, Phone, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { label: 'Turnkey Interior Design', href: '/turnkey-interior-designer-kharar-mohali' },
    { label: 'Custom Modular Kitchens', href: '/modular-kitchen-maker-mohali-kharar' },
    { label: 'Architectural False Ceilings', href: '/pop-false-ceiling-contractor-mohali' },
    { label: 'Civil Construction & Alterations', href: '/civil-construction-contractor-kharar-mohali' },
    { label: 'Modular Wardrobes & Millwork', href: '/modular-wardrobes-maker-mohali-kharar' },
    { label: 'Commercial Office Fit-Outs', href: '/commercial-interior-office-fitouts-mohali' },
  ];

  const isDarkHero = pathname === '/' && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-16 sm:h-[76px] flex items-center ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EADBCA] shadow-[0_4px_25px_rgba(245,233,211,0.6)]'
            : isDarkHero
            ? 'bg-gradient-to-b from-stone-950/50 to-transparent border-b-0'
            : 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EADBCA]/60'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* ========================================================= */}
          {/* 1. Left: Brand Identity & Logo Crest                      */}
          {/* ========================================================= */}
          <Link
            href="/"
            aria-label="Elegant Spaces – Contractors & Interiors Homepage"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-[#C5A059]/40 bg-stone-950 flex items-center justify-center p-0.5 shadow-sm group-hover:border-[#C5A059] group-hover:shadow-[0_0_15px_rgba(197,160,89,0.35)] transition-all duration-300 relative overflow-hidden shrink-0">
              <Image
                src="/logos/elegant-logo-luxury-crest.jpg"
                alt="Elegant Spaces Crest"
                width={44}
                height={44}
                priority
                className="object-contain w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span
                className={`font-cinzel font-bold text-sm sm:text-base tracking-[0.16em] leading-none uppercase transition-colors ${
                  isDarkHero ? 'text-white group-hover:text-[#F5E9D3]' : 'text-stone-900 group-hover:text-[#9E7D3B]'
                }`}
              >
                ELEGANT SPACES
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] text-[#C5A059] tracking-[0.22em] uppercase font-semibold leading-tight mt-1 whitespace-nowrap">
                CONTRACTORS &amp; INTERIORS
              </span>
            </div>
          </Link>

          {/* ========================================================= */}
          {/* 2. Center: 5 Core Nav Links (Home, About, Services, Gallery, Contact) */}
          {/* ========================================================= */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center justify-center gap-6 lg:gap-8"
          >
            {/* Home */}
            <Link
              href="/"
              className={`font-sans text-xs tracking-wider uppercase transition-colors relative py-1.5 font-medium ${
                pathname === '/'
                  ? 'text-[#C5A059] font-semibold'
                  : isDarkHero
                  ? 'text-stone-200 hover:text-white'
                  : 'text-stone-800 hover:text-[#9E7D3B]'
              }`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`font-sans text-xs tracking-wider uppercase transition-colors relative py-1.5 font-medium ${
                pathname === '/about'
                  ? 'text-[#C5A059] font-semibold'
                  : isDarkHero
                  ? 'text-stone-200 hover:text-white'
                  : 'text-stone-800 hover:text-[#9E7D3B]'
              }`}
            >
              About
            </Link>

            {/* Services with Hover Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => setServicesMenuOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesMenuOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 font-sans text-xs tracking-wider uppercase transition-colors py-1.5 font-medium ${
                  pathname.includes('contractor') || pathname.includes('interior') || pathname.includes('kitchen') || pathname.includes('wardrobes')
                    ? 'text-[#C5A059] font-semibold'
                    : isDarkHero
                    ? 'text-stone-200 hover:text-white'
                    : 'text-stone-800 hover:text-[#9E7D3B]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#C5A059] transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              {servicesMenuOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-[#FAF8F5] border border-[#EADBCA] rounded-2xl p-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] space-y-1">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-3.5 py-2 rounded-xl text-xs font-sans text-stone-800 hover:bg-[#F5E9D3]/60 hover:text-[#9E7D3B] transition-colors font-medium"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Design Gallery */}
            <Link
              href="/design-gallery"
              className={`font-sans text-xs tracking-wider uppercase transition-colors relative py-1.5 font-medium ${
                pathname.startsWith('/design-gallery')
                  ? 'text-[#C5A059] font-semibold'
                  : isDarkHero
                  ? 'text-stone-200 hover:text-white'
                  : 'text-stone-800 hover:text-[#9E7D3B]'
              }`}
            >
              Design Gallery
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`font-sans text-xs tracking-wider uppercase transition-colors relative py-1.5 font-medium ${
                pathname === '/contact'
                  ? 'text-[#C5A059] font-semibold'
                  : isDarkHero
                  ? 'text-stone-200 hover:text-white'
                  : 'text-stone-800 hover:text-[#9E7D3B]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* ========================================================= */}
          {/* 3. Right: Action Button & Phone                           */}
          {/* ========================================================= */}
          <div className="flex items-center gap-3 sm:gap-3.5 shrink-0">
            {/* Direct Phone Call */}
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
              aria-label={`Call Elegant Spaces at ${BUSINESS_INFO.phone}`}
              className={`hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-mono transition-all font-medium whitespace-nowrap ${
                isDarkHero
                  ? 'border-white/20 bg-white/10 text-white hover:border-[#C5A059] hover:bg-white/20'
                  : 'border-[#EADBCA] bg-white text-stone-800 hover:border-[#C5A059] hover:bg-[#F5E9D3]/40'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" aria-hidden="true" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* Distinct "Get a Quote" CTA Button */}
            <Link
              href="/contact"
              aria-label="Get a Quote for Your Project"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs tracking-wider uppercase font-semibold hover:bg-[#d6b36a] transition-all shadow-md group shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 text-stone-950" aria-hidden="true" />
              <span className="whitespace-nowrap">Get a Quote</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileDrawerOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileDrawerOpen}
              className={`md:hidden p-2 rounded-xl border transition-colors cursor-pointer shrink-0 ${
                isDarkHero
                  ? 'border-white/20 bg-white/10 text-white'
                  : 'border-[#EADBCA] bg-white text-stone-800'
              }`}
            >
              <Menu className="w-5 h-5" />
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
