'use client';

import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
      question: 'How Does Treelife Leverage AI to Provide Exceptional Quality of Services?',
      answer: 'We utilize cutting-edge AI technology to streamline our legal and financial processes, ensuring higher accuracy, faster turnaround times, and predictive insights for your business growth.',
    },
    {
      id: '2',
      category: 'About Treelife',
      question: 'What does Treelife do?',
      answer: 'Treelife is a multidisciplinary firm offering comprehensive legal, financial, and compliance solutions tailored for startups and businesses looking to scale.',
    },
    {
      id: '3',
      category: 'About Services',
      question: 'Can Treelife assist with setting up a business in India?',
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
    <section className="bg-[#F0EEE9] py-20 font-sans border-t border-ink/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-5xl font-display font-medium text-ink tracking-tighter">
              FAQ.
            </h2>
            <p className="text-ink/60 text-lg leading-relaxed max-w-lg">
              Everything you need to know about our services, pricing, and how we help founders succeed.
            </p>
          </div>

          <Button className="group bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full h-12 px-8 text-sm font-bold tracking-wide flex items-center gap-2">
            Get in Touch with us
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* FAQ Area: Sidebar + Accordion */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-32">

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 flex flex-col gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "text-left px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300",
                  activeCategory === cat
                    ? "bg-white text-[#C9A46B] border border-[#C9A46B]/20 shadow-sm"
                    : "bg-transparent text-ink/50 hover:text-ink hover:bg-white/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="w-full lg:w-3/4 flex flex-col gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white/40 backdrop-blur-sm border border-ink/5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 px-6 hover:border-ink/10"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-6 flex items-center justify-between gap-4 text-left group"
                >
                  <span className={cn(
                    "text-lg font-display font-bold transition-colors duration-300",
                    openItem === item.id ? "text-ink" : "text-ink/80 group-hover:text-primary"
                  )}>
                    {item.question}
                  </span>
                  <span className={cn(
                    "text-ink/30 transition-all duration-300",
                    openItem === item.id ? "text-[#C9A46B] rotate-180" : "group-hover:text-[#C9A46B]"
                  )}>
                    {openItem === item.id ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${openItem === item.id ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-ink/70 leading-relaxed font-sans text-base pr-4">
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
