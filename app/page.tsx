import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import ServicesGrid from '@/components/services/ServicesGrid';
import RawToFinishedSection from '@/components/transformation/RawToFinishedSection';
import Testimonials from '@/components/social-proof/Testimonials';
import ConsultationForm from '@/components/contact/ConsultationForm';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Interior Design & Turnkey Construction in Mohali & Chandigarh Tricity | Elegant Spaces',
  description: 'Boutique interior design studio & turnkey civil contractor in Mohali, Kharar & Chandigarh Tricity. Specialized in complete home interiors, waterproof modular kitchens, false ceilings, and structural alterations.',
  alternates: {
    canonical: 'https://www.elegantspaces.me',
  },
  openGraph: {
    title: 'Interior Design & Turnkey Construction Mohali | Elegant Spaces',
    description: 'Boutique interior design studio & turnkey civil contractor across Mohali, Kharar, Sunny Enclave and Chandigarh Tricity.',
    url: 'https://www.elegantspaces.me',
    type: 'website',
    images: [{ url: '/images/finished-luxury-interior.webp', width: 1200, height: 630, alt: 'Elegant Spaces – Contractors & Interiors' }],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col selection:bg-gold/30 selection:text-stone-900 relative">
      {/* Navigation */}
      <Navbar />

      {/* 1. Immersive Hero */}
      <HeroSection />

      {/* 2. Core Capabilities & Services */}
      <ServicesGrid />

      {/* 3. Visual Engineering: From Raw Civil to Finished Luxury */}
      <RawToFinishedSection />

      {/* 4. Verified Client Reviews & Social Proof */}
      <Testimonials />

      {/* 5. Simple Site Consultation Booking */}
      <ConsultationForm />

      {/* Footer */}
      <Footer />

      {/* Persistent Mobile Action Bar */}
      <MobileStickyBar />
    </main>
  );
}
