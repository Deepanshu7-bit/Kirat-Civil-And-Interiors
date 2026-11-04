'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  Layers,
  Info
} from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS, GalleryItem } from '@/lib/gallery-data';

export default function GalleryExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="w-full">
      {/* Category Filter Navigation */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 sm:mb-12 gap-2 no-scrollbar px-1">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setLightboxIndex(null);
            }}
            className={`px-4 sm:px-5 py-2 rounded-full font-sans text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 ${
              activeCategory === cat.id
                ? 'bg-stone-950 text-[#F5E9D3] font-semibold shadow-md'
                : 'bg-white border border-[#EADBCA] text-stone-700 hover:border-[#C5A059] hover:text-stone-950 hover:bg-[#F5E9D3]/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Authenticity Disclosure Banner */}
      <div className="mb-10 max-w-4xl mx-auto p-4 rounded-2xl border border-[#EADBCA] bg-[#F5EFE6]/70 flex items-start sm:items-center gap-3 text-xs text-stone-700 font-sans shadow-xs">
        <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5 sm:mt-0" />
        <p className="leading-relaxed">
          <strong>Design Inspirations &amp; Concepts:</strong> This curated gallery illustrates our aesthetic standards, spatial planning principles, and material palettes. All client projects are custom designed and executed on-site across Chandigarh Tricity based on your unique floor plan and requirements.
        </p>
      </div>

      {/* Clean Curated Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        {filteredItems.map((item, index) => {
          return (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white hover:border-[#C5A059] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col"
            >
              {/* Image Area with Hover Zoom */}
              <div 
                className="relative aspect-[16/11] overflow-hidden bg-stone-100 cursor-pointer"
                onClick={() => setLightboxIndex(index)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-[#F5E9D3] uppercase tracking-wider border border-white/20">
                    {item.categoryLabel}
                  </span>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(index);
                    }}
                    aria-label={`View full screen image of ${item.title}`}
                    className="p-1.5 rounded-full bg-stone-950/60 backdrop-blur-md hover:bg-stone-900 text-white transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bottom Overlay Title on Hover/Mobile */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="font-cormorant font-semibold text-lg sm:text-xl text-white block leading-snug drop-shadow-md">
                    {item.title}
                  </span>
                </div>
              </div>

              {/* Information & Action Footer (Snug & Well-Proportioned) */}
              <div className="p-4 sm:p-5 flex flex-col">
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {item.caption}
                </p>

                <div className="mt-4 pt-3 border-t border-[#EADBCA] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-500">
                    Concept Archetype
                  </span>
                  
                  <Link
                    href={`/design-gallery/${item.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#9E7D3B] hover:text-stone-950 transition-colors group/link"
                  >
                    <span>Explore Concept</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ============================================================== */}
      {/* Lightbox Modal                                                 */}
      {/* ============================================================== */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div 
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
            }}
            aria-label="Previous Image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
            }}
            aria-label="Next Image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Lightbox Image & Caption Box */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] sm:h-[75vh]">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 text-center max-w-2xl px-4 text-white">
              <span className="font-mono text-xs text-[#C5A059] uppercase tracking-widest block mb-1">
                {filteredItems[lightboxIndex].categoryLabel} · {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-cormorant text-xl sm:text-2xl font-bold">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-stone-300 font-sans">
                {filteredItems[lightboxIndex].caption}
              </p>
              <div className="mt-3">
                <Link
                  href={`/design-gallery/${filteredItems[lightboxIndex].slug}`}
                  onClick={() => setLightboxIndex(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#d6b36a] transition-all"
                >
                  <span>View Detailed Inspiration Guide</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
