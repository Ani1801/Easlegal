'use client';

import React from 'react';
import { Rocket, TrendingUp, Globe, ArrowUpRight, CheckCircle2, Briefcase, Scale, FileText, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceItem {
  label: string;
  id: string;
}

interface Service {
  title: string;
  items: ServiceItem[];
  icon?: React.ReactNode;
}

interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  services: Service[];
}

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
          items: [
            { label: 'Accounting & Tax Compliance', id: 'accounting-tax-compliance' },
            { label: 'Payroll Management', id: 'payroll-management' },
            { label: 'MIS and Budgeting', id: 'mis-and-budgeting' },
            { label: 'Due Diligence Support', id: 'due-diligence-support' },
            { label: 'Financial Modeling', id: 'financial-modeling' }
          ],
          icon: <Zap className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Legal Support',
          items: [
            { label: 'Fundraising and M&A', id: 'fundraising-and-mna' },
            { label: 'Legal Contracts', id: 'legal-contracts' },
            { label: 'IPR Protection', id: 'ipr-protection' },
            { label: 'POSH Compliance', id: 'posh-compliance' }
          ],
          icon: <Scale className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Secretarial Compliance',
          items: [
            { label: 'Incorporation & Registration', id: 'incorporation-registration' },
            { label: 'Recurring Compliance', id: 'recurring-compliance' },
            { label: 'Event Based Compliances', id: 'event-based-compliances' },
            { label: 'FEMA Compliance', id: 'fema-compliance' }
          ],
          icon: <FileText className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Tax & Regulatory',
          items: [
            { label: 'Tax Structuring', id: 'tax-structuring' },
            { label: 'Regulatory Advisory', id: 'regulatory-advisory' },
            { label: 'ESOP & Advisor Equity', id: 'esop-advisor-equity' }
          ],
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
          items: [
            { label: 'Fund Structuring', id: 'fund-structuring' },
            { label: 'AIF Documentation', id: 'aif-documentation' },
            { label: 'AIF Application Process', id: 'aif-application-process' }
          ],
          icon: <Briefcase className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Investment Support',
          items: [
            { label: 'Due Diligence', id: 'due-diligence' },
            { label: 'Transaction Agreements', id: 'transaction-agreements' },
            { label: 'Investment Transaction Advisory', id: 'investment-transaction-advisory' }
          ],
          icon: <TrendingUp className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Lifecycle Assistance',
          items: [
            { label: 'Fund Operations & Vendor Mgmt', id: 'fund-operations-vendor-mgmt' },
            { label: 'Tax and Regulatory Advisory', id: 'tax-regulatory-advisory' },
            { label: 'Governance and Legal Support', id: 'governance-legal-support' }
          ],
          icon: <CheckCircle2 className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Exit Support',
          items: [
            { label: 'Due Diligence for Exits', id: 'due-diligence-for-exits' },
            { label: 'Transaction Advisory', id: 'transaction-advisory' },
            { label: 'Exit Agreements', id: 'exit-agreements' }
          ],
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
          items: [
            { label: 'Jurisdiction Selection', id: 'jurisdiction-selection' },
            { label: 'Entity Incorporation', id: 'entity-incorporation' },
            { label: 'Local Compliance Setup', id: 'local-compliance-setup' }
          ],
          icon: <Globe className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'India Entry',
          items: [
            { label: 'India Entity Integration', id: 'india-entity-integration' },
            { label: 'Tax & Legal Advisory', id: 'tax-legal-advisory' },
            { label: 'Parent-Subsidiary Structuring', id: 'parent-subsidiary-structuring' }
          ],
          icon: <Rocket className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'Global Compliances',
          items: [
            { label: 'Transfer Pricing Advisory', id: 'transfer-pricing-advisory' },
            { label: 'International Tax Compliance', id: 'international-tax-compliance' },
            { label: 'Regulatory Management', id: 'regulatory-management' }
          ],
          icon: <Scale className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        },
        {
          title: 'GIFT IFSC',
          items: [
            { label: 'Setup Assistance', id: 'setup-assistance' },
            { label: 'Regulatory & Tax Advisory', id: 'regulatory-tax-advisory-ifsc' },
            { label: 'Legal & Compliance Support', id: 'legal-compliance-support' }
          ],
          icon: <Briefcase className="w-5 h-5 text-[#0F8F7A]" strokeWidth={1.5} />
        }
      ]
    }
  ];

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
                    className="group h-full bg-white border border-black/5 rounded-lg p-6 hover:shadow-xl hover:shadow-[#0F8F7A]/5 hover:border-[#0F8F7A]/30 transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col"
                  >
                    {/* Icon */}
                    <div className="mb-4 p-3 w-fit rounded-md bg-[#0F8F7A]/10 text-[#0F8F7A] group-hover:bg-[#0F8F7A] group-hover:text-white group-hover:scale-110 transition-all duration-500 ease-out">
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
                          <Link
                            to={`/services/${item.id}`}
                            className="text-sm text-[#4B4B4B] font-sans leading-relaxed group-hover/item:text-[#1F1F1F] group-hover/item:underline decoration-[#0F8F7A]/30 hover:decoration-[#0F8F7A] transition-all duration-300"
                          >
                            {item.label}
                          </Link>
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
