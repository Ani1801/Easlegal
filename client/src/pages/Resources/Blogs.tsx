import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogs } from '@/data/blogs';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blogs = () => {
    const navigate = useNavigate();

    // Split blogs into Featured (first one) and Grid (rest)
    const featuredBlog = blogs[0];
    const gridBlogs = blogs.slice(1);

    return (
        <div className="min-h-screen bg-[#F0EEE9] pt-32 pb-20 px-6 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="block text-[#0D9488] uppercase tracking-widest text-xs font-bold mb-6">
                        EASLEGAL INSIGHTS
                    </span>
                    <h1 className="font-playfair font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6 text-[#1F1F1F]">
                        Strategic Legal & <br className="hidden md:block" />
                        Business Intelligence
                    </h1>
                    <div className="h-px w-24 bg-[#0D9488] mx-auto mb-8"></div>
                    <p className="font-sans text-lg md:text-xl text-[#1F1F1F]/70 leading-relaxed max-w-2xl mx-auto">
                        Expert perspectives on law, business, and technology for startups and investors.
                    </p>
                </div>

                {/* Featured Blog Section */}
                {featuredBlog && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16 bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group hover:shadow-xl transition-all duration-300"
                        onClick={() => navigate(`/blog/${featuredBlog.id}`)}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="h-64 lg:h-auto overflow-hidden relative">
                                <img
                                    src={featuredBlog.imageUrl}
                                    alt={featuredBlog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                            </div>
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-xs text-[#0D9488] font-medium uppercase tracking-wider mb-4">
                                    <span className="bg-[#0D9488]/10 px-2 py-1 rounded">Featured</span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {featuredBlog.date}
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B2C] mb-4 leading-tight group-hover:text-[#0D9488] transition-colors font-serif italic">
                                    {featuredBlog.title}
                                </h2>
                                <p className="text-ink/70 mb-8 line-clamp-3 leading-relaxed">
                                    {featuredBlog.description}
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#1A2B2C]">
                                        <User size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-[#1A2B2C]">{featuredBlog.author}</span>
                                        <span className="text-xs text-ink/50">Author</span>
                                    </div>
                                    <div className="ml-auto">
                                        <span className="flex items-center gap-2 text-sm font-bold text-[#0D9488] group-hover:translate-x-1 transition-transform">
                                            Read Article <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Blog Grid (Remaining 5) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gridBlogs.map((blog) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col group cursor-pointer"
                            onClick={() => navigate(`/blog/${blog.id}`)}
                        >
                            {/* Image Container */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-xs text-[#0D9488] font-medium uppercase tracking-wider mb-3">
                                    <span className="flex items-center gap-1">
                                        <User size={12} />
                                        {blog.author}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {blog.date}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-[#1A2B2C] mb-3 leading-tight group-hover:text-[#0D9488] transition-colors">
                                    {blog.title}
                                </h3>

                                <p className="text-ink/60 text-sm line-clamp-3 mb-6 flex-1">
                                    {blog.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                    <span className="text-xs text-ink/40 font-medium truncate max-w-[60%]">
                                        {blog.category.split(',')[0]}
                                    </span>
                                    <button className="flex items-center gap-1 text-sm font-bold text-[#0D9488] group-hover:gap-2 transition-all">
                                        Read More <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Reading Modal */}

        </div>
    );
};

export default Blogs;
