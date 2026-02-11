'use client';

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionDivider from '@/components/common/SectionDivider';
import { motion, AnimatePresence } from 'framer-motion';

interface FounderStory {
  id: number;
  founderName: string;
  role: string;
  company: string;
  quote: string;
  videoThumbnail: string;
  videoUrl: string;
}

const ReviewsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stories: FounderStory[] = [
    {
      id: 1,
      founderName: 'Sarah Johnson',
      role: 'Founder & CEO',
      company: 'DIGGS',
      quote: '"EasLegal didn’t just handle our compliance; they became the strategic backbone that allowed us to scale from Seed to Series A without a single regulatory hiccup."',
      videoThumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200',
      videoUrl: '',
    },
    {
      id: 2,
      founderName: 'Amit Verma',
      role: 'VP of Marketing',
      company: 'FINASTRA',
      quote: '"It\'s a two-code platform that helps us automate processes. We reduced our legal turnaround time by 60% within the first month."',
      videoThumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200',
      videoUrl: '',
    },
    {
      id: 3,
      founderName: 'Emma Davis',
      role: 'CTO/Founder',
      company: 'TechVenture',
      quote: '"The most founder-friendly legal team I\'ve worked with. They understand tech, equity, and the speed at which we need to move."',
      videoThumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200',
      videoUrl: '',
    },
  ];

  const [activeStory, setActiveStory] = useState<FounderStory>(stories[0]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="reviews" className="relative bg-[#F0EEE9] py-24 overflow-hidden border-y border-[#1F1F1F]/5">
      <SectionDivider />

      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[#0D9488]/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">

        {/* Section Heading - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 shrink-0"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#1F1F1F] leading-[1.0]">
            The Founders <br />
            <span className="italic text-[#1F1F1F]/70 font-serif">Behind the Success.</span>
          </h2>
        </motion.div>

        {/* 2-Column Layout: Video Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-16 items-start">

          {/* Col 1-7: The Hero Video Container */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-[#1F1F1F]/10 group cursor-pointer"
                onClick={openModal}
              >
                <img
                  src={activeStory.videoThumbnail}
                  alt={activeStory.founderName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0D9488] group-hover:border-transparent">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Col 8-12: The Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Quote */}
                <blockquote className="text-2xl lg:text-3xl font-serif italic leading-relaxed text-[#1F1F1F]">
                  {activeStory.quote}
                </blockquote>

                {/* Founder Credentials */}
                <div className="border-l-2 border-[#0D9488] pl-6 py-1">
                  <h4 className="text-xl font-bold text-[#1F1F1F] font-sans">
                    {activeStory.founderName}
                  </h4>
                  <p className="text-sm font-bold text-[#0D9488] uppercase tracking-wider font-sans mt-1">
                    {activeStory.role}, {activeStory.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Interactive Thumbnails */}
            <div className="mt-12">
              <p className="text-xs font-bold text-[#1F1F1F]/40 tracking-widest uppercase mb-4 font-sans">More Stories</p>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {stories.map((story) => (
                  <button
                    key={story.id}
                    onClick={() => setActiveStory(story)}
                    className={cn(
                      "relative w-32 aspect-video rounded-lg overflow-hidden transition-all duration-300 shrink-0",
                      activeStory.id === story.id
                        ? "ring-2 ring-[#0D9488] ring-offset-2 ring-offset-[#F0EEE9] opacity-100"
                        : "opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                    )}
                  >
                    <img src={story.videoThumbnail} alt={story.founderName} className="w-full h-full object-cover" />
                    {/* Small Play Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                        <Play size={10} className="text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          />
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-colors"
            >
              <X size={24} />
            </button>
            <iframe
              width="100%"
              height="100%"
              src={activeStory.videoUrl}
              title="Founder Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
};

export default ReviewsSection;
