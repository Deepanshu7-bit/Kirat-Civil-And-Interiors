import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Compass, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  HelpCircle,
  Clock,
  MapPin,
  ChevronRight,
  Calculator
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Turnkey Interior Designer Kharar, Mohali | Elegant Spaces',
  description: 'Top turnkey interior designer and civil contractor in Kharar, Sunny Enclave & Mohali. End-to-end 2BHK/3BHK house renovations, structural RCC changes, modular woodwork, and 3D architectural design under single-point accountability.',
  keywords: [
    'interior designer kharar',
    'best interior designer mohali',
    'turnkey interior designer mohali',
    'turnkey interior contractor sunny enclave',
    'civil and interior contractor tricity',
    'house renovation sector 125 sunny enclave',
    '3bhk interior design cost mohali',
    'luxury interior designer new chandigarh',
    'home renovation contractor kharar',
    'interior designer sector 117 mohali'
  ],
  alternates: {
    canonical: 'https://www.elegantspaces.me/turnkey-interior-designer-kharar-mohali',
  },
  openGraph: {
    title: 'Turnkey Interior Designer Kharar, Mohali | Elegant Spaces',
    description: 'From solid civil foundations to bespoke luxury living. Master turnkey civil and interior execution across Kharar, Sunny Enclave, and Mohali Tricity.',
    url: 'https://www.elegantspaces.me/turnkey-interior-designer-kharar-mohali',
    type: 'website',
    images: [{ url: '/logos/elegant-logo-luxury-crest.jpg', width: 1024, height: 1024, alt: 'Turnkey Interior Designer Kharar Mohali' }]
  }
};

export default function TurnkeyInteriorPage() {
  const interiorSchema = {
    "@context": "https://schema.org",
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
    },
    "areaServed": ["Kharar", "Sunny Enclave", "Mohali", "New Chandigarh", "Tricity"],
    "description": "Full-scope turnkey interior design and structural civil engineering contractor serving Kharar and Mohali. 3D spatial layout, civil wall alterations, BWP 710 modular kitchens, Gyproc false ceilings, and luxury master suites.",
    "priceRange": "₹₹ - ₹₹₹₹"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the benefit of hiring a turnkey interior contractor over separate masons and carpenters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you manage separate vendors, delays and conflicts are constant: carpenters blame the mason for uneven plaster, plumbers blame electricians for cut pipes. At Elegant Contractors, we provide single-point accountability. Our civil engineers and interior carpenters coordinate under one project manager, ensuring millimeter-precise conduit carving, plumb walls, and zero finger-pointing."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical cost for a complete 3BHK turnkey interior in Mohali or Kharar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A full turnkey interior package for a 3BHK apartment in Kharar/Mohali (including full-room Gyproc false ceilings, modular acrylic kitchen with quartz slab, 3 floor-to-ceiling sliding wardrobes, TV unit, paint, and electrical alterations) typically ranges from ₹6.5 Lakh to ₹14 Lakh depending on the luxury finishes and hardware selected."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer milestone-based payment schedules?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We work on transparent 4-stage milestone payments tied to verifiable on-site progress: (1) 3D design approval & material delivery, (2) Civil structural completion & woodwork carcase installation, (3) Shutter, glass, and electrical fitting, (4) Final deep cleaning, snag audit, and key handover."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(interiorSchema) }}
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
            <span className="text-[#9E7D3B] font-semibold shrink-0">Turnkey Interior Designer Kharar &amp; Mohali</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(circle_at_top,#F5E9D3_0%,transparent_60%)]">
          <div className="max-w-5xl mx-auto text-center space-y-5 sm:space-y-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-[#EADBCA] bg-white/80 backdrop-blur-sm text-[10px] sm:text-xs font-mono text-stone-800 shadow-sm max-w-full text-center">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-[#9E7D3B] font-semibold uppercase tracking-wider">CIVIL FOUNDATION TO LUXURY HANDOVER</span>
              <span className="text-stone-400 hidden xs:inline">|</span>
              <span className="text-stone-600 font-sans hidden xs:inline">SINGLE-POINT ACCOUNTABILITY</span>
            </div>

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-cinzel font-bold text-stone-900 tracking-tight leading-tight">
              Leading <span className="text-[#C5A059]">Turnkey Interior Designer</span> in Kharar &amp; Mohali
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto font-sans leading-relaxed">
              We eliminate the chaos of coordinating separate masons, carpenters, and electricians. From heavy structural RCC wall alterations to bespoke modular kitchens, Gyproc false ceilings, and luxury master bedrooms, we deliver move-in ready homes with zero blame games.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20am%20looking%20for%20a%20Turnkey%20Interior%20Designer%20for%20my%20flat/villa%20in%20Mohali/Kharar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Book 3D Design Consultation</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#EADBCA] bg-white text-stone-800 font-mono text-xs tracking-wider uppercase hover:border-[#C5A059] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Direct Line: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Proof Metric Grid */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-[#EADBCA]">
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Building2 className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-cinzel text-lg font-bold text-stone-900 block">180+</span>
                <span className="text-[10px] text-stone-500 font-mono uppercase">Sites Handed Over</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Compass className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-cinzel text-lg font-bold text-stone-900 block">3D Visuals</span>
                <span className="text-[10px] text-stone-500 font-mono uppercase">Before Site Execution</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Clock className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-cinzel text-lg font-bold text-stone-900 block">45 Days</span>
                <span className="text-[10px] text-stone-500 font-mono uppercase">Average Handover</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-cinzel text-lg font-bold text-stone-900 block">10 Years</span>
                <span className="text-[10px] text-stone-500 font-mono uppercase">Woodwork Warranty</span>
              </div>
            </div>
          </div>
        </section>

        {/* Turnkey Scope Breakdown */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#EADBCA]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">ALL-IN-ONE EXECUTION</span>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 mt-2">
                What Our Turnkey Package Includes
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-2xl mx-auto">
                Everything under one legally binding contract with transparent BOQ billing and zero hidden surprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl border border-[#EADBCA] bg-[#FAF8F5]">
                <span className="font-mono text-xs font-bold text-[#C5A059] block mb-2">01. CIVIL & PLUMBING</span>
                <h3 className="font-cinzel text-base font-bold text-stone-900">Structural Foundations</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Brick masonry alterations, wall dismantling, floor leveling, Dr. Fixit chemical waterproofing, and CPVC plumbing lines.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#EADBCA] bg-[#FAF8F5]">
                <span className="font-mono text-xs font-bold text-[#C5A059] block mb-2">02. FALSE CEILINGS</span>
                <h3 className="font-cinzel text-base font-bold text-stone-900">Gyproc & Ambient LEDs</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Saint-Gobain Gyproc false ceilings, magnetic track rails, concealed 3000K COB cove strips, and AC ducting integration.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#EADBCA] bg-[#FAF8F5]">
                <span className="font-mono text-xs font-bold text-[#C5A059] block mb-2">03. BESPOKE WOODWORK</span>
                <h3 className="font-cinzel text-base font-bold text-stone-900">Kitchen & Wardrobes</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  100% BWP 710 marine ply kitchens, Hettich soft-close hydraulic fittings, acrylic shutters, and floor-to-ceiling profile sliding wardrobes.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#EADBCA] bg-[#FAF8F5]">
                <span className="font-mono text-xs font-bold text-[#C5A059] block mb-2">04. FINISHES & CLEANING</span>
                <h3 className="font-cinzel text-base font-bold text-stone-900">Paint & Handover</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Asian Paints Royale luxury emulsion, charcoal wall louvers, switchboard fitting, and industrial deep cleaning before key delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Localized FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">HONEST ANSWERS</span>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 mt-2">
                Turnkey Interior Questions in Mohali & Kharar
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl border border-[#EADBCA] bg-white shadow-sm">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Do you handle builder floors in Sunny Enclave and Sector 125 Kharar?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  Yes, Sunny Enclave and Sector 125 are our primary home ground! We have remodeled over 60 builder floors, duplex villas, and flats in Sunny Enclave, ACME Heights-2, and Gillco Valley. Our mobile supervisory teams visit sites daily.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#EADBCA] bg-white shadow-sm">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>How do you guarantee that there will be no surprise cost escalations?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  We prepare a line-by-line itemized Bill of Quantities (BOQ) before taking any advance. Every square foot of tile, linear foot of ply, brand of cement, and model of Hettich hinge is locked in writing. The price you sign on is the price you pay.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#EADBCA] bg-white shadow-sm">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Can we visit an ongoing site in Mohali to verify your craftsmanship?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  Yes, absolutely! We welcome prospective clients to walk through our active sites in Sector 117, Sunny Enclave, or New Chandigarh to inspect raw masonry, GI framing, and finished modular woodwork in person before hiring us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-[#F5E9D3]/40 to-[#FAF8F5] border-t border-[#EADBCA] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">START YOUR HOME TRANSFORMATION</span>
            <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-stone-900 tracking-tight">
              Book Your Free 3D Interior Consultation
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
              Serving Sector 117 ACME Heights-2, Sunny Enclave Sector 125, Kharar-Landran Corridor, New Chandigarh, and SAS Nagar Mohali.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20want%20to%20schedule%20a%20site%20meeting%20for%20Turnkey%20Interior%20Design.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Book Site Consultation on WhatsApp</span>
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
