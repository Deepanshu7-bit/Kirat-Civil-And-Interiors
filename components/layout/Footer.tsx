'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, ExternalLink, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EADBCA] pt-14 sm:pt-16 pb-28 md:pb-14 text-stone-600 text-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#EADBCA]">
          {/* 1. Brand Identity */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl border border-[#C5A059]/40 flex items-center justify-center bg-stone-950 p-0.5 overflow-hidden relative shadow-sm group-hover:border-[#C5A059] transition-colors">
                <Image
                  src="/logos/elegant-logo-luxury-crest.jpg"
                  alt="Elegant Spaces Logo Crest"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <span className="font-cinzel font-bold tracking-[0.16em] text-base text-stone-900 uppercase block">
                  ELEGANT SPACES
                </span>
                <span className="font-mono text-[9px] tracking-[0.22em] text-[#9E7D3B] uppercase block font-semibold">
                  CONTRACTORS &amp; INTERIORS
                </span>
              </div>
            </Link>

            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Turnkey interior design studio, civil construction &amp; custom millwork under single-point master accountability across Mohali, Kharar, and Chandigarh Tricity.
            </p>

            <div className="p-3.5 rounded-xl border border-[#EADBCA] bg-white text-xs text-stone-700 flex items-center gap-2.5 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Foundation-to-handover execution with transparent, itemized BOQ milestones.</span>
            </div>
          </div>

          {/* 2. Core Capabilities */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-stone-900 font-bold mb-4 pb-2 border-b border-[#EADBCA]">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link href="/turnkey-interior-designer-kharar-mohali" className="hover:text-[#9E7D3B] transition-colors text-stone-700 font-medium">
                  Turnkey Interior Design
                </Link>
              </li>
              <li>
                <Link href="/modular-kitchen-maker-mohali-kharar" className="hover:text-[#9E7D3B] transition-colors text-stone-700 font-medium">
                  Custom Modular Kitchens
                </Link>
              </li>
              <li>
                <Link href="/pop-false-ceiling-contractor-mohali" className="hover:text-[#9E7D3B] transition-colors text-stone-700 font-medium">
                  Architectural False Ceilings
                </Link>
              </li>
              <li>
                <Link href="/civil-construction-contractor-kharar-mohali" className="hover:text-[#9E7D3B] transition-colors text-stone-700 font-medium">
                  Civil Construction &amp; Alterations
                </Link>
              </li>
              <li>
                <Link href="/modular-wardrobes-maker-mohali-kharar" className="hover:text-[#9E7D3B] transition-colors text-stone-700 font-medium">
                  Modular Wardrobes &amp; Millwork
                </Link>
              </li>
              <li>
                <Link href="/commercial-interior-office-fitouts-mohali" className="hover:text-[#9E7D3B] transition-colors text-stone-700 font-medium">
                  Commercial SCO &amp; Office Fit-Outs
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Explore & Service Areas */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-stone-900 font-bold mb-4 pb-2 border-b border-[#EADBCA]">
              Design &amp; Company
            </h4>
            <ul className="space-y-2 text-xs font-sans mb-5">
              <li>
                <Link href="/about" className="hover:text-[#9E7D3B] transition-colors text-stone-700 font-medium">
                  About Elegant Spaces
                </Link>
              </li>
              <li>
                <Link href="/design-gallery" className="hover:text-[#9E7D3B] transition-colors text-stone-700 font-medium flex items-center gap-1">
                  <span>Design Inspirations Gallery</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C5A059]" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#9E7D3B] transition-colors text-stone-700 font-medium">
                  Contact &amp; Site Consultations
                </Link>
              </li>
            </ul>

            <h5 className="font-mono text-[11px] tracking-[0.16em] uppercase text-stone-900 font-bold mb-2">
              Coverage Radius
            </h5>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {BUSINESS_INFO.serviceAreas.map((area, i) => (
                <span
                  key={i}
                  className="bg-white border border-[#EADBCA] px-2 py-0.5 rounded text-stone-700 font-mono text-[10px]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Contact & Verification */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] uppercase text-stone-900 font-bold mb-4 pb-2 border-b border-[#EADBCA]">
              Contact &amp; Consultations
            </h4>
            <ul className="space-y-3 text-xs font-sans">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-stone-700 leading-relaxed text-xs">
                  {BUSINESS_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-[#9E7D3B] transition-colors font-mono font-medium text-stone-800"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Spaces,%20I%20would%20like%20to%20discuss%20a%20turnkey%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9E7D3B] transition-colors font-mono font-medium text-stone-800"
                >
                  WhatsApp: +91 98783 90090
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
                aria-label="Official Google Business Profile for Elegant Spaces"
                className="inline-flex items-center gap-1.5 text-xs text-[#9E7D3B] hover:text-stone-900 font-semibold hover:underline font-mono"
              >
                <span>Verified Google Business Profile</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.googleMapsCidUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Direct Knowledge Panel for Elegant Spaces"
                className="inline-flex items-center gap-1.5 text-[11px] text-stone-500 hover:text-stone-800 font-mono"
              >
                <span>Google Maps Profile</span>
                <ExternalLink className="w-2.5 h-2.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Elegant Spaces – Contractors &amp; Interiors. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 font-mono text-[10px] sm:text-[11px]">
            <span>Mohali · Kharar · Zirakpur · Chandigarh · Panchkula</span>
            <span>·</span>
            <span>CID: 8580072631903777693</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
