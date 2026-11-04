'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[#F5EFE6]/50 border-y border-[#EADBCA]" id="testimonials">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full mb-3 inline-block">
            VERIFIED LOCAL FEEDBACK
          </span>
          <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
            Client Experiences Across Tricity
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
            Genuine words from homeowners, architects, and business owners who entrusted their projects to our turnkey team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.slice(0, 6).map((t) => (
            <div
              key={t.id}
              className="rounded-3xl p-6 sm:p-7 bg-white border border-[#EADBCA] shadow-sm hover:shadow-xl hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-stone-400">
                    {t.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans italic mb-6">
                  &ldquo;{t.reviewText}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#EADBCA] flex items-center justify-between">
                <div>
                  <h4 className="font-cinzel font-bold text-sm text-stone-900">
                    {t.clientName}
                  </h4>
                  <span className="font-mono text-[10px] text-[#9E7D3B] block mt-0.5">
                    {t.locality}
                  </span>
                  <span className="font-sans text-[11px] text-stone-500 block">
                    {t.projectType}
                  </span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#F5E9D3] border border-[#EADBCA] flex items-center justify-center text-[#9E7D3B] font-mono font-bold text-xs shrink-0 ml-3">
                  {t.clientName.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
