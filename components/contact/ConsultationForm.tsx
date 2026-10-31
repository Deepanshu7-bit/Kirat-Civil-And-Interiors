'use client';

import React, { useState } from 'react';
import { Send, Phone, MessageSquare, MapPin, Clock, CheckCircle2 } from 'lucide-react';
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

    const formattedMessage = encodeURIComponent(
      `Hello Elegant Contractors & Interiors, I am requesting a Site Consultation:\n\n` +
      `• Name: ${fullName}\n` +
      `• Phone: ${phoneNumber}\n` +
      `• Site Locality: ${siteLocation}\n` +
      `• Service Required: ${serviceType}\n` +
      (projectNotes ? `• Notes: ${projectNotes}\n\n` : `\n`) +
      `Please let me know when your civil/interior site team can visit.`
    );

    setIsSubmitted(true);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${formattedMessage}`, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#09090b] via-[#0e0e13] to-[#09090b] border-t border-stone-800" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-mono uppercase tracking-widest">
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-100 tracking-tight leading-tight">
              Ready to Build or Transform <span className="text-gold-gradient">Your Space?</span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
              Book a complimentary 3D site measurement consultation. Our civil engineering team will visit your property in Kharar or Mohali and prepare a detailed, transparent BOQ quotation.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-stone-800 bg-stone-900/40">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono uppercase text-stone-400 block">Direct Line</span>
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-semibold text-stone-100 hover:text-gold transition-colors font-mono">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-stone-800 bg-stone-900/40">
                <MessageSquare className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono uppercase text-stone-400 block">WhatsApp Desk</span>
                  <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-stone-100 hover:text-gold transition-colors font-mono">
                    +91 7401011740
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-stone-800 bg-stone-900/40">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono uppercase text-stone-400 block">Workshop & Head Office</span>
                  <span className="text-xs text-stone-300 font-sans leading-relaxed block">
                    {BUSINESS_INFO.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-2xl">
              <h3 className="font-cinzel text-xl font-bold text-stone-100 mb-1">
                Schedule Free Site Inspection
              </h3>
              <p className="text-xs text-stone-400 font-sans mb-6">
                Fill in your project details and connect instantly with our senior contractor on WhatsApp.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl border border-gold/40 bg-gold/10 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-gold mx-auto" />
                  <h4 className="font-cinzel font-bold text-base text-stone-100">Inquiry Dispatched!</h4>
                  <p className="text-xs text-stone-300">
                    Your site consultation request has opened in WhatsApp. Our engineering team will confirm your site visit within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div>
                    <label className="block text-stone-300 mb-1.5 font-mono uppercase text-[11px]">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Vikramjeet Singh"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-100 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-300 mb-1.5 font-mono uppercase text-[11px]">
                        WhatsApp Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="e.g. 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-100 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-300 mb-1.5 font-mono uppercase text-[11px]">
                        Site Locality / Sector *
                      </label>
                      <input
                        type="text"
                        required
                        value={siteLocation}
                        onChange={(e) => setSiteLocation(e.target.value)}
                        placeholder="e.g. Sunny Enclave, Kharar"
                        className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-100 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-300 mb-1.5 font-mono uppercase text-[11px]">
                      Service Required *
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-100 focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="Turnkey Interior & Civil (Full House)">Turnkey Interior & Civil (Full House)</option>
                      <option value="Civil Construction & Structural Alterations">Civil Construction & Structural Alterations</option>
                      <option value="Custom Modular Kitchen & Wardrobes">Custom Modular Kitchen & Wardrobes</option>
                      <option value="False Ceiling & Lighting Design">False Ceiling & Lighting Design</option>
                      <option value="Complete Home Renovation & Remodeling">Complete Home Renovation & Remodeling</option>
                      <option value="Commercial Office / SCO Fit-Out">Commercial Office / SCO Fit-Out</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-stone-300 mb-1.5 font-mono uppercase text-[11px]">
                      Project Notes / Expected Timeline (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={projectNotes}
                      onChange={(e) => setProjectNotes(e.target.value)}
                      placeholder="Tell us about your 2BHK/3BHK/Villa or specific requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-stone-800 text-stone-100 focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gold text-black font-semibold font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#e8cf78] transition-all shadow-xl gold-glow-sm"
                  >
                    <Send className="w-4 h-4" />
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
