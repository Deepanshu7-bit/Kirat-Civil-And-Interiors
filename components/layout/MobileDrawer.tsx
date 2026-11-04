'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, MapPin, ChevronRight, Building2, Paintbrush, UtensilsCrossed, LayoutGrid, Home, Sparkles, Calculator } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  // Primary 4 navigation links matching desktop header
  const primaryNavLinks = [
    { label: 'Civil Work', href: '/civil-construction-contractor-kharar-mohali', icon: <Building2 className="w-4 h-4 text-[#C5A059] shrink-0" /> },
    { label: 'Interior Design', href: '/turnkey-interior-designer-kharar-mohali', icon: <Paintbrush className="w-4 h-4 text-[#C5A059] shrink-0" /> },
    { label: 'Modular Kitchen', href: '/modular-kitchen-maker-mohali-kharar', icon: <UtensilsCrossed className="w-4 h-4 text-[#C5A059] shrink-0" /> },
    { label: 'Our Projects', href: '/#portfolio', icon: <LayoutGrid className="w-4 h-4 text-[#C5A059] shrink-0" /> },
  ];

  const secondaryNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'POP & False Ceilings', href: '/pop-false-ceiling-contractor-mohali' },
    { label: 'Cost Estimator', href: '/#calculator' },
    { label: 'Modular Wardrobes', href: '/modular-wardrobes-maker-mohali-kharar' },
    { label: 'Commercial Fit-Outs', href: '/commercial-interior-office-fitouts-mohali' },
    { label: 'Raw to Finished Engine', href: '/#transformation' },
    { label: 'Client Reviews', href: '/#testimonials' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 md:hidden"
          />

          {/* Slide-in Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-[88%] max-w-sm bg-[#FAF8F5] border-l border-[#EADBCA] p-4 sm:p-5 z-50 flex flex-col justify-between md:hidden shadow-2xl overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          >
            <div>
              {/* Drawer Header with New Gold Crest Logo */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#EADBCA]">
                <Link
                  href="/"
                  onClick={onClose}
                  className="flex items-center gap-2.5 focus:outline-none"
                >
                  <div className="w-9 h-9 rounded-xl border border-[#C5A059]/40 bg-black flex items-center justify-center p-0.5 overflow-hidden relative shadow-sm shrink-0">
                    <Image
                      src="/logos/elegant-logo-luxury-crest.jpg"
                      alt="Elegant Contractors Logo Crest"
                      width={36}
                      height={36}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-cinzel font-bold text-sm text-stone-900 tracking-[0.14em] leading-none uppercase">
                      ELEGANT
                    </span>
                    <span className="font-mono text-[8px] text-[#9E7D3B] tracking-[0.2em] uppercase font-semibold leading-tight mt-0.5 whitespace-nowrap">
                      CONTRACTORS &amp; INTERIORS
                    </span>
                  </div>
                </Link>

                <button
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="p-1.5 rounded-lg border border-[#EADBCA] bg-white text-stone-700 hover:text-stone-900 hover:border-[#C5A059] transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Primary Navigation Links (The 4 core items) */}
              <nav aria-label="Mobile Main Navigation" className="mt-3.5 flex flex-col gap-1.5">
                {primaryNavLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 px-3 rounded-xl border border-[#EADBCA]/60 bg-white hover:border-[#C5A059] hover:bg-[#F5E9D3]/60 text-stone-900 font-mono text-xs uppercase tracking-wider transition-all min-h-[44px] shadow-xs group"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {item.icon}
                      <span className="font-bold truncate text-stone-900">{item.label}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </Link>
                ))}
              </nav>

              {/* Secondary Navigation Links */}
              <div className="mt-3.5 pt-3 border-t border-[#EADBCA]/70">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold px-3 block mb-1">
                  More Services &amp; Tools
                </span>
                <div className="flex flex-col gap-0.5">
                  {secondaryNavLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-2 px-3 rounded-lg text-stone-700 hover:text-stone-950 hover:bg-[#F5E9D3]/40 font-mono text-[11px] uppercase tracking-wider transition-colors min-h-[38px]"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3 h-3 text-stone-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions (Call Now & Get Consultation) */}
            <div className="pt-3.5 mt-3.5 border-t border-[#EADBCA] space-y-2 shrink-0">
              {/* Call Now Action */}
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                aria-label={`Call Elegant Contractors directly at ${BUSINESS_INFO.phone}`}
                className="w-full py-2.5 px-3 rounded-xl border border-[#EADBCA] bg-white hover:border-[#C5A059] text-stone-900 font-mono text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>

              {/* Get Consultation Action */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors%20and%20Interiors,%20I%20would%20like%20to%20get%20a%20consultation%20for%20my%20interior/civil%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get Consultation with Elegant Contractors and Interiors on WhatsApp"
                className="w-full py-2.5 px-3 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-stone-800 transition-colors min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Get Consultation</span>
              </a>

              {/* Office Location Badge */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-stone-500 justify-center pt-1 truncate">
                <MapPin className="w-3 h-3 text-[#C5A059] shrink-0" />
                <span className="truncate">Sector 117 ACME Heights-2 · Kharar</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
