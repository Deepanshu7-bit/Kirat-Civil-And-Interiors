'use client';

import React, { useState } from 'react';
import { ListChecks, MessageSquare, Check, Sparkles, Building, Layers, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';
import { PropertyBHK, ServiceScope, PropertyTier } from '@/lib/types';

export default function ProjectCalculator() {
  const [bhk, setBhk] = useState<PropertyBHK>('2bhk');
  const [scope, setScope] = useState<ServiceScope>('turnkey');
  const [tier, setTier] = useState<PropertyTier>('premium');

  const getTimeline = () => {
    if (bhk === '1bhk') return '25–30 Working Days';
    if (bhk === '2bhk') return '35–40 Working Days';
    if (bhk === '3bhk') return '40–45 Working Days';
    if (bhk === 'villa') return '50–60 Working Days';
    return '30–35 Working Days';
  };

  const getBhkLabel = () => {
    if (bhk === '1bhk') return '1 BHK (~600 sq ft)';
    if (bhk === '2bhk') return '2 BHK (~1050 sq ft)';
    if (bhk === '3bhk') return '3 BHK (~1550 sq ft)';
    if (bhk === 'villa') return '4BHK / Villa (~2300+ sq ft)';
    return 'Commercial SCO (~1800 sq ft)';
  };

  const getScopeLabel = () => {
    if (scope === 'civil') return 'Civil Construction & Structural Alterations';
    if (scope === 'interiors') return 'Interiors, False Ceiling & Modular Woodwork';
    return 'Full Turnkey (Civil + Interior Complete)';
  };

  const getTierLabel = () => {
    if (tier === 'standard') return 'Standard Commercial Grade';
    if (tier === 'premium') return 'Premium Grade (Century BWP 710 + Hettich)';
    return 'Ultra Luxury Architectural (PU/Acrylic + Quartz)';
  };

  const handleWhatsAppDispatch = () => {
    const message = encodeURIComponent(
      `Hello Elegant Spaces – Contractors & Interiors, I just customized my project scope on your website:\n\n` +
      `• Property: ${getBhkLabel()}\n` +
      `• Scope: ${getScopeLabel()}\n` +
      `• Material Quality: ${getTierLabel()}\n` +
      `• Estimated Timeline: ${getTimeline()}\n\n` +
      `Please provide an itemized BOQ material specification and schedule a free site measurement visit in Kharar/Mohali.`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-[#EADBCA] relative" id="calculator">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
            <ListChecks className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>PROJECT SCOPE & BOQ PLANNER</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 tracking-tight">
            Customize Your Project Scope in <span className="text-[#C5A059]">30 Seconds</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans">
            Select your configuration below to review customized material specifications, delivery timelines, and request an itemized BOQ.
          </p>
        </div>

        <div className="rounded-2xl p-4 sm:p-8 bg-white border border-[#EADBCA] shadow-[0_20px_50px_rgba(245,233,211,0.8)] space-y-6 sm:space-y-8">
          {/* Step 1: Configuration */}
          <div className="space-y-3">
            <label className="text-xs font-mono tracking-wider text-stone-800 uppercase flex items-center gap-2 font-semibold">
              <Building className="w-4 h-4 text-[#C5A059]" />
              <span>1. Select Property Configuration</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5">
              {[
                { id: '1bhk', label: '1 BHK', detail: '~600 sq ft', span: '' },
                { id: '2bhk', label: '2 BHK', detail: '~1050 sq ft', span: '' },
                { id: '3bhk', label: '3 BHK', detail: '~1550 sq ft', span: '' },
                { id: 'villa', label: '4BHK / Villa', detail: '~2300+ sq ft', span: '' },
                { id: 'sco', label: 'Commercial SCO', detail: '~1800 sq ft', span: 'col-span-2 sm:col-span-1' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setBhk(item.id as PropertyBHK)}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between min-h-[58px] sm:min-h-[64px] cursor-pointer ${item.span} ${
                    bhk === item.id
                      ? 'border-[#C5A059] bg-[#F5E9D3] text-stone-900 shadow-sm'
                      : 'border-[#EADBCA] bg-[#FAF8F5] text-stone-600 hover:border-[#C5A059]'
                  }`}
                >
                  <span className="font-cinzel font-bold text-xs sm:text-sm text-stone-900">{item.label}</span>
                  <span className="font-mono text-[10px] text-stone-500">{item.detail}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Scope of Work */}
          <div className="space-y-3">
            <label className="text-xs font-mono tracking-wider text-stone-800 uppercase flex items-center gap-2 font-semibold">
              <Layers className="w-4 h-4 text-[#C5A059]" />
              <span>2. Select Scope of Execution</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'civil', label: 'Civil Work Only', desc: 'Brickwork, slab, plumbing, tiling & waterproofing' },
                { id: 'interiors', label: 'Interiors Only', desc: 'Ceiling, lighting, modular kitchen & wardrobes' },
                { id: 'turnkey', label: 'Full Turnkey (Civil + Interior)', desc: 'Everything managed under one accountable contract' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setScope(item.id as ServiceScope)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    scope === item.id
                      ? 'border-[#C5A059] bg-[#F5E9D3] text-stone-900 shadow-sm'
                      : 'border-[#EADBCA] bg-[#FAF8F5] text-stone-600 hover:border-[#C5A059]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel font-bold text-sm text-stone-900">{item.label}</span>
                    {scope === item.id && <Check className="w-4 h-4 text-[#9E7D3B]" />}
                  </div>
                  <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Material Quality Preference */}
          <div className="space-y-3">
            <label className="text-xs font-mono tracking-wider text-stone-800 uppercase flex items-center gap-2 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>3. Material Quality Preference</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'standard', label: 'Standard Tier', spec: 'Calibrated commercial ply, reliable hardware, washable emulsion' },
                { id: 'premium', label: 'Premium Tier (Recommended)', spec: 'Century BWP 710 ply, Hettich soft-close, Asian Paints Royale' },
                { id: 'luxury', label: 'Ultra Luxury Tier', spec: 'PU / High-Gloss Acrylic, Quartz stone, Smart indirect profiles' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTier(item.id as PropertyTier)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                    tier === item.id
                      ? 'border-[#C5A059] bg-[#F5E9D3] text-stone-900 shadow-sm'
                      : 'border-[#EADBCA] bg-[#FAF8F5] text-stone-600 hover:border-[#C5A059]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel font-bold text-sm text-stone-900">{item.label}</span>
                    {tier === item.id && <Check className="w-4 h-4 text-[#9E7D3B]" />}
                  </div>
                  <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">{item.spec}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Output */}
          <div className="pt-5 sm:pt-6 border-t border-[#EADBCA] bg-[#FAF6EE] -mx-4 sm:-mx-8 -mb-4 sm:-mb-8 p-4 sm:p-8 rounded-b-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-5 sm:mb-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-600 block flex items-center gap-1.5 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  Estimated Timeline:
                </span>
                <div className="text-base sm:text-lg font-cinzel font-bold text-[#9E7D3B] mt-1">
                  {getTimeline()}
                </div>
                <span className="text-[10px] text-stone-500 font-mono">Guaranteed handover milestone</span>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-600 block flex items-center gap-1.5 font-semibold">
                  <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                  Scope Selected:
                </span>
                <div className="text-xs sm:text-sm font-semibold text-stone-900 mt-1">
                  {getScopeLabel()}
                </div>
                <span className="text-[10px] text-stone-500 font-mono">3D Plan + Site Engineer Supervision</span>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-600 block flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  Warranty Coverage:
                </span>
                <div className="text-xs sm:text-sm font-semibold text-stone-900 mt-1">
                  Manufacturer Hardware &amp; Plywood Warranty
                </div>
                <span className="text-[10px] text-stone-500 font-mono">Anti-Termite &amp; BWP 710 Certified</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-[#EADBCA]">
              <span className="text-xs text-stone-600 font-sans text-center sm:text-left">
                Get an exact, itemized material BOQ calculated for your site in Kharar/Mohali.
              </span>
              <button
                onClick={handleWhatsAppDispatch}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 rounded-xl bg-stone-900 text-[#F5E9D3] hover:bg-stone-800 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md font-mono shrink-0 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Request Custom BOQ on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
