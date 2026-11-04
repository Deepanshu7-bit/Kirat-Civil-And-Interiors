'use client';

import React from 'react';
import { Compass, FileText, Hammer, KeyRound, CheckCircle2 } from 'lucide-react';

export default function TurnkeyRoadmap() {
  const steps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'We visit your property across Mohali or Kharar, take laser measurements, inspect structural masonry and plumbing points, and understand your family’s lifestyle routines.',
      tag: 'Site Visit & Scope',
    },
    {
      step: '02',
      title: 'Plan & Design',
      desc: 'Our interior studio develops optimized 2D spatial layouts, photorealistic 3D room walkthroughs, and an itemized BOQ with branded material specifications and fixed pricing.',
      tag: '3D Renders & BOQ',
    },
    {
      step: '03',
      title: 'Build & Execute',
      desc: 'Our civil engineers and master carpenters coordinate on site. Wall alterations, concealed conduits, and factory-pressed woodwork are executed with daily milestone updates.',
      tag: 'Civil & Interior Works',
    },
    {
      step: '04',
      title: 'Final Handover',
      desc: 'After rigorous multi-point snag inspections and complete deep site cleaning, we hand over keys to your move-in ready home on schedule.',
      tag: 'Audit & Key Handover',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F5EFE6]/50 border-y border-[#EADBCA]" id="process">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full mb-3 inline-block">
            OUR PROCESS
          </span>
          <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
            How Your Project Gets Delivered
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
            A battle-tested 4-stage execution framework engineered to eliminate finger-pointing, protect your budget, and deliver on schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-6 sm:p-7 bg-white border border-[#EADBCA] hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-cormorant text-4xl sm:text-5xl font-bold text-[#C5A059]">
                    {item.step}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#9E7D3B] bg-[#F5E9D3] px-2.5 py-1 rounded-full border border-[#EADBCA] font-semibold">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-cinzel text-base font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#EADBCA] flex items-center gap-1.5 text-[11px] font-mono text-stone-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Accountable Stage</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
