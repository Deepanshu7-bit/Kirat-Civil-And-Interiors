'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, MapPin, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const navItems = [
    { label: 'Modular Kitchen Maker', href: '/modular-kitchen-maker-mohali-kharar' },
    { label: 'POP & False Ceilings', href: '/pop-false-ceiling-contractor-mohali' },
    { label: 'Turnkey Interiors', href: '/turnkey-interior-designer-kharar-mohali' },
    { label: 'Capabilities', href: '/#services' },
    { label: 'Raw to Finished', href: '/#transformation' },
    { label: 'Cost Estimator', href: '/#calculator' },
    { label: 'Completed Sites', href: '/#portfolio' },
    { label: 'Client Reviews', href: '/#testimonials' },
    { label: 'Site Inspection', href: '/#contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-50 md:hidden"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[84%] max-w-sm bg-[#FAF8F5] border-l border-[#EADBCA] p-6 z-50 flex flex-col justify-between md:hidden shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#EADBCA]">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl border-2 border-[#EADBCA] flex items-center justify-center bg-white overflow-hidden relative shadow-sm">
                    <Image
                      src="/logos/elegant-logo-luxury-crest.jpg"
                      alt="Elegant Contractors Logo Crest"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <span className="font-cinzel font-bold text-sm text-stone-900 tracking-wider block">
                      ELEGANT CONTRACTORS
                    </span>
                    <span className="font-mono text-[9px] text-[#C5A059] tracking-widest uppercase font-semibold">
                      & INTERIORS · MOHALI
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="p-1.5 rounded-lg border border-[#EADBCA] bg-white text-stone-700 hover:text-stone-900 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-[#EADBCA] hover:bg-[#F5E9D3]/50 text-stone-800 font-mono text-xs uppercase tracking-wider transition-all"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#EADBCA] space-y-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors%20and%20Interiors,%20I%20would%20like%20to%20discuss%20a%20turnkey%20interior/civil%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-stone-800 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>WhatsApp Master Team</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full py-2.5 rounded-full border border-[#EADBCA] bg-white text-stone-800 font-mono text-xs tracking-wider flex items-center justify-center gap-2 hover:border-[#C5A059] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Direct Call: {BUSINESS_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-1.5 text-[10px] font-mono text-stone-500 justify-center pt-1">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                <span>Sector 117 ACME Heights-2 · Kharar</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
