import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Maximize, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  ArrowUpRight,
  Sliders,
  Check
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Modular Wardrobes Maker Mohali, Kharar | Elegant Spaces',
  description: 'Custom floor-to-ceiling sliding wardrobes & walk-in closets in Mohali & Kharar. Anti-bend slim aluminum profiles, tinted glass shutters, and sensor LED lighting.',
  alternates: {
    canonical: 'https://www.elegantspaces.me/modular-wardrobes-maker-mohali-kharar',
  },
  openGraph: {
    title: 'Modular Wardrobes Maker Mohali, Kharar | Elegant Spaces',
    description: 'Custom modular wardrobes, walk-in dressing rooms, and architectural millwork in Mohali and Kharar.',
    url: 'https://www.elegantspaces.me/modular-wardrobes-maker-mohali-kharar',
    type: 'website',
    images: [{ url: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80', width: 1200, height: 630, alt: 'Modular Wardrobes Maker Mohali Kharar' }],
  },
};

export default function ModularWardrobesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Modular Wardrobes & Architectural Millwork",
    "serviceType": "Modular Wardrobe Manufacturer",
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
    "description": "Floor-to-ceiling modular wardrobe manufacturer in Mohali and Kharar. Sliding slim aluminum profiles, tinted toughened glass, internal motion-sensor lighting, and calibrated plywood carcases."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why are floor-to-ceiling 9-foot sliding wardrobes superior to readymade wardrobes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Readymade wardrobes leave 1–2 feet of unused vertical gap below the ceiling where dust collects, and they fail to fit into odd wall pillars or alcoves. Our custom modular wardrobes span full floor-to-ceiling height with zero-gap alignment, masking structural RCC columns completely and maximizing storage."
        }
      },
      {
        "@type": "Question",
        "name": "Do you install automatic motion sensor lighting inside wardrobe bays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We integrate concealed PIR motion-sensor LED strips inside every bay. When you slide open a shutter, warm 3000K illumination turns on automatically, illuminating hanging garments and velvet accessory trays without requiring room lights."
        }
      },
      {
        "@type": "Question",
        "name": "Which sliding hardware tracks do you use to prevent shutter bending?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We utilize heavy-duty anodized aluminum slim profile frames with bottom-weighted hydraulic soft-close sliders from Hafele and Hettich. These prevent tall shutters from warping or jumping off their tracks even under daily use."
        }
      }
    ]
  };

  const wardrobeGallery = [
    {
      src: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80',
      title: 'Glass Profile Sliding Wardrobe',
      desc: 'Slim aluminum anodized frames with tinted glass shutters and integrated sensor strip lights.'
    },
    {
      src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
      title: 'Full-Height Wooden Millwork',
      desc: 'Floor-to-ceiling cabinetry with concealed lofts and custom vanity dresser integration.'
    },
    {
      src: 'https://images.unsplash.com/photo-1617098900591-3f90928e8c54?auto=format&fit=crop&w=1200&q=80',
      title: 'Custom Internal Organizers',
      desc: 'Velvet-lined watch and jewelry drawers, pull-out trouser racks, and digital safe provisions.'
    },
    {
      src: '/images/furnished-master-bedroom.jpg',
      title: 'Integrated Bedroom Suite Fitment',
      desc: 'Wardrobes aligned flush with bedroom false ceilings and headboard fluted panels.'
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
            src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1600&q=85"
            alt="Modular Wardrobes Maker Mohali Kharar – Elegant Spaces"
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
              <span className="text-[#C5A059]">Modular Wardrobes</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F5E9D3] text-xs font-mono uppercase tracking-[0.2em] mb-3">
                Floor-to-Ceiling · Slim Aluminum Profile · Sensor LEDs
              </span>
              <h1 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                Designer Modular Wardrobes &amp; Millwork
              </h1>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-stone-950" />
                  <span>Get Wardrobe Estimate</span>
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
              STORAGE DESIGN
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Modular Wardrobes &amp; Dressing Suites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {wardrobeGallery.map((item, idx) => (
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

        {/* 5. Types of Wardrobe Systems */}
        <section className="py-16 sm:py-20 bg-[#F5EFE6]/50 border-y border-[#EADBCA]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
                STORAGE CONFIGURATIONS
              </span>
              <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
                Tailored Storage Solutions
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Floor-to-Ceiling 9ft Sliders', desc: 'Custom built to span full room height without unsightly top gaps or dust shelves.' },
                { title: 'Slim Aluminum Profile Glazing', desc: 'Anodized slim frames with tinted or fluted glass shutters for boutique showroom look.' },
                { title: 'Concealed Motion Sensor LEDs', desc: 'Low-voltage warm 3000K LED strips turning on automatically when bays glide open.' },
                { title: 'Velvet Jewelry & Watch Trays', desc: 'Custom pull-out compartments with dividers, ring slots, and integrated digital safes.' },
                { title: 'Built-in Vanity Dressers', desc: 'Coordinated dressers with fluted drawer fronts and defogger backlit mirrors.' },
                { title: 'Calibrated BWP Plywood Core', desc: 'Zero-warp calibrated marine ply carcases engineered for heavy vertical wardrobe loads.' },
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
              PRECISION WORKFLOW
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Custom Wardrobe Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Laser Niche Measurement', desc: 'Checking vertical plumb lines to ensure flush wall-to-wall fit.' },
              { num: '02', title: 'Internal Ergonomic 3D', desc: 'Customizing long hanging, folded shelves, and drawer bays.' },
              { num: '03', title: 'Factory CNC Pressing', desc: 'Edge-banding and carcase assembly with calibrated marine ply.' },
              { num: '04', title: 'Silent Slider Fitment', desc: 'Installing aluminum tracks, glass shutters, and sensor LEDs.' },
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
                  Wardrobe &amp; Bedroom Concepts
                </h3>
              </div>
              <Link href="/design-gallery" className="text-xs font-mono font-semibold text-[#9E7D3B] hover:text-stone-900">
                View All Designs →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link
                href="/design-gallery/modular-wardrobes"
                className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white shadow-xs hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&q=80"
                    alt="Floor-to-Ceiling Profile Wardrobe"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-cinzel font-bold text-white">
                    Floor-to-Ceiling Profile Wardrobe Concept
                  </span>
                </div>
              </Link>

              <Link
                href="/design-gallery/luxury-bedroom"
                className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white shadow-xs hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <Image
                    src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
                    alt="Contemporary Master Bedroom Suite"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-cinzel font-bold text-white">
                    Master Bedroom Suite &amp; Millwork
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
              Modular Wardrobe FAQs
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                Why are floor-to-ceiling 9-foot sliding wardrobes superior to readymade wardrobes?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                Readymade wardrobes leave 1–2 feet of unused vertical gap below the ceiling where dust collects, and they fail to fit into odd wall pillars or alcoves. Our custom modular wardrobes span full floor-to-ceiling height with zero-gap alignment, masking structural RCC columns completely and maximizing storage.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                Do you install automatic motion sensor lighting inside wardrobe bays?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                Yes. We integrate concealed PIR motion-sensor LED strips inside every bay. When you slide open a shutter, warm 3000K illumination turns on automatically, illuminating hanging garments and velvet accessory trays without requiring room lights.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBCA]">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900 mb-2">
                Which sliding hardware tracks do you use to prevent shutter bending?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                We utilize heavy-duty anodized aluminum slim profile frames with bottom-weighted hydraulic soft-close sliders from Hafele and Hettich. These prevent tall shutters from warping or jumping off their tracks even under daily use.
              </p>
            </div>
          </div>
        </section>

        {/* 9. Strong Enquiry CTA */}
        <section className="py-20 bg-stone-950 text-white text-center px-5 sm:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059]">
              CUSTOM STORAGE
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-white">
              Maximize Your Bedroom Space
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-light max-w-lg mx-auto font-sans leading-relaxed">
              Schedule an on-site niche measurement in Mohali or Kharar. We will prepare custom 3D internal layouts and an itemized BOQ estimate.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-stone-950" />
                <span>Book Wardrobe Measurement</span>
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
