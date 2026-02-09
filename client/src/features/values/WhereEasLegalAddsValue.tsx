'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WhereEasLegalAddsValue = () => {
  const valueItems = [
    {
      number: '01',
      title: 'Clarity in Complexity',
      description: 'We break down legal and financial frameworks into clear, actionable decisions for founders.'
    },
    {
      number: '02',
      title: 'Speed Without Compromise',
      description: 'Fast execution without sacrificing compliance, accuracy, or long-term protection.'
    },
    {
      number: '03',
      title: 'Founder-Aligned Strategy',
      description: 'Legal structures designed around your stage, risk appetite, and growth vision.'
    },
    {
      number: '04',
      title: 'Scalable Foundations',
      description: 'We build legal and financial systems that scale as your company grows.'
    }
  ];

  return (
    <section className="bg-[#F0EEE9] py-24 px-6 lg:px-12 border-b border-[#1F1F1F]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Headline & Description (Sticky) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-32 h-fit"
          >
            {/* Eyebrow Text */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#0F8F7A]" />
              <span className="text-[10px] font-sans font-bold text-[#0F8F7A] uppercase tracking-[0.2em]">
                Our Value
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl font-sans text-[#1F1F1F] leading-[1.1] mb-8">
              <span className="text-5xl md:text-6xl lg:text-7xl block mb-2 font-medium tracking-tight">Where EasLegal</span>
              <span className="text-[#0F8F7A] block font-extrabold tracking-tight">Adds Value</span>
            </h2>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-[#4B4B4B] leading-relaxed max-w-md font-sans">
              We simplify complex legal and financial decisions so founders can focus on building and scaling their business.
            </p>
          </motion.div>

          {/* Right Column: Value Items */}
          <div className="lg:col-span-7 grid gap-x-12 gap-y-16 md:grid-cols-2 relative">
            {/* Vertical Divider - only visible on md screens and up */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#1F1F1F]/5 -translate-x-1/2 h-full" />

            {valueItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex flex-col gap-4 pt-6 transition-colors duration-300 ${
                  // Add horizontal borders only where appropriate for the grid layout
                  // Mobile: Border on all except first term
                  // Desktop: Logic needs to handle 2-column grid row dividers
                  index < 2 ? 'md:pt-0' : 'md:border-t md:border-[#1F1F1F]/5 pt-6'
                  } ${index > 0 ? 'border-t border-[#1F1F1F]/5 md:border-t-0' : ''}`}
              >
                {/* Number */}
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#0D9488] uppercase block mb-1">
                  {item.number}
                </span>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-sans font-bold text-[#1F1F1F] leading-tight group-hover:text-[#0F8F7A] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#4B4B4B] text-base leading-relaxed font-sans opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereEasLegalAddsValue;
