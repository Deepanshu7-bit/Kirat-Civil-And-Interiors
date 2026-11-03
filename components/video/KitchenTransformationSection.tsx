'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/data';

export default function KitchenTransformationSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-[#FAF6EE] to-[#FAF8F5] border-t border-[#EADBCA] relative overflow-hidden" id="kitchen-video">
      {/* Golden Glow Accents (#F5E9D3) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,#F5E9D3_0%,transparent_70%)] opacity-70 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,#F5E9D3_0%,transparent_70%)] opacity-60 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5E9D3] border border-[#EADBCA] text-[#9E7D3B] text-xs font-mono uppercase tracking-widest mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>LIVE SITE TRANSFORMATION IN MOTION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-stone-900 tracking-tight">
            Watch Raw Brick & Slab Turn Into <br className="hidden sm:inline" />
            <span className="text-[#C5A059]">Engineered Modular Luxury</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed max-w-2xl mx-auto">
            Experience our master craftsmen in action. See how structural civil plumbing, anti-damp chemical waterproofing, and precision German carpentry unite to build kitchens that endure decades of heavy Indian cooking.
          </p>
        </div>

        {/* Video & Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Video Showcase Card */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border-2 border-[#EADBCA] bg-stone-900 shadow-[0_20px_50px_rgba(245,233,211,0.9),0_5px_15px_rgba(197,160,89,0.15)]">
              <video
                ref={videoRef}
                src="/videos/kitchen-transformation.mp4"
                playsInline
                autoPlay
                loop
                muted={isMuted}
                className="w-full h-full object-cover cursor-pointer"
                onClick={togglePlay}
              />

              {/* Floating Status Badges */}
              <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md border border-[#EADBCA]/50 px-3 py-1.5 rounded-lg text-xs font-mono text-[#F5E9D3] flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">SITE EXECUTION · KHARAR / MOHALI</span>
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <button
                  onClick={toggleSound}
                  aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
                  className="w-9 h-9 rounded-full bg-stone-950/80 hover:bg-stone-900 border border-[#EADBCA]/60 text-[#F5E9D3] flex items-center justify-center backdrop-blur-md shadow-md transition-all cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#C5A059]" />}
                </button>
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="w-9 h-9 rounded-full bg-[#C5A059] hover:bg-[#B38E46] text-stone-950 font-bold flex items-center justify-center shadow-md transition-all cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Technical Specs & Highlights */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/95 border border-[#EADBCA] shadow-[0_10px_30px_rgba(245,233,211,0.6)] space-y-4">
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900">
                The 4 Pillars of Our Modular Kitchens
              </h3>

              <div className="space-y-3.5">
                {[
                  {
                    title: '100% Calibrated BWP 710 Marine Ply',
                    desc: 'Boiling waterproof carcase that never sags, delaminates, or swells under sink dampness.',
                  },
                  {
                    title: 'Hettich & Hafele German Hydraulic Hardware',
                    desc: 'Soft-close InnoTech Atira tandem drawers rated for 40kg load and 100,000 cycles.',
                  },
                  {
                    title: 'Anti-Scratch Acrylic & PU Shutters',
                    desc: 'Seamless edge-banded acrylic panels resistant to high turmeric stains and daily oil splatters.',
                  },
                  {
                    title: 'Concealed Heavy Civil Plumbing & Conduit Lines',
                    desc: 'Our in-house civil mistri coordinates plumbing points directly to match cabinet heights.',
                  },
                ].map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-stone-900">{spec.title}</h4>
                      <p className="text-[11px] sm:text-xs text-stone-600 font-sans mt-0.5">{spec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Call to Action */}
              <div className="pt-4 border-t border-[#EADBCA]">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi%20Elegant%20Contractors,%20I%20saw%20your%20kitchen%20transformation%20video%20and%20want%20a%20modular%20kitchen%20estimate.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-[#F5E9D3] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                  <span>Get 3D Kitchen Estimate on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
