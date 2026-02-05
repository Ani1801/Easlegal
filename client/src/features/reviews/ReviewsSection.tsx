'use client';

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FounderStory {
  id: number;
  founderName: string;
  role: string;
  company: string;
  quote: string;
  videoThumbnail: string;
  videoUrl: string; // Embed URL or video file path
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
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    },
    {
      id: 2,
      founderName: 'Amit Verma',
      role: 'VP of Marketing',
      company: 'FINASTRA',
      quote: '"It\'s a two-code platform that helps us automate processes. We reduced our legal turnaround time by 60% within the first month."',
      videoThumbnail: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    },
    {
      id: 3,
      founderName: 'Emma Davis',
      role: 'CTO/Founder',
      company: 'TechVenture',
      quote: '"The most founder-friendly legal team I\'ve worked with. They understand tech, equity, and the speed at which we need to move."',
      videoThumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
    }
  ];

  const [activeStory, setActiveStory] = useState<FounderStory>(stories[0]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="reviews" className="relative bg-white/50 py-20 overflow-hidden border-y border-ink/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 h-full flex flex-col justify-center">

        {/* Section Heading - Compact */}
        <div className="mb-6 shrink-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tighter text-ink leading-[1.0]">
            The Founders <br />
            <span className="italic text-foreground/70 font-serif">Behind the Success.</span>
          </h2>
        </div>

        {/* Cinematic Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 min-h-0">

          {/* Left: The Cinematic Video Thumbnail (Cols 1-7) */}
          <div className="lg:col-span-7 relative group cursor-pointer h-full flex items-center justify-center p-2" onClick={openModal}>
            <div className="relative overflow-hidden rounded-[1.5rem] shadow-2xl shadow-ink/10 w-full aspect-video lg:h-auto lg:max-h-[55vh] transition-transform duration-700 hover:scale-[1.01]">
              <img
                src={activeStory.videoThumbnail}
                alt={activeStory.founderName}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0D9488] rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(13,148,136,0.5)]">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Editorial Story (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full py-2">

            <div className="space-y-6">
              {/* The Pull Quote */}
              <blockquote className="text-2xl lg:text-3xl font-display italic leading-tight text-ink line-clamp-5">
                {activeStory.quote}
              </blockquote>

              {/* Founder Details */}
              <div className="space-y-1 border-l-2 border-[#C9A46B] pl-4 py-1">
                <h4 className="text-lg font-bold text-ink tracking-tight">
                  {activeStory.founderName}
                </h4>
                <p className="text-base text-[#C9A46B] font-medium font-sans">
                  {activeStory.role}, {activeStory.company}
                </p>
              </div>
            </div>

            {/* Story Switcher List */}
            <div className="mt-8 pt-6 border-t border-ink/5">
              <p className="text-xs font-bold text-ink/40 tracking-widest uppercase mb-4">More Stories</p>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {stories.map((story) => (
                  <div
                    key={story.id}
                    onClick={() => setActiveStory(story)}
                    className={cn(
                      "relative w-24 h-16 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 shrink-0",
                      activeStory.id === story.id
                        ? "ring-2 ring-[#0D9488] ring-offset-2 ring-offset-[#F0EEE9] opacity-100"
                        : "opacity-50 hover:opacity-80 grayscale"
                    )}
                  >
                    <img src={story.videoThumbnail} alt={story.founderName} className="w-full h-full object-cover" />
                    {/* Small Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="p-1 rounded-full bg-white/20 backdrop-blur-[1px]">
                        <Play size={12} className="text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Video Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-in fade-in duration-300">
          {/* Backdrop Blur */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={closeModal}
          />

          {/* Modal Content */}
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
