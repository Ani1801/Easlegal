'use client';

import React from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  image: string;
  email: string;
  phone: string;
  linkedin: string;
  instagram: string;
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      title: 'Founder & Managing Partner',
      bio: 'With 20+ years of experience in corporate law and business advisory, Rajesh founded EasLegal Partners to democratize legal expertise. His vision is to make professional guidance accessible to every startup.',
      expertise: [
        'Corporate Law',
        'M&A & Fundraising',
        'Regulatory Compliance',
        'Business Strategy',
        'Founder Advisory',
      ],
      image: '/founder.jpg',
      email: 'rajesh@easlegal.com',
      phone: '+91 98765 43210',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Financial Advisory Partner',
      bio: 'Priya brings 15+ years of financial planning and tax optimization expertise. She specializes in helping startups scale sustainably while maintaining compliance.',
      expertise: [
        'Tax Planning',
        'Financial Advisory',
        'Fund Management',
        'Financial Modeling',
        'Compliance',
      ],
      image: '/partner-1.jpg',
      email: 'priya@easlegal.com',
      phone: '+91 98765 43211',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
    {
      id: 3,
      name: 'Arjun Mehta',
      title: 'Operations & Growth Partner',
      bio: 'Arjun leads our operations and growth initiatives with 12+ years in business development and process optimization. He ensures every client gets the best service experience.',
      expertise: [
        'Business Development',
        'Operations Management',
        'Process Optimization',
        'Client Relations',
        'Growth Strategy',
      ],
      image: '/partner-2.jpg',
      email: 'arjun@easlegal.com',
      phone: '+91 98765 43212',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-display font-black text-[#141414] mb-4 text-balance tracking-tighter">
            Meet Our Founding Team
          </h2>
          <p className="text-[#141414]/60 font-sans text-lg leading-relaxed">
            Experienced professionals dedicated to your success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-[#141414]/10 hover:border-[#0D9488]/30 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#F0EEE9] to-[#E6E4DD]">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 space-y-4">
                {/* Name & Title */}
                <div>
                  <h3 className="text-lg font-display font-bold text-[#141414]">
                    {member.name}
                  </h3>
                  <p className="text-[#B59E7A] font-semibold text-xs mt-1 tracking-[0.1em]">
                    {member.title}
                  </p>
                </div>

                {/* Short Bio */}
                <p className="text-[#141414]/60 text-xs leading-relaxed line-clamp-2">
                  {member.bio.substring(0, 80)}...
                </p>

                {/* Top 3 Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#F0EEE9] text-[#141414] px-3 py-1 rounded-full font-medium border border-[#0D9488]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-[#141414]/10" />

                {/* Contact Links */}
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#F0EEE9] hover:bg-[#0D9488] hover:text-white border border-[#0D9488]/20 text-[#141414] py-2.5 rounded-lg transition-all duration-300 group/link"
                      title={member.email}
                    >
                      <Mail size={14} />
                      <span className="hidden sm:inline text-xs font-medium">Email</span>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#F0EEE9] hover:bg-[#0D9488] hover:text-white border border-[#0D9488]/20 text-[#141414] py-2.5 rounded-lg transition-all duration-300 group/link"
                      title={member.phone}
                    >
                      <Phone size={14} />
                      <span className="hidden sm:inline text-xs font-medium">Call</span>
                    </a>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#F0EEE9] hover:bg-[#0D9488] hover:text-white border border-[#0D9488]/20 text-[#141414] py-2.5 rounded-lg transition-all duration-300 text-xs font-medium"
                      title="LinkedIn"
                    >
                      <Linkedin size={13} />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#F0EEE9] hover:bg-[#B59E7A] hover:text-white border border-[#B59E7A]/20 text-[#141414] py-2.5 rounded-lg transition-all duration-300 text-xs font-medium"
                      title="Instagram"
                    >
                      <Instagram size={13} />
                      <span className="hidden sm:inline">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
