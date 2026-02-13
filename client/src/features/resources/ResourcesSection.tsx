'use client';

import React, { useState } from 'react';
import { ArrowRight, Clock, User, X, Search, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionDivider from '@/components/common/SectionDivider';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
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
  const [selectedPost, setSelectedPost] = useState<Resource | null>(null);
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
                className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-[3/2] w-full"
                onClick={() => setSelectedPost(mainFeatured)}
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
              <div className="flex flex-col justify-center">
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
                  onClick={() => setSelectedPost(mainFeatured)}
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
                  <span>{mainFeatured.readTime}</span>
                </motion.div>
              </div>
            )}
          </div>
        </div>

        {/* Latest Blogs - Magazine Style */}
        <div className="border-t border-[#1F1F1F]/10 pt-12">

          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <h3 className="text-3xl font-sans font-bold text-[#1F1F1F] mb-4">Latest Blogs</h3>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-[#1F1F1F]/10 w-full md:w-80">
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
                      ? "bg-[#0D9488] text-white"
                      : "bg-[#F0EEE9] text-[#1F1F1F]/60 hover:bg-[#1F1F1F]/5"
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
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group grid grid-cols-1 md:grid-cols-[150px_1fr_auto] gap-6 md:gap-8 items-center py-8 border-b border-[#1F1F1F]/5 cursor-pointer hover:bg-[#1F1F1F]/[0.02] transition-colors"
                onClick={() => setSelectedPost(post)}
              >
                {/* 1. Thumbnail */}
                <div className="w-full md:w-[150px] aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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
                  <h4 className="text-xl md:text-2xl font-bold text-[#1F1F1F] group-hover:text-[#0D9488] group-hover:translate-x-2 transition-all duration-300 font-sans leading-tight">
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
                  <div className="w-8 h-8 rounded-full border border-[#1F1F1F]/10 flex items-center justify-center group-hover:bg-[#0D9488] group-hover:border-[#0D9488] group-hover:text-white transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.article>
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
      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="sm:max-w-6xl w-full h-[90vh] md:h-auto md:max-h-[90vh] overflow-y-auto p-0 gap-0 bg-white border-none rounded-2xl shadow-2xl">
          <div className="relative">
            {/* Close Button - Custom positioned */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute right-4 top-4 z-50 p-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Top Image Banner */}
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <img
                src={selectedPost?.image}
                alt={selectedPost?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-white uppercase tracking-wider bg-[#0D9488] rounded-full">
                  {selectedPost?.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                  {selectedPost?.title}
                </h2>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-10 lg:p-12">
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-100 text-sm font-bold text-gray-500">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-[#0D9488]" />
                  <span className="text-gray-900">{selectedPost?.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#0D9488]" />
                  <span>{selectedPost?.readTime}</span>
                </div>
                <span>{selectedPost?.date}</span>
              </div>

              {/* Actual Content */}
              <div className="prose prose-lg prose-headings:font-bold prose-headings:text-ink prose-p:text-ink/80 prose-a:text-[#0D9488] max-w-none">
                {selectedPost?.content || (
                  <p className="text-gray-500 italic">
                    Full content for "{selectedPost?.title}" is coming soon.
                    This is a preview of the reading experience.
                  </p>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
