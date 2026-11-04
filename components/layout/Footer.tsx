'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, Phone, MessageSquare, MapPin, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EADBCA] pt-12 sm:pt-16 pb-28 md:pb-12 text-stone-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#EADBCA]">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl border border-[#C5A059]/40 flex items-center justify-center bg-black p-0.5 overflow-hidden relative shadow-sm">
                <Image
                  src="/logos/elegant-logo-luxury-crest.jpg"
                  alt="Elegant Contractors and Interiors Crest"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <span className="font-cinzel font-bold tracking-[0.2em] text-base text-stone-900 uppercase block">
                  ELEGANT
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#9E7D3B] uppercase block font-semibold">
                  CONTRACTORS & INTERIORS
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Pioneering turnkey civil engineering, structural alterations, and luxury spatial interiors under one accountable roof across Kharar, Mohali, and Chandigarh Tricity.
            </p>

            <div className="p-3 rounded-xl border border-[#EADBCA] bg-white text-[11px] text-stone-700 flex items-center gap-2 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Single-Point Master Accountability from Civil Foundation to Luxury Handover.</span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-stone-900 font-bold mb-4 pb-2 border-b border-[#EADBCA]">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/turnkey-interior-designer-kharar-mohali" className="hover:text-[#9E7D3B] transition-colors font-medium text-stone-700">Turnkey Interior Design</Link></li>
              <li><Link href="/modular-kitchen-maker-mohali-kharar" className="hover:text-[#9E7D3B] transition-colors font-medium text-stone-700">Modular Kitchen Maker</Link></li>
              <li><Link href="/pop-false-ceiling-contractor-mohali" className="hover:text-[#9E7D3B] transition-colors font-medium text-stone-700">POP & False Ceilings</Link></li>
              <li><Link href="/civil-construction-contractor-kharar-mohali" className="hover:text-[#9E7D3B] transition-colors font-medium text-stone-700">Civil Construction & Wall Demolition</Link></li>
              <li><Link href="/modular-wardrobes-maker-mohali-kharar" className="hover:text-[#9E7D3B] transition-colors font-medium text-stone-700">Sliding Wardrobes & Millwork</Link></li>
              <li><Link href="/commercial-interior-office-fitouts-mohali" className="hover:text-[#9E7D3B] transition-colors font-medium text-stone-700">Commercial SCO & Office Fit-Outs</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-stone-900 font-bold mb-4 pb-2 border-b border-[#EADBCA]">
              Coverage Radius
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {BUSINESS_INFO.serviceAreas.map((area, i) => (
                <span
                  key={i}
                  className="bg-white border border-[#EADBCA] px-2 py-1 rounded text-stone-700 font-mono shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-stone-500 mt-3 font-mono">
              Site Inspection Teams Available Daily Across Kharar-Mohali Corridor.
            </p>
          </div>

          {/* Contact & Map Pin */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-stone-900 font-bold mb-4 pb-2 border-b border-[#EADBCA]">
              Head Office & Workshop
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-stone-700 leading-relaxed">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#9E7D3B] transition-colors font-mono font-medium text-stone-800">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#9E7D3B] transition-colors font-mono font-medium text-stone-800">
                  WhatsApp Support
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="text-[11px] text-stone-600">{BUSINESS_INFO.hours}</span>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-[#EADBCA] flex flex-col gap-2">
              <a
                href={BUSINESS_INFO.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official Google Business Profile for Elegant Contractors and Interiors"
                className="inline-flex items-center gap-1.5 text-xs text-[#9E7D3B] hover:text-stone-900 font-semibold hover:underline font-mono"
              >
                <span>Official Google Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.googleMapsCidUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Direct Knowledge Panel for Elegant Contractors and Interiors"
                className="inline-flex items-center gap-1.5 text-[11px] text-stone-500 hover:text-stone-800 font-mono"
              >
                <span>Google Maps Direct Knowledge Panel</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Elegant Contractors and Interiors. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 font-mono text-[10px] sm:text-[11px]">
            <span>LAT: 30.7316° N</span>
            <span>·</span>
            <span>LON: 76.6537° E</span>
            <span>·</span>
            <span>CID: 8580072631903777693</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
