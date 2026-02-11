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
        'M&A Strategy',
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
    <section className="bg-white">
      {teamMembers.map((member, index) => (
        <div
          key={member.id}
          className={`flex flex-col lg:flex-row min-h-[85vh] ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
        >
          {/* Left Column (Image) - 40% */}
          <div className="w-full lg:w-[40%] text-center lg:text-left p-8 lg:p-12">
            <div className="relative h-[50vh] lg:h-[600px] overflow-hidden rounded-3xl shadow-xl">
              <div className="absolute inset-0 bg-gray-200" /> {/* Placeholder while loading */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column (Content) - 60% */}
          <div className="w-full lg:w-[60%] bg-white flex flex-col justify-center px-8 sm:px-16 py-20 lg:py-0 border-b border-gray-100 lg:border-b-0">
            <div className="max-w-md mx-auto lg:mx-0">

              {/* Role */}
              <span className="block text-[#0D9488] uppercase tracking-[0.2em] text-xs font-bold mb-4">
                {member.title}
              </span>

              {/* Name */}
              <h2 className="text-4xl sm:text-5xl font-playfair text-[#1F1F1F] mb-8 leading-tight">
                {member.name}
              </h2>

              {/* Skill Cloud */}
              <div className="flex flex-wrap gap-2 mb-8">
                {member.expertise.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 border border-gray-200 rounded-full text-xs text-gray-600 bg-white hover:border-[#0D9488] hover:text-[#0D9488] transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p className="text-gray-600 leading-relaxed font-light text-lg mb-12">
                {member.bio}
              </p>

              {/* Classy Contact Bar */}
              <div className="flex items-center gap-4">
                {[
                  { Icon: Phone, href: `tel:${member.phone}`, label: 'Call' },
                  { Icon: Mail, href: `mailto:${member.email}`, label: 'Email' },
                  { Icon: Linkedin, href: member.linkedin, label: 'LinkedIn' },
                  { Icon: Instagram, href: member.instagram, label: 'Instagram' },
                ].map(({ Icon, href, label }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[#0D9488] flex items-center justify-center text-[#0D9488] hover:bg-[#0D9488] hover:text-white transition-all duration-300 group"
                    aria-label={label}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamSection;
