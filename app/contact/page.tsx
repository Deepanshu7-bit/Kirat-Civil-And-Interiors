import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';
import ContactFormWrapper from '@/components/contact/ContactFormWrapper';
import { BUSINESS_INFO } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us | Schedule Site Consultation | Elegant Spaces Mohali',
  description: 'Connect with Elegant Spaces for turnkey interior design and civil construction across Mohali, Kharar, Sunny Enclave & Chandigarh Tricity. Call +91 98783 90090 or book a site visit.',
  alternates: {
    canonical: 'https://www.elegantspaces.me/contact',
  },
  openGraph: {
    title: 'Contact Elegant Spaces – Turnkey Interior & Civil Contractors',
    description: 'Book a site measurement consultation in Mohali, Kharar, or Chandigarh Tricity. Call +91 98783 90090 or connect on WhatsApp.',
    url: 'https://www.elegantspaces.me/contact',
    type: 'website',
    images: [{ url: '/images/finished-luxury-interior.jpg', width: 1200, height: 630, alt: 'Contact Elegant Spaces' }],
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Elegant Spaces – Contractors & Interiors",
    "description": "Book a site measurement consultation for interior design and civil construction across Mohali, Kharar, and Chandigarh Tricity.",
    "url": "https://www.elegantspaces.me/contact",
    "mainEntity": {
      "@type": "HomeAndConstructionBusiness",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email,
      "url": "https://www.elegantspaces.me",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sahibzada Ajit Singh Nagar",
        "addressRegion": "Punjab",
        "postalCode": "140301",
        "addressCountry": "IN"
      },
      "areaServed": BUSINESS_INFO.serviceAreas
    }
  };

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
        "name": "Contact Us",
        "item": "https://www.elegantspaces.me/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="bg-[#FAF8F5] text-stone-900 pt-20 sm:pt-24 min-h-screen">
        {/* Contact Header */}
        <section className="py-12 sm:py-16 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Consultations Across Tricity</span>
          </div>

          <h1 className="font-cormorant font-semibold text-4xl sm:text-6xl text-stone-900 tracking-tight leading-[1.08]">
            Let&apos;s Discuss Your Project
          </h1>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-stone-600 font-sans max-w-2xl mx-auto font-light leading-relaxed">
            Whether you need a full turnkey interior fit-out, a custom modular kitchen, or civil structural alterations, our team is here to assist you with transparent advice and precise execution.
          </p>
        </section>

        {/* Main Content: Form & Direct Contact Cards */}
        <section className="px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Contact Info & Value Props */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Phone Card */}
              <div className="p-6 rounded-3xl bg-white border border-[#EADBCA] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5E9D3] border border-[#EADBCA] flex items-center justify-center text-[#9E7D3B]">
                  <Phone className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-stone-500 block">Direct Consultation Line</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-mono font-bold text-xl text-stone-900 hover:text-[#9E7D3B] transition-colors mt-0.5 block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <span className="text-xs text-stone-500 font-sans mt-1 block">
                    Available Monday – Saturday, 9:00 AM – 8:00 PM
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Card */}
              <div className="p-6 rounded-3xl bg-white border border-[#EADBCA] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5E9D3] border border-[#EADBCA] flex items-center justify-center text-[#9E7D3B]">
                  <MessageSquare className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-stone-500 block">WhatsApp Project Desk</span>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Spaces,%20I%20would%20like%20to%20discuss%20a%20turnkey%20interior/civil%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-base text-stone-900 hover:text-[#9E7D3B] transition-colors mt-0.5 block"
                  >
                    Chat on WhatsApp: +91 98783 90090
                  </a>
                  <span className="text-xs text-stone-500 font-sans mt-1 block">
                    Share floor plans, photos, and receive fast preliminary feedback.
                  </span>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-3xl bg-white border border-[#EADBCA] shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5E9D3] border border-[#EADBCA] flex items-center justify-center text-[#9E7D3B]">
                  <Mail className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-stone-500 block">Email Inquiries</span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="font-mono font-bold text-base text-stone-900 hover:text-[#9E7D3B] transition-colors mt-0.5 block"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <span className="text-xs text-stone-500 font-sans mt-1 block">
                    For corporate proposals, vendor inquiries, and detailed BOQs.
                  </span>
                </div>
              </div>

              {/* Service Areas Card */}
              <div className="p-6 rounded-3xl bg-white border border-[#EADBCA] shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-stone-900 font-bold">
                    Primary Service Areas
                  </span>
                </div>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  We schedule on-site laser measurements and project supervision across:
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="bg-[#FAF8F5] border border-[#EADBCA] px-2.5 py-1 rounded-lg text-xs font-mono text-stone-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Profile Links */}
              <div className="p-5 rounded-2xl bg-[#F5EFE6]/70 border border-[#EADBCA] space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 font-bold block">
                  Verified Local Business
                </span>
                <div className="flex flex-col gap-1.5">
                  <a
                    href={BUSINESS_INFO.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#9E7D3B] hover:text-stone-900 font-semibold font-mono"
                  >
                    <span>View Verified Google Business Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={BUSINESS_INFO.googleMapsCidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-900 font-mono"
                  >
                    <span>Open on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Project Consultation Form */}
            <div className="lg:col-span-7">
              <ContactFormWrapper />
            </div>
          </div>
        </section>

        <Footer />
        <MobileStickyBar />
      </main>
    </>
  );
}
