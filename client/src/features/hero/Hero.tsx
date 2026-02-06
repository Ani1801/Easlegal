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
  subheadline = "One of India's most trusted legal and financial firms for founders and startups.",
  ctaText = "Start a Conversation",
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
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Architectural Background"
          className="w-full h-full object-cover grayscale-[20%]"
        />
        {/* The Scrim: Gradient Fade for Readability with Clean Glass Blur - Constrained Width */}
        <div className="absolute top-0 bottom-0 left-0 w-full md:w-[65%] bg-gradient-to-r from-[#F0EEE9] via-[#F0EEE9]/80 to-transparent backdrop-blur-[2px]" />
      </div>

      {/* Content Layer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-left pt-32 md:pt-20 w-full">
        <div className="max-w-4xl mr-auto space-y-10 animate-fade-in-up">

          {/* Typography Masterclass - Tension & Scale with Playfair Display for "Partners" */}
          {/* Negative space-y for tight vertical relationship */}
          <h1 className="flex flex-col items-start justify-start leading-[1.1] space-y-[-0.2em]">
            <span className="text-7xl md:text-8xl lg:text-9xl font-display font-black text-[#141414] tracking-tighter">
              {firstPart}
            </span>
            {secondPart && (
              <span className="text-7xl md:text-8xl lg:text-9xl font-serif italic text-[#0D9488] ml-12 md:ml-24 tracking-normal">
                {secondPart}
              </span>
            )}
          </h1>

          <p className="text-xl md:text-2xl font-sans text-[#141414]/70 font-medium max-w-xl leading-relaxed">
            {subheadline}
          </p>

          {/* Accessible Actions - Balanced Pairing & Parity */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6 pt-4">
            {/* Primary Button: Soft Shadow */}
            <Button
              asChild={!!ctaHref}
              onClick={ctaOnClick}
              className="bg-[#0D9488] text-white transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#0D9488]/20 hover:scale-105 px-10 h-16 rounded-full font-bold text-lg tracking-wide group"
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

            {/* Secondary Button: Inverted Hover, Button Parity (h-16) */}
            <button className="h-16 px-10 rounded-full border border-[#141414]/20 text-[#141414] font-bold text-lg hover:bg-[#141414] hover:text-white hover:border-[#141414] transition-all duration-500 tracking-wide">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#F0EEE9]" />
    </section>
  );
}

export default function Hero({
  headline = "EasLegal Partners",
  subheadline = "One of India’s most trusted legal and financial firms for founders and startups.",
  ctaText = "Start a Conversation",
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
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Architectural Background"
          className="w-full h-full object-cover grayscale-[20%]"
        />
        {/* The Scrim: Gradient Fade for Readability with Clean Glass Blur - Constrained Width */}
        <div className="absolute top-0 bottom-0 left-0 w-full md:w-[65%] bg-gradient-to-r from-[#F0EEE9] via-[#F0EEE9]/80 to-transparent backdrop-blur-[2px]" />
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-left pt-32 md:pt-20">
        <div className="max-w-4xl mr-auto space-y-10 animate-fade-in-up">

          {/* Typography Masterclass - Tension & Scale */}
          {/* Negative space-y for tight vertical relationship */}
          <h1 className="flex flex-col items-start justify-start leading-[1.1] space-y-[-0.2em]">
            <span className="text-7xl md:text-8xl lg:text-9xl font-display font-black text-ink tracking-[-0.05em]">
              {firstPart}
            </span>
            {secondPart && (
              <span className="text-7xl md:text-8xl lg:text-9xl font-serif italic text-[#0D9488] ml-12 md:ml-24 tracking-normal">
                {secondPart}
              </span>
            )}
          </h1>

          <p className="text-xl md:text-2xl font-sans text-ink/70 font-medium max-w-xl leading-relaxed">
            {subheadline}
          </p>

          {/* Accessible Actions - Balanced Pairing & Parity */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6 pt-4">
            {/* Primary Button: Soft Shadow */}
            <Button
              asChild={!!ctaHref}
              onClick={ctaOnClick}
              className="bg-[#0D9488] text-white transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#0D9488]/20 hover:scale-105 px-10 h-16 rounded-full font-bold text-lg tracking-wide group"
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

            {/* Secondary Button: Inverted Hover, Button Parity (h-16) */}
            <button className="h-16 px-10 rounded-full border border-ink/20 text-ink font-bold text-lg hover:bg-ink hover:text-white hover:border-ink transition-all duration-500 tracking-wide">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#F0EEE9]" />
    </section>
  );
}
