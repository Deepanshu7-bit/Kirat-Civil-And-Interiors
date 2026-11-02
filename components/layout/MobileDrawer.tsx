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
    { label: 'Capabilities', href: '#services' },
    { label: 'Raw to Finished', href: '#transformation' },
    { label: 'Cost Estimator', href: '#calculator' },
    { label: 'Completed Sites', href: '#portfolio' },
    { label: 'Execution Process', href: '#process' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'FAQs & Transparency', href: '#faqs' },
    { label: 'Site Inspection', href: '#contact' },
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 md:hidden"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#0d0d10] border-l border-stone-800 p-6 z-50 flex flex-col justify-between md:hidden shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg border border-gold/40 flex items-center justify-center bg-stone-900/80 overflow-hidden relative shadow-sm">
                    <Image
                      src="/logos/elegant-logo-luxury-crest.jpg"
                      alt="Elegant Contractors Logo Crest"
                      width={36}
                      height={36}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <span className="font-cinzel font-bold text-sm text-stone-100 tracking-wider block">
                      ELEGANT
                    </span>
                    <span className="font-mono text-[9px] text-stone-400 tracking-widest uppercase block">
                      CONTRACTORS & INTERIORS
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Links */}
              <nav className="mt-6 flex flex-col space-y-2">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-stone-200 hover:text-gold hover:bg-stone-900/60 transition-colors font-medium text-sm border-b border-stone-900/40"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-stone-600" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-stone-800 space-y-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors%20and%20Interiors,%20I%20would%20like%20to%20discuss%20a%20turnkey%20interior/civil%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] text-black font-semibold text-xs tracking-wider uppercase rounded-lg flex items-center justify-center gap-2 shadow-lg hover:brightness-105 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Consultation
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full py-3 bg-stone-900 border border-stone-800 text-stone-200 font-medium text-xs tracking-wider uppercase rounded-lg flex items-center justify-center gap-2 hover:border-gold/40 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                Direct Call: {BUSINESS_INFO.phone}
              </a>

              <div className="flex items-start gap-2 pt-2 text-[10px] text-stone-500 font-mono">
                <MapPin className="w-3 h-3 text-gold shrink-0 mt-0.5" />
                <span>Sector 125, Sunny Enclave Corridor, Kharar, Mohali</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
