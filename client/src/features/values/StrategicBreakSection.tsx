'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const StrategicBreakSection = () => {
    return (
        <section className="relative overflow-hidden py-12 bg-[#1A2B2C]">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B2C] to-[#134e4a] opacity-50" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">

                    {/* Content Group */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-2 max-w-2xl"
                    >
                        <span className="text-[10px] font-sans font-bold text-[#0D9488] uppercase tracking-[0.2em]">
                            Your Growth, Protected
                        </span>
                        <h2 className="text-2xl md:text-3xl font-sans font-bold text-white leading-tight">
                            Building the Legal Infrastructure for India's Next Billion-Dollar Founders.
                        </h2>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="shrink-0"
                    >
                        <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#0D9488] text-white font-sans font-bold text-sm rounded-full transition-all duration-300 hover:bg-[#0B7D72] hover:shadow-[0_0_15px_rgba(13,148,136,0.4)] whitespace-nowrap">
                            <span>Scale Your Vision</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default StrategicBreakSection;
