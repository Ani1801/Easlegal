import React from 'react';
import { Briefcase, Scale, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/common/SectionDivider';

const ServicesOverview = () => {
    const services = [
        {
            title: 'Corporate Setup & Structuring',
            description: 'Incorporation, co-founder agreements, and ESOP structuring designed for scalability.',
            icon: <Briefcase className="w-8 h-8 text-[#0D9488]" />,
        },
        {
            title: 'Fundraising & Deal Advisory',
            description: 'Term sheet negotiation, due diligence, and SHA drafting to protect your interests during rounds.',
            icon: <Scale className="w-8 h-8 text-[#0D9488]" />,
        },
        {
            title: 'Regulatory & Ongoing Compliance',
            description: 'Proactive compliance management, secretarial audits, and risk mitigation.',
            icon: <ShieldCheck className="w-8 h-8 text-[#0D9488]" />,
        },
        {
            title: 'Intellectual Property Protection',
            description: 'Trademark, patent, and copyright strategy to secure your brand assets.',
            icon: <Globe className="w-8 h-8 text-[#0D9488]" />,
        },
    ];

    return (
        <section id="services" className="relative bg-[#ECEAE5] py-24 transition-colors duration-500">
            <SectionDivider />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-display font-bold text-ink leading-tight mb-6"
                    >
                        What We Do
                    </motion.h2>
                    <p className="text-ink/70 text-lg font-sans leading-relaxed">
                        From day one to exit, we provide the strategic legal framework you need to grow without friction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#F0EEE9] p-8 rounded-xl border border-ink/5 hover:shadow-xl hover:shadow-ink/5 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="mb-6 p-4 bg-white rounded-full w-fit border border-ink/5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold text-ink mb-4 group-hover:text-[#0D9488] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-ink/70 font-sans leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
