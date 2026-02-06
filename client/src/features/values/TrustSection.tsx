'use client';

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Review {
  id: number;
  initials: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

const TrustSection = () => {
  const reviews: Review[] = [
    {
      id: 1,
      initials: 'AS',
      author: 'Arjun Sethi',
      role: 'Founder, TechFlow',
      content: 'EasLegal became our strategic partner from day one. Their regulatory advice effectively saved us from multiple compliance pitfalls.',
      rating: 5,
    },
    {
      id: 2,
      initials: 'LM',
      author: 'Lisa Mathews',
      role: 'CEO, BrightStart',
      content: 'The clarity and speed of execution are unmatched. Truly a founder-first firm that understands the pace of startups.',
      rating: 5,
    },
    {
      id: 3,
      initials: 'RV',
      author: 'Rohit Verma',
      role: 'Director, FinCorp',
      content: 'Professional, reliable, and always ahead of the curve. They handle our complex cross-border tax structures effortlessly.',
      rating: 5,
    },
    {
      id: 4,
      initials: 'DK',
      author: 'Divya Kapoor',
      role: 'Co-founder, GreenEco',
      content: 'From IP protection to fundraising documents, they have been instrumental in our growth journey.',
      rating: 5,
    },
  ];

  return (
    <section id="trust" className="bg-[#F0EEE9] py-24 border-t border-[#141414]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

        {/* Dedicated Header Row */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <h2 className="text-5xl font-display font-black text-[#141414] tracking-tighter text-center md:text-left">
            Trust We've Earned
          </h2>

          {/* Google Badge */}
          <div className="flex items-center gap-4 bg-white/40 backdrop-blur-md border border-[#141414]/5 px-6 py-3 rounded-full shadow-sm hover:bg-white/60 transition-all duration-300 select-none">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm p-1.5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-[#141414] leading-none mt-0.5">4.9/5.0</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={12} className="fill-[#B59E7A] text-[#B59E7A]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact "Legal Pad" Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group relative bg-transparent p-6 border-b border-[#141414]/10 hover:border-[#141414]/20 transition-all duration-300"
            >
              {/* Initials & Stars */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-full border border-[#B59E7A]/20 flex items-center justify-center bg-[#F0EEE9]">
                  <span className="font-serif font-bold text-lg text-[#B59E7A]">{review.initials}</span>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={10} className="fill-[#B59E7A] text-[#B59E7A]" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-sm text-[#141414]/70 font-sans leading-relaxed mb-6 min-h-[5rem]">
                "{review.content}"
              </p>

              {/* Author Footer */}
              <div>
                <p className="font-bold text-[#141414] text-sm">{review.author}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#B59E7A] font-bold mt-1">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="mt-16 text-center">
          <a href="#" className="group inline-flex items-center text-[#0D9488] font-bold text-sm tracking-wide transition-all duration-300">
            View All 500+ Reviews
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#0D9488] absolute bottom-0 left-0"></span>
            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
