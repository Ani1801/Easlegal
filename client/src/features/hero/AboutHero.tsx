'use client';

import React from 'react';

const AboutHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F0EEE9]">
      {/* 
        Asymmetric Layering Layout:
        - The image takes up 60% of the screen on the right.
        - The text overlay is on the left.
      */}
      <div className="flex flex-col items-center justify-center min-h-[70vh] relative">

        {/* Left Vertical Tagline */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
          <span className="block -rotate-90 origin-center text-[10px] tracking-widest font-bold text-[#0D9488] whitespace-nowrap uppercase">
            BUILT FOR FOUNDERS
          </span>
        </div>

        {/* Centered Content Area */}
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6 py-20">

          <div className="relative inline-block">
            <h1 className="font-playfair italic font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-[#1F1F1F] mb-8 tracking-tight">
              The Visionaries <br />
              <span className="not-italic font-bold">Behind</span> <br />
              EasLegal
            </h1>
            <div className="h-px w-24 bg-[#0D9488] mb-8 mx-auto"></div>
            <p className="text-[#1F1F1F]/80 text-lg sm:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
              We are a collective of legal experts, financial strategists, and problem solvers dedicated to empowering the next generation of founders.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
