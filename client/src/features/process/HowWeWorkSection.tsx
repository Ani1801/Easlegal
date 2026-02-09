import React from 'react';
import { MessageSquare, FileText, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/common/SectionDivider';

const HowWeWorkSection = () => {
    const steps = [
        {
            id: '01',
            title: 'Consultation',
            description: 'We start with a deep dive into your business model and immediate needs along with long term goals.',
            icon: <MessageSquare className="w-6 h-6 text-white" />
        },
        {
            id: '02',
            title: 'Strategy',
            description: 'We design a custom legal & financial framework tailored to your growth stage.',
            icon: <FileText className="w-6 h-6 text-white" />
        },
        {
            id: '03',
            title: 'Execution',
            description: 'We handle the paperwork, filings, and negotiations while you focus on building.',
            icon: <Rocket className="w-6 h-6 text-white" />
        }
    ];

    return (
        <section className="bg-[#ECEAE5] py-24 px-6 lg:px-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionDivider />

                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 text-[#B59E7A] font-bold tracking-[0.2em] text-[10px] uppercase font-sans mb-4">
                        <div className="h-[1px] w-6 bg-[#B59E7A]" />
                        Process
                        <div className="h-[1px] w-6 bg-[#B59E7A]" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-ink">
                        How We Work
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-ink/10 -z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-full bg-[#0D9488] flex items-center justify-center shadow-lg shadow-[#0D9488]/20 mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-[#ECEAE5]">
                                {step.icon}
                            </div>

                            <h3 className="text-xl font-display font-bold text-ink mb-3 group-hover:text-[#0D9488] transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-ink/70 font-sans leading-relaxed text-sm max-w-xs px-4">
                                {step.description}
                            </p>
                            <span className="absolute -top-6 -right-2 text-[6rem] font-display font-black text-ink/5 -z-10 select-none">
                                {step.id}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWorkSection;
