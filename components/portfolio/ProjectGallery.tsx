'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS } from '@/lib/gallery-data';

export default function ProjectGallery() {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-[#EADBCA]" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
              <span>DESIGN INSPIRATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-cormorant font-bold text-stone-900 tracking-tight">
              Curated Architectural Concepts
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans max-w-xl">
              Design ideas and spatial layouts crafted for residences across Chandigarh Tricity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white hover:border-[#C5A059] transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                <span className="absolute top-2.5 right-2.5 bg-stone-900/80 px-2.5 py-1 rounded text-[10px] font-mono text-[#F5E9D3] uppercase border border-white/20">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-cinzel font-bold text-base text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-sans mt-1">
                    {item.caption}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-[#EADBCA]">
                  <Link
                    href={`/design-gallery/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#9E7D3B] hover:text-stone-900"
                  >
                    <span>Explore Concept</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
