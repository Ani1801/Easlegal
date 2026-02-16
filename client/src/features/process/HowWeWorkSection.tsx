import React from 'react';
import { Search, LayoutTemplate, Rocket, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/common/SectionDivider';

const HowWeWorkSection = () => {
    const steps = [
        {
            id: '01',
            title: 'Diagnose',
            description: 'We deep dive into your business model, identifying immediate needs and long-term goals.',
            icon: <Search className="w-6 h-6" />
        },
        {
            id: '02',
            title: 'Structure',
            description: 'We design a custom legal & financial framework tailored specifically to your growth stage.',
            icon: <LayoutTemplate className="w-6 h-6" />
        },
        {
            id: '03',
            title: 'Execute',
            description: 'We handle the paperwork, filings, and negotiations while you focus on building.',
            icon: <Rocket className="w-6 h-6" />
        },
        {
            id: '04',
            title: 'Safeguard',
            description: 'We implement robust compliance and protection to secure your business future.',
            icon: <ShieldCheck className="w-6 h-6" />
        }
    ];

    return (
        <section className="bg-[#F0EEE9] py-24 px-6 lg:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionDivider />

                <div className="text-center mb-20">
                    <div className="flex items-center justify-center gap-2 text-[#B59E7A] font-bold tracking-[0.2em] text-[10px] uppercase font-sans mb-4">
                        <div className="h-[1px] w-6 bg-[#B59E7A]" />
                        Process
                        <div className="h-[1px] w-6 bg-[#B59E7A]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-ink">
                        Our Approach
                    </h2>
                </div>

                <div className="relative">
                    {/* Path of Growth - Connector Line (Desktop) */}
                    {/* Positioned to pass through the center of the circles (h-16 = 64px, center at 32px) */}
                    <div className="hidden lg:block absolute top-[2rem] left-0 w-full h-[1px] bg-neutral-200 -z-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative">
                        {/* Vertical Connector Line (Mobile) */}
                        <div className="lg:hidden absolute top-8 bottom-8 left-8 w-[1px] bg-neutral-200 -z-0" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative z-10 flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group"
                            >
                                {/* Circle Container */}
                                <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center">
                                    {/* Triple Ripple Effect (Animated on Hover) */}
                                    {/* Ring 3 (Outermost) - Rendered first to be behind others if needed, though transparent centers make order less critical for borders. 
                                        Actually, strictly if we want inner rings to semantically sit 'inside', proper z-indexing or order helps validation.
                                        Let's keep the expanding order but make borders thicker.
                                    */}
                                    <div className="absolute inset-0 rounded-full border-2 border-teal-500/40 opacity-0 group-hover:opacity-100 group-hover:scale-[1.4] transition-all duration-700 ease-out z-0" />
                                    <div className="absolute inset-0 rounded-full border-2 border-teal-500/30 opacity-0 group-hover:opacity-100 group-hover:scale-[1.8] transition-all duration-700 ease-out delay-75 z-0" />
                                    <div className="absolute inset-0 rounded-full border-2 border-teal-500/20 opacity-0 group-hover:opacity-100 group-hover:scale-[2.2] transition-all duration-700 ease-out delay-150 z-0 backdrop-blur-[2px]" />

                                    {/* Main Circle */}
                                    <div className="w-16 h-16 rounded-full bg-white text-[#0D9488] flex items-center justify-center shadow-[0_0_15px_rgba(13,148,136,0.15)] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300 relative z-10 border-2 border-transparent group-hover:border-teal-400/50">
                                        <span className="text-xl font-bold font-sans">{step.id}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="ml-8 lg:ml-0 lg:mt-8 transform group-hover:-translate-y-2 group-hover:scale-[1.02] transition-transform duration-500 origin-left lg:origin-center bg-[#F0EEE9] lg:bg-transparent p-2 lg:p-0 rounded-lg lg:rounded-none">
                                    <h3 className="text-xl font-display font-bold text-ink mb-3 group-hover:text-[#0D9488] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-ink/70 font-sans font-medium leading-relaxed text-sm max-w-xs">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWorkSection;
