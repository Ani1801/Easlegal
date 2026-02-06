import React from 'react';
import { Shield, Lightbulb, Users, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const ValueSection = () => {
  const values = [
    {
      title: "Commitment to Justice",
      description: "Upholding the highest legal standards to secure a just and robust future for your business.",
      icon: <Shield className="w-5 h-5" />,
      tag: "CORE VALUE"
    },
    {
      title: "Innovative Solutions",
      description: "Leveraging modern legal tech to solve complex startup challenges with surgical precision.",
      icon: <Lightbulb className="w-5 h-5" />,
      tag: "STRATEGY"
    },
    {
      title: "Founder-First Focus",
      description: "Your vision is our blueprint. We tailor every strategy to your unique scaling goals.",
      icon: <Users className="w-5 h-5" />,
      tag: "APPROACH"
    },
    {
      title: "Industry Excellence",
      description: "A track record of driving compliance and growth for high-stakes tech organizations.",
      icon: <Trophy className="w-5 h-5" />,
      tag: "REPUTATION"
    }
  ];

  return (
    <section className="bg-white/50 py-24 px-6 overflow-hidden border-y border-[#141414]/5">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#B59E7A] font-bold tracking-[0.2em] text-sm uppercase">
              <div className="h-[1px] w-6 bg-[#B59E7A]" />
              Differentiation
            </div>
            <h2 className="text-5xl md:text-6xl font-display text-[#141414] leading-tight tracking-tighter">
              Why founders trust <br />
              <span className="text-[#0D9488] italic font-serif">EasLegal</span> above all.
            </h2>
          </div>
          <p className="text-[#141414]/60 font-sans text-xl lg:max-w-md leading-relaxed">
            We bridge the gap between complex legal frameworks and the fast-paced
            execution required by modern tech startups.
          </p>
        </div>

        {/* The Clean Bento Grid - Ghost Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white/20 border border-[#141414]/5 p-10 flex flex-col justify-start min-h-[320px] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0D9488]/5 rounded-2xl shadow-sm"
            >
              <div className="relative z-10 space-y-6">
                <span className="text-xs font-bold tracking-[0.15em] text-[#141414]/40 uppercase block">
                  {value.tag}
                </span>

                <div className="text-[#0D9488] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  {value.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-display font-bold text-[#141414] leading-snug">
                    {value.title}
                  </h3>
                  <p className="text-[#141414]/60 font-sans leading-relaxed text-sm">
                    <span className="font-bold text-[#141414]/80">{value.description.split(" ")[0]}</span> {value.description.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ValueSection;
