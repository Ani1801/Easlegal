import React from 'react';
import { Zap, Users, LayoutTemplate, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/common/SectionDivider';

const WhyEasLegal = () => {
    const points = [
        {
            title: "Founder-First Mindset",
            description: "We understand equity, runways, and valuations. We think like founders, not just lawyers.",
            icon: <Users className="w-6 h-6 text-[#0D9488]" />
        },
        {
            title: "Built for Speed",
            description: "Agile communication. No chasing lawyers for weeks. We move at the pace of your business.",
            icon: <Zap className="w-6 h-6 text-[#0D9488]" />
        },
        {
            title: "Holistic Approach",
            description: "Integrating legal, tax, and business strategy to give you a complete competitive advantage.",
            icon: <LayoutTemplate className="w-6 h-6 text-[#0D9488]" />
        }
    ];

    const trustLogos = [
        { name: "TechStars", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" }, // Placeholder
        { name: "YCombinator", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1024px-Y_Combinator_logo.svg.png" }, // Placeholder
        { name: "Sequoia", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sequoia_Capital_logo.svg/2560px-Sequoia_Capital_logo.svg.png" }, // Placeholder
        { name: "Accel", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" }, // Placeholder
    ];

    return (
        <section className="bg-white py-24 px-6 lg:px-12 overflow-hidden border-y border-ink/5 relative">
            <div className="max-w-7xl mx-auto relative">
                <SectionDivider />

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-2 text-[#B59E7A] font-bold tracking-[0.2em] text-[10px] uppercase font-sans">
                            <div className="h-[1px] w-6 bg-[#B59E7A]" />
                            Why Choose Us
                        </div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-ink leading-[1.1]">
                            Why Founders Choose <br />
                            <span className="text-[#0D9488] italic font-serif">EasLegal.</span>
                        </h2>

                        <p className="text-ink/70 font-sans text-lg leading-relaxed max-w-md">
                            Traditional firms are slow and reactive. We are proactive strategic partners who understand the urgency of your mission.
                        </p>

                        {/* Trust Logos Integration - Replaced "Collaborating" Section */}
                        <div className="pt-8 border-t border-ink/5">
                            <p className="text-sm font-bold text-ink/40 uppercase tracking-widest mb-6">
                                Trusted By Founders Backed By
                            </p>
                            <div className="flex flex-wrap gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                {trustLogos.map((logo, idx) => (
                                    <img key={idx} src={logo.url} alt={logo.name} className="h-6 md:h-8 w-auto object-contain" />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Points Grid */}
                    <div className="grid gap-8">
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="flex gap-6 items-start group"
                            >
                                <div className="p-4 rounded-xl bg-[#F0EEE9] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300 shrink-0 mt-1 shadow-sm">
                                    {React.cloneElement(point.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 group-hover:text-white transition-colors" })}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-display text-ink mb-2 transition-colors">{point.title}</h3>
                                    <p className="text-ink/70 font-sans leading-relaxed text-sm md:text-base">{point.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyEasLegal;
