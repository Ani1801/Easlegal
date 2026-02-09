'use client';

import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import SectionDivider from '@/components/common/SectionDivider';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Categories based on the design image
  const categories = [
    'All',
    'About Services',
    'About Treelife',
    'How do we operate?',
    'Pricing'
  ];

  const faqItems: FAQItem[] = [
    {
      id: '1',
      category: 'About Services',
      question: 'How Does EasLegal Leverage AI to Provide Exceptional Quality of Services?',
      answer: 'We utilize cutting-edge AI technology to streamline our legal and financial processes, ensuring higher accuracy, faster turnaround times, and predictive insights for your business growth.',
    },
    {
      id: '2',
      category: 'About EasLegal',
      question: 'What does EasLegal do?',
      answer: 'EasLegal is a multidisciplinary firm offering comprehensive legal, financial, and compliance solutions tailored for startups and businesses looking to scale.',
    },
    {
      id: '3',
      category: 'About Services',
      question: 'Can EasLegal assist with setting up a business in India?',
      answer: 'Yes, we specialize in end-to-end business incorporation services for both domestic and international clients looking to establish a presence in India.',
    },
    {
      id: '4',
      category: 'How do we operate?',
      question: 'What is your experience of working with investors and AIFs?',
      answer: 'We have extensive experience working with Angel Investors, VCs, and AIFs, providing due diligence, fund structuring, and regulatory advisory services.',
    },
    {
      id: '5',
      category: 'Pricing',
      question: 'How is your pricing model?',
      answer: 'Our pricing is transparent and flexible. We work on both retainer models and project-based fees depending on the scope and complexity of your requirements.',
    },
  ];

  const filteredItems = activeCategory === 'All'
    ? faqItems
    : faqItems.filter(item => item.category === activeCategory);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="bg-[#EBE9E4] h-screen max-h-screen py-12 lg:py-16 font-sans border-t border-ink/5 relative overflow-hidden transition-colors duration-500 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative h-full flex flex-col">
        {/* Section Anchor: Brass Needle */}
        <SectionDivider />

        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-12 gap-6 shrink-0">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-[#1F1F1F] leading-[1.0]">
              FAQ.
            </h2>
          </div>

          <Button className="group bg-[#0D9488] text-white hover:bg-[#0D9488]/90 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full h-12 px-6 text-sm font-bold tracking-wide flex items-center gap-2 font-sans">
            Get in Touch with us
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* FAQ Area: Sidebar + Accordion */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 flex-1 min-h-0">

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 flex flex-col gap-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-left px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 font-sans",
                  activeCategory === cat
                    ? "bg-white text-[#0D9488] border border-[#0D9488]/20 shadow-sm"
                    : "bg-transparent text-[#1F1F1F]/50 hover:text-[#1F1F1F] hover:bg-white/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List - Scrollable */}
          <div className="w-full lg:w-3/4 flex flex-col gap-3 overflow-y-auto pr-2 scrollbar-hide pb-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white/40 backdrop-blur-sm border border-[#1F1F1F]/5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 px-6 hover:border-[#1F1F1F]/10 shrink-0"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-5 flex items-center justify-between gap-4 text-left group"
                >
                  <span className={cn(
                    "text-lg font-sans font-bold transition-colors duration-300",
                    openItem === item.id ? "text-[#1F1F1F]" : "text-[#1F1F1F]/80 group-hover:text-[#0D9488]"
                  )}>
                    {item.question}
                  </span>
                  <span className={cn(
                    "text-[#1F1F1F]/30 transition-all duration-300",
                    openItem === item.id ? "text-[#0D9488] rotate-180" : "group-hover:text-[#0D9488]"
                  )}>
                    {openItem === item.id ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${openItem === item.id ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#1F1F1F]/70 leading-relaxed font-sans text-base pr-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default FAQSection;
