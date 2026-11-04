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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-[#EADBCA] relative" id="faqs">
      {/* Ambient Golden Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,#F5E9D3_0%,transparent_70%)] opacity-70 -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" aria-hidden="true" />
            <span>TRANSPARENCY & ASSURANCE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 tracking-tight">
            Frequently Asked <span className="text-[#C5A059]">Questions</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
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
                    ? 'border-[#C5A059] bg-white shadow-[0_10px_30px_rgba(245,233,211,0.8)]'
                    : 'border-[#EADBCA] bg-white hover:border-[#C5A059] shadow-sm'
                }`}
              >
                <h3>
                  <button
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleFAQ(idx)}
                    className="w-full py-3.5 sm:py-4.5 px-4 sm:px-6 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-cinzel text-xs sm:text-base font-semibold text-stone-900 leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'border-[#C5A059] bg-[#C5A059] text-stone-950 rotate-180'
                          : 'border-[#EADBCA] bg-[#FAF8F5] text-stone-600'
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                    </div>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`px-4 sm:px-6 transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-4 sm:pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed pt-3 border-t border-[#EADBCA]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Query CTA */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-2xl border border-[#EADBCA] bg-white shadow-[0_10px_30px_rgba(245,233,211,0.6)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5E9D3] border border-[#EADBCA] flex items-center justify-center shrink-0 text-[#9E7D3B]">
              <MessageSquare className="w-5 h-5 text-[#C5A059]" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-cinzel text-xs sm:text-sm font-bold text-stone-900">Have a specific civil or interior query?</h4>
              <p className="text-xs text-stone-600">Speak directly with our senior site engineer on WhatsApp.</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors%20and%20Interiors,%20I%20have%20a%20question%20about%20my%20interior/civil%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ask questions on WhatsApp with Elegant Contractors and Interiors"
            className="px-5 py-2.5 rounded-full bg-stone-900 text-[#F5E9D3] hover:bg-stone-800 font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
