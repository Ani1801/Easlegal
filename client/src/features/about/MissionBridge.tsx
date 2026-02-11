import React from 'react';

const MissionBridge = () => {
    return (
        <section className="bg-white py-24 px-6 border-b border-gray-100">
            <div className="max-w-4xl mx-auto text-center space-y-12">

                {/* Section Header */}
                <div className="space-y-4">
                    <span className="text-[#0D9488] uppercase tracking-widest text-xs font-bold">Our Philosophy</span>
                    <h2 className="text-3xl md:text-4xl font-playfair text-[#1F1F1F] leading-tight">
                        Bridging the gap between <span className="italic">ambition</span> and <span className="italic">achievement</span>.
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 md:gap-24 text-left relative">
                    {/* Central Divider (Design Element) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>

                    {/* Vision */}
                    <div className="space-y-4 relative">
                        <h3 className="text-xl font-bold text-[#1F1F1F] font-playfair">Vision</h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            To be India's most trusted legal and financial partner, giving founders the clarity and confidence to build world-changing companies.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="space-y-4 relative">
                        <h3 className="text-xl font-bold text-[#1F1F1F] font-playfair">Mission</h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Empowering entrepreneurs with expert, accessible, and transparent guidance at every stage of their growth journey.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionBridge;
