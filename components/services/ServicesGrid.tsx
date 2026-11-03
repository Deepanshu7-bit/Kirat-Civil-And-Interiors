'use client';

import React from 'react';
import { 
  Building2, 
  Compass, 
  LayoutGrid, 
  Maximize, 
  SunMedium, 
  Briefcase,
  Check, 
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '@/lib/data';

export default function ServicesGrid() {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-5 h-5 text-[#C5A059]" />,
    Compass: <Compass className="w-5 h-5 text-[#C5A059]" />,
    LayoutGrid: <LayoutGrid className="w-5 h-5 text-[#C5A059]" />,
    Maximize: <Maximize className="w-5 h-5 text-[#C5A059]" />,
    SunMedium: <SunMedium className="w-5 h-5 text-[#C5A059]" />,
    Briefcase: <Briefcase className="w-5 h-5 text-[#C5A059]" />,
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-[#EADBCA] relative" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
            <span>FULL-SPECTRUM MASTER CAPABILITIES</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-stone-900 tracking-tight">
            Turnkey Civil & <span className="text-[#C5A059]">Luxury Interior</span> Services
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed max-w-xl mx-auto">
            Single-point accountability from load-bearing RCC civil alterations down to millimeter-accurate modular woodwork and ambient lighting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl p-6 sm:p-7 bg-white border border-[#EADBCA] hover:border-[#C5A059] shadow-[0_10px_30px_rgba(245,233,211,0.5)] hover:shadow-[0_15px_35px_rgba(245,233,211,0.8)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#EADBCA] flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
                    {iconMap[service.icon]}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#9E7D3B] bg-[#F5E9D3] px-2 py-0.5 rounded border border-[#EADBCA] font-semibold">
                    {service.category.toUpperCase()}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900 group-hover:text-[#9E7D3B] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-mono text-[#C5A059] mt-1 tracking-wide font-medium">
                  {service.tagline}
                </p>

                <p className="text-xs text-stone-600 font-sans mt-3 leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2 pt-4 border-t border-[#EADBCA]">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EADBCA] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {service.materialsUsed.slice(0, 2).map((mat, i) => (
                    <span key={i} className="text-[10px] font-mono text-stone-500 bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#EADBCA]">
                      {mat}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Inquire about ${service.title}`}
                  className="w-8 h-8 rounded-full bg-stone-900 hover:bg-[#C5A059] text-[#F5E9D3] hover:text-stone-950 flex items-center justify-center transition-all group-hover:scale-105 cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
