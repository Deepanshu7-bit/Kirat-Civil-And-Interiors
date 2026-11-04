import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import RawToFinishedSection from '@/components/transformation/RawToFinishedSection';
import ProjectCalculator from '@/components/calculator/ProjectCalculator';
import ServicesGrid from '@/components/services/ServicesGrid';
import TurnkeyRoadmap from '@/components/process/TurnkeyRoadmap';
import ProjectGallery from '@/components/portfolio/ProjectGallery';
import Testimonials from '@/components/social-proof/Testimonials';
import FAQSection from '@/components/faq/FAQSection';
import ConsultationForm from '@/components/contact/ConsultationForm';
import Footer from '@/components/layout/Footer';
import MobileStickyBar from '@/components/contact/MobileStickyBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col selection:bg-gold/30 selection:text-stone-900 relative">
      {/* Main Navigation (Fixed Header over Hero) */}
      <Navbar />

      {/* Hero Section with Full-Bleed Video Background */}
      <HeroSection />

      {/* Interactive From Raw to Finished Comparison Engine */}
      <RawToFinishedSection />

      {/* 30-Second Interactive Budget Estimator */}
      <ProjectCalculator />

      {/* Full Turnkey Civil & Interior Capabilities */}
      <ServicesGrid />

      {/* 4-Step Zero-Uncertainty Execution Roadmap */}
      <TurnkeyRoadmap />

      {/* Verified Local Projects Showcase */}
      <ProjectGallery />

      {/* Local Client Testimonials & Social Proof */}
      <Testimonials />

      {/* Frequently Asked Questions & FAQPage Schema */}
      <FAQSection />

      {/* Consultation Booking & Direct WhatsApp Dispatch */}
      <ConsultationForm />

      {/* Master Footer with Local SEO Links */}
      <Footer />

      {/* Persistent Mobile Bottom Action Bar (Sticky Call + WhatsApp) */}
      <MobileStickyBar />
    </main>
  );
}
