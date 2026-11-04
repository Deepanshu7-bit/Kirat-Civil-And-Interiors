'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#F5E9D3] border-b border-[#EADBCA] text-[11px] sm:text-xs text-stone-800 py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 text-[#9E7D3B] shrink-0" />
          <span className="truncate">
            <span className="font-bold text-stone-900">Complimentary 3D Consultation:</span> Turnkey Civil & Bespoke Interiors across Mohali & Kharar!
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Verified Listing for Elegant Contractors and Interiors"
            className="flex items-center gap-1.5 text-[#9E7D3B] hover:text-stone-900 font-mono font-semibold hover:underline"
          >
            <Sparkles className="w-3 h-3 text-[#C5A059]" aria-hidden="true" />
            <span className="hidden sm:inline">Google Verified Profile</span>
          </a>
          <span className="text-stone-400 hidden sm:inline">|</span>
          <span className="font-mono text-[10px] tracking-wider uppercase text-stone-700 bg-white/80 px-2 py-0.5 rounded border border-[#EADBCA] hidden md:inline">
            Sector 117 · ACME Heights-2 · Mohali
          </span>
        </div>
      </div>
    </div>
  );
}
