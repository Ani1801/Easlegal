'use client';

import React, { useState } from 'react';
import { ArrowRight, Clock, Search, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionDivider from '@/components/common/SectionDivider';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { blogs } from '@/data/blogs'; // Import centralized data

// Interface matching the local component needs, mapped from blogs.ts
interface Resource {
  id: string; // Changed to string to match blogs.ts
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  isFeatured?: boolean;
  content?: React.ReactNode;
}

export default function Resources() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Map centralized blogs data to local Resource format
  const resources: Resource[] = blogs.map((blog, index) => ({
    id: blog.id,
    title: blog.title,
    excerpt: blog.description,
    category: blog.category.split(',')[0], // Take the first category
    readTime: '5 min read', // Placeholder as it's not in blogs.ts yet
    author: blog.author,
    date: blog.date,
    image: blog.imageUrl,
    isFeatured: index === 0, // First item is featured
    content: <div dangerouslySetInnerHTML={{ __html: blog.content }} />,
  }));

  const mainFeatured = resources[0];
  // Show remaining items in the grid (slice(1) takes everything after the first one)
  const gridPosts = resources.slice(1);

  const filteredPosts = gridPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="resources" className="bg-[#F0EEE9] relative py-20 lg:py-24 px-6 lg:px-12 overflow-hidden border-b border-[#1F1F1F]/5 font-sans">
      <SectionDivider />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Header Section */}
        <div className="mb-20 lg:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#0D9488]" />
            <span className="text-[10px] font-bold text-[#0D9488] uppercase tracking-widest">
              Resources
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left: Hero Image */}
            {mainFeatured && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-[3/2] w-full shadow-2xl z-10"
                onClick={() => navigate(`/blog/${mainFeatured.id}`)}
              >
                <img
                  src={mainFeatured.image}
                  alt={mainFeatured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            )}

            {/* Right: Hero Text */}
            {mainFeatured && (
              <div className="flex gap-8 lg:-ml-[60px] relative z-20 items-center">
                {/* Vertical Metadata Column */}
                <div className="hidden md:flex flex-col gap-8 items-center py-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F1F1F]/40 [writing-mode:vertical-rl] rotate-180 flex items-center gap-2">
                    Expert Verified <CheckCircle2 size={10} className="text-[#0D9488]" />
                  </span>
                  <div className="w-px h-12 bg-[#1F1F1F]/10" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1F1F1F]/40 [writing-mode:vertical-rl] rotate-180 flex items-center gap-2">
                    5 Min Read <Clock size={10} />
                  </span>
                </div>

                <div className="flex flex-col justify-center bg-[#F0EEE9]/80 backdrop-blur-sm p-6 rounded-2xl">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-3 py-1 mb-6 text-xs font-bold text-[#0D9488] uppercase tracking-widest border border-[#0D9488]/20 rounded-full w-fit"
                  >
                    {mainFeatured.category}
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl font-serif italic font-medium text-[#1F1F1F] leading-[1.1] tracking-tight mb-8 cursor-pointer hover:text-[#0D9488] transition-colors"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                    onClick={() => navigate(`/blog/${mainFeatured.id}`)}
                  >
                    {mainFeatured.title}
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[#1F1F1F]/60"
                  >
                    <span>{mainFeatured.date}</span>
                    <div className="h-px w-8 bg-[#1F1F1F]/20" />
                    <span>{mainFeatured.author}</span>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Latest Blogs - Magazine Style */}
        <div className="border-t border-[#1F1F1F]/10 pt-12">

          {/* Header & Controls */}
          {/* Header & Controls - Sticky Bar */}
          <div className="sticky top-20 z-30 backdrop-blur-md bg-[#F0EEE9]/80 -mx-6 px-6 py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8 transition-all duration-300 border-b border-[#1F1F1F]/5 shadow-sm">
            <div>
              <h3 className="text-3xl font-sans font-bold text-[#1F1F1F] mb-4 hidden md:block">Latest Blogs</h3>
              <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-[#1F1F1F]/10 w-full md:w-80">
                <Search size={16} className="text-[#1F1F1F]/40" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="bg-transparent border-none outline-none text-sm w-full font-sans"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {['All', 'Corporate', 'Startups', 'Technology', 'Intellectual Property', 'Copyrights'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all",
                    selectedCategory === cat
                      ? "bg-[#0D9488] text-white shadow-lg"
                      : "bg-white/50 text-[#1F1F1F]/60 hover:bg-white hover:shadow-sm"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Ledger List */}
          <div className="flex flex-col">
            {filteredPosts.map((post, index) => (
              <React.Fragment key={post.id}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group grid grid-cols-1 md:grid-cols-[150px_1fr_auto] gap-6 md:gap-8 items-center py-8 cursor-pointer hover:bg-white transition-all duration-300 rounded-xl px-4 md:-mx-4"
                  onClick={() => navigate(`/blog/${post.id}`)}
                >
                  {/* 1. Thumbnail */}
                  <div className="w-full md:w-[150px] aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* 2. Content */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-[#0D9488] uppercase tracking-widest font-sans">
                        {post.category}
                      </span>
                      <div className="h-px w-4 bg-[#1F1F1F]/10" />
                      <span className="text-[10px] font-bold text-[#1F1F1F]/40 uppercase tracking-widest font-sans">
                        {post.date}
                      </span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-[#1F1F1F] group-hover:text-[#0D9488] transition-colors duration-300 font-sans leading-tight">
                      {post.title}
                    </h4>
                  </div>

                  {/* 3. Metadata / Action */}
                  <div className="flex items-center gap-6 md:justify-end">
                    <div className="hidden md:flex flex-col items-end gap-1">
                      <span className="text-[10px] font-bold text-[#1F1F1F]/40 uppercase tracking-widest flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                      <span className="text-[10px] font-bold text-[#0D9488] uppercase tracking-widest flex items-center gap-1">
                        <CheckCircle2 size={12} /> Expert Verified
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold text-[#0D9488] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read Article
                      </span>
                      <div className="w-8 h-8 rounded-full border border-[#1F1F1F]/10 flex items-center justify-center group-hover:bg-[#0D9488] group-hover:border-[#0D9488] group-hover:text-white transition-all transform group-hover:translate-x-2">
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.article>
                {(index + 1) % 3 === 0 && index !== filteredPosts.length - 1 && (
                  <div className="w-full h-px bg-[#1F1F1F]/5 my-2" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="md:hidden flex justify-center mt-12">
            <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#1F1F1F] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#0D9488] transition-colors">
              View Archive
            </button>
          </div>
        </div>

      </div>

      {/* Reading Modal */}

    </section>
  );
}
