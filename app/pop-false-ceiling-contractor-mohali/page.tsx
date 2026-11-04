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
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  ArrowUpRight,
  Lightbulb,
  Check
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'POP & False Ceiling Contractor Mohali | Elegant Spaces',
  description: 'Architectural false ceilings and mood lighting in Mohali & Kharar. Saint-Gobain Gyproc boards, magnetic track lights, indirect 3000K cove lighting, and acoustic ceilings.',
  alternates: {
    canonical: 'https://www.elegantspaces.me/pop-false-ceiling-contractor-mohali',
  },
  openGraph: {
    title: 'POP & False Ceiling Contractor Mohali | Elegant Spaces',
    description: 'Precision Gyproc false ceiling designs with magnetic track lights and warm ambient lighting in Mohali and Kharar.',
    url: 'https://www.elegantspaces.me/pop-false-ceiling-contractor-mohali',
    type: 'website',
    images: [{ url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'False Ceiling Contractor Mohali' }],
  },
};

export default function FalseCeilingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Architectural False Ceilings & Mood Lighting",
    "serviceType": "Gyproc False Ceiling Contractor",
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
    "description": "Architectural false ceiling contractor in Mohali and Kharar. Saint-Gobain Gyproc moisture-resistant plaster boards, galvanized GI framing, magnetic track rails, and indirect warm cove lighting."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do you use Saint-Gobain Gyproc boards instead of local POP powder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional hand-applied POP powder is prone to hairline cracks, uneven surface waves, and water absorption. Saint-Gobain Gyproc machine-pressed gypsum boards provide millimeter-straight coves, superior acoustic damping, and moisture resistance that will not crack or sag over time."
        }
      },
      {
        "@type": "Question",
        "name": "What lighting color temperature do you recommend for residential false ceilings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We strictly recommend warm indirect ambient lighting in the 3000K range for living areas and bedrooms. It creates an inviting atmosphere without harsh glare, flatteringly illuminating wall textures and decor."
        }
      },
      {
        "@type": "Question",
        "name": "How is electrical conduit pulling coordinated during ceiling installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team coordinates framing and electrical cabling concurrently. Conduits for magnetic track lights, recessed spots, and cove strips are pulled and tested before boards are fastened, avoiding any damaged plaster or rework."
        }
      }
    ]
  };

  const ceilingGallery = [
    {
      src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      title: 'Architectural Coves & Magnetic Rails',
      desc: 'Seamless indirect coves casting warm 3000K glow over main living salon.'
    },
    {
      src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      title: 'Minimal Linear Drop & Shadow Line',
      desc: 'Flush zero-trim COB fixtures integrated into crisp geometric perimeter drop.'
    },
    {
      src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      title: 'Double-Height Ceiling Illumination',
      desc: 'Low-glare magnetic track rails designed to wash feature walls evenly.'
    },
    {
      src: '/images/furnished-master-bedroom.jpg',
      title: 'Master Bedroom Perimeter Coves',
      desc: 'Soft recessed night lighting with dual switching positioned beside the bed.'
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
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85"
            alt="POP False Ceiling Contractor Mohali – Elegant Spaces"
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
              <span className="text-[#C5A059]">False Ceilings</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F5E9D3] text-xs font-mono uppercase tracking-[0.2em] mb-3">
                Saint-Gobain Gyproc · Magnetic Track Lights · 3000K Coves
              </span>
              <h1 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                Architectural False Ceilings &amp; Mood Lighting
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-stone-200 font-light font-sans max-w-2xl leading-relaxed">
                Sculpting interior space through glare-free indirect illumination, magnetic track rails, and rigid zinc-coated GI framing across Mohali, Kharar, and Chandigarh Tricity.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-stone-950" />
                  <span>Request Ceiling Consultation</span>
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
        {/* 4. Large Relevant Image Gallery                                */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
              CEILING CONCEPTS
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Ambient Illumination &amp; Clean Profiles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {ceilingGallery.map((item, idx) => (
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
        {/* 5. Ceiling Specifications & Framing Systems                    */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-20 bg-[#F5EFE6]/50 border-y border-[#EADBCA]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
                FRAMING &amp; LIGHTING
              </span>
              <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                Architectural Ceiling Systems
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Saint-Gobain Gyproc Sheets', desc: 'Moisture-proof, fire-resistant certified boards providing laser-straight level surfaces.' },
                { title: 'Zinc-Coated Heavy GI Framing', desc: 'Galvanized iron channel grid anchored directly into the RCC slab to prevent future sag.' },
                { title: 'Magnetic Low-Voltage Track Rails', desc: 'Flush magnetic rails supporting directional spots and linear floodlights with easy repositioning.' },
                { title: 'Warm 3000K Indirect Coves', desc: 'High-CRI strip illumination concealed within deep coves, delivering continuous shadow-free glow.' },
                { title: 'Acoustic Ceiling Treatments', desc: 'Perforated gypsum and acoustic baffles designed to absorb room reverberation in home theaters.' },
                { title: 'Smart Dimming Controls', desc: 'Multi-zone automation enabling customized day, evening, and relaxation lighting scenes.' },
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
        {/* 6. Visual Workflow                                            */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
              INSTALLATION WORKFLOW
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Precision Ceiling Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Laser Level & Framing', desc: 'Leveling grid anchored with metal fasteners into RCC ceiling slab.' },
              { num: '02', title: 'Conduit Pulling', desc: 'Electrical conduits for AC, COB spots, and coves pulled and tested.' },
              { num: '03', title: 'Gyproc Fixing & Tape', desc: 'Boards screwed with fiber mesh tape and crack-resistant jointing.' },
              { num: '04', title: 'Royale Emulsion Finish', desc: 'Sanding, 2 coats primer, and Asian Paints Royale topcoat application.' },
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
                  Ceiling &amp; Lighting Concepts
                </h3>
              </div>
              <Link href="/design-gallery" className="text-xs font-mono font-semibold text-[#9E7D3B] hover:text-stone-900">
                View All Designs →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/design-gallery/false-ceiling-designs"
                className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white shadow-xs hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                    alt="False Ceiling Inspiration Concept"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-cinzel font-bold text-white">
                    Architectural Ceiling &amp; Mood Lighting Concept
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
                    alt="Modern Living Room with Ambient Ceiling"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-cinzel font-bold text-white">
                    Modern Living Room Ambient Lighting
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
              False Ceiling FAQs
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                Why do you use Saint-Gobain Gyproc boards instead of local POP powder?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                Traditional hand-applied POP powder is prone to hairline cracks, uneven surface waves, and water absorption. Saint-Gobain Gyproc machine-pressed gypsum boards provide millimeter-straight coves, superior acoustic damping, and moisture resistance that will not crack or sag over time.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                What lighting color temperature do you recommend for residential false ceilings?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                We strictly recommend warm indirect ambient lighting in the 3000K range for living areas and bedrooms. It creates an inviting atmosphere without harsh glare, flatteringly illuminating wall textures and decor.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                How is electrical conduit pulling coordinated during ceiling installation?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                Our team coordinates framing and electrical cabling concurrently. Conduits for magnetic track lights, recessed spots, and cove strips are pulled and tested before boards are fastened, avoiding any damaged plaster or rework.
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
              START YOUR CEILING DESIGN
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-white">
              Upgrade Your Home&apos;s Ambiance
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-light max-w-lg mx-auto font-sans leading-relaxed">
              Book a site consultation across Mohali, Kharar, or Chandigarh. We provide lighting layouts and fixed itemized estimates.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-stone-950" />
                <span>Schedule Site Measurement</span>
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
