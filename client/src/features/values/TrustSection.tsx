'use client';

import React from 'react';
import { Star, ChevronUp, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface Review {
  id: number;
  initials: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  avatarColor: string;
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
      avatarColor: '#6366F1',
    },
    {
      id: 2,
      initials: 'LM',
      author: 'Lisa Mathews',
      role: 'CEO, BrightStart',
      content: 'The clarity and speed of execution are unmatched. Truly a founder-first firm that understands the pace of startups.',
      rating: 5,
      avatarColor: '#10B981',
    },
    {
      id: 3,
      initials: 'RV',
      author: 'Rohit Verma',
      role: 'Director, FinCorp',
      content: 'Professional, reliable, and always ahead of the curve. They handle our complex cross-border tax structures effortlessly.',
      rating: 5,
      avatarColor: '#EC4899',
    },
    {
      id: 4,
      initials: 'DK',
      author: 'Divya Kapoor',
      role: 'Co-founder, GreenEco',
      content: 'From IP protection to fundraising documents, they have been instrumental in our growth journey.',
      rating: 5,
      avatarColor: '#F59E0B',
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [isPaused, reviews.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="trust" className="bg-[#F0EEE9] py-16 px-6 lg:px-12 border-t border-[#1F1F1F]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with Title and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#1F1F1F]">
              Trust We've Earned
            </h2>
          </div>

          <button className="px-6 py-2 bg-[#0F8F7A] text-white font-sans font-bold text-xs rounded-lg hover:bg-[#0B6B5C] transition-colors duration-300 whitespace-nowrap">
            SEE ALL REVIEWS
          </button>
        </motion.div>

        {/* 2-Column Layout: Static Rating Card vs Vertical Carousel */}
        {/* Reduced height to h-[300px] as requested */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch h-[320px]">

          {/* Left Column: Fixed Rating Card (Span 4) */}
          <div className="lg:col-span-4 h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-[#1F1F1F]/8 rounded-lg p-6 shadow-sm flex flex-col items-center justify-center text-center h-full w-full"
            >
              <div className="text-7xl font-sans font-extrabold text-[#0F8F7A] mb-3 tracking-tighter">
                4.9
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="p-2 bg-gray-50 rounded-full border border-gray-100">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google"
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-xs font-sans font-bold text-[#4B4B4B] uppercase tracking-[0.2em] mt-1">
                  Google Average Rating
                </span>
                <span className="text-[10px] font-sans text-[#4B4B4B]/60 font-medium">
                  Based on 500+ Reviews
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Vertical Carousel (Span 8) */}
          <div
            className="lg:col-span-8 h-full relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg bg-white border border-[#1F1F1F]/8 shadow-sm hover:shadow-md transition-all duration-300">
              {reviews.map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{
                    opacity: idx === currentIndex ? 1 : 0,
                    y: idx === currentIndex ? 0 : idx < currentIndex ? -50 : 50,
                    scale: idx === currentIndex ? 1 : 0.95,
                    zIndex: idx === currentIndex ? 10 : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full p-8 md:p-10 flex flex-col justify-between"
                  style={{ pointerEvents: idx === currentIndex ? 'auto' : 'none' }}
                >
                  {/* Top: Avatar & Quote */}
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-inner"
                        style={{ backgroundColor: review.avatarColor }}
                      >
                        <span className="text-white font-sans font-bold text-lg">
                          {review.initials}
                        </span>
                      </div>
                      <div className="opacity-10">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                      </div>
                    </div>

                    <p className="text-lg text-[#1F1F1F] font-sans font-medium leading-relaxed italic line-clamp-4">
                      "{review.content}"
                    </p>
                  </div>

                  {/* Bottom: Author Info */}
                  <div className="border-t border-[#1F1F1F]/5 pt-4 mt-2">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#FFD700] text-[#FFD700]" />
                        ))}
                      </div>
                      <span className="text-sm font-sans font-bold text-[#1F1F1F]">5.0</span>
                    </div>
                    <h4 className="text-lg font-sans font-extrabold text-[#1F1F1F]">
                      {review.author}
                    </h4>
                    <p className="text-[10px] font-sans font-bold text-[#0F8F7A] uppercase tracking-[0.2em]">
                      {review.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows - Floating Right */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-4 flex flex-col gap-2 z-20">
              <button
                onClick={handlePrev}
                className="bg-white border border-[#1F1F1F]/10 rounded-full p-2 shadow-sm hover:bg-[#0F8F7A] hover:text-white transition-all duration-300 group"
                aria-label="Previous Review"
              >
                <ChevronUp size={16} className="text-[#1F1F1F] group-hover:text-white" />
              </button>
              <button
                onClick={handleNext}
                className="bg-white border border-[#1F1F1F]/10 rounded-full p-2 shadow-sm hover:bg-[#0F8F7A] hover:text-white transition-all duration-300 group"
                aria-label="Next Review"
              >
                <ChevronDown size={16} className="text-[#1F1F1F] group-hover:text-white" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
