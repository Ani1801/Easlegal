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
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-blue-900 mb-2 text-balance">
            Meet Our Founding Team
          </h2>
          <p className="text-gray-600">
            Experienced professionals dedicated to your success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-amber-400 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-5 space-y-3">
                {/* Name & Title */}
                <div>
                  <h3 className="text-lg font-bold text-blue-900">
                    {member.name}
                  </h3>
                  <p className="text-amber-400 font-semibold text-xs mt-0.5">
                    {member.title}
                  </p>
                </div>

                {/* Short Bio */}
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                  {member.bio.substring(0, 80)}...
                </p>

                {/* Top 3 Expertise Tags */}
                <div className="flex flex-wrap gap-1">
                  {member.expertise.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-900 px-2 py-1 rounded-full font-medium border border-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-200" />

                {/* Contact Links */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 flex items-center justify-center gap-1 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 py-2 rounded-lg transition-colors duration-300 group/link"
                      title={member.email}
                    >
                      <Mail size={14} />
                      <span className="hidden sm:inline text-xs font-medium">Email</span>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex-1 flex items-center justify-center gap-1 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 py-2 rounded-lg transition-colors duration-300 group/link"
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
                      className="flex-1 flex items-center justify-center gap-1 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 py-2 rounded-lg transition-colors duration-300 text-xs font-medium"
                      title="LinkedIn"
                    >
                      <Linkedin size={13} />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 py-2 rounded-lg transition-colors duration-300 text-xs font-medium"
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
