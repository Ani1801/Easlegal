'use client';

import React from 'react';
import { Star } from 'lucide-react';

const CollaborationSection = () => {
  // Repeating logos to ensure smooth infinite loop
  const logos = [
    { name: 'TechCorp', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'FinServe', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'LegalFlow', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'GrowthAI', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png' },
    { name: 'VentureInc', src: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg' },
    { name: 'ScaleUp', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png' },
    { name: 'GlobalX', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    // Duplicates for seamless loop
    { name: 'TechCorp', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'FinServe', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'LegalFlow', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'GrowthAI', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png' },
    { name: 'VentureInc', src: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg' },
    { name: 'ScaleUp', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png' },
    { name: 'GlobalX', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  ];

  return (
    <section className="bg-white/50 py-24 overflow-hidden border-b border-[#141414]/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <h2 className="text-5xl md:text-6xl font-display font-black text-[#141414] leading-tight tracking-tighter text-center md:text-left">
            Collaborating with Industry Leaders
          </h2>

          {/* Google Trust Badge (Right Aligned) */}
          <div className="flex items-center gap-3 bg-white/60 px-5 py-2.5 rounded-full border border-[#141414]/5 shadow-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="w-5 h-5 opacity-80"
            />
            <div className="h-4 w-[1px] bg-[#141414]/10" />
            <div className="flex items-center gap-2 text-[#B59E7A]">
              <span className="font-display font-bold text-sm text-[#141414]">4.9</span>
              <div className="flex gap-0.5">
                <Star size={12} className="fill-[#B59E7A] text-[#B59E7A]" />
                <Star size={12} className="fill-[#B59E7A] text-[#B59E7A]" />
                <Star size={12} className="fill-[#B59E7A] text-[#B59E7A]" />
                <Star size={12} className="fill-[#B59E7A] text-[#B59E7A]" />
                <Star size={12} className="fill-[#B59E7A] text-[#B59E7A]" />
              </div>
            </div>
          </div>
        </div>

        {/* The "Vibrant Pop" Marquee Shelf */}
        <div className="relative w-full bg-white/40 backdrop-blur-md rounded-2xl border border-[#141414]/5 overflow-hidden">

          {/* Inner Divider */}
          <div className="absolute top-0 left-6 right-6 h-[1px] bg-ink/5 z-10" />

          {/* Side Fades for Depth */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/40 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/40 to-transparent z-20 pointer-events-none" />

          <div
            className="flex animate-marquee min-w-full items-center py-12 px-6 hover:[animation-play-state:paused]"
            style={{ animationDuration: '40s' }}
          >
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-10 group relative py-2">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-9 md:h-11 w-auto object-contain transition-all duration-300 ease-out
                                               opacity-70 grayscale-0
                                               group-hover:opacity-100 group-hover:scale-125 group-hover:z-50 group-hover:drop-shadow-[0_15px_30px_rgba(13,148,136,0.15)]"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CollaborationSection;
