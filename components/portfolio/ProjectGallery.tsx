'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/lib/data';

export default function ProjectGallery() {
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = filter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-stone-800" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-mono uppercase tracking-widest mb-3">
              <span>LOCAL VERIFIED PORTFOLIO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-100 tracking-tight">
              Delivered Sites in <span className="text-gold-gradient">Mohali & Kharar</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-400 font-sans max-w-xl">
              Inspect ongoing and completed residential and commercial projects delivered with zero budget escalations.
            </p>
          </div>

          {/* Filter Pills */}
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
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-gold text-black font-semibold'
                    : 'bg-stone-900 border border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden border border-stone-800/80 bg-stone-900/40 hover:border-gold/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 bg-obsidian/90 border border-stone-800 px-2.5 py-1 rounded-md text-[10px] font-mono text-stone-300 backdrop-blur-md uppercase">
                  {project.bhk}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1.5 text-gold text-xs font-mono mb-1.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{project.locality}</span>
                </div>

                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-100 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-stone-400 mt-1 font-sans line-clamp-2">
                  {project.scope}
                </p>

                <div className="pt-3 mt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span className="flex items-center gap-1 text-stone-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                    <span>Site Handover Complete</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-stone-500 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
