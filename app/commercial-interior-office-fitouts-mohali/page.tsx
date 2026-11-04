import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  ArrowUpRight,
  Building,
  Check
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Commercial Office Fit-Outs & SCO Interiors Mohali | Elegant Spaces',
  description: 'Turnkey commercial office fit-outs and SCO showroom interiors in Mohali, Sector 82, Aerocity & IT City. 12mm acoustic glass cabins, commercial vitrified flooring, and fast-track execution.',
  alternates: {
    canonical: 'https://www.elegantspaces.me/commercial-interior-office-fitouts-mohali',
  },
  openGraph: {
    title: 'Commercial Office Fit-Outs & SCO Interiors Mohali | Elegant Spaces',
    description: 'Turnkey civil and interior fit-outs for corporate offices, retail SCOs, and clinics in Mohali.',
    url: 'https://www.elegantspaces.me/commercial-interior-office-fitouts-mohali',
    type: 'website',
    images: [{ url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'Commercial Office Fit-Outs Mohali' }],
  },
};

export default function CommercialInteriorsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Office Fit-Outs & SCO Interiors",
    "serviceType": "Commercial Interior Contractor",
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
    "description": "Turnkey commercial civil and interior contractor in Mohali. 12mm acoustic toughened glass partitions, commercial-grade vitrified flooring, fire-retardant wiring, and accelerated milestone delivery for corporate offices and SCO showrooms."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the typical completion timeline for a commercial office or SCO fit-out in Mohali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For standard 1,500 to 3,000 sq ft office spaces in Mohali's commercial sectors (e.g. Sector 82, IT City, Sector 70), our turnkey team typically completes civil flooring, glass partitions, ceiling grids, and electrical conduits within 30 to 45 days, minimizing tenant rent-holding downtime."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle acoustic soundproofing for executive cabins and conference rooms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We install double-glazed or 12mm toughened acoustic glass partitions with perimeter drop-down seals, soundproof fabric wall paneling, and Armstrong acoustic ceiling tiles to ensure private executive discussions remain completely confidential."
        }
      },
      {
        "@type": "Question",
        "name": "Are electrical conduits and server networking compliant with commercial building codes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All electrical installations utilize certified Finolex FRLS (Fire Retardant Low Smoke) wiring, independent MCB distribution boards, concealed floor raceways for Cat6 data cables, and strict compliance with local commercial fire-safety guidelines."
        }
      }
    ]
  };

  const commercialGallery = [
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      title: 'Open Collaborative Work Floor',
      desc: 'Modular workstation clusters with acoustic ceiling baffles and low-glare linear illumination.'
    },
    {
      src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      title: 'Soundproof Executive Boardroom',
      desc: '12mm toughened glass partitions with concealed video conferencing conduits.'
    },
    {
      src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      title: 'Reception & Client Hospitality Lounge',
      desc: 'Custom stone reception desk flanked by fluted wood louvers and directional track lighting.'
    },
    {
      src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      title: 'Private Executive Cabins',
      desc: 'Minimalist private office suites with built-in storage credentials and glass doors.'
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85"
            alt="Commercial Office Fit-Outs Mohali – Elegant Spaces"
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
              <span className="text-[#C5A059]">Commercial Fit-Outs</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F5E9D3] text-xs font-mono uppercase tracking-[0.2em] mb-3">
                Corporate Offices · SCO Showrooms · Executive Clinics
              </span>
              <h1 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                Commercial Office Fit-Outs &amp; SCO Interiors
              </h1>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-stone-950" />
                  <span>Request Commercial BOQ</span>
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
              COMMERCIAL PORTFOLIO CONCEPTS
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Workspaces Built for Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {commercialGallery.map((item, idx) => (
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

        {/* 5. Commercial Services Offered */}
        <section className="py-16 sm:py-20 bg-[#F5EFE6]/50 border-y border-[#EADBCA]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
                CORPORATE CAPABILITIES
              </span>
              <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                High-Traffic Commercial Engineering
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: '12mm Toughened Glass Partitions', desc: 'Slim black powder-coated aluminum framing with acoustic sound seals and patch fittings.' },
                { title: 'Commercial Vitrified Flooring', desc: 'High-abrasion anti-skid porcelain tiles (Kajaria / Somany) engineered for corporate foot traffic.' },
                { title: 'Acoustic Ceiling Grid Systems', desc: 'Sound-dampening mineral fiber acoustic tiles and baffle panels ensuring speech clarity.' },
                { title: 'Fire-Safe MEP & Network Channels', desc: 'Finolex FRLS electrical conduits, structured Cat6 server cabling, and floor raceways.' },
                { title: 'Custom Reception Desks & Branding', desc: 'Stone and fluted wood reception desks designed to reflect your corporate identity.' },
                { title: 'Fast-Track Handover Schedules', desc: 'Milestone management designed to complete 2,000+ sq ft office fit-outs within 30–45 days.' },
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
              FAST-TRACK EXECUTION
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Commercial Delivery Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Layout & Code Audit', desc: 'Seating density, fire exit clearances, and electrical load calculation.' },
              { num: '02', title: 'Civil & Flooring Base', desc: 'Durable vitrified floor screeding and partition wall masonry.' },
              { num: '03', title: 'MEP, Glass & Ceilings', desc: 'Acoustic glass installation, server cabling, and lighting grids.' },
              { num: '04', title: 'Testing & Handover', desc: 'Full circuit testing, HVAC balancing, chemical cleaning, and delivery.' },
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
                  Commercial Design Concepts
                </h3>
              </div>
              <Link href="/design-gallery" className="text-xs font-mono font-semibold text-[#9E7D3B] hover:text-stone-900">
                View All Designs →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/design-gallery/commercial-interiors"
                className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white shadow-xs hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                    alt="Corporate Office Fit-Out Concept"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-cinzel font-bold text-white">
                    Corporate Office Fit-Out Concept
                  </span>
                </div>
              </Link>

              <Link
                href="/design-gallery/false-ceiling-designs"
                className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white shadow-xs hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                    alt="Commercial Ceiling & Lighting"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-cinzel font-bold text-white">
                    Commercial Linear Track &amp; Lighting
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
              Commercial Fit-Out FAQs
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                What is the typical completion timeline for a commercial office or SCO fit-out in Mohali?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                For standard 1,500 to 3,000 sq ft office spaces in Mohali&apos;s commercial sectors (e.g. Sector 82, IT City, Sector 70), our turnkey team typically completes civil flooring, glass partitions, ceiling grids, and electrical conduits within 30 to 45 days, minimizing tenant rent-holding downtime.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                Do you handle acoustic soundproofing for executive cabins and conference rooms?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                Yes. We install double-glazed or 12mm toughened acoustic glass partitions with perimeter drop-down seals, soundproof fabric wall paneling, and Armstrong acoustic ceiling tiles to ensure private executive discussions remain completely confidential.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                Are electrical conduits and server networking compliant with commercial building codes?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                All electrical installations utilize certified Finolex FRLS (Fire Retardant Low Smoke) wiring, independent MCB distribution boards, concealed floor raceways for Cat6 data cables, and strict compliance with local commercial fire-safety guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Strong Enquiry CTA */}
        <section className="py-20 bg-stone-950 text-white text-center px-5 sm:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059]">
              COMMERCIAL EXCELLENCE
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-white">
              Planning an Office Fit-Out in Mohali?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-light max-w-lg mx-auto font-sans leading-relaxed">
              Schedule an on-site commercial space evaluation. We will prepare space-planning layouts, 3D renders, and an itemized turnkey proposal.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-stone-950" />
                <span>Request Commercial Proposal</span>
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
