import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const OurFirm = () => {
    // Section 3: Value Pillars
    const valuePillars = [
        { title: 'Legal Structuring', desc: 'Building robust entity frameworks for scalability.' },
        { title: 'Regulatory Navigation', desc: 'Proactive compliance across all jurisdictions.' },
        { title: 'Transaction Advisory', desc: 'Strategic guidance for fundraising and M&A.' },
        { title: 'Compliance & Governance', desc: 'Ensuring long-term operational integrity.' },
    ];

    // Section 5: Process Steps
    const processSteps = [
        { number: '01', title: 'Diagnose', desc: 'We assess your current structure and identify gaps.' },
        { number: '02', title: 'Structure', desc: 'We design a tailored legal and financial framework.' },
        { number: '03', title: 'Execute', desc: 'We implement the strategy with precision.' },
        { number: '04', title: 'Safeguard', desc: 'We provide ongoing monitoring and compliance.' },
    ];

    return (
        <main className="font-sans text-[#1F1F1F]">

            {/* 1️⃣ SECTION 1 — Brand Statement Hero (Cloud Dancer #F0EEE9) */}
            <section className="relative py-20 lg:py-32 px-6 lg:px-12 bg-[#F0EEE9] border-b border-[#1F1F1F]/5">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="block text-[#0D9488] uppercase tracking-widest text-xs font-bold mb-6">
                            EASLEGAL PARTNERS
                        </span>
                        <h1 className="font-playfair font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 text-[#1F1F1F]">
                            Strategic Legal & <br className="hidden md:block" />
                            Financial Architecture <br className="hidden md:block" />
                            for Founders.
                        </h1>
                        <div className="h-px w-24 bg-[#0D9488] mx-auto mb-8"></div>
                        <p className="font-sans text-lg md:text-xl text-[#1F1F1F]/70 leading-relaxed max-w-2xl mx-auto">
                            We exist to provide structural clarity in moments that define business futures.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2️⃣ SECTION 2 — The Founding Intent (Pure White #FFFFFF) */}
            <section className="py-20 px-6 lg:px-12 bg-white border-y border-neutral-200">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                    {/* Left: Heading */}
                    <div className="lg:col-span-4 flex flex-col items-start sticky top-24">
                        <div className="w-1 h-12 bg-[#0D9488] mb-6"></div>
                        <h2 className="text-3xl font-playfair font-medium text-[#1F1F1F]">Why We <br />Were Founded</h2>
                    </div>
                    {/* Right: Narrative (Compact max-w-3xl) */}
                    <div className="lg:col-span-8">
                        <p className="text-lg md:text-xl font-light leading-relaxed text-[#1F1F1F]/80 max-w-3xl">
                            The startup ecosystem is filled with noise—generic advice, fragmented services, and short-term fixes.
                            <br /><br />
                            EasLegal was born from a refusal to accept the status quo. We saw founders building world-changing ideas on shaky foundations. Our intent is singular: to bring the rigor of corporate law and the agility of startup finance into one cohesive architectural practice. We don't just solve problems; we build systems that prevent them.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3️⃣ SECTION 3 — What We Actually Do (Cloud Dancer #F0EEE9) */}
            <section className="py-20 px-6 lg:px-12 bg-[#F0EEE9] border-b border-[#1F1F1F]/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <span className="block text-[#0D9488] uppercase tracking-widest text-xs font-bold mb-4">
                            Capabilities
                        </span>
                        <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1F1F1F]">Where We Add Structural Value</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valuePillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="group relative p-8 bg-white/50 backdrop-blur-sm rounded-xl border border-[#1F1F1F]/5 hover:border-[#0D9488]/30 transition-all duration-300"
                            >
                                <div className="mb-6 text-[#0D9488]">
                                    <CheckCircle2 size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold font-sans text-[#1F1F1F] mb-3 group-hover:text-[#0D9488] transition-colors">{pillar.title}</h3>
                                <p className="text-[#1F1F1F]/70 text-sm leading-relaxed">{pillar.desc}</p>
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0D9488] group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ SECTION 4 — Operating Philosophy (Dark Teal #1A2B2C) */}
            <section className="py-24 px-6 lg:px-12 bg-[#1A2B2C] text-[#F0EEE9] flex items-center justify-center">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="font-playfair italic text-3xl md:text-5xl lg:text-6xl leading-tight opacity-90">
                        "Precision over volume. <br />
                        <span className="text-[#0D9488]">Strategy</span> over noise."
                    </h2>
                </div>
            </section>

            {/* 5️⃣ SECTION 5 — How We Work (Pure White #FFFFFF) */}
            <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#1F1F1F]/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <span className="block text-[#0D9488] uppercase tracking-widest text-xs font-bold mb-4">
                            Methodology
                        </span>
                        <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1F1F1F]">Our Approach</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-[#1F1F1F]/10 -z-10"></div>

                        {processSteps.map((step, index) => (
                            <div key={index} className="relative bg-white pt-6 md:pt-0">
                                <div className="w-20 h-20 bg-white border border-[#1F1F1F]/10 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 relative z-10 shadow-sm">
                                    <span className="text-lg font-bold text-[#0D9488] font-mono">{step.number}</span>
                                </div>
                                <h3 className="text-lg font-bold font-sans text-[#1F1F1F] mb-3 text-center md:text-left">{step.title}</h3>
                                <p className="text-[#1F1F1F]/70 text-sm leading-relaxed text-center md:text-left max-w-xs mx-auto md:mx-0">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ SECTION 6 — Institutional Collaboration (Cloud Dancer #F0EEE9) */}
            <section className="py-20 px-6 lg:px-12 bg-[#F0EEE9]">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-playfair font-medium text-[#1F1F1F] mb-6">An Integrated Advisory Ecosystem</h2>
                    <p className="text-lg text-[#1F1F1F]/70 leading-relaxed max-w-2xl mx-auto">
                        We work alongside Chartered Accountants, Company Secretaries, and financial professionals to create a unified support system for your growth.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-60">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="group flex justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
                            <div className="h-16 w-32 bg-[#1F1F1F]/5 rounded flex items-center justify-center group-hover:bg-[#0D9488]/5 transition-colors">
                                <span className="text-xs font-bold text-[#1F1F1F]/30 group-hover:text-[#0D9488]">PARTNER {item}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7️⃣ SECTION 7 — Closing CTA */}
            <section className="py-24 px-6 lg:px-12 bg-[#141414] text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-playfair text-3xl md:text-5xl mb-8 leading-tight">
                        Build With Legal Certainty.
                    </h2>
                    <p className="text-lg text-white/60 mb-10 font-light max-w-xl mx-auto">
                        Connect with us to structure your vision for the long term.
                    </p>
                    <button className="bg-[#0D9488] hover:bg-[#0F766E] text-white transition-all duration-300 rounded-full h-14 px-10 text-sm font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 mx-auto">
                        Begin Consultation <ArrowRight size={18} />
                    </button>
                </div>
            </section>

        </main>
    );
};

export default OurFirm;
