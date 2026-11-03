'use client';

import React from 'react';
import { Compass, FileText, Hammer, KeyRound } from 'lucide-react';

export default function TurnkeyRoadmap() {
  const steps = [
    {
      step: '01',
      title: 'Site Laser Inspection & 3D Layout',
      desc: 'Our civil team inspects structural dampness, verifies wall angles, and prepares millimeter-precise 2D layouts and photorealistic 3D room walkthroughs.',
      icon: <Compass className="w-5 h-5 text-[#C5A059]" />,
      tag: 'Day 1 – 7'
    },
    {
      step: '02',
      title: 'Fixed Transparent BOQ Contract',
      desc: 'Every bag of cement, grade of BWP marine ply, brand of paint, and soft-close hinge is documented in writing with fixed pricing and zero surprise escalation clauses.',
      icon: <FileText className="w-5 h-5 text-[#C5A059]" />,
      tag: 'Day 8 – 10'
    },
    {
      step: '03',
      title: 'Civil & Structural MEP Execution',
      desc: 'Wall alterations, beam reinforcements, chemical damp-proofing, and concealed electrical/plumbing lines are executed under qualified civil engineer supervision.',
      icon: <Hammer className="w-5 h-5 text-[#C5A059]" />,
      tag: 'Day 11 – 30'
    },
    {
      step: '04',
      title: 'Finishing & Deep-Clean Handover',
      desc: 'Factory-pressed modular shutters installed, Gyproc false ceiling painted to perfection, complete chemical cleaning conducted, and keys handed over on time.',
      icon: <KeyRound className="w-5 h-5 text-[#C5A059]" />,
      tag: 'Day 31 – 45'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-[#EADBCA]" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
            <span>ZERO UNCERTAINTY METHODOLOGY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 tracking-tight">
            How Your Project Gets <span className="text-[#C5A059]">Delivered</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans">
            A battle-tested 4-step execution framework designed to protect your budget, timeline, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-white border border-[#EADBCA] hover:border-[#C5A059] shadow-[0_10px_30px_rgba(245,233,211,0.5)] hover:shadow-[0_15px_35px_rgba(245,233,211,0.8)] transition-all duration-300 relative flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#EADBCA] flex items-center justify-center group-hover:border-[#C5A059] transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-cinzel text-2xl font-bold text-[#EADBCA] group-hover:text-[#C5A059] transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="inline-block px-2 py-0.5 rounded bg-[#F5E9D3] border border-[#EADBCA] text-[10px] font-mono text-[#9E7D3B] uppercase tracking-wider mb-2 font-semibold">
                  {item.tag}
                </div>

                <h3 className="font-cinzel text-base font-bold text-stone-900 group-hover:text-[#9E7D3B] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs text-stone-600 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#EADBCA] flex items-center gap-1.5 text-[11px] font-mono text-[#9E7D3B] font-semibold">
                <span>Verified Milestones</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
