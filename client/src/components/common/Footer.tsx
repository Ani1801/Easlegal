import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-blue-950 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <span className="text-2xl font-bold text-white tracking-tight">EasLegal</span>
                        </Link>
                        <p className="text-blue-100/80 text-sm leading-relaxed max-w-xs">
                            Empowering startups and founders with comprehensive legal, financial, and compliance solutions. Your growth is our priority.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialIcon icon={<Linkedin size={18} />} href="#" />
                            <SocialIcon icon={<Twitter size={18} />} href="#" />
                            <SocialIcon icon={<Instagram size={18} />} href="#" />
                            <SocialIcon icon={<Facebook size={18} />} href="#" />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <div className="w-1 h-4 bg-amber-400 rounded-full"></div>
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/about" label="About Us" />
                            <FooterLink href="/#services" label="Our Services" />
                            <FooterLink href="/#resources" label="Resources" />
                            <FooterLink href="/#careers" label="Careers" />
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                            <div className="w-1 h-4 bg-amber-400 rounded-full"></div>
                            Services
                        </h3>
                        <ul className="space-y-4">
                            <FooterLink href="#" label="Business Incorporation" />
                            <FooterLink href="#" label="Intellectual Property" />
                            <FooterLink href="#" label="Compliance Management" />
                            <FooterLink href="#" label="Financial Advisory" />
                            <FooterLink href="#" label="Fundraising Support" />
                        </ul>
                    </div>

                    {/* Column 4: Newsletter & Contact */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold flex items-center gap-2">
                            <div className="w-1 h-4 bg-amber-400 rounded-full"></div>
                            Stay Updated
                        </h3>
                        <p className="text-blue-100/80 text-sm">
                            Subscribe to our newsletter for the latest legal updates and startup insights.
                        </p>
                        <form className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-blue-900/50 border-blue-800 text-white placeholder:text-blue-300/50 focus:border-amber-400 h-10"
                            />
                            <Button size="icon" className="bg-amber-400 hover:bg-amber-500 text-blue-900 shrink-0 h-10 w-10">
                                <ArrowRight size={18} />
                            </Button>
                        </form>

                        <div className="pt-4 space-y-3">
                            <div className="flex items-start gap-3 text-sm text-blue-100/80">
                                <MapPin size={16} className="mt-1 text-amber-400 shrink-0" />
                                <span>Mumbai | Delhi | Bangalore | GIFT City</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-blue-100/80">
                                <Mail size={16} className="text-amber-400 shrink-0" />
                                <span>support@easlegal.in</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-200/60">
                    <p>&copy; {currentYear} EasLegal Partners. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Helper Components
const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
    <a
        href={href}
        className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-200 hover:bg-amber-400 hover:text-blue-900 transition-all duration-300"
    >
        {icon}
    </a>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
    <li>
        <Link
            to={href}
            className="text-blue-100/70 hover:text-amber-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
        >
            <span className="w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            {label}
        </Link>
    </li>
);

export default Footer;
