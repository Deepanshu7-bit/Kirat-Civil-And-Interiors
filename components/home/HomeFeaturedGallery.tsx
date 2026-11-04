'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Sparkles, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '@/lib/gallery-data';

export default function HomeFeaturedGallery() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Inspirations' },
    { id: 'living-room', label: 'Living Rooms' },
    { id: 'modular-kitchen', label: 'Kitchens' },
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'modular-wardrobes', label: 'Wardrobes' },
    { id: 'false-ceilings', label: 'Ceilings' },
  ];

  const items = (filter === 'all'
    ? GALLERY_ITEMS.slice(0, 6)
    : GALLERY_ITEMS.filter((item) => item.category === filter).slice(0, 6));

  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto" id="gallery">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full mb-3 inline-block">
            FEATURED DESIGN GALLERY
          </span>
          <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
            Design Inspirations
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans max-w-xl">
            Curated visual archetypes showcasing lighting strategies, custom millwork, and balanced spatial flow.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full font-sans text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 ${
                filter === cat.id
                  ? 'bg-stone-950 text-[#F5E9D3] font-semibold shadow-sm'
                  : 'bg-white border border-[#EADBCA] text-stone-700 hover:border-[#C5A059] hover:text-stone-950'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className="group rounded-3xl overflow-hidden border border-[#EADBCA] bg-white hover:border-[#C5A059] transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between"
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              <span className="absolute top-3.5 left-3.5 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#F5E9D3] uppercase tracking-wider border border-white/20">
                {item.categoryLabel}
              </span>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                <h3 className="font-cormorant font-semibold text-xl sm:text-2xl text-white leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
              <p className="text-xs text-stone-600 font-sans leading-relaxed mb-4">
                {item.caption}
              </p>

              <div className="pt-3 border-t border-[#EADBCA] flex items-center justify-between">
                <span className="text-[11px] font-mono text-stone-500">
                  Concept Study
                </span>
                <Link
                  href={`/design-gallery/${item.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#9E7D3B] hover:text-stone-950 transition-colors uppercase tracking-wider group/link"
                >
                  <span>Explore Concept</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Gallery Link */}
      <div className="mt-12 text-center">
        <Link
          href="/design-gallery"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white border border-[#EADBCA] text-stone-900 font-sans text-xs uppercase tracking-wider font-semibold hover:border-[#C5A059] hover:bg-[#F5E9D3]/40 transition-all shadow-xs group"
        >
          <span>View All Design Inspirations in Gallery</span>
          <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
