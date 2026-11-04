import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  LayoutGrid, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  ArrowUpRight,
  Droplets,
  Check
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Modular Kitchen Maker Mohali, Kharar | Elegant Spaces',
  description: 'Custom modular kitchens in Mohali, Kharar & Chandigarh Tricity. 100% BWP 710 marine ply, German soft-close tandem fittings, quartz countertops, and anti-scratch acrylic shutters.',
  alternates: {
    canonical: 'https://www.elegantspaces.me/modular-kitchen-maker-mohali-kharar',
  },
  openGraph: {
    title: 'Modular Kitchen Maker Mohali, Kharar | Elegant Spaces',
    description: 'Precision engineered modular kitchens built with 100% waterproof marine ply and German hardware in Mohali and Kharar.',
    url: 'https://www.elegantspaces.me/modular-kitchen-maker-mohali-kharar',
    type: 'website',
    images: [{ url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'Modular Kitchen Maker Mohali Kharar' }],
  },
};

export default function ModularKitchenPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Engineered Modular Kitchens",
    "serviceType": "Modular Kitchen Design & Manufacturing",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "url": "https://www.elegantspaces.me",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sahibzada Ajit Singh Nagar",
        "addressRegion": "Punjab",
        "postalCode": "140301",
        "addressCountry": "IN"
      }
    },
    "areaServed": BUSINESS_INFO.serviceAreas,
    "description": "Custom modular kitchen manufacturing and turnkey installation in Mohali and Kharar. 100% Boiling Water Proof 710 marine plywood base, Hettich soft-close tandem drawers, and quartz countertops."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is BWP 710 marine plywood essential for modular kitchens in Punjab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Indian cooking involves heavy water usage, steam, and curry spices. Standard commercial MDF or particle board swells and delaminates within a few years around the sink and outer walls. We use 100% Boiling Water Proof (BWP) 710 marine plywood that resists water immersion, boiling steam, and moisture without swelling."
        }
      },
      {
        "@type": "Question",
        "name": "Which hardware and drawer brands do you install?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We install certified German motion hardware including Hettich InnoTech Atira tandem boxes, Hafele hydraulic soft-close hinges, and Kessebohmer pull-outs, engineered for decades of smooth operation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a modular kitchen installation take in Mohali or Kharar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Carcase fabrication and shutter pressing take roughly 10–14 days in the factory, followed by 3–4 days of on-site installation, countertop fitting, and plumbing connection."
        }
      }
    ]
  };

  const kitchenGallery = [
    {
      src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      title: 'Minimalist Handle-Less Acrylic',
      desc: 'Seamless Gola profile channels with matte finish and under-cabinet strip LEDs.'
    },
    {
      src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      title: 'Monolithic Quartz Island',
      desc: 'Waterfall composite quartz island with integrated prep sink and breakfast bar.'
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      title: 'Parallel Chef Kitchen Layout',
      desc: 'Dedicated wet-preparation counter and tall appliance garage with bi-fold overheads.'
    },
    {
      src: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80',
      title: 'Concealed Modular Pantry',
      desc: 'Multi-tier wire pull-outs and deep tandem drawers organizing cookware effortlessly.'
    }
  ];

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

      <main className="min-h-screen bg-[#FAF8F5] text-stone-900 pt-16 sm:pt-20">
        {/* ============================================================== */}
        {/* 1. Large Service-Specific Visual Hero                          */}
        {/* ============================================================== */}
        <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-end overflow-hidden bg-stone-950">
          <Image
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85"
            alt="Modular Kitchen Maker Mohali Kharar – Elegant Spaces"
            fill
            priority
            className="object-cover object-center opacity-60 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/20" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20 pt-28">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-300 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-stone-300">Services</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[#C5A059]">Modular Kitchens</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F5E9D3] text-xs font-mono uppercase tracking-[0.2em] mb-3">
                100% BWP 710 Marine Ply · German Hardware
              </span>
              <h1 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                Custom Engineered Modular Kitchens
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-stone-200 font-light font-sans max-w-2xl leading-relaxed">
                Ergonomically designed for Indian cooking with boiling-water-proof marine plywood, composite quartz countertops, and whisper-quiet soft-close tandem drawers across Mohali &amp; Kharar.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-stone-950" />
                  <span>Get Kitchen Layout &amp; Quote</span>
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-mono text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. Large Relevant Image Gallery (Dominates the Page)           */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
              KITCHEN ARCHITECTURE
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Modular Kitchen Visual Showcase
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans">
              Clean European lines built on robust waterproof engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {kitchenGallery.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-3xl overflow-hidden border border-[#EADBCA] bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-3 left-3 text-sm font-cinzel font-bold text-white tracking-wide">
                    {item.title}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-xs text-stone-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. Kitchen Configurations & Materials                         */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-20 bg-[#F5EFE6]/50 border-y border-[#EADBCA]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
                CONFIGURATIONS &amp; FINISHES
              </span>
              <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                Engineered for Indian Cooking
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'L-Shaped Modular Kitchen', desc: 'Maximizes corner space with magic corner carousels and seamless work triangle flow.' },
                { title: 'Parallel Chef Kitchen', desc: 'Separates the heavy wet cleaning sink zone from dry cooking and induction preparation.' },
                { title: 'Island & Breakfast Bar', desc: 'Centerpiece quartz waterfall island with integrated casual seating and storage.' },
                { title: 'Anti-Scratch Acrylic Shutters', desc: '1mm seamless high-gloss and matte acrylic shutters resistant to oil splatters and stains.' },
                { title: 'Composite Quartz Countertops', desc: 'Non-porous solid stone surfaces that resist hot pans, turmeric stains, and acid etching.' },
                { title: 'Soft-Close Tandem Hardware', desc: 'Hettich / Hafele heavy-duty hydraulic drawer runners with lifetime damping action.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-[#EADBCA] shadow-xs">
                  <span className="font-cormorant text-2xl font-bold text-[#C5A059] block mb-2">0{i + 1}</span>
                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-stone-600 font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. Visual Kitchen Process                                     */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
              WORKFLOW
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              4 Steps to Your Dream Kitchen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Laser Site Measurement', desc: 'Verifying wall plumbs, gas pipelines, and CPVC plumbing points.' },
              { num: '02', title: '3D Golden Triangle Plan', desc: 'Simulating prep, cooking, and refrigeration zones with custom BOQ.' },
              { num: '03', title: 'Factory Calibration', desc: 'Precision CNC cutting, zero-joint edge banding, and carcase assembly.' },
              { num: '04', title: 'On-Site Commissioning', desc: 'Countertop fitting, drawer alignment, hob hookup, and cleaning.' },
            ].map((st, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#EADBCA] shadow-xs">
                <span className="font-cormorant text-3xl font-bold text-[#C5A059] block mb-2">{st.num}</span>
                <h3 className="font-cinzel text-sm font-bold text-stone-900 mb-1">{st.title}</h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. Related Design Inspirations                                */}
        {/* ============================================================== */}
        <section className="py-14 sm:py-16 bg-[#F5EFE6]/60 border-t border-[#EADBCA]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-1">
                  DESIGN INSPIRATIONS
                </span>
                <h3 className="font-cormorant font-semibold text-2xl sm:text-3xl text-stone-900">
                  Kitchen Design Concepts
                </h3>
              </div>
              <Link href="/design-gallery" className="text-xs font-mono font-semibold text-[#9E7D3B] hover:text-stone-900">
                View Gallery →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/design-gallery/modular-kitchen"
                className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white shadow-xs hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
                    alt="European Modular Kitchen Concept"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-cinzel font-bold text-white">
                    European Modular Kitchen Concept
                  </span>
                </div>
              </Link>

              <Link
                href="/design-gallery/modern-home-interiors"
                className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white shadow-xs hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                    alt="Open-Plan Dining & Kitchen Layout"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-cinzel font-bold text-white">
                    Open-Plan Dining &amp; Kitchen Flow
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 8. Concise FAQs                                               */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-1">
              QUESTIONS &amp; ANSWERS
            </span>
            <h2 className="font-cormorant font-semibold text-2xl sm:text-4xl text-stone-900 tracking-tight">
              Modular Kitchen FAQs
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                Why is BWP 710 marine plywood essential for modular kitchens in Punjab?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                Indian cooking involves heavy water usage, steam, and curry spices. Standard commercial MDF or particle board swells and delaminates within a few years around the sink and outer walls. We use 100% Boiling Water Proof (BWP) 710 marine plywood that resists water immersion, boiling steam, and moisture without swelling.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                Which hardware and drawer brands do you install?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                We install certified German motion hardware including Hettich InnoTech Atira tandem boxes, Hafele hydraulic soft-close hinges, and Kessebohmer pull-outs, engineered for decades of smooth operation.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                How long does a modular kitchen installation take in Mohali or Kharar?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                Carcase fabrication and shutter pressing take roughly 10–14 days in the factory, followed by 3–4 days of on-site installation, countertop fitting, and plumbing connection.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 9. Strong Enquiry CTA                                         */}
        {/* ============================================================== */}
        <section className="py-20 bg-stone-950 text-white text-center px-5 sm:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059]">
              START YOUR KITCHEN
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-white">
              Ready to Upgrade Your Kitchen?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-light max-w-lg mx-auto font-sans leading-relaxed">
              Schedule a site laser measurement in Mohali, Kharar, or Tricity. We will prepare an ergonomic 3D layout and transparent BOQ quotation.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-stone-950" />
                <span>Request Kitchen Measurement</span>
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono text-xs uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
        <MobileStickyBar />
      </main>
    </>
  );
}
