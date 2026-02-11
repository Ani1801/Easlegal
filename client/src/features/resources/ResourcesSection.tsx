'use client';

import React, { useState } from 'react';
import { ArrowRight, Clock, User, X, Search, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionDivider from '@/components/common/SectionDivider';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Resource {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  image: string;
  isFeatured?: boolean;
  content?: React.ReactNode; // Full content for the modal
}

export default function Resources() {
  const [selectedPost, setSelectedPost] = useState<Resource | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Full Content
  const blog1Content = (
    <div className="space-y-6 text-ink/80 font-sans leading-relaxed text-lg">
      <p>
        This article explores why it is important to have a clear definition of “Software” within the contract and how one may incorporate restrictions to software licenses effectively. Read the first article in the series to understand what a typical licensing scope language looks like.
      </p>
      <p>
        Remember that your VC and other investors will be interested in knowing how sophisticated your product offering strategy is, how maturely you protect your core intellectual properties, and how well you can monetize your offering.
      </p>
      <p>
        If you’re a startup founder and have a software to offer (the Vendor), protecting your software assets is crucial for long-term success. The other party, also a business (the Customer), clearly values your Software and has chosen to use it. You want to ensure they only use what they’ve paid for. Two key elements are to achieve this intent are: 1) precisely defining “Software” in your contracts, and 2) including specific license restrictions.
      </p>

      <h3 className="text-2xl font-bold text-ink mt-8 mb-4">1. The Importance of Defining “Software”</h3>
      <p>
        When drafting your contract, carefully define what is being licensed. The contract should clearly outline the “Software” or “Licensed Product” in a separate definitions section. For standard licenses, the software’s name and version number might suffice. However, if your software has multiple modules or there’s potential for disputes, list all necessary elements.
      </p>
      <p>
        Once you have the clear definition in the contract, you have achieved the following: (i) both Vendor and Customer are clear about exactly what is being licensed, and (ii) essential assets such as source code, object code, and documentations are protected from unauthorized use.
      </p>
      <p>
        Consider the sample clauses below, one for an on-premise Software, the next for a SaaS product, and the last when you are developing a software for your Customer as per their specifications.
      </p>

      <div className="bg-[#F0EEE9] p-6 rounded-xl border-l-4 border-[#0D9488] my-6">
        <h4 className="font-bold text-ink mb-2">Sample Clause 1:</h4>
        <p className="italic text-ink/70">
          “Software” means the computer programs provided to Customer under this Agreement, in object code form only, including all updates, upgrades, and modifications thereto, along with any related documentation, user manuals, and technical specifications.
        </p>
      </div>

      <p>
        You will notice that here it has been stated that only the ‘object code’ is provided, not the source code. It is because the Customer has the right to use the software in the way you intend it to be used, because they do not have ownership of the Software copy, but only a license to use it. This clause also talks about documentation such as a user manual that may help in allowing the Customer to understand how to use and maintain the Software copy.
      </p>

      <div className="bg-[#F0EEE9] p-6 rounded-xl border-l-4 border-[#0D9488] my-6">
        <h4 className="font-bold text-ink mb-2">Sample Clause 2:</h4>
        <p className="italic text-ink/70">
          “Software” means the cloud-based software application named (name of the proprietary product) made available by Vendor to Customer on a subscription basis via the internet, including all features, functionalities, interfaces, and data structures, as well as any updates, upgrades, and modifications thereto.
        </p>
      </div>

      <p>
        In this SaaS context, the definition focuses on the cloud-based nature of the Software and that Customer can access it on subscription basis. In this case, no copy of the Software is received. Customer is only getting the right to access and use that Software that is hosted and runs on the cloud environment of the Vendor. That is why, there is no mention of ‘object code’ or documentation generally for such offerings.
      </p>
    </div>
  );

  const blog2Content = (
    <div className="space-y-6 text-ink/80 font-sans leading-relaxed text-lg">
      <p>
        This article, the first in a series, aims to make clear key elements of software contract negotiations for professionals in software companies who may not have a legal background.
        Here, we focus on “Scope Terms” within such a contract. Basically, when you as a Vendor (one who owns the software) grant rights to your software, you must define (or restrict) those rights. As a Customer (one who gets the rights to use the software), understanding the scope is crucial so you can ensure your business can rely on the software, you are not caught off-guard by a hidden cost, or a legal dispute.
      </p>
      <p>
        Remember that a Vendor would want a narrow scope to maximise their income and the Customer would want to have the scope broad enough to cover all anticipated use so they do not have unforeseen costs.
      </p>

      <p>
        Here are two sample clauses and the fundamental principles that you as readers should understand. Note that Sample Clause 1 may be used for a software that you install on your device and Sample Clause 2 may be used for a software that you may access over the internet (SaaS) for a recurring subscription fee. For clarity, consider Sample Clause 1 is for Microsoft Office that you have on your computer locally, and Sample Clause 2 is for Microsoft 365.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-[#F0EEE9] p-6 rounded-xl border-t-4 border-[#0D9488]">
          <h4 className="font-bold text-ink mb-2">Sample Clause 1:</h4>
          <p className="italic text-ink/70 text-sm">
            Provided Customer complies with the license restrictions set forth in this Clause ______, Vendor hereby grants Customer a perpetual, revocable, nontransferable, nonexclusive, fully paid, royalty-free, license to use the Software for internal business purposes of the Customer.
          </p>
        </div>
        <div className="bg-[#F0EEE9] p-6 rounded-xl border-t-4 border-[#0D9488]">
          <h4 className="font-bold text-ink mb-2">Sample Clause 2:</h4>
          <p className="italic text-ink/70 text-sm">
            Provided Customer complies with the license restrictions set forth in this Clause ______, Vendor hereby grants Customer, for the Subscription Term, a revocable, nontransferable, nonexclusive license to use the Software for internal business purposes of the Customer.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-ink mt-8 mb-4">Key Concepts Explained:</h3>
      <ul className="list-disc pl-6 space-y-4 marker:text-[#0D9488]">
        <li>
          <strong>Duration:</strong> The license granted under Sample Clause 1 is perpetual unless the terms of the license are breached. The license granted under Sample Clause 2 is valid for the “Subscription Term” which is generally a date some months or 1 year from the date that the subscription starts.
        </li>
        <li>
          <strong>Revocability:</strong> This means that the Vendor can take away the license when you breach a condition of the license such as for improper and unauthorised use and non-payment. This in turn means your rights to the software copy (when installed) or your rights to the software available on the cloud (in SaaS model) are not unrestricted and can suffer a suspension or termination.
        </li>
        <li>
          <strong>Transferability:</strong> Non-transferability means you cannot give the rights you have under the license to anyone else. They are only meant to be exercised by you. This is different from sub-licensing where you get to keep your rights and allow another party to also exercise some or all those rights.
        </li>
        <li>
          <strong>Exclusivity:</strong> The nonexclusive nature of the license means that the Vendor may grant the same rights to someone else or exercise those rights itself. In both cases covered by the sample clauses above, it makes sense to give nonexclusive rights to the Customer so these rights can also be given to other customers of the Vendor and increase Vendor’s revenue.
        </li>
        <li>
          <strong>Payment:</strong> You may notice that the license is “fully-paid” and “royalty-free” as in Sample Clause 1. This means that there are no ongoing payments beyond a (generally) lump sum payment made to acquire the rights to the Software. Since SaaS contracts generally renew after each Subscription Term, and the payment in each Subscription Term may change, we should avoid using words like “fully-paid”.
        </li>
        <li>
          <strong>Internal business purposes:</strong> The rights to the Software are given so that the Customer can exploit the Software for the intended purpose for its business, say to maintain attendance of employees electronically. Customer cannot resell or repackage the Software in a way that competes with the business of the Vendor so that other possible customers of the Vendor go to the Customer for similar intended purposes.
        </li>
      </ul>

      <p className="mt-6">
        What also helps in defining the scope of the license more clearly are the restrictions (notice each clause starts with “Provided Customer complies with the license restrictions set forth in this Clause ______”). You should also define what “Software” means so disputes are avoided regarding what tools, functionalities, and documentation are licensed under the ambit of Software. The other articles in the series will touch upon these topics.
      </p>
      <p>
        You can also set out several other parameters to limit the scope, such as number of users that can use the Software, the territorial extent, and be as creative as possible. Do consult a legal expert when you plan to do so!
      </p>
    </div>
  );

  const placeholderContent = (
    <div className="space-y-6 text-ink/80 font-sans leading-relaxed text-lg">
      <p>
        This is a preview of the article content. The full text will be available shortly.
        At EasLegal, we are committed to providing high-quality insights into software licensing,
        intellectual property, and legal strategies for modern businesses.
      </p>
      <p>
        Stay tuned for expert analysis and actionable advice designed to help you navigate
        the complexities of the legal landscape.
      </p>
      <div className="bg-[#F0EEE9] p-6 rounded-xl border-l-4 border-[#0D9488] my-6">
        <h4 className="font-bold text-ink mb-2">Key Takeaway</h4>
        <p className="italic text-ink/70">
          "Effective legal strategy is not just about compliance; it's about enabling business growth
          while minimizing risk."
        </p>
      </div>
      <p>
        Check back soon for the complete article.
      </p>
    </div>
  );

  // Expanded data for the layout with real content
  const resources: Resource[] = [
    {
      id: 1,
      title: 'A CEO’s Guide to Turning Code into Gold Through Effective Software Licensing',
      excerpt: 'This article explores why it is important to have a clear definition of “Software” within the contract and how one may incorporate restrictions to software licenses effectively. Protecting your software assets is crucial for long-term success.',
      category: 'Intellectual Property',
      readTime: '6 min read',
      author: 'Ankit Singh',
      date: 'OCT 24',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600',
      isFeatured: true,
      content: blog1Content
    },
    // Sidebar items
    {
      id: 2,
      title: 'Hidden Costs in Software Contracts: The Impact of License Scope',
      excerpt: 'Understanding “Scope Terms” within software contracts to ensure your business can rely on the software without unforeseen costs.',
      category: 'Legal Help',
      readTime: '5 min read',
      author: 'Ankit Singh',
      date: 'OCT 22',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
      content: blog2Content
    },
    {
      id: 3,
      title: 'Synergizing SaaS and UX design for elevating digital experiences',
      excerpt: '',
      category: 'Design',
      readTime: '6 min',
      author: 'Sarah Chen',
      date: 'OCT 18',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800',
      content: placeholderContent
    },
    {
      id: 4,
      title: 'Navigating SaaS waters with intuitive UI and UX',
      excerpt: '',
      category: 'Strategy',
      readTime: '5 min',
      author: 'Michael Ross',
      date: 'OCT 15',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
      content: placeholderContent
    },
    {
      id: 5,
      title: 'Sculpting SaaS success - the art of UI and UX design',
      excerpt: '',
      category: 'Design',
      readTime: '3 min',
      author: 'Emily White',
      date: 'OCT 12',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
      content: placeholderContent
    },
    // Recent Posts Grid items
    {
      id: 6,
      title: 'Mastering UI Elements: A Practical Guide for Designers',
      excerpt: 'Dive into the world of user interfaces with our expert guides, latest trends, and practical tips.',
      category: 'Design',
      readTime: '3 min read',
      author: 'Jennifer Taylor',
      date: 'OCT 10',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800',
      content: placeholderContent
    },
    {
      id: 7,
      title: 'Crafting Seamless Experiences: The Art of Intuitive UI Design',
      excerpt: 'Explore the principles and techniques that drive user-centric UI design, ensuring a seamless and intuitive experience.',
      category: 'UX Design',
      readTime: '5 min read',
      author: 'Jennifer Taylor',
      date: 'OCT 08',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      content: placeholderContent
    },
    {
      id: 8,
      title: 'Beyond Aesthetics: The Power of Emotional UX Design',
      excerpt: 'Delve into the realm of emotional design and discover how incorporating empathy and psychology can elevate user experiences.',
      category: 'Psychology',
      readTime: '2 min read',
      author: 'Ryan A.',
      date: 'OCT 05',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      content: placeholderContent
    },
  ];

  const mainFeatured = resources[0];
  const sideFeatured = resources.slice(1, 5);
  const recentPosts = resources.slice(5, 8);

  const filteredPosts = [...sideFeatured, ...recentPosts].filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="resources" className="bg-[#F0EEE9] relative py-20 lg:py-24 px-6 lg:px-12 overflow-hidden border-b border-[#1F1F1F]/5 font-sans">
      <SectionDivider />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Header Section */}
        <div className="mb-20 lg:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#0D9488]" />
            <span className="text-[10px] font-bold text-[#0D9488] uppercase tracking-widest">
              Resources
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-[3/2] w-full"
              onClick={() => setSelectedPost(mainFeatured)}
            >
              <img
                src={mainFeatured.image}
                alt={mainFeatured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* Right: Hero Text */}
            <div className="flex flex-col justify-center">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 mb-6 text-xs font-bold text-[#0D9488] uppercase tracking-widest border border-[#0D9488]/20 rounded-full w-fit"
              >
                {mainFeatured.category}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-serif italic font-medium text-[#1F1F1F] leading-[1.1] tracking-tight mb-8 cursor-pointer hover:text-[#0D9488] transition-colors"
                style={{ fontFamily: '"Playfair Display", serif' }}
                onClick={() => setSelectedPost(mainFeatured)}
              >
                {mainFeatured.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[#1F1F1F]/60"
              >
                <span>{mainFeatured.date}</span>
                <div className="h-px w-8 bg-[#1F1F1F]/20" />
                <span>{mainFeatured.readTime}</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Latest Blogs - Magazine Style */}
        <div className="border-t border-[#1F1F1F]/10 pt-12">

          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <h3 className="text-3xl font-sans font-bold text-[#1F1F1F] mb-4">Latest Blogs</h3>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-[#1F1F1F]/10 w-full md:w-80">
                <Search size={16} className="text-[#1F1F1F]/40" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="bg-transparent border-none outline-none text-sm w-full font-sans"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {['All', 'Design', 'Strategy', 'Legal Help', 'Intellectual Property', 'UX Design', 'Psychology'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all",
                    selectedCategory === cat
                      ? "bg-[#0D9488] text-white"
                      : "bg-[#F0EEE9] text-[#1F1F1F]/60 hover:bg-[#1F1F1F]/5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Ledger List */}
          <div className="flex flex-col">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group grid grid-cols-1 md:grid-cols-[150px_1fr_auto] gap-6 md:gap-8 items-center py-8 border-b border-[#1F1F1F]/5 cursor-pointer hover:bg-[#1F1F1F]/[0.02] transition-colors"
                onClick={() => setSelectedPost(post)}
              >
                {/* 1. Thumbnail */}
                <div className="w-full md:w-[150px] aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* 2. Content */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-[#0D9488] uppercase tracking-widest font-sans">
                      {post.category}
                    </span>
                    <div className="h-px w-4 bg-[#1F1F1F]/10" />
                    <span className="text-[10px] font-bold text-[#1F1F1F]/40 uppercase tracking-widest font-sans">
                      {post.date}
                    </span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-[#1F1F1F] group-hover:text-[#0D9488] group-hover:translate-x-2 transition-all duration-300 font-sans leading-tight">
                    {post.title}
                  </h4>
                </div>

                {/* 3. Metadata / Action */}
                <div className="flex items-center gap-6 md:justify-end">
                  <div className="hidden md:flex flex-col items-end gap-1">
                    <span className="text-[10px] font-bold text-[#1F1F1F]/40 uppercase tracking-widest flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                    <span className="text-[10px] font-bold text-[#0D9488] uppercase tracking-widest flex items-center gap-1">
                      <CheckCircle2 size={12} /> Expert Verified
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#1F1F1F]/10 flex items-center justify-center group-hover:bg-[#0D9488] group-hover:border-[#0D9488] group-hover:text-white transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="md:hidden flex justify-center mt-12">
            <button className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#1F1F1F] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#0D9488] transition-colors">
              View Archive
            </button>
          </div>
        </div>

      </div>

      {/* Reading Modal */}
      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="sm:max-w-6xl w-full h-[90vh] md:h-auto md:max-h-[90vh] overflow-y-auto p-0 gap-0 bg-white border-none rounded-2xl shadow-2xl">
          <div className="relative">
            {/* Close Button - Custom positioned */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute right-4 top-4 z-50 p-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Top Image Banner */}
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <img
                src={selectedPost?.image}
                alt={selectedPost?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-white uppercase tracking-wider bg-[#0D9488] rounded-full">
                  {selectedPost?.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                  {selectedPost?.title}
                </h2>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-10 lg:p-12">
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-100 text-sm font-bold text-gray-500">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-[#0D9488]" />
                  <span className="text-gray-900">{selectedPost?.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#0D9488]" />
                  <span>{selectedPost?.readTime}</span>
                </div>
                <span>{selectedPost?.date}</span>
              </div>

              {/* Actual Content */}
              <div className="prose prose-lg prose-headings:font-bold prose-headings:text-ink prose-p:text-ink/80 prose-a:text-[#0D9488] max-w-none">
                {selectedPost?.content || (
                  <p className="text-gray-500 italic">
                    Full content for "{selectedPost?.title}" is coming soon.
                    This is a preview of the reading experience.
                  </p>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
