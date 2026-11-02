'use client';

import React from 'react';
import { Compass, FileText, Hammer, KeyRound } from 'lucide-react';

export default function TurnkeyRoadmap() {
  const steps = [
    {
      step: '01',
      title: 'Site Laser Inspection & 3D Layout',
      desc: 'Our civil team inspects structural dampness, verifies wall angles, and prepares millimeter-precise 2D layouts and photorealistic 3D room walkthroughs.',
      icon: <Compass className="w-5 h-5 text-gold" />,
      tag: 'Day 1 – 7'
    },
    {
      step: '02',
      title: 'Fixed Transparent BOQ Contract',
      desc: 'Every bag of cement, grade of BWP marine ply, brand of paint, and soft-close hinge is documented in writing with fixed pricing and zero surprise escalation clauses.',
      icon: <FileText className="w-5 h-5 text-gold" />,
      tag: 'Day 8 – 10'
    },
    {
      step: '03',
      title: 'Civil & Structural MEP Execution',
      desc: 'Wall alterations, beam reinforcements, chemical damp-proofing, and concealed electrical/plumbing lines are executed under qualified civil engineer supervision.',
      icon: <Hammer className="w-5 h-5 text-gold" />,
      tag: 'Day 11 – 30'
    },
    {
      step: '04',
      title: 'Finishing & Deep-Clean Handover',
      desc: 'Factory-pressed modular shutters installed, Gyproc false ceiling painted to perfection, complete chemical cleaning conducted, and keys handed over on time.',
      icon: <KeyRound className="w-5 h-5 text-gold" />,
      tag: 'Day 31 – 45'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#09090b] via-[#101015] to-[#09090b] border-t border-stone-800" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-mono uppercase tracking-widest mb-3">
            <span>ZERO UNCERTAINTY METHODOLOGY</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-100 tracking-tight">
            How Your Project Gets <span className="text-gold-gradient">Delivered</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-400 font-sans">
            A battle-tested 4-step execution framework designed to protect your budget, timeline, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 border border-stone-800 relative flex flex-col justify-between group hover:border-gold/40 transition-all duration-300 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs text-gold/80 bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                    {item.tag}
                  </span>
                </div>

                <span className="font-mono text-2xl font-bold text-stone-700 group-hover:text-gold/40 transition-colors block mb-1">
                  {item.step}
                </span>

                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-100 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center gap-2 text-[11px] font-mono text-gold">
                <span>Phase {item.step} Quality Gate Passed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
