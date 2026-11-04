import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Hammer, 
  ShieldCheck, 
  Droplets, 
  Clock, 
  ChevronRight,
  Building,
  HelpCircle
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Civil Construction & Contractor Mohali | Elegant Spaces',
  description: 'Licensed civil contractor & thekedar in Kharar, Sunny Enclave & Mohali. Structural wall alterations, RCC foundation casting, Dr. Fixit chemical waterproofing, and laser-flat plastering.',
  keywords: [
    'civil contractor mohali',
    'civil thekedar kharar',
    'civil construction sunny enclave',
    'wall demolition contractor mohali',
    'rcc foundation mistri tricity',
    'chemical waterproofing kharar',
    'brickwork contractor sector 117',
    'civil engineer kharar',
    'house construction contractor mohali'
  ],
  alternates: {
    canonical: 'https://www.elegantspaces.me/civil-construction-contractor-kharar-mohali',
  },
  openGraph: {
    title: 'Civil Construction & Contractor Mohali | Elegant Spaces',
    description: 'Structural civil alterations, reinforced RCC masonry, and chemical waterproofing across Kharar, Sunny Enclave, and Mohali Tricity.',
    url: 'https://www.elegantspaces.me/civil-construction-contractor-kharar-mohali',
    type: 'website',
    images: [{ url: '/logos/elegant-logo-luxury-crest.jpg', width: 1024, height: 1024, alt: 'Civil Construction Contractor Mohali Kharar' }]
  }
};

export default function CivilConstructionPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Civil Construction & Alterations",
    "provider": {
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
      }
    },
    "areaServed": BUSINESS_INFO.serviceAreas,
    "description": "Heavy structural civil construction, load-bearing RCC lintel beams, wall demolition, damp-proofing, and floor slab casting under qualified civil engineer supervision."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you safely knock down a wall in my Kharar/Mohali flat or kothi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our civil engineers inspect load-bearing columns and beams before touching any brickwork. If a wall is load-bearing, we install reinforced ISMC structural steel girders or RCC lintels before safe controlled brick demolition to guarantee zero structural sagging."
        }
      },
      {
        "@type": "Question",
        "name": "How do you treat severe wall dampness (seelan) before interior paint?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We do not use temporary cosmetic putty. Our civil team chips plaster down to bare brick, identifies the moisture source, injects Dr. Fixit chemical waterproofing membranes, and applies polymer-modified crystalline barrier coats with a multi-year warranty."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle both civil work and finishing interiors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, that is our unique strength. Having civil engineering and interior woodcrafters under one roof eliminates the classic blame game between masons and carpenters, ensuring millimeter-precise conduits, level floors, and zero rework."
        }
      }
    ]
  };

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

      <main className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-gold/30 selection:text-stone-900 pt-[68px] sm:pt-[72px]">
        {/* Breadcrumb Bar */}
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-[#EADBCA] py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono text-stone-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-stone-900 transition-colors shrink-0">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-stone-400 shrink-0">Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <span className="text-[#9E7D3B] font-semibold shrink-0">Civil Construction &amp; Structural Works</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(circle_at_top,#F5E9D3_0%,transparent_60%)]">
          <div className="max-w-5xl mx-auto text-center space-y-5 sm:space-y-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-[#EADBCA] bg-white/80 backdrop-blur-sm text-[10px] sm:text-xs font-mono text-stone-800 shadow-sm max-w-full text-center">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-[#9E7D3B] font-semibold uppercase tracking-wider">MOHALI · KHARAR · SUNNY ENCLAVE</span>
              <span className="text-stone-400 hidden xs:inline">|</span>
              <span className="text-stone-600 font-sans hidden xs:inline">CIVIL ENGINEER SUPERVISION</span>
            </div>

            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-cinzel font-bold text-stone-900 tracking-tight leading-tight">
              Master <span className="text-[#C5A059]">Civil Contractor</span> in Kharar &amp; Mohali
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto font-sans leading-relaxed">
              From heavy load-bearing structural alterations, lintel beam casting, and wall shifting to Dr. Fixit chemical damp-proofing and laser-leveled plastering. We engineer solid foundations so your luxury interiors never crack or peel.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20need%20a%20site%20inspection%20and%20quote%20for%20Civil%20Construction%20/%20Wall%20Alterations.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Book Free Civil Site Inspection</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#EADBCA] bg-white text-stone-800 font-mono text-xs tracking-wider uppercase hover:border-[#C5A059] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Civil Engineer: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-[#EADBCA]">
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Building className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">180+ Delivered</span>
                <span className="text-[10px] text-stone-500">Civil & Renovation Sites</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Hammer className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">Structural Beams</span>
                <span className="text-[10px] text-stone-500">ISMC Steel & RCC Casting</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Droplets className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">Dr. Fixit Chemical</span>
                <span className="text-[10px] text-stone-500">Deep Seelan Waterproofing</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">12+ Years</span>
                <span className="text-[10px] text-stone-500">Field Proven Authority</span>
              </div>
            </div>
          </div>
        </section>

        {/* Civil Capabilities Comparison */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#EADBCA]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">ENGINEERING EXCELLENCE</span>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 mt-2">
                Why Professional Civil Supervision Matters
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-2xl mx-auto">
                Compare our qualified engineering protocols against unorganized daily wage mistris who risk structural safety.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#EADBCA] shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#FAF8F5] border-b border-[#EADBCA] font-mono text-xs uppercase tracking-wider text-stone-700">
                  <tr>
                    <th className="py-4 px-5">Civil Work Stage</th>
                    <th className="py-4 px-5 text-[#9E7D3B] font-bold">Elegant Contractors Standard</th>
                    <th className="py-4 px-5 text-stone-500">Typical Local Mistri</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EADBCA]">
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">Wall Removal & Demolition</td>
                    <td className="py-4 px-5 text-stone-900 bg-[#F5E9D3]/20 font-medium">Load calculation, propping jacks, and ISMC steel girder insertion</td>
                    <td className="py-4 px-5 text-stone-500">Sledgehammer hacking without inspecting overhead lintel beams</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">Damp-Proofing (Seelan)</td>
                    <td className="py-4 px-5 text-stone-900 bg-[#F5E9D3]/20 font-medium">Chemical injection & polymer crystalline barrier down to brick core</td>
                    <td className="py-4 px-5 text-stone-500">Covering damp patches with oil paint or PVC panels that trap moisture</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">Plastering & Levelling</td>
                    <td className="py-4 px-5 text-stone-900 bg-[#F5E9D3]/20 font-medium">Laser-guided level lines, chicken mesh over conduit cuts to stop cracks</td>
                    <td className="py-4 px-5 text-stone-500">Hand trowel finishing that leaves wavy surfaces for modular woodwork</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">MEP Conduit Grooving</td>
                    <td className="py-4 px-5 text-stone-900 bg-[#F5E9D3]/20 font-medium">Twin-blade wall chaser with zero structural brick shock</td>
                    <td className="py-4 px-5 text-stone-500">Chisel hammering that loosens adjacent mortar joints</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#EADBCA]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 mt-2">
                Civil Construction FAQs in Mohali & Kharar
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl border border-[#EADBCA] bg-[#FAF8F5]">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Can you safely knock down a wall in my Kharar/Mohali flat or kothi?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  Yes. Our civil engineers inspect load-bearing columns and beams before touching any brickwork. If a wall is load-bearing, we install reinforced ISMC structural steel girders or RCC lintels before safe controlled brick demolition to guarantee zero structural sagging.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#EADBCA] bg-[#FAF8F5]">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>How do you treat severe wall dampness (seelan) before interior paint?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  We do not use temporary cosmetic putty. Our civil team chips plaster down to bare brick, identifies the moisture source, injects Dr. Fixit chemical waterproofing membranes, and applies polymer-modified crystalline barrier coats with a multi-year warranty.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#EADBCA] bg-[#FAF8F5]">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Do you handle both civil work and finishing interiors?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  Yes, that is our unique strength. Having civil engineering and interior woodcrafters under one roof eliminates the classic blame game between masons and carpenters, ensuring millimeter-precise conduits, level floors, and zero rework.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Conversion Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-[#F5E9D3]/40 to-[#FAF8F5] border-t border-[#EADBCA] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">READY TO RENOVATE OR MODIFY?</span>
            <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-stone-900 tracking-tight">
              Get an On-Site Civil Consultation in 24 Hours
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
              Serving Sector 117 (ACME Heights-2), Sunny Enclave (Sector 125), Kharar-Landran Corridor, New Chandigarh, and SAS Nagar Mohali.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20please%20schedule%20a%20civil%20site%20inspection.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Book Civil Site Inspection</span>
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
