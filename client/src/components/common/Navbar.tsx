import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavLink {
    label: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks: NavLink[] = [
        { label: 'Home', href: '/' },
        { label: 'About us', href: '/about' },
        { label: 'Services', href: '/#services' },
        { label: 'Resources', href: '/#resources' },
        { label: 'Careers', href: '/#careers' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-ink/5 bg-[#E6E4DD]/90 backdrop-blur-md",
                scrolled ? "py-4 shadow-sm" : "py-6"
            )}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between">
                    {/* Logo - Plus Jakarta Sans */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="font-display font-extrabold text-2xl text-ink tracking-tighter">
                            EasLegal<span className="text-[#0D9488]">.</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Architectural Typography */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.href}
                                className="text-sm font-bold uppercase tracking-[0.15em] text-ink/80 hover:text-[#0D9488] transition-colors duration-300 relative group"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Search and CTA */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="text-ink/50 hover:text-[#0D9488] transition-colors p-2">
                            <Search size={18} />
                        </button>
                        {/* Ghost Button CTA */}
                        <Button className="bg-transparent border border-ink/20 text-ink hover:bg-ink/5 hover:border-ink/30 transition-all duration-300 rounded-full h-11 px-8 text-xs font-bold uppercase tracking-widest">
                            Contact
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-ink p-1"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4 pb-6 border-t border-ink/5 pt-6 animate-in fade-in zoom-in-95 duration-300">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.href}
                                className="text-ink hover:text-[#0D9488] block py-3 text-sm font-bold uppercase tracking-widest transition-colors px-2 border-b border-ink/5"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-4 space-y-4">
                            <Button className="w-full bg-transparent border border-ink/10 text-ink font-bold rounded-full h-12 uppercase tracking-widest hover:bg-ink/5">
                                Contact
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;