'use client';

import React, { useState } from 'react';
import { Send, Phone, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function ConsultationForm() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [siteLocation, setSiteLocation] = useState('');
  const [serviceType, setServiceType] = useState('Turnkey Interior & Civil (Full House)');
  const [projectNotes, setProjectNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const message = encodeURIComponent(
      `*New Turnkey Consultation Request:*\n` +
      `• *Client Name:* ${fullName}\n` +
      `• *Phone:* ${phoneNumber}\n` +
      `• *Site Location:* ${siteLocation}\n` +
      `• *Scope of Work:* ${serviceType}\n` +
      (projectNotes ? `• *Notes:* ${projectNotes}\n` : '') +
      `\n_Sent via Elegant Contractors and Interiors Website_`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-[#EADBCA] relative" id="contact">
      {/* Ambient Golden Glow Accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,#F5E9D3_0%,transparent_70%)] opacity-70 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-widest shadow-sm">
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-stone-900 tracking-tight leading-tight">
              Ready to Build or Transform <span className="text-[#C5A059]">Your Space?</span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
              Book a complimentary 3D site measurement consultation. Our civil engineering team will visit your property in Kharar or Mohali and prepare a detailed, transparent BOQ quotation.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-[#EADBCA] bg-white shadow-sm">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-xs font-mono uppercase text-stone-500 block">Direct Line</span>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`} 
                    aria-label={`Call Elegant Contractors and Interiors at ${BUSINESS_INFO.phone}`}
                    className="text-sm font-semibold text-stone-900 hover:text-[#9E7D3B] transition-colors font-mono"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-[#EADBCA] bg-white shadow-sm">
                <MessageSquare className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-xs font-mono uppercase text-stone-500 block">WhatsApp Desk</span>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={`Chat with Elegant Contractors and Interiors on WhatsApp at ${BUSINESS_INFO.phone}`}
                    className="text-sm font-semibold text-stone-900 hover:text-[#9E7D3B] transition-colors font-mono"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-[#EADBCA] bg-white shadow-sm">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono uppercase text-stone-500 block">Workshop & Head Office</span>
                  <span className="text-xs text-stone-700 font-sans leading-relaxed block">
                    {BUSINESS_INFO.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-4 sm:p-8 bg-white border border-[#EADBCA] shadow-[0_20px_50px_rgba(245,233,211,0.8)]">
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900 mb-1">
                Schedule Free Site Inspection
              </h3>
              <p className="text-xs text-stone-600 font-sans mb-5 sm:mb-6">
                Fill in your project details and connect instantly with our senior contractor on WhatsApp.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl border border-[#C5A059] bg-[#F5E9D3]/40 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#C5A059] mx-auto" />
                  <h4 className="font-cinzel font-bold text-base text-stone-900">Inquiry Dispatched!</h4>
                  <p className="text-xs text-stone-600">
                    Your site consultation request has opened in WhatsApp. Our engineering team will confirm your site visit within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div>
                    <label htmlFor="full-name" className="block text-stone-700 mb-1.5 font-mono uppercase text-[11px] font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      id="full-name"
                      name="fullName"
                      type="text"
                      aria-label="Your Full Name"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Vikramjeet Singh"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EADBCA] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors text-base sm:text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone-number" className="block text-stone-700 mb-1.5 font-mono uppercase text-[11px] font-semibold">
                        WhatsApp Mobile Number *
                      </label>
                      <input
                        id="phone-number"
                        name="phoneNumber"
                        type="tel"
                        aria-label="WhatsApp Mobile Number"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="e.g. 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EADBCA] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors text-base sm:text-xs"
                      />
                    </div>

                    <div>
                      <label htmlFor="site-location" className="block text-stone-700 mb-1.5 font-mono uppercase text-[11px] font-semibold">
                        Site Locality / Sector *
                      </label>
                      <input
                        id="site-location"
                        name="siteLocation"
                        type="text"
                        aria-label="Site Locality or Sector"
                        required
                        value={siteLocation}
                        onChange={(e) => setSiteLocation(e.target.value)}
                        placeholder="e.g. Sunny Enclave, Kharar"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EADBCA] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors text-base sm:text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service-type" className="block text-stone-700 mb-1.5 font-mono uppercase text-[11px] font-semibold">
                      Service Required *
                    </label>
                    <select
                      id="service-type"
                      name="serviceType"
                      aria-label="Service Required"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EADBCA] text-stone-900 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors text-base sm:text-xs"
                    >
                      <option value="Turnkey Interior & Civil (Full House)">Turnkey Interior &amp; Civil (Full House)</option>
                      <option value="Civil Construction & Structural Alterations">Civil Construction &amp; Structural Alterations</option>
                      <option value="Custom Modular Kitchen & Wardrobes">Custom Modular Kitchen &amp; Wardrobes</option>
                      <option value="False Ceiling & Lighting Design">False Ceiling &amp; Lighting Design</option>
                      <option value="Complete Home Renovation & Remodeling">Complete Home Renovation &amp; Remodeling</option>
                      <option value="Commercial Office / SCO Fit-Out">Commercial Office / SCO Fit-Out</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="project-notes" className="block text-stone-700 mb-1.5 font-mono uppercase text-[11px] font-semibold">
                      Project Notes / Expected Timeline (Optional)
                    </label>
                    <textarea
                      id="project-notes"
                      name="projectNotes"
                      aria-label="Project Notes or Expected Timeline"
                      rows={3}
                      value={projectNotes}
                      onChange={(e) => setProjectNotes(e.target.value)}
                      placeholder="Tell us about your 2BHK/3BHK/Villa or specific requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#EADBCA] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-colors resize-none text-base sm:text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-stone-900 text-[#F5E9D3] font-semibold font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-xl group cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#C5A059]" />
                    <span>Submit & Open in WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
