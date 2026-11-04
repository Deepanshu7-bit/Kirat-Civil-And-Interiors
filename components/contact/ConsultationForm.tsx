'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, Phone, MessageSquare, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function ConsultationForm() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [siteLocation, setSiteLocation] = useState('');
  const [serviceType, setServiceType] = useState('Turnkey Interior & Civil (Full Flat / House)');
  const [projectNotes, setProjectNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) {
      setError('Please provide your name and contact phone number.');
      return;
    }
    setError('');
    setIsSubmitted(true);

    const message = encodeURIComponent(
      `*New Turnkey Consultation Request – Elegant Spaces:*\n\n` +
      `• *Client Name:* ${fullName}\n` +
      `• *Phone:* ${phoneNumber}\n` +
      `• *Site Location:* ${siteLocation || 'Tricity'}\n` +
      `• *Scope of Work:* ${serviceType}\n` +
      (projectNotes ? `• *Notes:* ${projectNotes}\n` : '') +
      `\n_Sent via elegantspaces.me homepage inquiry_`
    );

    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F5EFE6]/60 border-t border-[#EADBCA] relative" id="contact">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct Contact Info & Value */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full inline-block">
              LET&apos;S CONNECT
            </span>

            <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-tight">
              Ready to Design Your Next Space?
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
              Book a complimentary site measurement consultation across Mohali, Kharar, or Tricity. Our engineering team will review your space and prepare an itemized, transparent BOQ.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-[#EADBCA] bg-white shadow-xs">
                <Phone className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-[11px] font-mono uppercase text-stone-500 block">Direct Consultation Line</span>
                  <a 
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`} 
                    className="text-base font-bold text-stone-900 hover:text-[#9E7D3B] transition-colors font-mono"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-[#EADBCA] bg-white shadow-xs">
                <MessageSquare className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-[11px] font-mono uppercase text-stone-500 block">WhatsApp Quick Desk</span>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Spaces,%20I%20would%20like%20to%20discuss%20my%20interior/civil%20project.`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-semibold text-stone-900 hover:text-[#9E7D3B] transition-colors font-mono"
                  >
                    Chat Directly on WhatsApp: +91 98783 90090
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-[#EADBCA] bg-white shadow-xs">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-[11px] font-mono uppercase text-stone-500 block">Tricity Service Hub</span>
                  <span className="text-xs text-stone-700 font-sans leading-relaxed block">
                    {BUSINESS_INFO.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EADBCA] shadow-xl">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F5E9D3] border border-[#C5A059] flex items-center justify-center mx-auto text-[#9E7D3B]">
                    <CheckCircle2 className="w-8 h-8 text-[#C5A059]" />
                  </div>
                  <h3 className="font-cormorant text-3xl font-bold text-stone-900">
                    Consultation Requested
                  </h3>
                  <p className="text-sm text-stone-600 max-w-sm mx-auto font-sans leading-relaxed">
                    Thank you! Your project enquiry has been sent. A site engineer will follow up shortly to schedule your site visit.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setPhoneNumber('');
                      setSiteLocation('');
                      setProjectNotes('');
                    }}
                    className="mt-4 text-xs font-mono font-semibold text-[#9E7D3B] underline uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#EADBCA] pb-3 mb-4">
                    <h3 className="font-cormorant font-semibold text-2xl text-stone-900">
                      Request a Site Measurement
                    </h3>
                    <p className="text-xs text-stone-600 font-sans">
                      Complimentary on-site assessment across Kharar, Mohali, and Chandigarh.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="home-consult-name" className="block text-xs font-mono uppercase tracking-wider text-stone-800 font-bold mb-1">
                        Full Name *
                      </label>
                      <input
                        id="home-consult-name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rajiv Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCA] bg-[#FAF8F5] text-xs sm:text-sm font-sans focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>

                    <div>
                      <label htmlFor="home-consult-phone" className="block text-xs font-mono uppercase tracking-wider text-stone-800 font-bold mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="home-consult-phone"
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="e.g. +91 98783 90090"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCA] bg-[#FAF8F5] text-xs sm:text-sm font-sans focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="home-consult-scope" className="block text-xs font-mono uppercase tracking-wider text-stone-800 font-bold mb-1">
                        Scope of Work
                      </label>
                      <select
                        id="home-consult-scope"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCA] bg-[#FAF8F5] text-xs sm:text-sm font-sans focus:outline-none focus:border-[#C5A059] text-stone-800"
                      >
                        <option value="Turnkey Interior & Civil (Full Flat / House)">Turnkey Interior &amp; Civil (Full Flat / Kothi)</option>
                        <option value="Modular Kitchen & Pantry">Custom Modular Kitchen &amp; Pantry</option>
                        <option value="False Ceiling & Ambient Lighting">Architectural False Ceiling &amp; Lighting</option>
                        <option value="Modular Wardrobes & Millwork">Modular Wardrobes &amp; Millwork</option>
                        <option value="Civil Construction & Alterations">Civil Construction &amp; Alterations</option>
                        <option value="Commercial SCO / Office Fit-Out">Commercial Office Fit-Out</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="home-consult-location" className="block text-xs font-mono uppercase tracking-wider text-stone-800 font-bold mb-1">
                        Site Location in Tricity
                      </label>
                      <input
                        id="home-consult-location"
                        type="text"
                        value={siteLocation}
                        onChange={(e) => setSiteLocation(e.target.value)}
                        placeholder="e.g. Sector 125 Sunny Enclave, Kharar"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCA] bg-[#FAF8F5] text-xs sm:text-sm font-sans focus:outline-none focus:border-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="home-consult-notes" className="block text-xs font-mono uppercase tracking-wider text-stone-800 font-bold mb-1">
                      Brief Requirements <span className="text-stone-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="home-consult-notes"
                      rows={2}
                      value={projectNotes}
                      onChange={(e) => setProjectNotes(e.target.value)}
                      placeholder="e.g. 3BHK flat in Kharar, need kitchen, wardrobes & false ceiling within 35 days."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCA] bg-[#FAF8F5] text-xs sm:text-sm font-sans focus:outline-none focus:border-[#C5A059] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-stone-950 text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-stone-800 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4 text-[#C5A059]" />
                    <span>Submit &amp; Open WhatsApp Chat</span>
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
