'use client';

import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-obsidian via-[#141419] to-obsidian border-b border-stone-800/80 text-[11px] sm:text-xs text-stone-300 py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse shrink-0" />
          <span className="truncate">
            <span className="font-semibold text-stone-100">Special Offer:</span> Free 3D Interior & Civil Site Consultation across Mohali & Kharar!
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Verified Listing for Elegant Contractors and Interiors"
            className="flex items-center gap-1.5 text-gold hover:underline font-mono"
          >
            <Sparkles className="w-3 h-3 text-gold" aria-hidden="true" />
            <span className="hidden sm:inline">Google Verified Listing</span>
          </a>
          <span className="text-stone-600 hidden sm:inline">|</span>
          <span className="font-mono text-[10px] tracking-wider uppercase text-stone-300 bg-stone-900 px-2 py-0.5 rounded border border-stone-800 hidden md:inline">
            Formerly Guru Kripa Interior & Civil Work
          </span>
        </div>
      </div>
    </div>
  );
}
