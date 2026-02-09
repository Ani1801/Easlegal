'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
}

export default function Hero({
  headline = "EasLegal Partners",
  subheadline = 'One of India’s most trusted legal and financial firms for founders and startups.',
  ctaText = "See Why Founders Trust Us",
  ctaHref,
  ctaOnClick,
}: HeroProps) {
  // Split headline to preserve the styling of the two parts (e.g. "EasLegal" and "Partners")
  const parts = headline.split(" ");
  const firstPart = parts[0];
  const secondPart = parts.slice(1).join(" ");

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F0EEE9]">
      {/* Background Layer: Image or Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover grayscale-[20%]"
          onLoadedMetadata={(e) => {
            const video = e.currentTarget;
            video.currentTime = 2;
            video.playbackRate = 0.75; // Slow down to 75% speed
          }}
          onTimeUpdate={(e) => {
            const video = e.currentTarget;
            // Loop back slightly before the end to ensure seamless playback
            if (video.currentTime >= 5.9) {
              video.currentTime = 2;
            }
          }}
        >
          {/* Playing only 4 seconds: from 2s to 6s */}
          <source
            src="/Video_Creation_Request_Fulfilled.mp4#t=2,6"
            type="video/mp4"
          />
        </video>

        {/* Clean Blur Overlay - Subtle backdrop blur for depth */}
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]" />

        {/* Smart Gradient Overlay - Dark on left, fades out */}
        <div className="absolute top-0 bottom-0 left-0 w-full md:w-[50%] bg-gradient-to-r from-black/50 via-black/25 to-transparent" />

        {/* Content-Area Accent - Additional dark overlay behind text area for extra contrast */}
        <div className="absolute top-32 left-0 w-96 h-80 bg-gradient-to-b from-black/40 to-transparent rounded-r-3xl" />
      </div>

      {/* Content Layer */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 relative z-10 text-left pt-32 md:pt-20">
        <div className="max-w-4xl mr-auto space-y-10 animate-fade-in-up">

          {/* Typography Masterclass - Tension & Scale */}
          {/* Negative space-y for tight vertical relationship */}
          <h1 className="flex flex-col items-start justify-start leading-[0.9] space-y-[0]">
            <span className="text-7xl md:text-8xl lg:text-9xl font-display font-black text-white drop-shadow-lg tracking-[-0.05em]">
              {firstPart}
            </span>
            {secondPart && (
              <span className="text-7xl md:text-8xl lg:text-9xl font-serif italic text-[#0F8F7A] ml-12 md:ml-24 tracking-normal">
                {secondPart}
              </span>
            )}
          </h1>

          <p className="text-xl md:text-2xl font-sans text-white/90 drop-shadow-lg font-semibold max-w-lg leading-relaxed">
            {subheadline}
          </p>

          {/* Accessible Actions - Balanced Pairing & Parity */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6 pt-4">
            {/* Primary Button: Soft Shadow */}
            <Button
              asChild={!!ctaHref}
              onClick={ctaOnClick}
              className="bg-[#0F8F7A] text-white transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#0F8F7A]/20 hover:bg-[#0B6E5E] hover:scale-105 px-10 h-16 rounded-full font-bold text-lg tracking-wide group"
            >
              {ctaHref ? (
                <a href={ctaHref}>
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <>
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>

            {/* Secondary Button Removed */}
          </div>
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#F0EEE9]" />
    </section>
  );
}
