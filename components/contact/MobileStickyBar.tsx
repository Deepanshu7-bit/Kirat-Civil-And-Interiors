'use client';

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#09090b]/95 backdrop-blur-lg border-t border-stone-800 p-2.5 px-4 flex items-center gap-3 md:hidden shadow-2xl">
      {/* Direct Call Button (40%) */}
      <a
        href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
        className="flex-1 py-3 px-3 rounded-xl bg-stone-900 border border-stone-700/80 text-stone-200 font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:border-gold active:scale-98 transition-all"
      >
        <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
        <span>Call</span>
      </a>

      {/* WhatsApp Quote Button (60%) */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors%20and%20Interiors,%20I%20am%20looking%20for%20an%20Interior%20/%20Civil%20estimate%20for%20my%20property.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.6] py-3 px-3 rounded-xl bg-[#25D366] text-black font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg active:scale-98 transition-all relative overflow-hidden"
      >
        <span className="w-2 h-2 rounded-full bg-black animate-ping absolute right-3" />
        <MessageSquare className="w-4 h-4 text-black shrink-0" />
        <span>WhatsApp Quote</span>
      </a>
    </div>
  );
}
