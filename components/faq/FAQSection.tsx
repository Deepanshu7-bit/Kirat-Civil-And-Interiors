'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Sparkles } from 'lucide-react';
import { FAQS_DATA, BUSINESS_INFO } from '@/lib/data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#09090b] via-[#101015] to-[#09090b] border-t border-stone-800" id="faqs">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-mono uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>TRANSPARENCY & ASSURANCE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-100 tracking-tight">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
            Direct, transparent answers regarding turnkey execution, pricing, branded materials, and structural warranties across Kharar & Mohali.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-answer-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-gold/40 bg-gradient-to-b from-stone-900/90 to-stone-950/80 shadow-lg gold-glow-sm'
                    : 'border-stone-800/80 bg-stone-900/40 hover:border-stone-700'
                }`}
              >
                <h3>
                  <button
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFAQ(idx)}
                    className="w-full py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-cinzel text-sm sm:text-base font-semibold text-stone-100 leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'border-gold bg-gold text-black rotate-180'
                          : 'border-stone-700 bg-stone-800/60 text-stone-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`px-5 sm:px-6 transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed pt-2 border-t border-stone-800/60">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Query CTA */}
        <div className="mt-10 p-6 rounded-2xl border border-gold/20 bg-gradient-to-r from-stone-900/80 via-obsidian to-stone-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 text-gold">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-cinzel text-sm font-bold text-stone-100">Have a specific civil or interior query?</h4>
              <p className="text-xs text-stone-400">Speak directly with our senior site engineer on WhatsApp.</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors%20and%20Interiors,%20I%20have%20a%20question%20about%20my%20interior/civil%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ask questions on WhatsApp with Elegant Contractors and Interiors"
            className="px-5 py-2.5 rounded-full bg-gold text-black font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#e8cf78] transition-colors shadow-md gold-glow-sm shrink-0"
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
