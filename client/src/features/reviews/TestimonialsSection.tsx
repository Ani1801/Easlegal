import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionDivider from '@/components/common/SectionDivider';

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "EasLegal didn't just file our papers; they structured our Series A to save us significantly in the long run. An invaluable partner.",
            author: "Aditya Mehta",
            role: "Founder, FinTech Startup",
            company: "PayStream"
        },
        {
            quote: "The speed and clarity they bring is unmatched. Finally, a legal team that understands the startup ecosystem.",
            author: "Sneha Kapoor",
            role: "Co-Founder",
            company: "Healthify"
        },
        {
            quote: "Professional, reliable, and always ahead of the curve. They handle our complex cross-border tax structures effortlessly.",
            author: "Rohit Verma",
            role: "Director, FinCorp",
            company: "FinCorp"
        }
    ];

    return (
        <section className="bg-[#ECEAE5] py-24 px-6 lg:px-12 relative overflow-hidden transition-colors duration-500">
            <SectionDivider />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">
                        Founder Stories
                    </h2>
                    <p className="text-ink/60 font-sans text-lg">
                        Don't just take our word for it.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="bg-[#F0EEE9] p-8 rounded-2xl border border-ink/5 relative hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#0D9488]/10 rotate-180" />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#0D9488] text-[#0D9488]" />
                                    ))}
                                </div>
                                <p className="text-lg font-serif text-ink italic leading-relaxed mb-6 relative z-10">
                                    "{t.quote}"
                                </p>
                            </div>

                            <div className="pt-6 border-t border-ink/5 mt-auto">
                                <h4 className="font-bold text-ink font-display">{t.author}</h4>
                                <p className="text-sm text-ink/60 font-sans">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
