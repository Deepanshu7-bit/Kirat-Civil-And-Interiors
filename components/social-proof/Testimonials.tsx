'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-[#EADBCA]" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
            <span>VERIFIED LOCAL REVIEWS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 tracking-tight">
            Client Words from <span className="text-[#C5A059]">Mohali & Kharar</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans">
            Hear from genuine homeowners who placed their trust in our single-point turnkey delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-6 sm:p-7 bg-white border border-[#EADBCA] flex flex-col justify-between shadow-[0_10px_30px_rgba(245,233,211,0.5)] hover:border-[#C5A059] transition-all duration-300 relative"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-[#C5A059]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans italic mb-6">
                  &ldquo;{t.reviewText}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#EADBCA]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-cinzel font-bold text-sm text-stone-900">{t.clientName}</h4>
                    <span className="font-mono text-[10px] text-stone-500 block mt-0.5">{t.locality}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F5E9D3] border border-[#EADBCA] flex items-center justify-center text-[#9E7D3B] text-xs font-mono font-bold">
                    {t.clientName.charAt(0)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
