'use client';


import React from 'react';
import { Rocket, TrendingUp, Globe, ArrowUpRight, CheckCircle2, Briefcase, Scale, FileText, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Service {
  title: string;
  items: string[];
  icon?: React.ReactNode;
}

interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  services: Service[];
}

import { motion } from 'framer-motion';
import SectionDivider from '@/components/common/SectionDivider';

// ... (interfaces remain same)

const WhatWeDoSection = () => {
  const categories: ServiceCategory[] = [
    {
      id: 'startups',
      title: 'For Startups',
      shortDesc: 'Build your foundation right',
      fullDesc: 'We navigate the legal complexities of early-stage growth so you can focus on building.',
      services: [
        {
          title: 'Virtual CFO',
          items: ['Accounting & Tax Compliance', 'Payroll Management', 'MIS and Budgeting', 'Due Diligence Support', 'Financial Modeling'],
          icon: <Zap className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Legal Support',
          items: ['Fundraising and M&A', 'Legal Contracts', 'IPR Protection', 'POSH Compliance'],
          icon: <Scale className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Secretarial Compliance',
          items: ['Incorporation & Registration', 'Recurring Compliance', 'Event Based Compliances', 'FEMA Compliance'],
          icon: <FileText className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Tax & Regulatory',
          items: ['Tax Structuring', 'Regulatory Advisory', 'ESOP & Advisor Equity'],
          icon: <CheckCircle2 className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        }
      ]
    },
    {
      id: 'investors',
      title: 'For Investors',
      shortDesc: 'Maximize returns, minimize risks',
      fullDesc: 'Comprehensive investment support ensuring airtight diligence and portfolio compliance.',
      services: [
        {
          title: 'AIF Setup',
          items: ['Fund Structuring', 'AIF Documentation', 'AIF Application Process'],
          icon: <Briefcase className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Investment Support',
          items: ['Due Diligence', 'Transaction Agreements', 'Investment Transaction Advisory'],
          icon: <TrendingUp className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Lifecycle Assistance',
          items: ['Fund Operations & Vendor Mgmt', 'Tax and Regulatory Advisory', 'Governance and Legal Support'],
          icon: <CheckCircle2 className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Exit Support',
          items: ['Due Diligence for Exits', 'Transaction Advisory', 'Exit Agreements'],
          icon: <ArrowUpRight className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        }
      ]
    },
    {
      id: 'global',
      title: 'Going Global',
      shortDesc: 'Expand internationally with confidence',
      fullDesc: 'Seamless international expansion through expert regulatory navigation and tax planning.',
      services: [
        {
          title: 'Foreign Setup',
          items: ['Jurisdiction Selection', 'Entity Incorporation', 'Local Compliance Setup'],
          icon: <Globe className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'India Entry',
          items: ['India Entity Integration', 'Tax & Legal Advisory', 'Parent-Subsidiary Structuring'],
          icon: <Rocket className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Global Compliances',
          items: ['Transfer Pricing Advisory', 'International Tax Compliance', 'Regulatory Management'],
          icon: <Scale className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'GIFT IFSC',
          items: ['Setup Assistance', 'Regulatory & Tax Advisory', 'Legal & Compliance Support'],
          icon: <Briefcase className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        }
      ]
    }
  ];

  // Flatten all services with category info
  const allServices = categories.flatMap(category =>
    category.services.map(service => ({ ...service, category: category.title }))
  );

  return (
    <section id="what-we-do" className="bg-[#F0EEE9] py-20 px-6 lg:px-12 border-b border-[#1F1F1F]/5">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#0F8F7A]" />
            <span className="text-[10px] font-sans font-bold text-[#0F8F7A] uppercase tracking-[0.2em]">
              What We Do
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#1F1F1F] mb-3">
            Comprehensive Services
          </h2>
          <p className="text-lg text-[#4B4B4B] max-w-2xl leading-relaxed">
            Complete legal and financial solutions for startups, investors, and global expansion.
          </p>
        </motion.div>

        {/* Category Headers with Services Grid */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category Title */}
              <h3 className="text-3xl font-sans font-semibold tracking-tight text-[#1F1F1F] mb-8">
                {category.title}
              </h3>

              {/* Services Grid for this category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="group h-full bg-white border border-black/5 rounded-lg p-6 hover:shadow-lg hover:border-[#0F8F7A]/20 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Icon */}
                    <div className="mb-4 p-3 w-fit rounded-md bg-[#0F8F7A]/10 text-[#0F8F7A] group-hover:bg-[#0F8F7A] group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-sans font-extrabold text-[#1F1F1F] mb-4 group-hover:text-[#0F8F7A] transition-colors duration-300">
                      {service.title}
                    </h4>

                    {/* Items */}
                    <ul className="space-y-3 flex-grow">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0F8F7A]/40 group-hover/item:bg-[#0F8F7A] transition-colors duration-300 shrink-0" />
                          <span className="text-sm text-[#4B4B4B] font-sans leading-relaxed group-hover/item:text-[#1F1F1F] transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
