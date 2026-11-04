import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  HelpCircle,
  Briefcase,
  Building2
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Commercial Office & SCO Fit-Outs Mohali | Elegant',
  description: 'Commercial interior contractor & office fit-out specialist in Mohali, Kharar & Aerocity. SCO renovations, acoustic glass partitions, HVAC channeling, and on-time business handover.',
  keywords: [
    'commercial interior contractor mohali',
    'office fitouts kharar',
    'commercial sco interior designer tricity',
    'retail showroom interiors mohali',
    'it office interior design aerocity',
    'office furniture partition contractor',
    'commercial contractor sector 117 mohali',
    'office renovation sunny enclave'
  ],
  alternates: {
    canonical: 'https://www.elegantspaces.me/commercial-interior-office-fitouts-mohali',
  },
  openGraph: {
    title: 'Commercial Office & SCO Fit-Outs Mohali | Elegant',
    description: 'Turnkey commercial fit-outs, SCO retail transformations, and corporate office interiors delivered under single-point master accountability across Mohali Tricity.',
    url: 'https://www.elegantspaces.me/commercial-interior-office-fitouts-mohali',
    type: 'website',
    images: [{ url: '/logos/elegant-logo-luxury-crest.jpg', width: 1024, height: 1024, alt: 'Commercial Office Fitouts Mohali Kharar' }]
  }
};

export default function CommercialFitoutsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Office Fit-Outs & SCO Interiors",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ACME HEIGHTS-2, 309/G, Sector 117, Ex 2",
        "addressLocality": "Sahibzada Ajit Singh Nagar",
        "addressRegion": "Punjab",
        "postalCode": "140301",
        "addressCountry": "IN"
      }
    },
    "areaServed": BUSINESS_INFO.serviceAreas,
    "description": "Full-spectrum commercial office fit-outs, SCO retail renovations, acoustic glass partition cabins, data cabling, and HVAC false ceiling integration in Mohali & Kharar."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can you deliver a 2,000 sq ft commercial SCO or IT office fit-out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our dedicated commercial turnkey team delivers full SCO fit-outs (from civil flooring and glass partitions to electrical distribution boards and workstations) within 30 to 45 business days flat, backed by contractual delay compensation clauses."
        }
      },
      {
        "@type": "Question",
        "name": "Do you manage commercial civil modifications and fire/HVAC conduits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Because we are licensed civil and interior contractors, our in-house civil engineers manage heavy structural floor level casting, plumbing for commercial washrooms/pantries, and concealed electrical wiring to prevent rental handover delays."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-gold/30 selection:text-stone-900 pt-[68px] sm:pt-[72px]">
        {/* Breadcrumb Bar */}
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-[#EADBCA] py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono text-stone-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-stone-900 transition-colors shrink-0">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-400 shrink-0">Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-[#9E7D3B] font-semibold shrink-0">Commercial Fit-Outs &amp; SCO Interiors</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(circle_at_top,#F5E9D3_0%,transparent_60%)]">
          <div className="max-w-5xl mx-auto text-center space-y-5 sm:space-y-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-[#EADBCA] bg-white/80 backdrop-blur-sm text-[10px] sm:text-xs font-mono text-stone-800 shadow-sm max-w-full text-center">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-[#9E7D3B] font-semibold uppercase tracking-wider">MOHALI · AEROCITY · KHARAR TRICITY</span>
              <span className="text-stone-400 hidden xs:inline">|</span>
              <span className="text-stone-600 font-sans hidden xs:inline">GUARANTEED COMMERCIAL HANDOVER</span>
            </div>

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-cinzel font-bold text-stone-900 tracking-tight leading-tight">
              Turnkey <span className="text-[#C5A059]">Commercial Fit-Outs</span> &amp; SCO Interiors
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto font-sans leading-relaxed">
              Eliminate revenue loss from delayed office openings. We design and build high-productivity corporate offices, SCO retail showrooms, and clinics under one master contract with zero commercial downtime.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20have%20a%20commercial%20SCO/office%20property%20and%20need%20a%20turnkey%20fitout%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Book Commercial Site Consultation</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#EADBCA] bg-white text-stone-800 font-mono text-xs tracking-wider uppercase hover:border-[#C5A059] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Commercial Lead: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-[#EADBCA]">
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Clock className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">35-Day Handover</span>
                <span className="text-[10px] text-stone-500">Commercial SCO Speed</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Building2 className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">SCO & Showrooms</span>
                <span className="text-[10px] text-stone-500">Full Structural MEP</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Briefcase className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">Acoustic Partitions</span>
                <span className="text-[10px] text-stone-500">Toughened Glass Cabins</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">Fixed BOQ</span>
                <span className="text-[10px] text-stone-500">Zero Cost Overruns</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#EADBCA]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 mt-2">
                Commercial Fit-Out FAQs
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl border border-[#EADBCA] bg-[#FAF8F5]">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>How fast can you deliver a 2,000 sq ft commercial SCO or IT office fit-out?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  Our dedicated commercial turnkey team delivers full SCO fit-outs (from civil flooring and glass partitions to electrical distribution boards and workstations) within 30 to 45 business days flat, backed by contractual delay compensation clauses.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#EADBCA] bg-[#FAF8F5]">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Do you manage commercial civil modifications and fire/HVAC conduits?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  Yes. Because we are licensed civil and interior contractors, our in-house civil engineers manage heavy structural floor level casting, plumbing for commercial washrooms/pantries, and concealed electrical wiring to prevent rental handover delays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Conversion Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-[#F5E9D3]/40 to-[#FAF8F5] border-t border-[#EADBCA] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">UPGRADE YOUR BUSINESS SPACE</span>
            <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-stone-900 tracking-tight">
              Request a Commercial Site Assessment & BOQ
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
              Available across Mohali Phase 7/8/9, Aerocity, IT City, Sector 82, Sector 117, Sunny Enclave, and New Chandigarh.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20want%20to%20schedule%20a%20commercial%20site%20meeting.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Schedule Commercial Meeting</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#EADBCA] bg-white text-stone-800 font-mono text-xs tracking-wider uppercase hover:border-[#C5A059] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar />
    </>
  );
}
