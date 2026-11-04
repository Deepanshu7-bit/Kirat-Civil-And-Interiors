import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Compass, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Ruler, 
  Layers, 
  Palette, 
  Eye, 
  Check, 
  MessageSquare,
  Phone
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us | Elegant Spaces – Contractors & Interiors Mohali',
  description: 'Learn about Elegant Spaces, a premier turnkey interior design and civil contracting brand in Mohali, Kharar and Chandigarh Tricity. Thoughtful spaces, master craftsmanship, and single-point accountability.',
  alternates: {
    canonical: 'https://www.elegantspaces.me/about',
  },
  openGraph: {
    title: 'About Us | Elegant Spaces – Contractors & Interiors',
    description: 'Turnkey interior design, civil construction, and bespoke millwork studio serving Mohali, Kharar, and Chandigarh Tricity.',
    url: 'https://www.elegantspaces.me/about',
    type: 'website',
    images: [{ url: '/images/luxury-architectural-lobby.jpg', width: 1200, height: 630, alt: 'About Elegant Spaces' }],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.elegantspaces.me"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://www.elegantspaces.me/about"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Elegant Spaces – Contractors & Interiors",
    "url": "https://www.elegantspaces.me",
    "logo": "https://www.elegantspaces.me/logos/elegant-logo-luxury-crest.jpg",
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "sameAs": [BUSINESS_INFO.googleProfileUrl, BUSINESS_INFO.googleMapsCidUrl],
    "description": "Turnkey interior design and civil construction company based in Mohali and Kharar, serving Chandigarh Tricity with single-point accountability."
  };

  const expertiseList = [
    {
      title: 'Interior Design',
      desc: 'Bespoke residential styling, material selection, and 3D spatial planning that balances aesthetics with practicality.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      href: '/turnkey-interior-designer-kharar-mohali'
    },
    {
      title: 'Turnkey Construction',
      desc: 'Complete project ownership from foundation and structural masonry to final luxury interior handover under one roof.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      href: '/turnkey-interior-designer-kharar-mohali'
    },
    {
      title: 'Modular Kitchens',
      desc: 'Custom waterproof marine ply carcases, ergonomic layouts, quartz countertops, and German soft-close motion hardware.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      href: '/modular-kitchen-maker-mohali-kharar'
    },
    {
      title: 'Modular Wardrobes',
      desc: 'Floor-to-ceiling 9-foot sliding profile wardrobes with tinted glass, velvet jewelry organizers, and sensor LED illumination.',
      image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80',
      href: '/modular-wardrobes-maker-mohali-kharar'
    },
    {
      title: 'False Ceilings',
      desc: 'Saint-Gobain Gyproc false ceiling designs with magnetic low-voltage track rails and warm 3000K indirect ambient cove lighting.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      href: '/pop-false-ceiling-contractor-mohali'
    },
    {
      title: 'Civil Construction',
      desc: 'Structural brickwork alterations, RCC lintels, wall shifting, floor screed leveling, and chemical damp-proofing.',
      image: '/images/raw-civil-site.webp',
      href: '/civil-construction-contractor-kharar-mohali'
    },
    {
      title: 'Residential Renovation',
      desc: 'Re-imagining existing builder floors and independent residences with modern open layouts and high-performance finishes.',
      image: '/images/furnished-master-bedroom.webp',
      href: '/turnkey-interior-designer-kharar-mohali'
    },
    {
      title: 'Commercial Interiors',
      desc: 'Corporate offices, SCO showroom fit-outs, and clinics with acoustic glass partitions and durable high-traffic finishes.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      href: '/commercial-interior-office-fitouts-mohali'
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Understand',
      desc: 'We begin by listening. We walk through your site in Mohali or Kharar, take laser measurements, study natural light angles, and understand how you live, cook, work, and relax.'
    },
    {
      number: '02',
      title: 'Plan & Design',
      desc: 'Our design studio translates your aspirations into detailed 2D space planning and photorealistic 3D renders alongside an itemized, transparent BOQ with exact material specifications.'
    },
    {
      number: '03',
      title: 'Build & Execute',
      desc: 'Our civil and interior teams mobilize concurrently under a single project supervisor. Structural conduits, waterproof plumbing, and factory-pressed joinery are executed without vendor friction.'
    },
    {
      number: '04',
      title: 'Final Handover',
      desc: 'Before key handover, we conduct a multi-point snag audit and deep chemical site clean, ensuring your space is pristine, fully commissioned, and ready to welcome you home.'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Navbar />

      <main className="bg-[#FAF8F5] text-stone-900 pt-20 sm:pt-24">
        {/* ============================================================== */}
        {/* A. Editorial Architectural Hero Section                         */}
        {/* ============================================================== */}
        <section className="pt-8 sm:pt-14 pb-16 sm:pb-20 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          {/* Header Typography */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-[0.2em] mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>ABOUT ELEGANT SPACES</span>
            </div>

            <h1 className="font-cormorant font-semibold text-4xl sm:text-6xl lg:text-7xl text-stone-900 tracking-tight leading-[1.08]">
              Where Thoughtful Design Meets Civil Integrity.
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-stone-600 font-sans max-w-2xl mx-auto font-light leading-relaxed">
              We unite interior architecture with on-site civil engineering discipline — delivering enduring, beautifully detailed residences across Mohali, Kharar, and Chandigarh Tricity.
            </p>
          </div>

          {/* Panoramic Architectural Visual Frame */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-[#EADBCA] shadow-2xl bg-stone-100">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
              alt="Architectural residential interior by Elegant Spaces"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/15 to-transparent" />

            {/* Subtle Floating Bottom Pill */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-stone-950/80 backdrop-blur-md border border-[#EADBCA]/40 px-3.5 sm:px-4 py-2 rounded-2xl text-xs font-mono text-[#F5E9D3] flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="tracking-wider uppercase text-[10px] sm:text-xs">Single-Point Accountability · Foundation to Luxury Handover</span>
            </div>
          </div>

          {/* Core Trust Pillars Bar */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-2xl border border-[#EADBCA] bg-white shadow-xs">
              <span className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 block">12+</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#9E7D3B] uppercase tracking-wider block mt-1">Years Site Experience</span>
              <span className="font-sans text-xs text-stone-600 block mt-1">Proven civil &amp; interior execution across Tricity</span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl border border-[#EADBCA] bg-white shadow-xs">
              <span className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 block">100%</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#9E7D3B] uppercase tracking-wider block mt-1">In-House Supervision</span>
              <span className="font-sans text-xs text-stone-600 block mt-1">No contractor blame games or third-party hand-offs</span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl border border-[#EADBCA] bg-white shadow-xs">
              <span className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 block">BWP 710</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#9E7D3B] uppercase tracking-wider block mt-1">Marine Plywood Standard</span>
              <span className="font-sans text-xs text-stone-600 block mt-1">CenturyPly &amp; Greenply waterproof carcases</span>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl border border-[#EADBCA] bg-white shadow-xs">
              <span className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 block">Itemized</span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#9E7D3B] uppercase tracking-wider block mt-1">Milestone Payments</span>
              <span className="font-sans text-xs text-stone-600 block mt-1">Transparent BOQ with zero surprise escalations</span>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* B. Our Story Section                                           */}
        {/* ============================================================== */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#EADBCA] shadow-2xl bg-stone-100">
                <Image
                  src="/images/finished-luxury-interior.webp"
                  alt="Thoughtfully designed interior space by Elegant Spaces"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-5 sm:p-6 rounded-2xl border border-[#EADBCA] shadow-xl max-w-xs">
                <span className="font-cinzel text-lg font-bold text-stone-900 block">Single-Point Accountability</span>
                <span className="font-sans text-xs text-stone-600 mt-1 block">
                  Civil masonry, concealed conduits &amp; bespoke woodwork coordinated under one roof.
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-widest">
                <span>OUR STORY &amp; VISION</span>
              </div>

              <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight">
                Where Design Meets Construction Integrity.
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Most homeowners encounter a frustrating divide between dream and delivery: interior designers propose concepts that carpenters struggle to build, while independent civil laborers leave uneven walls and leaky pipes that ruin expensive millwork.
              </p>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                Elegant Spaces was created to bridge that divide. By integrating interior architects and civil contractors into a unified team, we ensure that every wall modification, electrical conduit, and plumbing drop is planned with millimeter accuracy before woodwork arrives on site.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl border border-[#EADBCA] bg-white shadow-xs">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#9E7D3B] font-bold block mb-1">
                    Design Integrity
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Spaces crafted around natural light, spatial proportion, and how your family truly lives.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-[#EADBCA] bg-white shadow-xs">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#9E7D3B] font-bold block mb-1">
                    Turnkey Reliability
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Transparent itemized BOQs with zero surprise price escalations and verified branded materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* C. Our Expertise: 8 Visual Services Showcase                   */}
        {/* ============================================================== */}
        <section className="py-20 sm:py-28 bg-[#F5EFE6]/50 border-y border-[#EADBCA]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full mb-3">
                OUR CORE EXPERTISE
              </span>
              <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-stone-900 tracking-tight">
                Crafted with Purpose &amp; Precision
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans max-w-xl mx-auto">
                Explore our full spectrum of interior design and turnkey civil execution capabilities across Chandigarh Tricity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertiseList.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white hover:border-[#C5A059] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <span className="absolute bottom-3 left-3 text-xs font-mono font-bold text-white tracking-wider uppercase">
                      {item.title}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[#EADBCA] flex items-center justify-between text-xs font-mono text-[#9E7D3B] font-semibold group-hover:text-stone-900 transition-colors">
                      <span>View Capability</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* D. Our Approach: 4 Visual Steps                                */}
        {/* ============================================================== */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full mb-3">
              ZERO-UNCERTAINTY METHODOLOGY
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-stone-900 tracking-tight">
              Our 4-Stage Execution Approach
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans">
              Structured milestone delivery engineered to eliminate surprises and protect your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 sm:p-7 bg-white border border-[#EADBCA] hover:border-[#C5A059] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="font-cormorant text-4xl sm:text-5xl font-bold text-[#C5A059] block mb-3">
                    {step.number}
                  </span>
                  <h3 className="font-cinzel text-lg font-bold text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#EADBCA] flex items-center gap-1.5 text-[11px] font-mono text-stone-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Accountable Milestone</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* E. Our Philosophy                                              */}
        {/* ============================================================== */}
        <section className="py-20 sm:py-28 bg-stone-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  CORE DESIGN PHILOSOPHY
                </span>
                <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                  Quiet Luxury Rooted in Functionality.
                </h2>
                <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
                  We reject fleeting design gimmicks and excessive ornamentation. True elegance lies in how intuitively a space flows, how effortlessly drawers glide, how indirect light flatters the room, and how durable the civil foundation remains over decades.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-stone-300">
                      <strong>Material Honesty:</strong> Genuine BWP 710 marine plywood, UltraTech 53-grade cement, and certified German motion hardware.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-stone-300">
                      <strong>Visual Restraint:</strong> Warm neutral palettes, natural stone tones, and subtle earthy accents that never go out of style.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-stone-300">
                      <strong>Customer-Centric Care:</strong> Transparent communication, daily WhatsApp site progress updates, and respect for your home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                    alt="Quiet luxury dining and living space designed by Elegant Spaces"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* F. Final CTA: "Let's Create Your Next Space"                  */}
        {/* ============================================================== */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-5xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full mb-4 inline-block">
            START YOUR TRANSFORMATION
          </span>
          <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight">
            Let&apos;s Create Your Next Space.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-600 max-w-xl mx-auto font-sans leading-relaxed">
            Whether you are planning a complete turnkey house interior, a modular kitchen remodel, or structural alterations across Mohali and Kharar, we are ready to guide you.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-950 text-white font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-stone-800 transition-all shadow-md group"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A059]" />
              <span>Discuss Your Project</span>
            </Link>

            <Link
              href="/design-gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#EADBCA] text-stone-900 font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold hover:border-[#C5A059] hover:bg-[#F5E9D3]/40 transition-all shadow-xs group"
            >
              <span>Explore Design Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        <Footer />
        <MobileStickyBar />
      </main>
    </>
  );
}
