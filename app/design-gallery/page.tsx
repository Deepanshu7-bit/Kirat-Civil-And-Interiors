import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import GalleryExplorer from '@/components/gallery/GalleryExplorer';

export const metadata: Metadata = {
  title: 'Design Gallery & Interior Inspirations | Elegant Spaces Mohali',
  description: 'Explore curated design inspirations and architectural concepts for modern living rooms, modular kitchens, luxury bedrooms, wardrobes, and false ceilings across Chandigarh Tricity.',
  alternates: {
    canonical: 'https://www.elegantspaces.me/design-gallery',
  },
  openGraph: {
    title: 'Design Gallery & Interior Inspirations | Elegant Spaces',
    description: 'Visual interior and architectural concepts for modern living rooms, modular kitchens, bedrooms, wardrobes, and false ceilings.',
    url: 'https://www.elegantspaces.me/design-gallery',
    type: 'website',
    images: [{ url: '/images/finished-luxury-interior.jpg', width: 1200, height: 630, alt: 'Design Gallery Elegant Spaces' }],
  },
};

export default function DesignGalleryPage() {
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

      <main className="bg-[#FAF8F5] text-stone-900 pt-20 sm:pt-24 min-h-screen">
        {/* Header Hero */}
        <section className="py-12 sm:py-20 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Curated Design Concepts</span>
          </div>

          <h1 className="font-cormorant font-semibold text-4xl sm:text-6xl lg:text-7xl text-stone-900 tracking-tight leading-[1.08]">
            Design Inspirations &amp; Concepts
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-stone-600 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            A visual exploration of spatial harmony, tactile material combinations, and architectural illumination tailored for contemporary homes across Chandigarh Tricity.
          </p>
        </section>

        {/* Gallery Interactive Explorer */}
        <section className="px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto pb-24">
          <GalleryExplorer />
        </section>

        {/* Bottom Project Discussion CTA */}
        <section className="py-20 bg-[#F5EFE6]/60 border-t border-[#EADBCA]">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9E7D3B] bg-[#F5E9D3] border border-[#EADBCA] px-3.5 py-1 rounded-full mb-4 inline-block">
              BRING YOUR INSPIRATION TO LIFE
            </span>
            <h2 className="font-cormorant font-semibold text-3xl sm:text-5xl text-stone-900 tracking-tight">
              Ready to Design Your Own Space?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans max-w-lg mx-auto leading-relaxed">
              Every home has unique proportions, lighting conditions, and lifestyle requirements. Let our design and civil team visit your site and prepare a custom proposal.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-stone-950 text-white font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-stone-800 transition-all shadow-md group"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Schedule a Site Consultation</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#EADBCA] text-stone-800 font-sans text-xs sm:text-sm uppercase tracking-wider font-medium hover:border-[#C5A059] transition-all"
              >
                <span>Learn About Our Approach</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <MobileStickyBar />
      </main>
    </>
  );
}
