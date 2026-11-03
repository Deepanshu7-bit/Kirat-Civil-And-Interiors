import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  SunMedium, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle,
  Clock,
  Layers,
  ChevronRight,
  Flame,
  Volume2
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'POP Wala & False Ceiling Contractor in Mohali & Kharar | Gyproc Ceiling Rates',
  description: 'Experienced POP wala and false ceiling contractor in Mohali, Kharar & Sunny Enclave. Saint-Gobain Gyproc false ceilings, magnetic track lighting, cove LED profiles, and crack-free GI framing with rates from ₹75/sq ft.',
  keywords: [
    'pop wala near me',
    'pop false ceiling contractor mohali',
    'false ceiling contractor kharar',
    'gypsum false ceiling sunny enclave',
    'pop thekedar mohali',
    'false ceiling rate per sq ft tricity',
    'cove profile light false ceiling',
    'saint gobain gyproc false ceiling contractor',
    'pop false ceiling sector 117 mohali',
    'designer false ceiling contractor chandigarh'
  ],
  alternates: {
    canonical: 'https://www.elegantspaces.me/pop-false-ceiling-contractor-mohali',
  },
  openGraph: {
    title: 'POP Wala & False Ceiling Contractor in Mohali & Kharar | Elegant Contractors',
    description: 'Bespoke Gyproc false ceilings, cove profile lighting, and designer POP work across Kharar, Sunny Enclave & Mohali with transparent per-square-foot pricing.',
    url: 'https://www.elegantspaces.me/pop-false-ceiling-contractor-mohali',
    type: 'website',
    images: [{ url: '/logos/elegant-logo-luxury-crest.jpg', width: 1024, height: 1024, alt: 'False Ceiling Contractor Mohali Kharar' }]
  }
};

export default function FalseCeilingPage() {
  const ceilingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "POP & Gypsum False Ceiling Installation",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ACME HEIGHTS-2, 309/G, Sector 117, Ex 2",
        "addressLocality": "Mohali",
        "addressRegion": "Punjab",
        "postalCode": "140301",
        "addressCountry": "IN"
      }
    },
    "areaServed": ["Mohali", "Kharar", "Sunny Enclave", "Sector 117", "New Chandigarh", "Tricity"],
    "description": "Architectural POP and Saint-Gobain Gyproc false ceilings with heavy-gauge GI channel framework, anti-crack joint tape, indirect warm COB cove lighting, and magnetic track spotlighting.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "75",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "75",
        "priceCurrency": "INR",
        "unitText": "per square foot"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the per square foot rate for false ceiling in Mohali and Kharar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Mohali and Kharar, standard Gypsum false ceiling (using Saint-Gobain Gyproc 12.5mm boards and heavy GI channels) typically costs ₹75 to ₹95 per square foot including material and labor. Intricate multi-layered designer POP ceilings with cove light channels range from ₹105 to ₹145 per square foot."
        }
      },
      {
        "@type": "Question",
        "name": "How do you prevent false ceiling sagging and cracks at the joints?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cracks occur when cheap contractors use lightweight local tin channels and omit expansion joints. We anchor heavy-gauge, rust-resistant galvanized iron (GI) channels into the RCC ceiling slab using steel rawl plugs, followed by fiberglass self-adhesive joint tape and Gyproc jointing compound."
        }
      },
      {
        "@type": "Question",
        "name": "Do you also handle cove lighting, magnetic track lights, and painting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Elegant Contractors provides an all-in-one ceiling package: framing, gypsum boarding, electrical conduit wiring, cove LED strips (3000K warm white), magnetic track spotlight rails, and final Asian Paints Royale emulsion coat."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ceilingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-gold/30 selection:text-white">
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-[#EADBCA] py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono text-stone-500">
            <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-400">Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#9E7D3B] font-semibold">POP Wala & False Ceiling Contractor Mohali</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(circle_at_top,#F5E9D3_0%,transparent_60%)]">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#EADBCA] bg-white/80 backdrop-blur-sm text-xs font-mono text-stone-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-[#9E7D3B] font-semibold uppercase tracking-wider">MOHALI · KHARAR · TRICITY</span>
              <span className="text-stone-400">|</span>
              <span className="text-stone-600 font-sans">STARTING AT ₹75 / SQ FT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-bold text-stone-900 tracking-tight leading-tight">
              Master <span className="text-[#C5A059]">POP Wala & False Ceiling</span> Contractor in Mohali
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto font-sans leading-relaxed">
              Transform your rooms with architectural grandeur. We deliver crack-free <strong>Saint-Gobain Gyproc false ceilings</strong>, hidden <strong>warm cove lighting (3000K)</strong>, modern <strong>magnetic track rails</strong>, and bespoke POP craftsmanship across Kharar, Sunny Enclave, and SAS Nagar Mohali.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20need%20a%20per%20sq%20ft%20quote%20for%20False%20Ceiling%20/%20POP%20work%20in%20Mohali/Kharar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Get Free False Ceiling Estimate</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#EADBCA] bg-white text-stone-800 font-mono text-xs tracking-wider uppercase hover:border-[#C5A059] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call POP Mistri / Thekedar: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Guarantee Cards */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-[#EADBCA]">
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Layers className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">Saint-Gobain Gyproc</span>
                <span className="text-[10px] text-stone-500">Certified 12.5mm Boards</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">Anti-Sag GI Grid</span>
                <span className="text-[10px] text-stone-500">Heavy Zinc-Coated Framing</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <SunMedium className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">Magnetic Tracks</span>
                <span className="text-[10px] text-stone-500">Architectural Lighting</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Clock className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">3 Days Per Room</span>
                <span className="text-[10px] text-stone-500">Quick Clean Execution</span>
              </div>
            </div>
          </div>
        </section>

        {/* Transparent Per-Sq-Ft Rate Breakdown */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#EADBCA]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">100% TRANSPARENT PRICING</span>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 mt-2">
                False Ceiling & POP Rates in Mohali & Kharar (2026)
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-2xl mx-auto">
                No hidden charges. Clear square-foot rates including branded materials, laser alignment, joint tape finishing, and cleanup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl p-6 border border-[#EADBCA] bg-[#FAF8F5] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9E7D3B] font-semibold block">PLAN 1</span>
                  <h3 className="font-cinzel text-xl font-bold text-stone-900 mt-1">Standard Gyproc False Ceiling</h3>
                  <p className="text-xs text-stone-600 mt-2">
                    Ideal for clean flat ceilings, peripheral borders, and recessed spotlighting in bedrooms and living rooms.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-stone-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> 12.5mm Saint-Gobain Gyproc board</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Rust-resistant GI intermediate channels</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Spot cutouts for LED downlights</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Fiber mesh tape crack prevention</li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EADBCA]">
                  <span className="text-[11px] font-mono text-stone-500 block">Rate:</span>
                  <span className="font-cinzel text-2xl font-bold text-stone-900">₹75 – ₹85</span>
                  <span className="text-xs font-mono text-stone-500"> / sq ft (Material + Labor)</span>
                </div>
              </div>

              <div className="rounded-2xl p-6 border-2 border-[#C5A059] bg-white shadow-lg flex flex-col justify-between relative">
                <div className="absolute -top-3 right-6 bg-[#C5A059] text-stone-950 font-mono text-[10px] uppercase font-bold px-3 py-0.5 rounded-full shadow">
                  MOST POPULAR
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9E7D3B] font-semibold block">PLAN 2</span>
                  <h3 className="font-cinzel text-xl font-bold text-stone-900 mt-1">Designer Cove & Ambient LED</h3>
                  <p className="text-xs text-stone-600 mt-2">
                    Two-level multi-tiered ceiling with hidden indirect cove light trough (3000K warm white) and central chandelier hook.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-stone-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Concealed double-cove LED trough</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Heavy-duty perimeter ceiling angles</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Curvilinear or rectangular geometry</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Smooth Gyproc jointing compound finish</li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EADBCA]">
                  <span className="text-[11px] font-mono text-stone-500 block">Rate:</span>
                  <span className="font-cinzel text-2xl font-bold text-[#9E7D3B]">₹95 – ₹115</span>
                  <span className="text-xs font-mono text-stone-500"> / sq ft (Material + Labor)</span>
                </div>
              </div>

              <div className="rounded-2xl p-6 border border-[#EADBCA] bg-[#FAF8F5] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9E7D3B] font-semibold block">PLAN 3</span>
                  <h3 className="font-cinzel text-xl font-bold text-stone-900 mt-1">Architectural Magnetic Track</h3>
                  <p className="text-xs text-stone-600 mt-2">
                    Ultra-modern recessed magnetic track rails, charcoal fluted wooden rafters, and smart dimmer integration.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-stone-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Zero-trim flush magnetic track channels</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Wooden veneer or charcoal rafter accents</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Acoustic sound dampening grid options</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Smart home dimming profile compatibility</li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EADBCA]">
                  <span className="text-[11px] font-mono text-stone-500 block">Rate:</span>
                  <span className="font-cinzel text-2xl font-bold text-stone-900">₹130 – ₹175</span>
                  <span className="text-xs font-mono text-stone-500"> / sq ft (Custom Architectural)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">CUSTOMER QUESTIONS</span>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 mt-2">
                Frequently Asked False Ceiling & POP Questions
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl border border-[#EADBCA] bg-white shadow-sm">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>How long does it take to do a false ceiling for a 3BHK flat in Kharar/Mohali?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  For a full 3BHK apartment (Living room, Dining area, and 3 Bedrooms), our team completes the framing and Gyproc boarding in <strong>5 to 7 days</strong>. Taping, jointing, electrical wiring, and final paint primer take another 2 to 3 days.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#EADBCA] bg-white shadow-sm">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Does a false ceiling decrease the room height too much?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  In modern apartments with 9.5 to 10-foot ceilings, a standard false ceiling drops by only <strong>4 to 5 inches</strong>. For lower ceilings, we design peripheral border coves that leave the center open, making the room actually feel taller and more spacious.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#EADBCA] bg-white shadow-sm">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>What is the difference between POP (Plaster of Paris) and Gypsum boards?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  Traditional POP involves mixing powder on-site and hand-molding chicken mesh, which is labor-heavy, produces huge amounts of dust, and is prone to drying cracks. Gypsum boards (Saint-Gobain Gyproc) are machine-pressed factory boards that offer 100% laser-flat finishes, zero water drying time, and superior acoustic and thermal insulation. We specialize in precision Gyproc systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-900 text-[#F5E9D3] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A059] font-semibold">NEED AN ON-SITE MEASUREMENT?</span>
            <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
              Get Your False Ceiling Measured Today
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-sans leading-relaxed">
              Available across Sector 117 ACME Heights-2, Sunny Enclave Sector 125, Gillco Valley Kharar, and all Mohali GMADA sectors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20want%20to%20get%20false%20ceiling%20measurements%20and%20rates%20for%20my%20site.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5A059] text-stone-950 font-mono text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 hover:bg-[#b38e46] transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Schedule Free Site Measurement</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-stone-700 bg-stone-800 text-stone-200 font-mono text-xs tracking-wider uppercase hover:border-[#C5A059] transition-all flex items-center justify-center gap-2"
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
