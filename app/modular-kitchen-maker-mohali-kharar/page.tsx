import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Wrench, 
  Droplets, 
  HelpCircle,
  Clock,
  MapPin,
  ChevronRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Modular Kitchen Maker in Mohali & Kharar | Factory-Finish Acrylic & Marine Ply',
  description: 'Top-rated modular kitchen maker and manufacturer in Kharar, Sunny Enclave & Mohali. 100% BWP 710 marine ply, German Hettich hydraulic fittings, acrylic shutters, and quartz countertops with 10-year warranty.',
  keywords: [
    'modular kitchen maker kharar',
    'modular kitchen mohali',
    'modular kitchen maker near me',
    'modular kitchen manufacturer mohali',
    'acrylic modular kitchen sunny enclave',
    'bwp 710 marine ply kitchen kharar',
    'modular kitchen price per sq ft mohali',
    'hettich kitchen fittings dealer tricity',
    'kitchen thekedar kharar',
    'kitchen cabinets designer sector 117 mohali',
    'l shaped modular kitchen kharar'
  ],
  alternates: {
    canonical: 'https://www.elegantspaces.me/modular-kitchen-maker-mohali-kharar',
  },
  openGraph: {
    title: 'Modular Kitchen Maker in Mohali & Kharar | Elegant Contractors & Interiors',
    description: 'Custom engineered acrylic, PU & laminate modular kitchens built with 100% BWP 710 Marine Plywood and German Hettich fittings across Kharar & Mohali.',
    url: 'https://www.elegantspaces.me/modular-kitchen-maker-mohali-kharar',
    type: 'website',
    images: [{ url: '/logos/elegant-logo-luxury-crest.jpg', width: 1024, height: 1024, alt: 'Modular Kitchen Maker Mohali Kharar' }]
  }
};

export default function ModularKitchenPage() {
  const kitchenSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Modular Kitchen Manufacturing & Installation",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ACME HEIGHTS-2, 309/G, Sector 117, Ex 2",
        "addressLocality": "Mohali",
        "addressRegion": "Punjab",
        "postalCode": "140301",
        "addressCountry": "IN"
      }
    },
    "areaServed": ["Kharar", "Sunny Enclave", "Mohali", "Sector 117", "New Chandigarh", "Tricity"],
    "description": "Bespoke modular kitchen manufacturing using 100% Boiling Water Proof (BWP 710) marine ply, Hettich & Hafele hydraulic soft-close hardware, anti-scratch acrylic shutters, and composite quartz countertops.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "1250",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "1250",
        "priceCurrency": "INR",
        "unitText": "per square foot"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the average cost of a modular kitchen in Kharar and Mohali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard modular kitchen in Kharar and Mohali typically ranges from ₹1.2 Lakh to ₹3.8 Lakh depending on the layout (L-shape, Parallel, or U-shape) and finish. High-pressure laminate kitchens start around ₹1,100 to ₹1,400 per sq ft, while premium anti-scratch acrylic and PU lacquer kitchens with German Hettich soft-close tandem drawers range from ₹1,600 to ₹2,400 per sq ft."
        }
      },
      {
        "@type": "Question",
        "name": "Why do you use BWP 710 Marine Plywood instead of MDF or Particle Board?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Indian cooking involves heavy moisture, spices, and frequent water usage around the sink area. MDF and particle boards swell and disintegrate within 2-3 years. At Elegant Contractors, we build kitchen carcases strictly with 100% Boiling Water Proof (BWP 710) calibrated marine plywood, backed by a 10-year manufacturer warranty against water damage and termite infestation."
        }
      },
      {
        "@type": "Question",
        "name": "How long does manufacturing and installation take in Tricity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "From final 3D design approval and site laser measurement, factory manufacturing of shutters and carcases takes approximately 14 to 18 days. On-site installation in your Kharar or Mohali home is completed in just 2 to 3 days with zero mess."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kitchenSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-gold/30 selection:text-white">
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-[#EADBCA] py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono text-stone-500">
            <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-400">Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#9E7D3B] font-semibold">Modular Kitchen Maker Mohali & Kharar</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(circle_at_top,#F5E9D3_0%,transparent_60%)]">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#EADBCA] bg-white/80 backdrop-blur-sm text-xs font-mono text-stone-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-[#9E7D3B] font-semibold uppercase tracking-wider">MOHALI · KHARAR · SUNNY ENCLAVE</span>
              <span className="text-stone-400">|</span>
              <span className="text-stone-600 font-sans">10-YEAR WATERPROOF WARRANTY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-bold text-stone-900 tracking-tight leading-tight">
              Bespoke <span className="text-[#C5A059]">Modular Kitchen Maker</span> in Mohali & Kharar
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-3xl mx-auto font-sans leading-relaxed">
              Tired of swelling boards, jammed channels, and finger-pointing carpenters? We manufacture precision factory-finished modular kitchens using <strong>100% BWP 710 Marine Plywood</strong>, <strong>German Hettich soft-close hydraulics</strong>, and <strong>anti-scratch acrylic shutters</strong> designed for intense Indian cooking.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20want%20a%20free%203D%20design%20and%20quote%20for%20a%20Modular%20Kitchen%20in%20Mohali/Kharar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-stone-900 text-[#F5E9D3] font-mono text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-stone-800 transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Get Free 3D Kitchen Layout & Quote</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#EADBCA] bg-white text-stone-800 font-mono text-xs tracking-wider uppercase hover:border-[#C5A059] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>Call Kitchen Specialist: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-[#EADBCA]">
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Droplets className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">100% Waterproof</span>
                <span className="text-[10px] text-stone-500">BWP 710 Marine Grade</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Wrench className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">Hettich & Hafele</span>
                <span className="text-[10px] text-stone-500">German Soft-Close</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <Clock className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">18 Days Delivery</span>
                <span className="text-[10px] text-stone-500">Precision Factory Finish</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-white/70 border border-[#EADBCA]">
                <ShieldCheck className="w-5 h-5 text-[#C5A059] mx-auto mb-1" />
                <span className="font-mono text-xs font-semibold text-stone-900 block">10-Year Warranty</span>
                <span className="text-[10px] text-stone-500">Zero Swelling Promise</span>
              </div>
            </div>
          </div>
        </section>

        {/* Material & Hardware Specifications Table */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#EADBCA]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">ENGINEERED FOR LONGEVITY</span>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 mt-2">
                Why Our Kitchens Outlast Local Carpentry
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-2xl mx-auto">
                Compare our certified turnkey specifications against typical budget carpenters who use cheap commercial ply or MDF.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-[#EADBCA] shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#FAF8F5] border-b border-[#EADBCA] font-mono text-xs uppercase tracking-wider text-stone-700">
                  <tr>
                    <th className="py-4 px-5">Kitchen Component</th>
                    <th className="py-4 px-5 text-[#9E7D3B] font-bold">Elegant Contractors Standard</th>
                    <th className="py-4 px-5 text-stone-500">Typical Local Carpenter</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EADBCA]">
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">Carcase / Cabinet Box</td>
                    <td className="py-4 px-5 text-stone-900 bg-[#F5E9D3]/20 font-medium">100% Calibrated BWP 710 Marine Ply (Century / Greenply)</td>
                    <td className="py-4 px-5 text-stone-500">Commercial MR Grade Ply or Particle Board (Swells in water)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">Shutter Finishes</td>
                    <td className="py-4 px-5 text-stone-900 bg-[#F5E9D3]/20 font-medium">1mm Anti-Scratch High-Gloss Acrylic, PU Lacquer, or Matte Laminate</td>
                    <td className="py-4 px-5 text-stone-500">0.8mm Hand-pressed laminate with raw edges that peel</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">Edge Banding</td>
                    <td className="py-4 px-5 text-stone-900 bg-[#F5E9D3]/20 font-medium">2mm German Hot-Melt PUR Machine Edge-Banding (Zero Water Entry)</td>
                    <td className="py-4 px-5 text-stone-500">Manual Fevicol tape glued with iron (peels in steam)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">Drawer Channels & Hinges</td>
                    <td className="py-4 px-5 text-stone-900 bg-[#F5E9D3]/20 font-medium">Hettich InnoTech Atira / Hafele Soft-Close Tandem Boxes (Tested 50,000 cycles)</td>
                    <td className="py-4 px-5 text-stone-500">Unbranded ball-bearing channels that rust and jam in 6 months</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">Countertop Compatibility</td>
                    <td className="py-4 px-5 text-stone-900 bg-[#F5E9D3]/20 font-medium">Non-porous Quartz Stone, Kalinga Slabs, or Jet Black Granite</td>
                    <td className="py-4 px-5 text-stone-500">Stain-prone marble or porous granite slabs</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 font-semibold text-stone-900">Warranty Coverage</td>
                    <td className="py-4 px-5 text-[#C5A059] bg-[#F5E9D3]/30 font-bold">10-Year Water & Termite Warranty + 1-Yr Free Service</td>
                    <td className="py-4 px-5 text-stone-400">Zero written guarantee after full payment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Popular Kitchen Layouts in Kharar & Mohali */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">CUSTOM CONFIGURATIONS</span>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 mt-2">
                Popular Modular Kitchen Layouts in Tricity
              </h2>
              <p className="text-sm text-stone-600 mt-2">
                Engineered around the Golden Work Triangle (Hob, Sink, Refrigerator) for maximum efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-[#EADBCA] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F5E9D3] border border-[#EADBCA] flex items-center justify-center text-[#9E7D3B] font-mono font-bold text-sm mb-4">
                    01
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-stone-900">L-Shaped Modular Kitchen</h3>
                  <p className="text-xs text-[#9E7D3B] font-mono mt-1 font-semibold">Most Popular for 2BHK & 3BHK Floors</p>
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    Maximizes corner spaces with carousel magic pullouts. Ideal for open-concept apartments in Sunny Enclave and Sector 117.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-stone-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Magic corner wire pull-out</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Overhead hydraulic lift-up cabinets</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Dedicated chimney duct routing</li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EADBCA]">
                  <span className="text-[11px] font-mono text-stone-500 block">Starting From:</span>
                  <span className="font-cinzel text-lg font-bold text-stone-900">₹1,25,000*</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#C5A059] shadow-md flex flex-col justify-between relative">
                <div className="absolute -top-3 right-6 bg-[#C5A059] text-stone-950 font-mono text-[10px] uppercase font-bold px-3 py-0.5 rounded-full shadow">
                  CHEF’S CHOICE
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059] text-stone-950 flex items-center justify-center font-mono font-bold text-sm mb-4">
                    02
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-stone-900">Parallel Galley Kitchen</h3>
                  <p className="text-xs text-[#9E7D3B] font-mono mt-1 font-semibold">Ideal for Builder Floors & Heavy Cooking</p>
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    Provides dual countertops: one dedicated to wet preparation (sink and vegetable chopping) and the other for heavy gas cooking.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-stone-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Complete wet-dry cooking separation</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Tall pantry with 6-tier wire rack</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Built-in microwave and oven cavity</li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EADBCA]">
                  <span className="text-[11px] font-mono text-stone-500 block">Starting From:</span>
                  <span className="font-cinzel text-lg font-bold text-stone-900">₹1,65,000*</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#EADBCA] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F5E9D3] border border-[#EADBCA] flex items-center justify-center text-[#9E7D3B] font-mono font-bold text-sm mb-4">
                    03
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-stone-900">Island & U-Shape Kitchen</h3>
                  <p className="text-xs text-[#9E7D3B] font-mono mt-1 font-semibold">Luxury Independent Kothis & Penthouses</p>
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    Designed for expansive residences in New Chandigarh and Aerocity Mohali. Features central breakfast island and wine glass display bays.
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-stone-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Floating breakfast counter with barstools</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Tinted profile glass display cabinets</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Motion sensor under-cabinet profile lighting</li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-[#EADBCA]">
                  <span className="text-[11px] font-mono text-stone-500 block">Starting From:</span>
                  <span className="font-cinzel text-lg font-bold text-stone-900">₹2,40,000*</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Localized FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#EADBCA]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9E7D3B] font-semibold">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-2xl sm:text-4xl font-cinzel font-bold text-stone-900 mt-2">
                Modular Kitchen FAQs in Mohali & Kharar
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl border border-[#EADBCA] bg-[#FAF8F5]">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>What is the price per square foot for a modular kitchen in Kharar and Mohali?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  Pricing varies based on shutter finishes and hardware:
                  <br />• <strong>High-Pressure Laminate (BWP 710 Base):</strong> ₹1,200 – ₹1,450 / sq ft
                  <br />• <strong>High-Gloss Anti-Scratch Acrylic:</strong> ₹1,650 – ₹2,100 / sq ft
                  <br />• <strong>PU Lacquer / Tinted Fluted Glass:</strong> ₹2,200 – ₹2,800 / sq ft
                  <br />All our prices include factory carcass manufacture, Hettich/Hafele hardware, and on-site fitting.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#EADBCA] bg-[#FAF8F5]">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Do you handle plumbing, civil wall cutting, and tile backsplash as well?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  Yes! Unlike showroom-only kitchen dealers who ask you to arrange your own plumbers and masons, Elegant Contractors is a <strong>licensed civil and interior contractor</strong>. Our team handles concealed CPVC Jaquar plumbing lines, gas pipe conduits, tile backsplash installation, and electrical points with zero coordination hassle.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#EADBCA] bg-[#FAF8F5]">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Can I see a 3D computerized design before manufacturing starts?</span>
                </h3>
                <p className="text-sm text-stone-600 mt-3 leading-relaxed pl-7">
                  Absolutely. After taking laser measurements at your Kharar or Mohali home, we provide a complete 3D photorealistic render showing exact cabinet positions, drawer heights, and color schemes. Manufacturing begins only after your 100% written approval.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Conversion Banner */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-900 text-[#F5E9D3] text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5A059] font-semibold">READY TO UPGRADE YOUR HOME?</span>
            <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white tracking-tight">
              Get Your Custom Kitchen Quote in 24 Hours
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-sans leading-relaxed">
              Serving Sector 117 (ACME Heights-2), Sunny Enclave (Sector 125), Kharar-Landran Road, New Chandigarh, and SAS Nagar Mohali.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20please%20schedule%20a%20free%20kitchen%20site%20measurement.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5A059] text-stone-950 font-mono text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 hover:bg-[#b38e46] transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Book Free Site Measurement</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-stone-700 bg-stone-800 text-stone-200 font-mono text-xs tracking-wider uppercase hover:border-[#C5A059] transition-all flex items-center justify-center gap-2"
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
