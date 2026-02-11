import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const OurTeam = () => {
    const partners = [
        {
            name: "Ankit Singh",
            title: "Managing Partner",
            bio: "Ankit brings over 15 years of extensive experience in corporate law and strategic advisory. He has successfully guided numerous startups through complex regulatory landscapes and funding rounds.",
            experience: [
                "Former Senior Associate at Top Tier Law Firm",
                "Advisor to 50+ High-Growth Startups",
                "Specialist in Cross-Border Transactions"
            ],
            image: "/path/to/image_a82e5b.jpg", // Placeholder
            socials: { linkedin: "#", email: "ankit@easlegal.com", phone: "+91 9876543210", instagram: "#" }
        },
        {
            name: "Vivekanand Kumar",
            title: "Financial Strategy Partner",
            bio: "Vivekanand acts as the financial backbone for our clients, specializing in tax optimization, financial modeling, and compliance architecture. His approach ensures sustainable growth.",
            experience: [
                "Chartered Accountant with All-India Rank",
                "Ex-Big 4 Consultant",
                "Expert in Startup Valuation and Diligence"
            ],
            image: "/path/to/image_a88035.jpg", // Placeholder
            socials: { linkedin: "#", email: "vivek@easlegal.com", phone: "+91 9876543211", instagram: "#" }
        }
    ];

    const experts = [
        { name: "Protiti Basu", specialty: "EU GDPR, UK GDPR, CCPA", bio: "External DPO Services & Data Protection in Healthcare." },
        { name: "Vikas Singh Chauhan (CA)", specialty: "CROSS-BORDER TAXATION", bio: "Global Tax & Expatriate Services, Chartered Accountant." },
        { name: "Salim Hooda", specialty: "LABOUR & EMPLOYMENT", bio: "Handling disputes, arbitration, and PPP contracts." },
        { name: "Prema Vashisht", specialty: "FAMILY LAW & IPR", bio: "Litigation handling for family law, IPR, and labour disputes." },
        { name: "Saptarko Biswas", specialty: "ESG CONSULTING & SAAS", bio: "EU GDPR German Market Expert." },
        { name: "Sunny Vashisht", specialty: "CORPORATE LITIGATION", bio: "Land & Property Disputes, Arbitration." },
        { name: "Arun Jain", specialty: "INDIRECT TAX & FEMA", bio: "Customs, VAT, Service Tax, Excise, PMLA, and Anti-Dumping." },
    ];

    return (
        <main className="font-sans text-[#1F1F1F]">
            {/* 1. The Team Hero */}
            <section className="bg-[#F0EEE9] py-24 px-6 lg:px-12 border-b border-[#1F1F1F]/5">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-playfair italic text-5xl md:text-7xl text-[#1F1F1F] mb-6 tracking-tight leading-[1.1]"
                    >
                        The Architects of <br className="hidden md:block" />
                        <span className="not-italic font-bold">Legal Strategy.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-sans text-xl md:text-2xl text-[#1F1F1F]/70 leading-relaxed max-w-3xl mx-auto"
                    >
                        A collective of domain experts engineering certainty for global founders.
                    </motion.p>
                </div>
            </section>

            {/* 2. Compact Partner Dossiers (Standardized Layout) */}
            <section className="bg-white py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
                    {partners.map((partner, index) => (
                        <div key={index} className="grid lg:grid-cols-[1.2fr_1.8fr] items-center">
                            {/* Partner Image: Left */}
                            <div className="relative z-0">
                                <div className="aspect-[4/3] max-h-[450px] w-full relative overflow-hidden rounded-lg shadow-md">
                                    <div className="absolute inset-0 bg-[#F0EEE9] flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">
                                        {partner.name} Photo
                                    </div>
                                </div>
                            </div>

                            {/* Partner Text: Right (Overlap Left) */}
                            <div className="relative z-10 bg-white p-10 lg:p-14 shadow-2xl rounded-xl -mt-12 lg:mt-0 lg:-ml-12 border border-[#1F1F1F]/5">
                                <span className="block text-[#0D9488] uppercase tracking-widest text-xs font-bold mb-3">
                                    {partner.title}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#1F1F1F] mb-6 leading-tight tracking-tight">
                                    {partner.name}
                                </h2>
                                <div className="mb-8">
                                    <ul className="space-y-2">
                                        {partner.experience.map((exp, i) => (
                                            <li key={i} className="flex items-start gap-3 text-[#1F1F1F]/80 text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0D9488] shrink-0"></span>
                                                {exp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Contact Accents */}
                                <div className="flex gap-3 mt-8 border-t border-[#1F1F1F]/10 pt-6">
                                    {[
                                        { icon: Linkedin, href: partner.socials.linkedin, label: 'LinkedIn' },
                                        { icon: Mail, href: `mailto:${partner.socials.email}`, label: 'Email' },
                                        { icon: Phone, href: `tel:${partner.socials.phone}`, label: 'Call' },
                                        { icon: Instagram, href: partner.socials.instagram, label: 'Instagram' }
                                    ].map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.href}
                                            className="text-[#0D9488] hover:text-[#0F766E] transition-colors p-1"
                                            aria-label={item.label}
                                        >
                                            <item.icon size={18} strokeWidth={1.5} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ribbon Quote */}
            <section className="bg-[#1A2B2C] text-white py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <blockquote className="font-playfair italic text-3xl md:text-5xl leading-tight opacity-90">
                        "We believe clarity in law creates confidence in growth."
                    </blockquote>
                </div>
            </section>

            {/* 3. The Rule of Seven Expert Grid */}
            <section className="bg-[#F0EEE9] py-16 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center">
                        <span className="text-[#0D9488] uppercase tracking-widest text-xs font-bold font-sans">Our Team</span>
                        <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#1F1F1F] mt-3 tracking-tight">Our Specialized Experts</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experts.map((expert, index) => (
                            <div
                                key={index}
                                className={`bg-white p-8 rounded-2xl shadow-sm border border-[#1F1F1F]/5 hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center ${index === 6 ? 'lg:col-start-2' : ''}`}
                            >
                                <div className="w-24 h-24 bg-[#F0EEE9] rounded-full mb-6 mx-auto flex items-center justify-center text-[#1F1F1F]/20 font-bold">
                                    IMG
                                </div>
                                <h3 className="text-xl font-bold font-sans text-[#1F1F1F] mb-1 tracking-tight">{expert.name}</h3>
                                <span className="block text-[#0D9488] text-xs font-bold uppercase tracking-widest mb-4">{expert.specialty}</span>
                                <p className="text-[#1F1F1F]/70 text-sm leading-relaxed mb-8 flex-grow">
                                    {expert.bio}
                                </p>
                                {/* Contact Icons Horizontal Row */}
                                <div className="flex gap-4 mt-auto">
                                    {[Mail, Phone, Linkedin, Instagram].map((Icon, i) => (
                                        <button key={i} className="text-[#1F1F1F]/40 hover:text-[#0D9488] transition-colors">
                                            <Icon size={14} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OurTeam;
