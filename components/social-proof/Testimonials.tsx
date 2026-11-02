'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-t border-stone-800" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-mono uppercase tracking-widest mb-3">
            <span>VERIFIED LOCAL REVIEWS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-100 tracking-tight">
            Client Words from <span className="text-gold-gradient">Mohali & Kharar</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-400 font-sans">
            Hear from genuine homeowners and business owners who placed their trust in our turnkey delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-stone-800 flex flex-col justify-between shadow-xl relative hover:border-gold/40 transition-all duration-300"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans italic mb-6">
                  &ldquo;{t.reviewText}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-cinzel font-bold text-sm text-stone-100">{t.clientName}</h4>
                    <span className="font-mono text-[10px] text-stone-400 block mt-0.5">{t.locality}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-xs font-mono font-bold">
                    {t.clientName.charAt(0)}
                  </div>
                </div>

                <div className="mt-2.5 flex items-center gap-1.5 text-[10px] font-mono text-gold/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                  <span>{t.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
