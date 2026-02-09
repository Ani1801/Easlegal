'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import SectionDivider from '@/components/common/SectionDivider';

const LetsConnectSection = () => {
    return (
        <section id="contact" className="relative bg-[#F0EEE9] py-24 overflow-hidden font-sans border-t border-ink/5 transition-colors duration-500">
            {/* The Needle - Brass Vertical Line */}
            {/* The Needle - Brass Vertical Line */}
            <SectionDivider />

            {/* Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.03] z-0 flex justify-center items-center">
                <span className="text-6xl md:text-[15vw] font-display font-extrabold text-ink leading-none tracking-tighter whitespace-nowrap">
                    EasLegal.
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

                    {/* Left Side: The Invitation (Cols 1-5) */}
                    <div className="lg:col-span-5 space-y-8 pt-4">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black text-ink leading-[1.0] tracking-tight">
                            Let’s build your <span className="text-[#0D9488] italic font-serif">legacy</span> together.
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-8 bg-[#B59E7A]" />
                                <span className="text-[#B59E7A] font-bold tracking-[0.2em] text-xs uppercase">
                                    Based in Gurgaon. Serving Global Founders.
                                </span>
                            </div>

                            <p className="text-ink/60 text-lg leading-relaxed max-w-sm">
                                Ready to scale with confidence? Our team is standing by to structure your next big move.
                            </p>

                            {/* Footer-Lite Links */}
                            <div className="pt-8 flex flex-col gap-3">
                                <a href="mailto:hello@easlegal.com" className="text-sm font-bold text-ink/60 hover:text-[#0D9488] transition-colors">
                                    hello@easlegal.com
                                </a>
                                <a href="#" className="text-sm font-bold text-ink/60 hover:text-[#0D9488] transition-colors">
                                    LinkedIn / EasLegal
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Spacer Column */}
                    <div className="hidden lg:block lg:col-span-1" />

                    {/* Right Side: The Legal Pad Form (Cols 7-12) */}
                    <div className="lg:col-span-6">
                        <div className="bg-transparent p-0">
                            <form className="space-y-12">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-bold uppercase text-[#B59E7A] tracking-[0.2em]">
                                            Name
                                        </label>
                                        <Input
                                            placeholder="Enter your full name"
                                            className="border-0 border-b border-ink/10 bg-transparent px-0 py-4 h-auto rounded-none text-ink placeholder:text-ink/60 placeholder:font-medium focus:border-[#0D9488] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none transition-all duration-300 font-display text-xl"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-bold uppercase text-[#B59E7A] tracking-[0.2em]">
                                            Company
                                        </label>
                                        <Input
                                            placeholder="Company Name"
                                            className="border-0 border-b border-ink/10 bg-transparent px-0 py-4 h-auto rounded-none text-ink placeholder:text-ink/60 placeholder:font-medium focus:border-[#0D9488] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none transition-all duration-300 font-display text-xl"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-bold uppercase text-[#B59E7A] tracking-[0.2em]">
                                            Email
                                        </label>
                                        <Input
                                            type="email"
                                            placeholder="founder@company.com"
                                            className="border-0 border-b border-ink/10 bg-transparent px-0 py-4 h-auto rounded-none text-ink placeholder:text-ink/60 placeholder:font-medium focus:border-[#0D9488] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none transition-all duration-300 font-display text-xl"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-bold uppercase text-[#B59E7A] tracking-[0.2em]">
                                            Phone
                                        </label>
                                        <Input
                                            placeholder="+91 ..."
                                            className="border-0 border-b border-ink/10 bg-transparent px-0 py-4 h-auto rounded-none text-ink placeholder:text-ink/60 placeholder:font-medium focus:border-[#0D9488] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none transition-all duration-300 font-display text-xl"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-[10px] font-bold uppercase text-[#B59E7A] tracking-[0.2em]">
                                        Your Challenge
                                    </label>
                                    <Textarea
                                        placeholder="Tell us about your current legal or financial goals..."
                                        className="border-0 border-b border-ink/10 bg-transparent px-0 py-4 min-h-[100px] rounded-none text-ink placeholder:text-ink/60 placeholder:font-medium focus:border-[#0D9488] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none transition-all duration-300 font-display text-xl resize-none"
                                    />
                                </div>

                                <div className="pt-6">
                                    <Button className="group bg-[#0D9488] text-white hover:bg-[#0D9488]/90 transition-all duration-300 shadow-xl shadow-[#0D9488]/20 hover:shadow-2xl hover:shadow-[#0D9488]/30 rounded-full h-16 px-10 text-lg font-bold w-full md:w-auto flex items-center gap-2 font-sans">
                                        Start the Conversation
                                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div >
        </section >
    );
};

export default LetsConnectSection;
