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
  ChevronRight,
  ArrowUpRight,
  Ruler,
  Layers,
  HelpCircle
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Turnkey Interior Designer Kharar, Mohali | Elegant Spaces',
  description: 'Bespoke turnkey interior design and civil contracting in Kharar, Sunny Enclave and Mohali Tricity. Single-point accountability from 3D design to key handover.',
  alternates: {
    canonical: 'https://www.elegantspaces.me/turnkey-interior-designer-kharar-mohali',
  },
  openGraph: {
    title: 'Turnkey Interior Designer Kharar, Mohali | Elegant Spaces',
    description: 'Turnkey residential interiors, civil alterations, modular kitchens, and false ceilings across Kharar, Sunny Enclave, and Mohali Tricity.',
    url: 'https://www.elegantspaces.me/turnkey-interior-designer-kharar-mohali',
    type: 'website',
    images: [{ url: '/images/finished-luxury-interior.jpg', width: 1200, height: 630, alt: 'Turnkey Interior Designer Kharar Mohali' }],
  },
};

export default function TurnkeyInteriorPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Turnkey Interior Design & Execution",
    "serviceType": "Turnkey Interior Design",
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
    "description": "Full-scope turnkey interior design and structural civil engineering contractor serving Kharar and Mohali. 3D spatial layout, civil wall alterations, modular kitchens, false ceilings, and bespoke master suites."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the advantage of hiring a turnkey interior contractor over separate vendors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you manage separate vendors, delays and blame games are frequent—carpenters blame the mason for uneven plaster, while plumbers blame electricians for cut lines. At Elegant Spaces, we provide single-point accountability. Civil masons, electricians, and master carpenters coordinate under one project manager, ensuring millimeter-precise conduit carving, plumb walls, and seamless fitment."
        }
      },
      {
        "@type": "Question",
        "name": "How are project payments structured for turnkey interiors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work on transparent 4-stage milestone payments tied directly to on-site progress: (1) 3D design approval and material arrival; (2) Civil structural completion and woodwork carcase installation; (3) Shutter, glass, and electrical fitting; (4) Snag audit, deep chemical cleaning, and key handover."
        }
      },
      {
        "@type": "Question",
        "name": "Which areas in Tricity do you cover for turnkey interior consultations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our primary execution hubs include Kharar, Sunny Enclave (Sector 125), Sector 117, Mohali (Sectors 60 through 125), Wave Estate, New Chandigarh, Aerocity, and Chandigarh."
        }
      }
    ]
  };

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      title: 'Warm Minimalist Living Room',
      desc: 'Double-height ceiling cove lighting, fluted acoustic paneling, and large-format flooring.'
    },
    {
      src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      title: 'European Modular Kitchen',
      desc: 'BWP 710 marine ply with quartz countertops and soft-close tandem drawers.'
    },
    {
      src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
      title: 'Contemporary Master Suite',
      desc: 'Upholstered acoustic headboard wall with indirect ambient illumination.'
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      title: 'Open-Plan Dining & Foyer',
      desc: 'Cohesive spatial flow uniting entryway, dining lounge, and living areas.'
    }
  ];

  const turnkeyServices = [
    {
      title: '3D Spatial Planning & Walkthroughs',
      desc: 'Detailed 2D layout optimization and photorealistic 3D room renders so you see your home before site work begins.',
    },
    {
      title: 'Civil Wall Alterations & Screeding',
      desc: 'Opening up partition walls, RCC lintel reinforcements, floor leveling, and Dr. Fixit chemical damp-proofing.',
    },
    {
      title: 'Concealed MEP Infrastructure',
      desc: 'Concealed electrical conduit carving, low-smoke wiring, smart switches, and pressure-tested CPVC plumbing lines.',
    },
    {
      title: 'Bespoke Millwork & Modular Storage',
      desc: 'Factory-pressed BWP 710 marine ply kitchens, 9-foot profile wardrobes, TV units, and vanity dressers.',
    },
    {
      title: 'Architectural Ceilings & Lighting',
      desc: 'Saint-Gobain Gyproc false ceilings, magnetic low-voltage track rails, and warm 3000K indirect cove lighting.',
    },
    {
      title: 'Premium Painting & Deep Cleaning',
      desc: 'Asian Paints Royale luxury emulsion, charcoal acoustic louvers, and post-installation chemical deep cleaning.',
    },
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
            src="/images/finished-luxury-interior.webp"
            alt="Turnkey Interior Designer Kharar Mohali – Elegant Spaces"
            fill
            priority
            className="object-cover object-center opacity-55 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/20" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20 pt-28">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-stone-300 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-stone-300">Services</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[#C5A059]">Turnkey Interiors</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F5E9D3] text-xs font-mono uppercase tracking-[0.2em] mb-3">
                Kharar · Sunny Enclave · Mohali Tricity
              </span>
              <h1 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                Turnkey Interior Design &amp; Civil Execution
              </h1>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-stone-950" />
                  <span>Discuss Your Project</span>
                </Link>
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-mono text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. Large Relevant Image Gallery (Show, Don't Tell)             */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
              SPATIAL SHOWCASE
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Turnkey Living Spaces &amp; Joinery
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans">
              A visual look at the spatial harmony and material finishing achieved when civil and interior works are executed together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {galleryImages.map((item, idx) => (
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
        {/* 5. Types of Services Offered                                  */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-20 bg-[#F5EFE6]/50 border-y border-[#EADBCA]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
                COMPLETE SCOPE
              </span>
              <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                What Our Turnkey Package Covers
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {turnkeyServices.map((svc, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-[#EADBCA] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="font-cormorant text-2xl font-bold text-[#C5A059] block mb-2">
                      0{i + 1}
                    </span>
                    <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. Visual Process Section                                     */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
              METHODOLOGY
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Our 4-Stage Execution Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Understand', desc: 'On-site laser measurements and lifestyle requirement review.' },
              { num: '02', title: 'Plan & Design', desc: 'Photorealistic 3D renders with an itemized, fixed BOQ quotation.' },
              { num: '03', title: 'Build & Execute', desc: 'Civil alterations, concealed MEP, and factory-pressed woodwork.' },
              { num: '04', title: 'Final Handover', desc: 'Multi-point snag audit and deep chemical cleaning before handover.' },
            ].map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#EADBCA] shadow-xs">
                <span className="font-cormorant text-3xl font-bold text-[#C5A059] block mb-2">{p.num}</span>
                <h3 className="font-cinzel text-sm font-bold text-stone-900 mb-1">{p.title}</h3>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">{p.desc}</p>
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
                  Explore Turnkey Concepts
                </h3>
              </div>
              <Link href="/design-gallery" className="text-xs font-mono font-semibold text-[#9E7D3B] hover:text-stone-900">
                View All Designs →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'Modern Living Room', slug: 'modern-living-room', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80' },
                { title: 'Modular Kitchen Concept', slug: 'modular-kitchen', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80' },
                { title: 'Luxury Bedroom Suite', slug: 'luxury-bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80' },
              ].map((item) => (
                <Link
                  key={item.slug}
                  href={`/design-gallery/${item.slug}`}
                  className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white shadow-xs hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 text-xs font-cinzel font-bold text-white">
                      {item.title}
                    </span>
                  </div>
                </Link>
              ))}
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
              Turnkey Interior FAQs
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                What is the advantage of hiring a turnkey interior contractor over separate vendors?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                When you manage separate vendors, delays and conflicts are constant: carpenters blame the mason for uneven plaster, plumbers blame electricians for cut pipes. At Elegant Spaces, we provide single-point accountability. Civil engineers, electricians, and interior carpenters coordinate under one project manager, ensuring millimeter-precise conduit carving, plumb walls, and zero finger-pointing.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                How are project payments structured for turnkey interiors?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                We work on transparent 4-stage milestone payments tied directly to on-site progress: (1) 3D design approval &amp; material delivery; (2) Civil structural completion &amp; woodwork carcase installation; (3) Shutter, glass, and electrical fitting; (4) Snag audit, deep chemical cleaning, and key handover.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                Which areas in Tricity do you cover for turnkey interior consultations?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                Our primary execution hubs include Kharar, Sunny Enclave (Sector 125), Sector 117, Mohali (Sectors 60 through 125), Wave Estate, New Chandigarh, Aerocity, and Chandigarh.
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
              START YOUR PROJECT
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-white">
              Ready for a Seamless Turnkey Transformation?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-light max-w-lg mx-auto font-sans leading-relaxed">
              Schedule a site measurement visit in Mohali or Kharar. We will evaluate your floor plan and prepare a comprehensive, itemized BOQ estimate.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-stone-950" />
                <span>Book Site Measurement</span>
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
