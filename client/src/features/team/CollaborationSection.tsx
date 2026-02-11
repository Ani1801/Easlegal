'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section className="bg-[#F8F9FA] py-20 px-6 lg:px-12 border-b border-[#1F1F1F]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
        >
          <div className="flex-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#0F8F7A]" />
              <span className="text-[10px] font-sans font-bold text-[#0F8F7A] uppercase tracking-[0.2em]">
                Trusted Partners
              </span>
            </div>
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#1F1F1F] leading-tight mb-4">
              Collaborating with Industry Leaders
            </h2>
            <p className="text-lg text-[#4B4B4B] max-w-2xl leading-relaxed">
              Trusted by teams and founders associated with global leaders
            </p>
          </div>

        </motion.div>

        {/* Logo Marquee */}
        <div className="relative w-full overflow-hidden group">
          <style>{`
            @keyframes marquee-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: marquee-scroll 50s linear infinite;
            }
            .group:hover .animate-scroll {
              animation-play-state: paused;
            }
          `}</style>

          {/* Gradient Masks for smooth fade - updated to match light theme */}
          <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-gradient-to-r from-[#F8F9FA] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-[#F8F9FA] to-transparent z-20 pointer-events-none" />

          <div
            className="flex gap-16 items-center animate-scroll w-max"
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300"
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
