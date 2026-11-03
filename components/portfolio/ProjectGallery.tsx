'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_ITEMS, BUSINESS_INFO } from '@/lib/data';

export default function ProjectGallery() {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-[#EADBCA]" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
              <span>LOCAL VERIFIED PORTFOLIO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 tracking-tight">
              Delivered Sites in <span className="text-[#C5A059]">Mohali & Kharar</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans max-w-xl">
              Real ongoing and completed residential and commercial projects delivered with zero budget escalations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'residential', label: 'Residential' },
              { id: 'kitchen', label: 'Kitchens' },
              { id: 'ceiling', label: 'False Ceilings' },
              { id: 'civil', label: 'Civil Alterations' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-stone-900 text-[#F5E9D3] font-semibold shadow'
                    : 'bg-white border border-[#EADBCA] text-stone-600 hover:text-stone-900 hover:border-[#C5A059]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white hover:border-[#C5A059] transition-all duration-500 shadow-[0_10px_30px_rgba(245,233,211,0.5)] hover:shadow-[0_15px_35px_rgba(245,233,211,0.8)] flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

                <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-[#F5E9D3] uppercase tracking-wider border border-[#EADBCA]/40">
                  {project.bhk}
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-mono text-white">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{project.locality}</span>
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#9E7D3B] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-sans mt-1.5 leading-relaxed">
                    {project.scope}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#EADBCA] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-stone-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#C5A059]" />
                    <span>Single-Point Delivery</span>
                  </span>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20am%20interested%20in%20work%20similar%20to%20${encodeURIComponent(project.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-stone-900 hover:text-[#9E7D3B] group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
