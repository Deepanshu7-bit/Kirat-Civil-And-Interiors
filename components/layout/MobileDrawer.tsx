'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, MapPin, ChevronRight, Compass, LayoutGrid, SunMedium, Building2, Maximize, Briefcase, Info, Images } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const mainNav = [
    { label: 'Home', href: '/', icon: <Compass className="w-4 h-4 text-[#C5A059]" /> },
    { label: 'About Us', href: '/about', icon: <Info className="w-4 h-4 text-[#C5A059]" /> },
    { label: 'Design Gallery', href: '/design-gallery', icon: <Images className="w-4 h-4 text-[#C5A059]" /> },
    { label: 'Contact', href: '/contact', icon: <MessageSquare className="w-4 h-4 text-[#C5A059]" /> },
  ];

  const serviceNav = [
    { label: 'Turnkey Interior Design', href: '/turnkey-interior-designer-kharar-mohali', icon: <Compass className="w-3.5 h-3.5 text-[#C5A059]" /> },
    { label: 'Modular Kitchens', href: '/modular-kitchen-maker-mohali-kharar', icon: <LayoutGrid className="w-3.5 h-3.5 text-[#C5A059]" /> },
    { label: 'Architectural False Ceilings', href: '/pop-false-ceiling-contractor-mohali', icon: <SunMedium className="w-3.5 h-3.5 text-[#C5A059]" /> },
    { label: 'Civil Construction & Remodels', href: '/civil-construction-contractor-kharar-mohali', icon: <Building2 className="w-3.5 h-3.5 text-[#C5A059]" /> },
    { label: 'Modular Wardrobes & Millwork', href: '/modular-wardrobes-maker-mohali-kharar', icon: <Maximize className="w-3.5 h-3.5 text-[#C5A059]" /> },
    { label: 'Commercial Office Fit-Outs', href: '/commercial-interior-office-fitouts-mohali', icon: <Briefcase className="w-3.5 h-3.5 text-[#C5A059]" /> },
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
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm z-[100] md:hidden"
          />

          {/* Slide-in Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="fixed top-0 right-0 bottom-0 w-[88%] max-w-sm bg-[#FAF8F5] border-l border-[#EADBCA] p-5 z-[100] flex flex-col justify-between md:hidden shadow-2xl overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]"
          >
            <div>
              {/* Drawer Header with Logo Crest */}
              <div className="flex items-center justify-between pb-4 border-b border-[#EADBCA]">
                <Link
                  href="/"
                  onClick={onClose}
                  className="flex items-center gap-2.5 focus:outline-none"
                >
                  <div className="w-9 h-9 rounded-xl border border-[#C5A059]/40 bg-stone-950 flex items-center justify-center p-0.5 overflow-hidden relative shadow-sm shrink-0">
                    <Image
                      src="/logos/elegant-logo-luxury-crest.jpg"
                      alt="Elegant Spaces Logo Crest"
                      width={36}
                      height={36}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-cinzel font-bold text-sm text-stone-900 tracking-[0.14em] leading-none uppercase">
                      ELEGANT SPACES
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

              {/* Main Navigation Links */}
              <nav aria-label="Mobile Main Navigation" className="mt-4 flex flex-col gap-1.5">
                {mainNav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl border border-[#EADBCA]/60 bg-white hover:border-[#C5A059] hover:bg-[#F5E9D3]/40 text-stone-900 font-sans text-xs uppercase tracking-wider font-semibold transition-all min-h-[46px] shadow-xs group"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {item.icon}
                      <span className="truncate">{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </Link>
                ))}
              </nav>

              {/* Services Navigation Section */}
              <div className="mt-4 pt-3.5 border-t border-[#EADBCA]">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9E7D3B] font-semibold px-2 block mb-2">
                  Our Services
                </span>
                <div className="flex flex-col gap-1">
                  {serviceNav.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg text-stone-700 hover:text-stone-950 hover:bg-[#F5E9D3]/40 font-sans text-xs transition-colors min-h-[40px]"
                    >
                      <div className="flex items-center gap-2 truncate">
                        {s.icon}
                        <span className="truncate font-medium">{s.label}</span>
                      </div>
                      <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 mt-4 border-t border-[#EADBCA] space-y-2.5 shrink-0">
              {/* Primary "Get a Quote" */}
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full py-3 px-4 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-[#d6b36a] transition-all min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-stone-950" />
                <span>Get a Project Quote</span>
              </Link>

              {/* Call Now */}
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                aria-label={`Call Elegant Spaces directly at ${BUSINESS_INFO.phone}`}
                className="w-full py-2.5 px-3 rounded-xl border border-[#EADBCA] bg-white hover:border-[#C5A059] text-stone-900 font-mono text-xs font-medium tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all min-h-[42px]"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>Call: {BUSINESS_INFO.phone}</span>
              </a>

              {/* Tricity Service Area Tag */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-stone-500 justify-center pt-1 truncate">
                <MapPin className="w-3 h-3 text-[#C5A059] shrink-0" />
                <span className="truncate">Mohali · Kharar · Chandigarh Tricity</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
