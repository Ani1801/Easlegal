
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
          icon: <Zap className="w-5 h-5 text-primary" strokeWidth={1.5} />
        },
        {
          title: 'Legal Support',
          items: ['Fundraising and M&A', 'Legal Contracts', 'IPR Protection', 'POSH Compliance'],
          icon: <Scale className="w-5 h-5 text-primary" strokeWidth={1.5} />
        },
        {
          title: 'Secretarial Compliance',
          items: ['Incorporation & Registration', 'Recurring Compliance', 'Event Based Compliances', 'FEMA Compliance'],
          icon: <FileText className="w-5 h-5 text-primary" strokeWidth={1.5} />
        },
        {
          title: 'Tax & Regulatory',
          items: ['Tax Structuring', 'Regulatory Advisory', 'ESOP & Advisor Equity'],
          icon: <CheckCircle2 className="w-5 h-5 text-primary" strokeWidth={1.5} />
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
          icon: <Briefcase className="w-5 h-5 text-primary" strokeWidth={1.5} />
        },
        {
          title: 'Investment Support',
          items: ['Due Diligence', 'Transaction Agreements', 'Investment Transaction Advisory'],
          icon: <TrendingUp className="w-5 h-5 text-primary" strokeWidth={1.5} />
        },
        {
          title: 'Lifecycle Assistance',
          items: ['Fund Operations & Vendor Mgmt', 'Tax and Regulatory Advisory', 'Governance and Legal Support'],
          icon: <CheckCircle2 className="w-5 h-5 text-primary" strokeWidth={1.5} />
        },
        {
          title: 'Exit Support',
          items: ['Due Diligence for Exits', 'Transaction Advisory', 'Exit Agreements'],
          icon: <ArrowUpRight className="w-5 h-5 text-primary" strokeWidth={1.5} />
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
          icon: <Globe className="w-5 h-5 text-primary" strokeWidth={1.5} />
        },
        {
          title: 'India Entry',
          items: ['India Entity Integration', 'Tax & Legal Advisory', 'Parent-Subsidiary Structuring'],
          icon: <Rocket className="w-5 h-5 text-primary" strokeWidth={1.5} />
        },
        {
          title: 'Global Compliances',
          items: ['Transfer Pricing Advisory', 'International Tax Compliance', 'Regulatory Management'],
          icon: <Scale className="w-5 h-5 text-primary" strokeWidth={1.5} />
        },
        {
          title: 'GIFT IFSC',
          items: ['Setup Assistance', 'Regulatory & Tax Advisory', 'Legal & Compliance Support'],
          icon: <Briefcase className="w-5 h-5 text-primary" strokeWidth={1.5} />
        }
      ]
    }
  ];

  return (
    <section id="what-we-do" className="relative bg-background py-20">
      {/* Section Heading - Spacing Reduced */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-6">
        <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground leading-tight">
          What we do
        </h2>
      </div>

      {categories.map((category, index) => (
        <div
          key={category.id}
          className={cn(
            "py-16 border-b border-border/40 transition-colors duration-700",
            index % 2 === 0 ? "bg-background" : "bg-paper/10"
          )}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

              {/* Sticky Sidebar Header (Cols 1-4) - Adjusted Top Offset */}
              <div className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-6 transition-opacity duration-500">
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-brass" />
                  <span className="text-brass font-bold tracking-[0.2em] text-xs uppercase">
                    Services
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-ink tracking-tighter leading-none">
                  {category.title}
                </h2>

                <p className="text-ink/60 text-lg leading-relaxed max-w-xs font-sans">
                  {category.fullDesc}
                </p>
              </div>

              {/* Services Sub-grid (Cols 5-12) - Animation Overhaul & Padding Tightening */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
                {category.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="group py-6 border-b border-ink/5 animate-in fade-in duration-1000 fill-mode-both"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Service Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-2 rounded-lg bg-primary/5 text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {service.icon}
                      </div>
                      <h3 className="font-display text-xl font-bold text-ink group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-3 pl-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors duration-300 shrink-0" />
                          <span className="text-sm text-ink/70 font-sans leading-relaxed group-hover/item:text-ink transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhatWeDoSection;
