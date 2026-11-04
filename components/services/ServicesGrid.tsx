'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { SERVICES_DATA } from '@/lib/data';

export default function ServicesGrid() {
  const serviceImages: Record<string, string> = {
    'turnkey-interiors': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=720&q=75',
    'modular-kitchens': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=720&q=75',
    'wardrobes-millwork': 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=720&q=75',
    'false-ceiling-lighting': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=720&q=75',
    'civil-works': '/images/raw-civil-site.webp',
    'commercial-fitouts': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=720&q=75',
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F5EFE6]/50 border-y border-[#EADBCA]" id="services">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full mb-3 inline-block">
            WHAT WE DO
          </span>
          <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
            Comprehensive Design &amp; Turnkey Execution
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
            Single-point accountability from foundation brickwork alterations down to millimeter-accurate modular woodwork, false ceilings, and ambient illumination.
          </p>
        </div>

        {/* Visual Editorial Cards - Alternating Spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isFeatured = index === 0 || index === 1;

            return (
              <div
                key={service.id}
                className="group rounded-3xl overflow-hidden border border-[#EADBCA] bg-white hover:border-[#C5A059] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                  <Image
                    src={serviceImages[service.id] || '/images/finished-luxury-interior.webp'}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />

                  <span className="absolute top-3.5 left-3.5 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#F5E9D3] uppercase tracking-wider border border-white/20">
                    {service.category.toUpperCase()}
                  </span>

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <h3 className="font-cormorant font-semibold text-xl sm:text-2xl text-white leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="font-mono text-xs text-[#9E7D3B] font-semibold block mb-2">
                      {service.tagline}
                    </span>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#EADBCA] space-y-1.5">
                      {service.features.slice(0, 3).map((feat, fi) => (
                        <div key={fi} className="flex items-start gap-2 text-[11px] text-stone-700">
                          <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {service.href && (
                    <div className="mt-6 pt-3.5 border-t border-[#EADBCA]">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#9E7D3B] hover:text-stone-950 transition-colors uppercase tracking-wider group/btn"
                      >
                        <span>View Service Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
