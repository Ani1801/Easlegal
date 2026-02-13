import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/data/services';

const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const service = id ? servicesData[id] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F0EEE9]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-ink mb-4">Service Not Found</h2>
                    <Link to="/" className="text-[#0D9488] hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="font-sans text-[#1F1F1F] bg-[#F0EEE9] min-h-screen">
            {/* 1. Hero Section */}
            <section className="relative py-20 lg:py-32 px-6 lg:px-12 border-b border-[#1F1F1F]/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="block text-[#0D9488] uppercase tracking-widest text-xs font-bold mb-6">
                            SERVICE EXPERTISE
                        </span>
                        <h1 className="font-playfair font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 text-[#1F1F1F]">
                            {service.title}
                        </h1>
                        <div className="h-px w-24 bg-[#0D9488] mx-auto mb-8"></div>
                        <p className="font-sans text-lg md:text-xl text-[#1F1F1F]/70 leading-relaxed max-w-2xl mx-auto">
                            {service.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Deep Dive Section */}
            <section className="py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Column: What We Provide */}
                    <div className="lg:col-span-7">
                        <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#1F1F1F] mb-6">What We Provide</h2>
                        <p className="text-lg text-[#1F1F1F]/80 leading-relaxed mb-10">
                            {service.details}
                        </p>

                        <h3 className="text-lg font-bold text-[#1F1F1F] mb-6 uppercase tracking-wider">Key Deliverables</h3>
                        <ul className="space-y-4">
                            {service.deliverables.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0D9488] shrink-0" />
                                    <span className="text-[#1F1F1F]/80">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Structural Value Grid */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <h2 className="text-xl font-bold text-[#1F1F1F] mb-8 uppercase tracking-widest flex items-center gap-3">
                                <span className="w-8 h-px bg-[#0D9488]"></span>
                                Structural Value
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-xl shadow-sm border border-[#1F1F1F]/5 hover:border-[#0D9488]/30 transition-all duration-300"
                                    >
                                        <div className="text-[#0D9488] mb-3">
                                            <CheckCircle2 size={20} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="font-bold text-[#1F1F1F] mb-2 text-sm">{benefit.title}</h3>
                                        <p className="text-xs text-[#1F1F1F]/60 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CTA Ribbon */}
            <section className="py-24 px-6 lg:px-12 bg-[#141414] text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-playfair text-3xl md:text-5xl mb-8 leading-tight">
                        Ready to optimize your {service.title.toLowerCase()}?
                    </h2>
                    <p className="text-lg text-white/60 mb-10 font-light max-w-xl mx-auto">
                        Connect with us to structure your operations for scalable growth.
                    </p>
                    <button className="bg-[#0D9488] hover:bg-[#0F766E] text-white transition-all duration-300 rounded-full h-14 px-10 text-sm font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 mx-auto">
                        Begin Consultation <ArrowRight size={18} />
                    </button>
                </div>
            </section>
        </main>
    );
};

export default ServiceDetail;
