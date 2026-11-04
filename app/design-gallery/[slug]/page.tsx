import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowRight, 
  ArrowUpRight, 
  ChevronRight, 
  Check, 
  MessageSquare, 
  Info, 
  Sparkles, 
  Layers, 
  Palette, 
  Phone
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { GALLERY_DETAIL_DATA, GALLERY_ITEMS } from '@/lib/gallery-data';
import { BUSINESS_INFO } from '@/lib/data';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(GALLERY_DETAIL_DATA).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const data = GALLERY_DETAIL_DATA[params.slug];
  if (!data) return {};

  return {
    title: `${data.title} | Design Inspiration | Elegant Spaces Mohali`,
    description: `${data.subtitle} Discover material palettes, spatial planning, and lighting ideas for contemporary homes across Chandigarh Tricity.`,
    alternates: {
      canonical: `https://www.elegantspaces.me/design-gallery/${data.slug}`,
    },
    openGraph: {
      title: `${data.title} | Design Inspiration | Elegant Spaces`,
      description: data.subtitle,
      url: `https://www.elegantspaces.me/design-gallery/${data.slug}`,
      type: 'article',
      images: [{ url: data.heroImage, width: 1200, height: 630, alt: data.title }],
    },
  };
}

export default function GalleryDetailPage({ params }: Props) {
  const data = GALLERY_DETAIL_DATA[params.slug];

  if (!data) {
    notFound();
  }

  const relatedItems = data.relatedSlugs
    .map((slug) => GALLERY_DETAIL_DATA[slug])
    .filter(Boolean);

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
        "name": "Design Gallery",
        "item": "https://www.elegantspaces.me/design-gallery"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.title,
        "item": `https://www.elegantspaces.me/design-gallery/${data.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="bg-[#FAF8F5] text-stone-900 pt-16 sm:pt-20 min-h-screen">
        {/* ============================================================== */}
        {/* 1. Large Visual Hero                                          */}
        {/* ============================================================== */}
        <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-end overflow-hidden bg-stone-950">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            priority
            className="object-cover object-center opacity-60 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/20" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20 pt-28">
            {/* Breadcrumb Path */}
            <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-stone-300 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
              <Link href="/design-gallery" className="hover:text-white transition-colors">Design Gallery</Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[#C5A059] truncate">{data.categoryLabel}</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F5E9D3] text-xs font-mono uppercase tracking-[0.2em] mb-3">
                {data.categoryLabel} · Concept Study
              </span>
              <h1 className="font-cormorant font-semibold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                {data.title}
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-stone-200 font-light font-sans max-w-2xl leading-relaxed">
                {data.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Authenticity Disclosure Banner */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8">
          <div className="p-3.5 sm:p-4 rounded-2xl border border-[#EADBCA] bg-[#F5EFE6]/70 flex items-start sm:items-center gap-3 text-xs text-stone-700 font-sans shadow-xs">
            <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong>Inspiration &amp; Spatial Concept:</strong> The imagery and specifications shown here represent design archetypes and architectural exploration. Every project delivered by Elegant Spaces is custom engineered to your site&apos;s exact civil dimensions and family requirements.
            </p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. Overview & Philosophy Split Layout                          */}
        {/* ============================================================== */}
        <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7 space-y-5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block">
                CONCEPT OVERVIEW
              </span>
              <h2 className="font-cormorant font-semibold text-2xl sm:text-4xl text-stone-900 tracking-tight leading-snug">
                Designed for Calm, Proportion, and Practical Everyday Living.
              </h2>
              <p className="text-sm sm:text-base text-stone-700 font-sans leading-relaxed">
                {data.overview}
              </p>
              <p className="text-sm sm:text-base text-stone-700 font-sans leading-relaxed">
                {data.philosophy}
              </p>
            </div>

            {/* Quick Specs Sidebar */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-[#EADBCA] shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-stone-500 font-bold block mb-4 pb-2 border-b border-[#EADBCA]">
                  Key Design Intent
                </span>
                <ul className="space-y-3 text-xs font-sans text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Spatial Mood:</strong> Tactile, warm minimalism with glare-free indirect lighting.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Palette className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Palette:</strong> Warm off-white, natural beige stone, and natural timber grains.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Layers className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span><strong>Execution:</strong> Single-point civil engineering and custom millwork coordination.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EADBCA] text-xs text-stone-600">
                <span className="font-mono text-[11px] font-bold text-stone-900 block mb-1">
                  Site Consultations in Tricity
                </span>
                <span>Our team conducts on-site measurements and prepares transparent itemized BOQs across Mohali and Kharar.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. Multi-Image Inspiration Gallery                             */}
        {/* ============================================================== */}
        <section className="py-12 sm:py-16 bg-[#F5EFE6]/50 border-y border-[#EADBCA]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
                VISUAL EXPLORATION
              </span>
              <h2 className="font-cormorant font-semibold text-2xl sm:text-4xl text-stone-900 tracking-tight">
                Architectural Angles &amp; Material Detail
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {data.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white shadow-sm flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-xs text-stone-700 font-sans leading-relaxed">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. Design Elements & Material Inspiration                      */}
        {/* ============================================================== */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-12 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-2">
              MATERIAL ARCHITECTURE
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-4xl text-stone-900 tracking-tight">
              Design Elements &amp; Specifications
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 font-sans">
              Every detail in this concept is specified with certified, high-grade materials to guarantee longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {data.designElements.map((elem, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-white border border-[#EADBCA] hover:border-[#C5A059] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-cormorant text-2xl font-bold text-[#C5A059] block mb-2">
                    0{i + 1}
                  </span>
                  <h3 className="font-cinzel text-base font-bold text-stone-900 mb-2">
                    {elem.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
                    {elem.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EADBCA]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500 font-bold block mb-2">
                    Specified Materials
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {elem.materials.map((mat, mi) => (
                      <span
                        key={mi}
                        className="bg-[#FAF8F5] border border-[#EADBCA] px-2 py-0.5 rounded text-[11px] font-mono text-stone-700"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. Relevant Service Card                                      */}
        {/* ============================================================== */}
        <section className="py-12 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-10 bg-stone-950 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059]">
                EXECUTION CAPABILITY
              </span>
              <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white">
                {data.relatedService.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light font-sans">
                {data.relatedService.tagline}
              </p>
            </div>

            <Link
              href={data.relatedService.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] text-stone-950 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#d6b36a] transition-all shadow-md shrink-0"
            >
              <span>Explore Dedicated Service</span>
              <ArrowRight className="w-4 h-4 text-stone-950" />
            </Link>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. Related Design Inspirations                                */}
        {/* ============================================================== */}
        {relatedItems.length > 0 && (
          <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#EADBCA]">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] font-bold block mb-1">
                  CONTINUE EXPLORING
                </span>
                <h3 className="font-cormorant font-semibold text-2xl sm:text-3xl text-stone-900 tracking-tight">
                  Related Design Inspirations
                </h3>
              </div>
              <Link
                href="/design-gallery"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#9E7D3B] hover:text-stone-900"
              >
                <span>View All Designs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedItems.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/design-gallery/${rel.slug}`}
                  className="group rounded-2xl overflow-hidden border border-[#EADBCA] bg-white hover:border-[#C5A059] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <Image
                      src={rel.heroImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-75" />
                    <span className="absolute bottom-2.5 left-2.5 text-xs font-mono text-[#F5E9D3] font-bold uppercase tracking-wider">
                      {rel.categoryLabel}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h4 className="font-cinzel text-sm font-bold text-stone-900 group-hover:text-[#9E7D3B] transition-colors">
                      {rel.title}
                    </h4>
                    <div className="mt-3 pt-2.5 border-t border-[#EADBCA] flex items-center justify-between text-xs font-mono text-[#9E7D3B]">
                      <span>Read Concept</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================== */}
        {/* 7. Bottom Enquiry CTA                                         */}
        {/* ============================================================== */}
        <section className="py-20 sm:py-24 bg-[#F5EFE6]/70 border-t border-[#EADBCA] text-center px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full mb-4 inline-block">
              CUSTOM DESIGN CONSULTATION
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-stone-900 tracking-tight">
              Inspired by this {data.categoryLabel}?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans max-w-lg mx-auto leading-relaxed">
              Let&apos;s translate these spatial concepts into an executable 3D design and transparent BOQ tailored to your property in Mohali, Kharar, or Tricity.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-950 text-white font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-stone-800 transition-all shadow-md group"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Discuss Your Project With Us</span>
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#EADBCA] text-stone-800 font-mono text-xs uppercase tracking-wider font-medium hover:border-[#C5A059] transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
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
