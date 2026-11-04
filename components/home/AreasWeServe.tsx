'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function AreasWeServe() {
  const regions = [
    {
      city: 'Mohali (SAS Nagar)',
      hubs: 'Wave Estate Sector 85, Sectors 60–125, Aerocity, IT City, JLPL Corridor',
      desc: 'Full turnkey 2BHK/3BHK flat interiors, false ceiling lighting, and corporate SCO office fit-outs.',
    },
    {
      city: 'Kharar & Sunny Enclave',
      hubs: 'Sunny Enclave Sector 125, Sector 117, Gillco Valley, Kharar-Landran Road, Desumajra',
      desc: 'Civil structural alterations, heavy brickwork remodels, waterproof modular kitchens, and independent floor renovations.',
    },
    {
      city: 'New Chandigarh',
      hubs: 'Eco City 1 & 2, Omaxe The Lake, Medicity corridor',
      desc: 'Contemporary luxury villa interiors, acoustic bedroom paneling, and premium millwork.',
    },
    {
      city: 'Zirakpur & Panchkula',
      hubs: 'Airport Road (PR-7), VIP Road, MDC Panchkula, Sectors 4–21',
      desc: 'Complete turnkey home transformations, Gyproc false ceilings, and customized modular wardrobes.',
    },
    {
      city: 'Chandigarh',
      hubs: 'Sectors 1–40, modern apartment refurbishments',
      desc: 'High-end aesthetic interior styling, kitchen modernization, and ambient architectural lighting.',
    },
  ];

  return (
    <section id="service-areas" className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full mb-3 inline-block">
            WHERE WE WORK · SERVICE AREAS
          </span>
          <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
            Areas We Serve Across Tricity
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-md leading-relaxed">
          Where we work: Our civil engineers and interior project supervisors are actively deployed across Mohali, Kharar, and Chandigarh Tricity for complimentary on-site visits and laser measurements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regions.map((reg, idx) => (
          <div
            key={idx}
            className="rounded-3xl p-6 bg-white border border-[#EADBCA] hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <h3 className="font-cinzel font-bold text-base text-stone-900">
                  {reg.city}
                </h3>
              </div>

              <span className="font-mono text-[11px] text-[#9E7D3B] font-semibold block mb-2 leading-relaxed">
                {reg.hubs}
              </span>

              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                {reg.desc}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#EADBCA] flex items-center justify-between text-[11px] font-mono text-stone-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Daily Site Visits</span>
              </span>
              <Link
                href="/contact"
                className="text-[#9E7D3B] font-bold hover:text-stone-900 uppercase tracking-wider"
              >
                Schedule Visit
              </Link>
            </div>
          </div>
        ))}

        {/* Action Card */}
        <div className="rounded-3xl p-6 bg-stone-950 text-white border border-stone-800 shadow-sm flex flex-col justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
              COMPLIMENTARY CONSULTATION
            </span>
            <h3 className="font-cormorant text-2xl font-bold text-white mb-2">
              Have a Site in Tricity?
            </h3>
            <p className="text-xs text-stone-300 font-sans leading-relaxed">
              Book an on-site visit. We verify measurements, evaluate structural points, and provide an itemized BOQ quotation.
            </p>
          </div>

          <div className="mt-6 pt-3.5 border-t border-white/15">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#d6b36a] transition-all"
            >
              <span>Book Site Measurement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
