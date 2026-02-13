import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Mail } from 'lucide-react';

const Careers = () => {
    const openings = [
        {
            title: "Associate (Trademark Litigation)",
            type: "Full-time",
            location: "On-site"
        },
        {
            title: "Associate (Copyright Litigation)",
            type: "Full-time",
            location: "On-site"
        },
        {
            title: "Legal Intern",
            type: "Internship",
            location: "On-site"
        }
    ];

    return (
        <main className="font-sans text-[#1F1F1F]">
            {/* 1. Hero Section */}
            <section className="relative py-20 lg:py-32 px-6 lg:px-12 bg-[#F0EEE9] border-b border-[#1F1F1F]/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="block text-[#0D9488] uppercase tracking-widest text-xs font-bold mb-6">
                            CAREERS AT EASLEGAL
                        </span>
                        <h1 className="font-playfair font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 text-[#1F1F1F]">
                            A Unique Opportunity <br className="hidden md:block" />
                            to Redefine Excellence.
                        </h1>
                        <div className="h-px w-24 bg-[#0D9488] mx-auto mb-8"></div>
                        <p className="font-sans text-lg md:text-xl text-[#1F1F1F]/70 leading-relaxed max-w-3xl mx-auto">
                            Working with EasLegal Partners represents dedication and keenness towards excellence. Every case we handle is an opportunity for us to deliver the best of intentions and potentials.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Culture & Philosophy (Dark Teal) */}
            <section className="py-24 px-6 lg:px-12 bg-[#1A2B2C] text-[#F0EEE9] flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-12">
                        <h2 className="font-playfair italic text-3xl md:text-5xl leading-tight opacity-90 mb-8">
                            "And there was a fish pond a large one full of the fattest goldfish you ever saw and they were tame. They came to the surface of the water and took pieces of bread from our hands."
                        </h2>
                        <p className="text-[#0D9488] uppercase tracking-widest text-sm font-bold">— Charles Bukowsky</p>
                    </div>
                    <div className="h-px w-full bg-white/10 my-10"></div>
                    <p className="text-lg md:text-xl font-light text-[#F0EEE9]/80 max-w-2xl mx-auto">
                        We have a culture where we are incredibly self critical, we don’t get comfortable with our success.
                    </p>
                </div>
            </section>

            {/* 3. Redefine Yourself (White) */}
            <section className="py-20 px-6 lg:px-12 bg-white border-y border-neutral-200">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-5 sticky top-24">
                        <span className="block text-[#0D9488] uppercase tracking-widest text-xs font-bold mb-4">
                            GROWTH & DEVELOPMENT
                        </span>
                        <h2 className="text-4xl font-playfair font-medium text-[#1F1F1F] mb-6">Redefine Yourself</h2>
                        <p className="text-lg text-[#1F1F1F]/70 leading-relaxed max-w-xl">
                            For us the growth of the Firm is a direct result of individual development.
                        </p>
                    </div>
                    <div className="lg:col-span-7">
                        <p className="text-lg text-[#1F1F1F]/80 leading-relaxed mb-8">
                            While at EasLegal Partners, you will find yourself in a unique position, often working on valuable transactions and precedent-setting cases. We take pride in being updated with the latest developments in Indian law.
                        </p>
                        <p className="text-lg text-[#1F1F1F]/80 leading-relaxed mb-8">
                            We work hard to ensure that our lawyers consistently enhance their level of expertise. We believe in encouraging the team to develop innovative thinking and push beyond the bars of client’s expectations with dedication.
                        </p>
                        <p className="text-lg font-medium text-[#1F1F1F] border-l-4 border-[#0D9488] pl-6 py-2 bg-[#F0EEE9]/50 italic">
                            If you are seeking to work with a team where hard work and acumen are appreciated, acknowledged and encouraged, EasLegal Partners is the team where your search ends!
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Current Openings & Application (Cloud Dancer) */}
            <section className="py-20 px-6 lg:px-12 bg-[#F0EEE9]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="block text-[#0D9488] uppercase tracking-widest text-xs font-bold mb-4">
                            OPPORTUNITIES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1F1F1F] mb-4">Current Openings</h2>
                        <p className="text-lg text-[#1F1F1F]/70 max-w-2xl mx-auto">
                            Maximise your potential! Join a team of esteemed professionals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-20">
                        {openings.map((job, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-xl border border-[#1F1F1F]/5 shadow-sm hover:shadow-lg hover:border-[#0D9488]/30 transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 bg-[#0D9488]/10 rounded-full flex items-center justify-center text-[#0D9488] mb-6 group-hover:bg-[#0D9488] group-hover:text-white transition-colors">
                                    <Briefcase size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">{job.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-[#1F1F1F]/60">
                                    <span>{job.type}</span>
                                    <span className="w-1 h-1 bg-[#1F1F1F]/20 rounded-full"></span>
                                    <span>{job.location}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Application Process */}
                    <div className="bg-[#1A2B2C] rounded-2xl p-8 md:p-12 text-[#F0EEE9] text-center max-w-3xl mx-auto relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0D9488] via-white/20 to-[#0D9488] opacity-30"></div>
                        <h3 className="font-playfair text-2xl md:text-3xl mb-6">Ready to Apply?</h3>
                        <p className="text-white/70 mb-8 leading-relaxed">
                            Kindly send us a detailed resume with remuneration expectations. If selected, the process includes a pre-screening form, telephonic interview, and technical evaluation.
                        </p>
                        <a
                            href="mailto:careers@easlegal.com"
                            className="inline-flex items-center gap-3 bg-[#0D9488] hover:bg-[#0F766E] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:-translate-y-1 shadow-lg hover:shadow-[#0D9488]/20"
                        >
                            <Mail size={18} /> Send Application
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Careers;
