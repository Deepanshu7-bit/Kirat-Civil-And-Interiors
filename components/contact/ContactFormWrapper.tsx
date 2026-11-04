'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function ContactFormWrapper() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Turnkey Luxury Residential Interior',
    location: '',
    requirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone number.';
    } else if (!/^[0-9+ -]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.location.trim()) newErrors.location = 'Please mention your city / society / sector in Tricity.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch and open WhatsApp with formatted message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      const message = encodeURIComponent(
        `*New Project Enquiry – Elegant Spaces:*\n\n` +
        `• *Client Name:* ${formData.name}\n` +
        `• *Phone:* ${formData.phone}\n` +
        (formData.email ? `• *Email:* ${formData.email}\n` : '') +
        `• *Project Type:* ${formData.projectType}\n` +
        `• *Location:* ${formData.location}\n` +
        (formData.requirements ? `• *Requirements:* ${formData.requirements}\n` : '') +
        `\n_Inquiry submitted via elegantspaces.me/contact_`
      );

      window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`, '_blank');
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EADBCA] shadow-xl">
      {isSuccess ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#F5E9D3] border border-[#C5A059] flex items-center justify-center mx-auto text-[#9E7D3B]">
            <CheckCircle2 className="w-8 h-8 text-[#C5A059]" />
          </div>
          <h3 className="font-cormorant text-3xl font-bold text-stone-900">
            Thank You, {formData.name}!
          </h3>
          <p className="text-sm text-stone-600 max-w-md mx-auto font-sans leading-relaxed">
            Your project details have been dispatched to our engineering desk. A site supervisor will review your scope and get in touch within 24 hours.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  name: '',
                  phone: '',
                  email: '',
                  projectType: 'Turnkey Luxury Residential Interior',
                  location: '',
                  requirements: '',
                });
              }}
              className="text-xs font-mono font-semibold text-[#9E7D3B] hover:text-stone-900 underline uppercase tracking-wider"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="border-b border-[#EADBCA] pb-4 mb-6">
            <h3 className="font-cormorant font-semibold text-2xl sm:text-3xl text-stone-900">
              Project Consultation Form
            </h3>
            <p className="text-xs text-stone-600 font-sans mt-1">
              Fill in your details below for a free on-site measurement &amp; transparent BOQ estimate.
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-stone-800 font-bold mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rajiv Sharma"
              className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-colors ${
                errors.name ? 'border-red-400 bg-red-50/30' : 'border-[#EADBCA] bg-[#FAF8F5] focus:border-[#C5A059]'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-sans">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="contact-phone" className="block text-xs font-mono uppercase tracking-wider text-stone-800 font-bold mb-1.5">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 98783 90090"
              className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-colors ${
                errors.phone ? 'border-red-400 bg-red-50/30' : 'border-[#EADBCA] bg-[#FAF8F5] focus:border-[#C5A059]'
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-sans">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Email (Optional) */}
          <div>
            <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-stone-800 font-bold mb-1.5">
              Email Address <span className="text-stone-400 font-normal">(Optional)</span>
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. rajiv@example.com"
              className="w-full px-4 py-3 rounded-xl border border-[#EADBCA] bg-[#FAF8F5] text-sm font-sans focus:outline-none focus:border-[#C5A059] transition-colors"
            />
          </div>

          {/* Project Type */}
          <div>
            <label htmlFor="contact-project-type" className="block text-xs font-mono uppercase tracking-wider text-stone-800 font-bold mb-1.5">
              Scope of Work
            </label>
            <select
              id="contact-project-type"
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-[#EADBCA] bg-[#FAF8F5] text-sm font-sans focus:outline-none focus:border-[#C5A059] transition-colors text-stone-800 cursor-pointer"
            >
              <option value="Turnkey Luxury Residential Interior">Turnkey Residential Interior (Full Flat / Kothi)</option>
              <option value="Custom Modular Kitchen">Custom Modular Kitchen &amp; Pantry</option>
              <option value="Architectural False Ceilings & Lighting">Architectural False Ceilings &amp; Lighting</option>
              <option value="Modular Wardrobes & Custom Millwork">Designer Wardrobes &amp; Millwork</option>
              <option value="Civil Construction & Structural Alterations">Civil Construction &amp; Wall Alterations</option>
              <option value="Commercial Office Fit-Out / SCO">Commercial SCO / Corporate Office Fit-Out</option>
              <option value="Complete Home Renovation">Complete Second-Hand Home Renovation</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="contact-location" className="block text-xs font-mono uppercase tracking-wider text-stone-800 font-bold mb-1.5">
              Property Location in Tricity <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-location"
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g. Sunny Enclave Sector 125, Kharar / Wave Estate Mohali"
              className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-colors ${
                errors.location ? 'border-red-400 bg-red-50/30' : 'border-[#EADBCA] bg-[#FAF8F5] focus:border-[#C5A059]'
              }`}
            />
            {errors.location && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-sans">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.location}</span>
              </p>
            )}
          </div>

          {/* Project Requirements */}
          <div>
            <label htmlFor="contact-requirements" className="block text-xs font-mono uppercase tracking-wider text-stone-800 font-bold mb-1.5">
              Project Brief &amp; Timeline <span className="text-stone-400 font-normal">(Optional)</span>
            </label>
            <textarea
              id="contact-requirements"
              rows={3}
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              placeholder="e.g. 3BHK newly constructed flat, looking for modular kitchen, false ceiling, and 3 sliding wardrobes. Target move-in next month."
              className="w-full px-4 py-3 rounded-xl border border-[#EADBCA] bg-[#FAF8F5] text-sm font-sans focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-full bg-stone-950 text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-stone-800 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#C5A059]" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#C5A059]" />
                <span>Submit &amp; Open WhatsApp Chat</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-stone-500 text-center font-sans">
            We value your privacy. Your information is strictly used to schedule your site consultation.
          </p>
        </form>
      )}
    </div>
  );
}
