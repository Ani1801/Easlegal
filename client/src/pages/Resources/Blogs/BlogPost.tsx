import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Share2, Linkedin, Twitter, Link as LinkIcon, ChevronLeft } from 'lucide-react';
import { blogs } from '@/data/blogs';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogs.find(b => b.id === id);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!blog) {
        return <div className="min-h-screen flex items-center justify-center">Blog post not found.</div>;
    }

    const recommendedReads = blogs.filter(b => b.id !== id).slice(0, 2);

    return (
        <main className="font-sans text-[#1F1F1F] bg-white relative">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-[#0D9488] origin-left z-50"
                style={{ scaleX }}
            />

            {/* Navigation Back */}
            <nav className="absolute top-6 left-6 z-20">
                <button
                    onClick={() => navigate('/resources')}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1F1F1F]/60 hover:text-[#0D9488] transition-colors"
                >
                    <ChevronLeft size={16} /> Back to Resources
                </button>
            </nav>

            {/* 1. Editoral Hero Section */}
            <section className="relative py-20 lg:py-32 px-6 lg:px-12 bg-[#F0EEE9] border-b border-[#1F1F1F]/5">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="block text-[#0D9488] uppercase tracking-widest text-xs font-bold mb-6">
                            {blog.category.split(',')[0]}
                        </span>
                        <h1 className="font-playfair font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 text-[#1F1F1F]">
                            {blog.title}
                        </h1>

                        <div className="h-px w-24 bg-[#0D9488] mx-auto mb-8"></div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-sans">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#1F1F1F]/10 overflow-hidden">
                                    {/* Placeholder Avatar */}
                                    <div className="w-full h-full bg-[#1F1F1F] flex items-center justify-center text-white text-xs">AS</div>
                                </div>
                                <div className="text-left">
                                    <span className="block font-bold text-[#1F1F1F]">Written by {blog.author}</span>
                                    <span className="block text-[#1F1F1F]/60 text-xs">{blog.date}</span>
                                </div>
                            </div>
                            <div className="hidden md:block w-px h-8 bg-[#1F1F1F]/10"></div>
                            <div className="flex items-center gap-2 text-[#0D9488] font-bold uppercase tracking-widest text-xs">
                                <CheckCircle2 size={14} /> Expert Verified
                            </div>
                            <div className="hidden md:block w-px h-8 bg-[#1F1F1F]/10"></div>
                            <div className="flex items-center gap-2 text-[#1F1F1F]/60 font-bold uppercase tracking-widest text-xs">
                                <Clock size={14} /> 5 Min Read
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. The Reading Matrix */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-24">

                    {/* Left Column: Content */}
                    <div className="prose prose-lg prose-headings:font-playfair prose-headings:font-medium prose-p:font-sans prose-p:text-lg prose-p:leading-relaxed prose-p:text-[#1F1F1F]/80 prose-a:text-[#0D9488] prose-blockquote:border-l-[#0D9488] prose-blockquote:bg-[#F0EEE9]/30 prose-blockquote:py-2 max-w-none">
                        <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full aspect-video object-cover rounded-2xl shadow-lg mb-12"
                        />
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>

                    {/* Right Column: Sticky Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-32 space-y-12">
                            {/* Table of Contents */}
                            <div>
                                <h4 className="font-bold text-[#1F1F1F] uppercase tracking-widest text-xs mb-6 border-b border-[#1F1F1F]/10 pb-2">
                                    In This Article
                                </h4>
                                <ul className="space-y-4 text-sm font-medium text-[#1F1F1F]/60">
                                    <li className="hover:text-[#0D9488] cursor-pointer transition-colors">1. Introduction</li>
                                    <li className="hover:text-[#0D9488] cursor-pointer transition-colors">2. Key Takeaways</li>
                                    <li className="hover:text-[#0D9488] cursor-pointer transition-colors">3. Strategic Implications</li>
                                    <li className="hover:text-[#0D9488] cursor-pointer transition-colors">4. Conclusion</li>
                                </ul>
                            </div>

                            {/* Share This Insight */}
                            <div>
                                <h4 className="font-bold text-[#1F1F1F] uppercase tracking-widest text-xs mb-6 border-b border-[#1F1F1F]/10 pb-2">
                                    Share This Insight
                                </h4>
                                <div className="flex gap-4">
                                    <button className="w-10 h-10 rounded-full border border-[#1F1F1F]/10 flex items-center justify-center text-[#1F1F1F]/60 hover:bg-[#0D9488] hover:border-[#0D9488] hover:text-white transition-all">
                                        <Linkedin size={16} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-[#1F1F1F]/10 flex items-center justify-center text-[#1F1F1F]/60 hover:bg-[#0D9488] hover:border-[#0D9488] hover:text-white transition-all">
                                        <Twitter size={16} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-[#1F1F1F]/10 flex items-center justify-center text-[#1F1F1F]/60 hover:bg-[#0D9488] hover:border-[#0D9488] hover:text-white transition-all">
                                        <LinkIcon size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Related Services */}
                            <div className="bg-[#F0EEE9] p-6 rounded-xl">
                                <h4 className="font-bold text-[#1F1F1F] uppercase tracking-widest text-xs mb-4">
                                    Related Services
                                </h4>
                                <p className="text-sm text-[#1F1F1F]/70 mb-4">
                                    Need help implementing these strategies?
                                </p>
                                <button className="text-[#0D9488] text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                    View Services <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* 4. Continue the Journey Footer */}
            <section className="bg-white border-t border-[#1F1F1F]/10 py-20 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <h3 className="font-playfair text-3xl font-medium text-[#1F1F1F] mb-12 text-center">Recommended Reads</h3>

                    <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
                        {recommendedReads.map((post) => (
                            <div
                                key={post.id}
                                className="group cursor-pointer"
                                onClick={() => {
                                    navigate(`/blog/${post.id}`);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <div className="aspect-[3/2] rounded-xl overflow-hidden mb-6 bg-gray-100">
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <span className="text-[10px] font-bold text-[#0D9488] uppercase tracking-widest mb-2 block">
                                    {post.category.split(',')[0]}
                                </span>
                                <h4 className="text-xl font-bold font-sans text-[#1F1F1F] group-hover:text-[#0D9488] transition-colors leading-tight">
                                    {post.title}
                                </h4>
                            </div>
                        ))}
                    </div>

                    {/* Book Consultation Ribbon */}
                    <div className="bg-[#1A2B2C] rounded-2xl p-12 text-center relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="font-playfair italic text-white text-3xl md:text-4xl mb-6">
                                "Ideas are easy. Execution is law."
                            </h2>
                            <p className="text-white/70 mb-8 font-sans font-light">
                                Turn your vision into a legally sound reality.
                            </p>
                            <button className="bg-[#0D9488] hover:bg-[#0F766E] text-white transition-all duration-300 rounded-full h-14 px-10 text-sm font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-3">
                                Book a Consultation <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogPost;
