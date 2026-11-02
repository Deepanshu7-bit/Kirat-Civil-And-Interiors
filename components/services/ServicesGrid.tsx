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
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA } from '@/lib/data';

export default function ServicesGrid() {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-5 h-5 text-gold" />,
    Compass: <Compass className="w-5 h-5 text-gold" />,
    LayoutGrid: <LayoutGrid className="w-5 h-5 text-gold" />,
    Maximize: <Maximize className="w-5 h-5 text-gold" />,
    SunMedium: <SunMedium className="w-5 h-5 text-gold" />,
    Briefcase: <Briefcase className="w-5 h-5 text-gold" />,
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-stone-800" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-mono uppercase tracking-widest mb-3">
            <span>FULL-SPECTRUM EXECUTION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-stone-100 tracking-tight">
            Turnkey Civil & <span className="text-gold-gradient">Luxury Interior</span> Capabilities
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
            Engineered precision from load-bearing concrete structural alterations down to millimeter-accurate modular millwork and lighting aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-stone-800 hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:border-gold/40 transition-colors">
                    {iconMap[service.icon]}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400 bg-stone-900/80 px-2 py-1 rounded border border-stone-800">
                    {service.category.toUpperCase()}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-100 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>

                <p className="font-mono text-xs text-gold/80 mt-1 mb-3">
                  {service.tagline}
                </p>

                <p className="text-xs text-stone-400 leading-relaxed font-sans mb-5">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-4 border-t border-stone-800/80 mb-5">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-300 font-sans">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material Badges */}
              <div className="pt-4 border-t border-stone-800/80">
                <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider block mb-2">
                  Key Material Specs:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.materialsUsed.map((mat, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono bg-stone-900 text-stone-300 px-2 py-0.5 rounded border border-stone-800"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
