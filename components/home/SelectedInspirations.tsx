'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';

export default function SelectedInspirations() {
  const inspirations = [
    {
      title: 'Warm Minimalist Living Room',
      category: 'Living Room Interiors',
      slug: 'modern-living-room',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      note: '3000K warm indirect coves, fluted acoustic paneling, and seamless large-format vitrified flooring.',
      aspect: 'large',
    },
    {
      title: 'Handle-Less Modular Kitchen',
      category: 'Modular Kitchens',
      slug: 'modular-kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
      note: 'Boiling-water-proof 710 marine ply with quartz countertops and soft-close tandem drawers.',
      aspect: 'standard',
    },
    {
      title: 'Contemporary Master Suite',
      category: 'Bedroom Interiors',
      slug: 'luxury-bedroom',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
      note: 'Acoustic upholstered headboard wall paired with concealed perimeter lighting and custom millwork.',
      aspect: 'standard',
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-[0.2em] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Curated Concepts</span>
          </div>
          <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
            Selected Design Inspirations
          </h2>
        </div>

        <div className="max-w-md">
          <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
            Visual explorations celebrating natural light, tactile materiality, and spatial proportion for contemporary Tricity homes.
          </p>
          <div className="mt-3">
            <Link
              href="/design-gallery"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#9E7D3B] hover:text-stone-900 transition-colors uppercase tracking-wider group"
            >
              <span>Explore All Inspirations</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Asymmetric Editorial Visual Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Large Featured Card (7 cols) */}
        <div className="lg:col-span-7">
          <Link
            href={`/design-gallery/${inspirations[0].slug}`}
            className="group block relative rounded-3xl overflow-hidden border border-[#EADBCA] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between"
          >
            <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-stone-100">
              <Image
                src={inspirations[0].image}
                alt={inspirations[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-4 left-4">
                <span className="bg-stone-950/80 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-mono text-[#F5E9D3] uppercase tracking-wider border border-white/20">
                  {inspirations[0].category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-cormorant font-semibold text-2xl sm:text-4xl text-white leading-tight">
                  {inspirations[0].title}
                </h3>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex items-center justify-between">
              <p className="text-xs text-stone-600 font-sans leading-relaxed max-w-lg">
                {inspirations[0].note}
              </p>
              <div className="w-10 h-10 rounded-full border border-[#EADBCA] group-hover:border-[#C5A059] group-hover:bg-[#F5E9D3]/40 flex items-center justify-center shrink-0 ml-4 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-[#9E7D3B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Stack of 2 Right Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {inspirations.slice(1).map((item, idx) => (
            <Link
              key={idx}
              href={`/design-gallery/${item.slug}`}
              className="group block relative rounded-3xl overflow-hidden border border-[#EADBCA] bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex-1 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3.5 left-3.5">
                  <span className="bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#F5E9D3] uppercase tracking-wider border border-white/20">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <h3 className="font-cormorant font-semibold text-xl sm:text-2xl text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between">
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  {item.note}
                </p>
                <div className="w-9 h-9 rounded-full border border-[#EADBCA] group-hover:border-[#C5A059] group-hover:bg-[#F5E9D3]/40 flex items-center justify-center shrink-0 ml-3 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#9E7D3B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
