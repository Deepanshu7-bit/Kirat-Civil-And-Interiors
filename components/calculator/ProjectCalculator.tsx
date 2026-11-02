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
      `Hello Elegant Contractors & Interiors, I just customized my project scope on your website:\n\n` +
      `• Property: ${getBhkLabel()}\n` +
      `• Scope: ${getScopeLabel()}\n` +
      `• Material Quality: ${getTierLabel()}\n` +
      `• Estimated Timeline: ${getTimeline()}\n\n` +
      `Please provide an itemized BOQ material specification and schedule a free site measurement visit in Kharar/Mohali.`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#09090b] via-[#101015] to-[#09090b] border-t border-stone-800" id="calculator">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-mono uppercase tracking-widest mb-3">
            <ListChecks className="w-3.5 h-3.5" />
            <span>PROJECT SCOPE & BOQ PLANNER</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-100 tracking-tight">
            Customize Your Project Scope in <span className="text-gold-gradient">30 Seconds</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-400 font-sans">
            Select your configuration below to review customized material specifications, delivery timelines, and request an itemized BOQ.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-2xl space-y-8">
          {/* Step 1: Configuration */}
          <div className="space-y-3">
            <label className="text-xs font-mono tracking-wider text-stone-300 uppercase flex items-center gap-2">
              <Building className="w-4 h-4 text-gold" />
              <span>1. Select Property Configuration</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[
                { id: '1bhk', label: '1 BHK', detail: '~600 sq ft' },
                { id: '2bhk', label: '2 BHK', detail: '~1050 sq ft' },
                { id: '3bhk', label: '3 BHK', detail: '~1550 sq ft' },
                { id: 'villa', label: '4BHK / Villa', detail: '~2300+ sq ft' },
                { id: 'sco', label: 'Commercial SCO', detail: '~1800 sq ft' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setBhk(item.id as PropertyBHK)}
                  className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between min-h-[64px] ${
                    bhk === item.id
                      ? 'border-gold bg-gold/15 text-stone-100 shadow-md gold-glow-sm'
                      : 'border-stone-800 bg-stone-900/60 text-stone-400 hover:border-stone-700'
                  }`}
                >
                  <span className="font-cinzel font-bold text-sm text-stone-100">{item.label}</span>
                  <span className="font-mono text-[10px] text-stone-400">{item.detail}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Scope of Work */}
          <div className="space-y-3">
            <label className="text-xs font-mono tracking-wider text-stone-300 uppercase flex items-center gap-2">
              <Layers className="w-4 h-4 text-gold" />
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
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 ${
                    scope === item.id
                      ? 'border-gold bg-gold/15 text-stone-100 shadow-md gold-glow-sm'
                      : 'border-stone-800 bg-stone-900/60 text-stone-400 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel font-bold text-sm text-stone-100">{item.label}</span>
                    {scope === item.id && <Check className="w-4 h-4 text-gold" />}
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Material Quality Preference */}
          <div className="space-y-3">
            <label className="text-xs font-mono tracking-wider text-stone-300 uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
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
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 ${
                    tier === item.id
                      ? 'border-gold bg-gold/15 text-stone-100 shadow-md gold-glow-sm'
                      : 'border-stone-800 bg-stone-900/60 text-stone-400 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel font-bold text-sm text-stone-100">{item.label}</span>
                    {tier === item.id && <Check className="w-4 h-4 text-gold" />}
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">{item.spec}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Specifications & Timeline Output (NO DIRECT MONEY FIGURES) */}
          <div className="pt-6 border-t border-stone-800 bg-stone-950/70 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 block flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  Estimated Timeline:
                </span>
                <div className="text-lg font-cinzel font-bold text-gold mt-1">
                  {getTimeline()}
                </div>
                <span className="text-[10px] text-stone-400 font-mono">Guaranteed handover milestone</span>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 block flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-gold" />
                  Scope Selected:
                </span>
                <div className="text-sm font-semibold text-stone-200 mt-1">
                  {getScopeLabel()}
                </div>
                <span className="text-[10px] text-stone-400 font-mono">3D Plan + Site Engineer Supervision</span>
              </div>

              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 block flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  Warranty Coverage:
                </span>
                <div className="text-sm font-semibold text-stone-200 mt-1">
                  10-Yr Marine Ply + 1-Yr Service
                </div>
                <span className="text-[10px] text-stone-400 font-mono">Anti-Termite & BWP 710 Certified</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-900">
              <span className="text-xs text-stone-400 font-sans">
                Get an exact, itemized material BOQ calculated for your site in Kharar/Mohali.
              </span>
              <button
                onClick={handleWhatsAppDispatch}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#25D366] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-xl font-mono shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Custom BOQ on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
