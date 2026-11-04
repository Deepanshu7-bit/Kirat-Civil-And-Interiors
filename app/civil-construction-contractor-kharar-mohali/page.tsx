import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  ArrowUpRight,
  Hammer,
  Check
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Civil Construction & Wall Demolition Contractor Kharar, Mohali | Elegant Spaces',
  description: 'Civil contractor in Kharar, Sunny Enclave & Mohali. Structural brickwork alterations, RCC lintels, wall demolition, terrace chemical waterproofing, and foundation-to-finish execution.',
  alternates: {
    canonical: 'https://www.elegantspaces.me/civil-construction-contractor-kharar-mohali',
  },
  openGraph: {
    title: 'Civil Construction Contractor Kharar, Mohali | Elegant Spaces',
    description: 'Structural civil alterations, wall demolition, chemical waterproofing, and RCC framing in Kharar and Mohali.',
    url: 'https://www.elegantspaces.me/civil-construction-contractor-kharar-mohali',
    type: 'website',
    images: [{ url: '/images/raw-civil-site.jpg', width: 1200, height: 630, alt: 'Civil Construction Contractor Kharar Mohali' }],
  },
};

export default function CivilConstructionPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Civil Construction & Structural Alterations",
    "serviceType": "Civil Contractor",
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
    "description": "Civil construction contractor specializing in brickwork alterations, wall demolition, RCC beam reinforcement, terrace chemical waterproofing, and laser screeding across Kharar and Mohali."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you safely remove an interior wall to create an open-plan kitchen or living room?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Before any demolition, our civil engineering team inspects whether the wall is load-bearing or partition masonry. If load-bearing, we engineer and cast a reinforced RCC lintel or install structural steel I-beams before dismantling brickwork, ensuring zero structural vibration or hairline cracks."
        }
      },
      {
        "@type": "Question",
        "name": "Which waterproofing chemicals do you use for wet areas and terrace leakage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We strictly use multi-layer Dr. Fixit chemical membranes (such as Pidifin 2K polymer-modified mortar) reinforced with fiberglass mesh, rather than superficial bitumen or temporary cement washes. This ensures permanent protection against Punjab monsoon downpours."
        }
      },
      {
        "@type": "Question",
        "name": "How do you coordinate civil works with subsequent interior carpentry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because Elegant Spaces manages both civil engineering and interior joinery under single accountability, our civil masons align wall corners to laser 90° plumbs and screed floors to zero-tolerance levels. This guarantees that modular furniture and false ceilings fit flush without unsightly filler strips."
        }
      }
    ]
  };

  const civilGallery = [
    {
      src: '/images/raw-civil-site.jpg',
      title: 'Structural Brick Masonry & Lintel Casting',
      desc: 'Engineered RCC lintels supporting open-plan residential wall removals.'
    },
    {
      src: '/images/master-bedroom-civil-raw-1.jpg',
      title: 'Concealed Conduit Channeling',
      desc: 'Precision chiseled wall conduits for concealed electrical and CPVC piping.'
    },
    {
      src: '/images/master-bedroom-civil-raw-2.jpg',
      title: 'Laser-Leveled Floor Screeding',
      desc: 'Screed underlayment prepared for zero-grout large-format vitrified tiles.'
    },
    {
      src: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80',
      title: 'Dr. Fixit Chemical Waterproofing',
      desc: 'Multi-layer polymer membrane applied to washrooms and terrace slabs.'
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
        {/* 1. Large Service-Specific Visual Hero */}
        <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-end overflow-hidden bg-stone-950">
          <Image
            src="/images/raw-civil-site.jpg"
            alt="Civil Construction Contractor Kharar Mohali – Elegant Spaces"
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
              <span className="text-[#C5A059]">Civil Works</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F5E9D3] text-xs font-mono uppercase tracking-[0.2em] mb-3">
                RCC Alterations · Chemical Waterproofing · Screed Leveling
              </span>
              <h1 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                Civil Construction &amp; Structural Alterations
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-stone-200 font-light font-sans max-w-2xl leading-relaxed">
                Heavy brick masonry alterations, reinforced RCC lintels, Dr. Fixit chemical damp-proofing, and clean conduit channeling executed under qualified civil engineer supervision across Kharar &amp; Mohali.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-stone-950" />
                  <span>Request Civil Site Inspection</span>
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

        {/* 4. Large Relevant Image Gallery */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
              ON-SITE CIVIL MASTERY
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Civil Execution &amp; Structural Precision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {civilGallery.map((item, idx) => (
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

        {/* 5. Types of Civil Services */}
        <section className="py-16 sm:py-20 bg-[#F5EFE6]/50 border-y border-[#EADBCA]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
                CIVIL SCOPE
              </span>
              <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                Engineered Structural Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Non-Load & Load Bearing Wall Shifting', desc: 'Carefully dismantling brick walls and inserting RCC lintels for modern open layouts.' },
                { title: 'Dr. Fixit Chemical Waterproofing', desc: 'Injection grouting, polymer coating, and fiber-mesh barriers for terraces and bathrooms.' },
                { title: 'Laser-Leveled Floor Screeding', desc: 'Precision base leveling ensuring zero joint gaps for large-format 800x1600mm vitrified tiles.' },
                { title: 'Concealed Conduit Carving', desc: 'Plumb 90° chiseled channels for electrical conduits and pressure-tested CPVC piping.' },
                { title: 'Bathroom & Balcony Remodeling', desc: 'Demolishing old tiling, repairing dampness, and reinstalling concealed plumbing fixtures.' },
                { title: 'Structural Plaster & Crack Stitching', desc: '53-grade cement plastering with polymer bonding agents to prevent shrinkage cracks.' },
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

        {/* 6. Visual Workflow */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
              SAFETY &amp; CONTROL
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Civil Execution Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Structural Audit', desc: 'Verifying load distribution, RCC beams, and wall plumb alignments.' },
              { num: '02', title: 'Controlled Demolition', desc: 'Diamond saw cutting and temporary props preventing structural vibration.' },
              { num: '03', title: 'Chemical Injections', desc: 'Dr. Fixit polymer membrane application to eliminate rising dampness.' },
              { num: '04', title: 'Plumb Plaster & Cleanup', desc: 'Laser straight plaster lines and evening debris removal from site.' },
            ].map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#EADBCA] shadow-xs">
                <span className="font-cormorant text-3xl font-bold text-[#C5A059] block mb-2">{p.num}</span>
                <h3 className="font-cinzel text-sm font-bold text-stone-900 mb-1">{p.title}</h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Related Inspirations */}
        <section className="py-14 sm:py-16 bg-[#F5EFE6]/60 border-t border-[#EADBCA]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-1">
                  DESIGN INSPIRATIONS
                </span>
                <h3 className="font-cormorant font-semibold text-2xl sm:text-3xl text-stone-900">
                  Related Architecture Concepts
                </h3>
              </div>
              <Link href="/design-gallery" className="text-xs font-mono font-semibold text-[#9E7D3B] hover:text-stone-900">
                View All Designs →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/design-gallery/exterior-architecture"
                className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white shadow-xs hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                    alt="Contemporary Villa Facade"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-cinzel font-bold text-white">
                    Contemporary Villa Architecture &amp; Facades
                  </span>
                </div>
              </Link>

              <Link
                href="/design-gallery/modern-living-room"
                className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white shadow-xs hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
                    alt="Living Room Structural Remodel"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-cinzel font-bold text-white">
                    Open Concept Living Room Remodel
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 8. Concise FAQs */}
        <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-1">
              QUESTIONS &amp; ANSWERS
            </span>
            <h2 className="font-cormorant font-semibold text-2xl sm:text-4xl text-stone-900 tracking-tight">
              Civil Alteration FAQs
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                Can you safely remove an interior wall to create an open-plan kitchen or living room?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                Yes. Before any demolition, our civil engineering team inspects whether the wall is load-bearing or partition masonry. If load-bearing, we engineer and cast a reinforced RCC lintel or install structural steel I-beams before dismantling brickwork, ensuring zero structural vibration or hairline cracks.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                Which waterproofing chemicals do you use for wet areas and terrace leakage?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                We strictly use multi-layer Dr. Fixit chemical membranes (such as Pidifin 2K polymer-modified mortar) reinforced with fiberglass mesh, rather than superficial bitumen or temporary cement washes. This ensures permanent protection against Punjab monsoon downpours.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                How do you coordinate civil works with subsequent interior carpentry?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                Because Elegant Spaces manages both civil engineering and interior joinery under single accountability, our civil masons align wall corners to laser 90° plumbs and screed floors to zero-tolerance levels. This guarantees that modular furniture and false ceilings fit flush without unsightly filler strips.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Strong Enquiry CTA */}
        <section className="py-20 bg-stone-950 text-white text-center px-5 sm:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059]">
              ENGINEERED SOLIDITY
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-white">
              Planning Civil Modifications in Kharar or Mohali?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-light max-w-lg mx-auto font-sans leading-relaxed">
              Book an on-site structural inspection. Our civil engineers will evaluate your property, inspect moisture conditions, and provide an itemized BOQ estimate.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-stone-950" />
                <span>Book Civil Site Inspection</span>
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
