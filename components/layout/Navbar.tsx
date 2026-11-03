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
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EADBCA] py-2.5 shadow-[0_4px_25px_rgba(245,233,211,0.6)]'
            : 'bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#EADBCA]/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Prominent Business Name */}
          <Link 
            href="/" 
            aria-label="Elegant Contractors and Interiors Homepage" 
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border-2 border-[#EADBCA] flex items-center justify-center bg-white p-0.5 shadow-sm group-hover:border-[#C5A059] group-hover:shadow-[0_0_15px_#F5E9D3] transition-all duration-300 relative overflow-hidden shrink-0">
              <Image
                src="/logos/elegant-logo-luxury-crest.jpg"
                alt="Elegant Contractors and Interiors Crest"
                width={48}
                height={48}
                priority
                className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel font-bold tracking-[0.08em] text-sm sm:text-base text-stone-900 uppercase block">
                  ELEGANT CONTRACTORS
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#9E7D3B] bg-[#F5E9D3] px-1.5 py-0.5 rounded border border-[#EADBCA] hidden sm:inline-block font-semibold">
                  TURNKEY
                </span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-[#C5A059] font-semibold uppercase block">
                & INTERIORS · CIVIL TO LUXURY HANDOVER
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            <Link
              href="/modular-kitchen-maker-mohali-kharar"
              className="font-mono text-xs tracking-wider uppercase text-stone-700 hover:text-[#9E7D3B] transition-colors relative py-1 group font-semibold"
            >
              Kitchens
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/pop-false-ceiling-contractor-mohali"
              className="font-mono text-xs tracking-wider uppercase text-stone-700 hover:text-[#9E7D3B] transition-colors relative py-1 group font-semibold"
            >
              POP Ceilings
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="/turnkey-interior-designer-kharar-mohali"
              className="font-mono text-xs tracking-wider uppercase text-stone-700 hover:text-[#9E7D3B] transition-colors relative py-1 group font-semibold"
            >
              Turnkey Design
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </Link>
            <a
              href="/#calculator"
              className="font-mono text-xs tracking-wider uppercase text-stone-700 hover:text-[#9E7D3B] transition-colors relative py-1 group font-semibold"
            >
              Estimator
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="/#portfolio"
              className="font-mono text-xs tracking-wider uppercase text-stone-700 hover:text-[#9E7D3B] transition-colors relative py-1 group font-semibold"
            >
              Sites
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
          </nav>

          {/* Right Header CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
              aria-label={`Call ${BUSINESS_INFO.phone}`}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#EADBCA] bg-white text-stone-800 font-mono text-xs hover:border-[#C5A059] transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors%20and%20Interiors,%20I%20want%20to%20discuss%20an%20Interior%20/%20Civil%20project%20in%20Mohali/Kharar.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Consultation with Elegant Contractors"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-stone-800 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_#F5E9D3] group"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline font-semibold">Consult Master Team</span>
              <span className="sm:hidden font-semibold">Chat</span>
            </a>

            <button
              onClick={() => setMobileDrawerOpen(true)}
              aria-label="Open Mobile Navigation Menu"
              className="md:hidden p-2 rounded-lg border border-[#EADBCA] bg-white text-stone-800 hover:border-[#C5A059] transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5 text-stone-800" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </>
  );
}
