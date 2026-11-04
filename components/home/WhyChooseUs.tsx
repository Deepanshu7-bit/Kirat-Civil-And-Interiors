'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, FileCheck, Award, Eye, Check } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Single-Point Master Accountability',
      desc: 'Eliminates the traditional blame game between civil masons, plumbers, electricians, and carpenters. Every milestone is coordinated under one experienced project supervisor.',
      icon: <ShieldCheck className="w-5 h-5 text-[#C5A059]" />,
    },
    {
      title: 'Transparent Itemized BOQ Pricing',
      desc: 'Every bag of cement, grade of plywood, brand of paint, and soft-close hinge is documented in writing upfront with fixed pricing and zero surprise budget escalations.',
      icon: <FileCheck className="w-5 h-5 text-[#C5A059]" />,
    },
    {
      title: 'Certified Branded Material Standards',
      desc: 'We strictly specify verified materials: UltraTech 53-grade cement, Dr. Fixit chemical waterproofing, Century / Greenply certified BWP 710 marine ply, and German Hettich / Hafele hardware.',
      icon: <Award className="w-5 h-5 text-[#C5A059]" />,
    },
    {
      title: 'Active Daily On-Site Supervision',
      desc: 'Our site supervisors conduct physical morning inspections, verifying wall plumbs, laser levels, and conduit channels. Clients receive regular photo and video progress logs.',
      icon: <Eye className="w-5 h-5 text-[#C5A059]" />,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Headline & Pillars */}
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full inline-block">
            WHY ELEGANT SPACES
          </span>

          <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight">
            Built on Trust, Craftsmanship, and Total Transparency.
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Constructing or renovating a home in Chandigarh Tricity should be an exciting journey, not an exhausting struggle with uncoordinated labor. We operate with high engineering discipline to deliver peace of mind.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-[#EADBCA] bg-white shadow-xs hover:border-[#C5A059] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EADBCA] flex items-center justify-center mb-3">
                  {r.icon}
                </div>
                <h3 className="font-cinzel text-sm font-bold text-stone-900 mb-1.5">
                  {r.title}
                </h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: High Quality Photographic Showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#EADBCA] shadow-2xl bg-stone-100">
            <Image
              src="/images/furnished-master-bedroom.jpg"
              alt="Luxury master bedroom completed by Elegant Spaces"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#F5E9D3] block mb-1">
                Zero Finger-Pointing Guarantee
              </span>
              <p className="font-cormorant text-xl sm:text-2xl font-bold">
                Civil structural alterations &amp; bespoke interiors coordinated under one accountable team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
