'use client';

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#EADBCA] p-2.5 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center gap-2.5 sm:gap-3 md:hidden shadow-[0_-4px_20px_rgba(245,233,211,0.7)]">
      {/* Direct Call Button (40%) */}
      <a
        href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
        aria-label={`Call Elegant Contractors and Interiors at ${BUSINESS_INFO.phone}`}
        className="flex-1 py-3 px-3 rounded-xl bg-[#FAF8F5] border border-[#EADBCA] text-stone-900 font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:border-[#C5A059] active:scale-[0.98] transition-all shadow-sm min-h-[44px]"
      >
        <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" aria-hidden="true" />
        <span>Call</span>
      </a>

      {/* WhatsApp Quote Button (60%) */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors%20and%20Interiors,%20I%20am%20looking%20for%20an%20Interior%20/%20Civil%20estimate%20for%20my%20property.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Elegant Contractors and Interiors on WhatsApp"
        className="flex-[1.6] py-3 px-3 rounded-xl bg-[#25D366] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg active:scale-[0.98] transition-all relative overflow-hidden min-h-[44px]"
      >
        <span className="w-2 h-2 rounded-full bg-white animate-ping absolute right-3" aria-hidden="true" />
        <MessageSquare className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
        <span>WhatsApp Quote</span>
      </a>
    </div>
  );
}
