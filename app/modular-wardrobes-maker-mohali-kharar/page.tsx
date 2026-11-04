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
  Layers,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Modular Wardrobes & Storage Maker Mohali | Elegant',
  description: 'Custom sliding wardrobes & walk-in closets maker in Mohali & Kharar. 100% BWP plywood, lacquered glass, soft-close sliding channels, and bespoke inner organizers.',
  keywords: [
    'modular wardrobe maker mohali',
    'sliding wardrobe designer kharar',
    'walk in closet manufacturer sunny enclave',
    'lacquered glass wardrobe tricity',
    'bwp ply wardrobe sector 117 mohali',
    'custom almirah maker kharar',
    'floor to ceiling wardrobe mohali',
    'wardrobe thekedar kharar'
  ],
  alternates: {
    canonical: 'https://www.elegantspaces.me/modular-wardrobes-maker-mohali-kharar',
  },
  openGraph: {
    title: 'Modular Wardrobes & Storage Maker Mohali | Elegant',
    description: 'Factory-finished floor-to-ceiling sliding wardrobes, walk-in closets, and lacquered glass millwork across Mohali & Kharar.',
    url: 'https://www.elegantspaces.me/modular-wardrobes-maker-mohali-kharar',
    type: 'website',
    images: [{ url: '/logos/elegant-logo-luxury-crest.jpg', width: 1024, height: 1024, alt: 'Modular Wardrobe Maker Mohali Kharar' }]
  }
};

export default function ModularWardrobesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Modular Wardrobes & Architectural Storage",
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
    "description": "Floor-to-ceiling sliding wardrobes, walk-in closets, profile tinted glass shutters, and heavy-duty soft-close German hardware manufactured with 100% calibrated BWP plywood."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cost per square foot for a modular wardrobe in Kharar and Mohali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing typically starts at ₹1,250 to ₹1,450 / sq ft for premium laminate on BWP plywood carcases, ₹1,800 to ₹2,300 / sq ft for high-gloss acrylic shutters, and ₹2,400 to ₹3,200 / sq ft for anodized aluminum profile lacquered glass sliding wardrobes with integrated sensor LED lighting."
        }
      },
      {
        "@type": "Question",
        "name": "Do your sliding wardrobes sag or jump off tracks after a few months?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Never. We use heavy-gauge top-hung and bottom-rolling German sliding systems (Hettich TopLine / Hafele) rated for up to 80kg per door with dual soft-close dampers. Carcases are constructed strictly from 18mm calibrated BWP plywood, preventing door warping."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build floor-to-ceiling wardrobes up to 9 or 10 feet high?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We manufacture seamless floor-to-ceiling sliding and hinged wardrobe units with built-in loft storage, concealing upper gaps and maximizing usable vertical storage in high-ceiling apartments."
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
        <div className="bg-white border-b border-[#EADBCA] py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono text-stone-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-stone-900 transition-colors shrink-0">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-400 shrink-0">Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-[#9E7D3B] font-semibold shrink-0">Modular Wardrobes &amp; Storage</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(circle_at_top,#F5E9D3_0%,transparent_60%)]">
          <div className="max-w-5xl mx-auto text-center space-y-5 sm:space-y-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-[#EADBCA] bg-white/80 backdrop-blur-sm text-[10px] sm:text-xs font-mono text-stone-800 shadow-sm max-w-full text-center">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-[#9E7D3B] font-semibold uppercase tracking-wider">MOHALI · KHARAR TRICITY</span>
              <span className="text-stone-400 hidden xs:inline">|</span>
              <span className="text-stone-600 font-sans hidden xs:inline">10-YEAR STRUCTURAL WARRANTY</span>
            </div>

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-cinzel font-bold text-stone-900 tracking-tight leading-tight">
              Bespoke <span className="text-[#C5A059]">Modular Wardrobes</span> in Mohali &amp; Kharar
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto font-sans leading-relaxed">
              Maximized storage tailored down to the millimeter. Floor-to-ceiling sliding wardrobes, tinted fluted glass walk-in closets, and concealed sensory lighting engineered with 100% BWP plywood and German soft-close hydraulics.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20want%20a%20quote%20and%203D%20layout%20for%20custom%20Modular%20Wardrobes.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Get 3D Wardrobe Layout & Quote</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#EADBCA] bg-white text-stone-800 font-mono text-xs tracking-wider uppercase hover:border-[#C5A059] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Wardrobe Expert: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-[#EADBCA]">
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Layers className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">100% Calibrated</span>
                <span className="text-[10px] text-stone-500">BWP 710 Marine Ply</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Sparkles className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">Lacquered Glass</span>
                <span className="text-[10px] text-stone-500">Tinted & Fluted Profiles</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Clock className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">14 Days Delivery</span>
                <span className="text-[10px] text-stone-500">Factory Machine Edging</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">10-Year Warranty</span>
                <span className="text-[10px] text-stone-500">Zero Sagging Promise</span>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Table */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#EADBCA]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">PREMIUM MILLWORK</span>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 mt-2">
                Why Our Wardrobes Outperform Local Carpenters
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#EADBCA] shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#FAF8F5] border-b border-[#EADBCA] font-mono text-xs uppercase tracking-wider text-stone-700">
                  <tr>
                    <th className="py-4 px-5">Wardrobe Element</th>
                    <th className="py-4 px-5 text-[#9E7D3B] font-bold">Elegant Contractors Standard</th>
                    <th className="py-4 px-5 text-stone-500">Typical Local Carpenter</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EADBCA]">
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">Carcase Plywood</td>
                    <td className="py-4 px-5 text-stone-900 bg-[#F5E9D3]/20 font-medium">18mm Calibrated BWP 710 Marine Ply (Century / Greenply)</td>
                    <td className="py-4 px-5 text-stone-500">16mm Commercial MR Grade or Particle Board prone to sagging</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">Sliding Mechanism</td>
                    <td className="py-4 px-5 text-stone-900 bg-[#F5E9D3]/20 font-medium">Hettich TopLine / Hafele heavy-duty track with dual soft-close dampers</td>
                    <td className="py-4 px-5 text-stone-500">Local unbranded aluminum channel that derails and jams</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">Internal Organization</td>
                    <td className="py-4 px-5 text-stone-900 bg-[#F5E9D3]/20 font-medium">Custom jewelry drawers, pull-out trouser racks, sensor LED lights</td>
                    <td className="py-4 px-5 text-stone-500">Basic static wooden shelves with raw unbanded plywood edges</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#EADBCA]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 mt-2">
                Wardrobe FAQs in Mohali & Kharar
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl border border-[#EADBCA] bg-[#FAF8F5]">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>What is the cost per square foot for a modular wardrobe in Kharar and Mohali?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  Pricing typically starts at ₹1,250 to ₹1,450 / sq ft for premium laminate on BWP plywood carcases, ₹1,800 to ₹2,300 / sq ft for high-gloss acrylic shutters, and ₹2,400 to ₹3,200 / sq ft for anodized aluminum profile lacquered glass sliding wardrobes with integrated sensor LED lighting.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#EADBCA] bg-[#FAF8F5]">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Do your sliding wardrobes sag or jump off tracks after a few months?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  Never. We use heavy-gauge top-hung and bottom-rolling German sliding systems (Hettich TopLine / Hafele) rated for up to 80kg per door with dual soft-close dampers. Carcases are constructed strictly from 18mm calibrated BWP plywood, preventing door warping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Conversion Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-[#F5E9D3]/40 to-[#FAF8F5] border-t border-[#EADBCA] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">CUSTOM DESIGNED FOR YOUR BEDROOM</span>
            <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-stone-900 tracking-tight">
              Get an On-Site Wardrobe Measurement & 3D Render
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
              Available across Sector 117 ACME Heights-2, Sunny Enclave Sector 125, Kharar, New Chandigarh, and Mohali GMADA sectors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20want%20to%20schedule%20a%20wardrobe%20measurement.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Book Free Site Measurement</span>
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
