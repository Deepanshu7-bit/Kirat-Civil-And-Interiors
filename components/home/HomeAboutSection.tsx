'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Ruler, CheckCircle2 } from 'lucide-react';

export default function HomeAboutSection() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Large Architectural Photography */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-[#EADBCA] shadow-2xl bg-stone-100">
            <Image
              src="/images/luxury-architectural-lobby.jpg"
              alt="Architectural space designed by Elegant Spaces"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          
          <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl border border-[#EADBCA] shadow-xl max-w-xs hidden xs:block">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span className="font-cinzel font-bold text-xs text-stone-900 uppercase">Single-Point Accountability</span>
            </div>
            <p className="text-[11px] text-stone-600 font-sans leading-relaxed">
              Eliminating the divide between civil contractors and interior carpenters across Tricity.
            </p>
          </div>
        </div>

        {/* Short, Authentic Story & Introduction */}
        <div className="lg:col-span-6 space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full inline-block">
            ABOUT ELEGANT SPACES
          </span>

          <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight">
            Thoughtful Spaces, Built With Architectural Care.
          </h2>

          <p className="text-sm sm:text-base text-stone-700 font-sans leading-relaxed">
            Elegant Spaces is a boutique interior design studio and turnkey construction brand rooted in Chandigarh Tricity. We believe that exceptional homes arise when civil foundations, spatial geometry, and bespoke joinery are treated as one continuous craft.
          </p>

          <p className="text-sm sm:text-base text-stone-700 font-sans leading-relaxed">
            By coordinating every beam adjustment, concealed conduit, modular cabinet, and ceiling cove under single-point master accountability, we provide homeowners with calm confidence and uncompromised execution quality.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-950 text-white font-sans text-xs uppercase tracking-wider font-semibold hover:bg-stone-800 transition-all shadow-md group"
            >
              <span>Read Our Full Story &amp; Approach</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
