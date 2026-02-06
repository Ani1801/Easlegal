'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Resource {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

const ResourcesSection = () => {
  const resources: Resource[] = [
    {
      id: 1,
      title: 'The Architecture of a Series A: Structuring Your Legal Foundation',
      excerpt: 'Beyond the pitch deck lies the real challenge: building a legal infrastructure that can withstand the rigorous diligence of institutional capital.',
      category: 'STRATEGIC GROWTH',
      readTime: '8 min',
      date: 'OCT 24',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600',
    },
    {
      id: 2,
      title: 'Navigating Cross-Border Tax Implications',
      excerpt: 'Essential strategies for Indian startups expanding into US markets.',
      category: 'GLOBAL EXPANSION',
      readTime: '6 min',
      date: 'OCT 18',
      image: '/blog-1.jpg',
    },
    {
      id: 3,
      title: 'The Founder’s Guide to ESOP Pools',
      excerpt: 'How to leverage equity to attract top talent without diluting control.',
      category: 'TALENT & EQUITY',
      readTime: '5 min',
      date: 'OCT 12',
      image: '/blog-2.jpg',
    },
    {
      id: 4,
      title: 'Data Privacy in the Age of AI',
      excerpt: 'New compliance frameworks every AI-first company needs.',
      category: 'REGULATORY COMPLIANCE',
      readTime: '7 min',
      date: 'OCT 05',
      image: '/blog-3.jpg',
    },
  ];

  const featuredPost = resources[0];
  const latestPosts = resources.slice(1, 4);

  return (
    <section id="resources" className="bg-background py-24 px-6 border-b border-[#141414]/5 flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-8 border-b border-[#141414]/10 pb-4 shrink-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#141414] tracking-tighter leading-[0.9]">
            Premium Insights
          </h2>
          <span className="hidden md:block text-[#141414]/50 font-sans text-xs tracking-[0.2em] mb-1">
            CURATED FOR FOUNDERS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 flex-1 min-h-0">

          {/* Featured Insight (Cols 1-8) */}
          <div className="lg:col-span-8 group cursor-pointer flex flex-col h-full justify-center">
            <div className="relative overflow-hidden rounded-[2rem] w-full aspect-[21/9] lg:h-auto lg:max-h-[45vh] mb-5 shrink-0">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
            </div>

            <div className="space-y-3 max-w-3xl shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-[#B59E7A] font-bold text-[10px] tracking-[0.2em] uppercase">
                  {featuredPost.category}
                </span>
                <span className="text-[#141414]/40 text-[10px] font-sans tracking-[0.15em]">
                  {featuredPost.date} — {featuredPost.readTime}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-[#141414] leading-[1.1] tracking-tight group-hover:text-[#0D9488] transition-colors duration-300 line-clamp-2">
                {featuredPost.title}
              </h3>

              <p className="text-base text-[#141414]/60 font-sans leading-relaxed max-w-2xl line-clamp-2 lg:line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="pt-1">
                <span className="group/link inline-flex items-center gap-2 text-[#0D9488] font-bold text-xs tracking-[0.15em] uppercase">
                  Read Insight
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                </span>
              </div>
            </div>
          </div>

          {/* Latest Intelligence (Cols 9-12) */}
          <div className="lg:col-span-4 flex flex-col justify-center h-full border-l border-[#141414]/5 pl-8">
            <div className="mb-4 flex items-center gap-3 shrink-0">
              <div className="h-[1px] w-6 bg-[#B59E7A]" />
              <span className="text-[#B59E7A] font-bold text-[10px] tracking-[0.2em] uppercase">
                Latest Intelligence
              </span>
            </div>

            <div className="space-y-5 overflow-y-auto pr-2 scrollbar-hide">
              {latestPosts.map((post) => (
                <article
                  key={post.id}
                  className="group cursor-pointer border-b border-[#141414]/10 pb-5 last:border-0"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[#B59E7A] font-bold text-[9px] tracking-[0.15em] uppercase">
                        {post.category}
                      </span>
                      <span className="text-[#141414]/30 text-[9px]">
                        {post.date}
                      </span>
                    </div>

                    <h4 className="text-base font-display font-bold text-[#141414] leading-snug group-hover:text-[#0D9488] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-[#141414]/50 line-clamp-1">{post.excerpt}</p>

                    <span className="group/link inline-flex items-center gap-1 text-[#0D9488]/80 font-bold text-[10px] tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 pt-1">
                      Read
                      <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* View All Link */}
            <div className="mt-4 pt-4 border-t border-[#141414]/10 shrink-0">
              <a href="#" className="text-[#141414] font-bold text-xs tracking-[0.15em] hover:text-[#0D9488] transition-colors flex items-center gap-2">
                View All Articles
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
