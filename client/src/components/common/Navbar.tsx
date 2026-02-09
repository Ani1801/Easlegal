import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavLink {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
}

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

    const navLinks: NavLink[] = [
        { label: 'Services', href: '/#services' },
        { label: 'About', href: '/about' },
        {
            label: 'Resources',
            href: '#',
            children: [
                { label: 'Blogs', href: '/resources' }
            ]
        },
        { label: 'Careers', href: '/careers' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setMobileResourcesOpen(false); // Reset nested menu on close
        }
    }, [mobileMenuOpen]);

    // Mobile Menu Animation Variants
    const menuVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, x: -30 },
        open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-ink/5 bg-[#F0EEE9]/90 backdrop-blur-md",
                scrolled ? "py-4 shadow-sm" : "py-6"
            )}
        >
            <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 relative">
                <div className="flex items-center justify-between">
                    {/* Logo - Plus Jakarta Sans - Responsive Sizing */}
                    <div className="flex-shrink-0 z-[101] relative">
                        <Link to="/" className="font-display font-extrabold text-xl md:text-2xl text-ink tracking-tighter" onClick={() => setMobileMenuOpen(false)}>
                            EasLegal<span className="text-[#0D9488]">.</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Architectural Typography */}
                    <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
                        {navLinks.map((link) => (
                            link.children ? (
                                <DropdownMenu key={link.label} modal={false}>
                                    <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.15em] text-ink/80 hover:text-[#0D9488] transition-colors duration-300 outline-none group data-[state=open]:text-[#0D9488] leading-none">
                                        {link.label}
                                        <ChevronDown className="w-3.5 h-3.5 stroke-[3px] transition-transform duration-300 group-data-[state=open]:rotate-180 mt-[-1px]" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="bg-[#F0EEE9] border-ink/10 w-48 p-2 data-[state=open]:duration-300 data-[state=closed]:duration-200"
                                        sideOffset={8}
                                    >
                                        {link.children.map((child) => (
                                            <DropdownMenuItem key={child.label} asChild className="focus:bg-[#0D9488]/10 focus:text-ink cursor-pointer rounded-md my-1">
                                                <Link to={child.href} className="flex w-full items-center px-4 py-3 text-sm font-bold uppercase tracking-wider text-ink/80 hover:text-[#0D9488] transition-colors">
                                                    {child.label}
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    className="text-sm font-bold uppercase tracking-[0.15em] text-ink/80 hover:text-[#0D9488] transition-colors duration-300 relative group"
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Desktop Search and CTA */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <button className="text-ink hover:text-[#0D9488] transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-ink/5">
                            <Search size={22} strokeWidth={2.5} />
                        </button>
                        {/* Primary Button CTA */}
                        <Button className="bg-[#0D9488] hover:bg-[#0F766E] text-white transition-all duration-300 rounded-full h-11 px-8 text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg">
                            Book Consultation
                        </Button>
                    </div>

                    {/* Mobile menu button (Hamburger Trigger) */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className={cn(
                            "lg:hidden text-ink p-1 flex items-center justify-center w-8 h-8 relative group transition-opacity duration-300",
                            mobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                        )}
                        aria-label="Open menu"
                    >
                        <div className="relative flex flex-col gap-1.5 items-end">
                            <span className="h-[2px] bg-ink w-8 transition-all duration-300" />
                            <span className="h-[2px] bg-ink w-6 group-hover:w-8 transition-all duration-300" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation - Miragix Overlay (z-100, Solid, Fullscreen) */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-[100] bg-[#F0EEE9]/90 backdrop-blur-md lg:hidden flex flex-col">
                        {/* Close Button Area - Matches Navbar Layout */}
                        <div className="flex items-center justify-between px-6 py-6 md:py-6 border-b border-ink/5">
                            <div className="font-display font-extrabold text-xl md:text-2xl text-ink tracking-tighter">
                                EasLegal<span className="text-[#0D9488]">.</span>
                            </div>

                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-ink p-1 flex items-center justify-center w-8 h-8 group"
                                aria-label="Close menu"
                            >
                                <X size={36} strokeWidth={1.5} className="text-ink transition-transform duration-300 group-hover:rotate-90" />
                            </button>
                        </div>

                        {/* Content Container - Vertically Centered, Left Aligned */}
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="flex flex-col flex-grow justify-center px-10 gap-y-8"
                        >
                            <nav className="flex flex-col items-start gap-6">
                                {navLinks.map((link) => (
                                    <motion.div key={link.label} variants={linkVariants} className="w-full">
                                        {link.children ? (
                                            <div className="flex flex-col items-start">
                                                <button
                                                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                                                    className="flex items-center justify-between w-full font-sans font-bold text-4xl text-ink hover:text-[#0D9488] transition-colors tracking-tighter leading-tight"
                                                >
                                                    {link.label}
                                                    <ChevronRight className={cn("w-6 h-6 ml-2 transition-transform duration-300", mobileResourcesOpen && "rotate-90")} />
                                                </button>
                                                <AnimatePresence>
                                                    {mobileResourcesOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden pl-4 flex flex-col gap-4 mt-4"
                                                        >
                                                            {link.children.map(child => (
                                                                <Link
                                                                    key={child.label}
                                                                    to={child.href}
                                                                    className="font-sans font-bold text-2xl text-ink/70 hover:text-[#0D9488] transition-colors tracking-tight"
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                className="font-sans font-bold text-4xl text-ink hover:text-[#0D9488] transition-colors tracking-tighter leading-tight"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div variants={linkVariants} className="w-full max-w-sm mt-4">
                                <Button className="w-full bg-[#0D9488] text-white rounded-full h-14 text-lg font-bold tracking-wide hover:bg-[#0D9488]/90">
                                    Get in Touch
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;