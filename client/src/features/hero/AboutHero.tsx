'use client';

import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-blue-900 mb-3 text-balance">
            EasLegal Partners
          </h1>
          <p className="text-lg text-gray-700">
            India's most trusted legal and financial partner for startups, founders, and growing businesses.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Story & Values */}
          <div className="space-y-8">
            {/* Story */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3">Our Story</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                Founded to democratize access to expert legal and financial guidance, we've grown into a trusted partner for 500+ companies. We believe founders deserve world-class expertise without complexity.
              </p>
            </div>

            {/* Vision & Mission - Compact */}
            <div className="space-y-4">
              <div className="border-l-4 border-amber-400 pl-4">
                <h3 className="font-bold text-blue-900 text-sm">Vision</h3>
                <p className="text-gray-700 text-sm mt-1">India's most trusted legal and financial partner for founders.</p>
              </div>
              <div className="border-l-4 border-amber-400 pl-4">
                <h3 className="font-bold text-blue-900 text-sm">Mission</h3>
                <p className="text-gray-700 text-sm mt-1">Empower entrepreneurs with expert guidance at every growth stage.</p>
              </div>
            </div>

            {/* Core Values - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Expertise', desc: 'Decades of experience' },
                { title: 'Trust', desc: 'Transparent partnerships' },
                { title: 'Innovation', desc: 'Modern solutions' },
                { title: 'Accessibility', desc: 'For all sizes' },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-gray-50 border border-gray-200 rounded-lg p-4 hover:border-amber-400 transition-colors duration-300"
                >
                  <h4 className="font-bold text-blue-900 text-sm">{value.title}</h4>
                  <p className="text-gray-600 text-xs mt-1">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Professional Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-96">
            <img
              src="/founder.jpg"
              alt="EasLegal Partners Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
