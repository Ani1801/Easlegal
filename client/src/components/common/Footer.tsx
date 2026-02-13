import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1A2B2C] text-[#F0EEE9] pt-20 pb-10 border-t border-[#1F1F1F]/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <span className="text-2xl font-playfair font-bold text-[#F0EEE9] tracking-tight">EasLegal<span className="text-[#0D9488]">.</span></span>
                        </Link>
                        <p className="text-[#F0EEE9]/70 text-sm leading-relaxed max-w-xs font-sans">
                            Empowering startups and founders with comprehensive legal, financial, and compliance solutions. Your growth is our priority.
                        </p>
                        <div className="flex items-center gap-4">
                            <SocialIcon icon={<Linkedin size={18} />} href="https://www.linkedin.com/company/easlegalpartners/" />
                            <SocialIcon icon={<Twitter size={18} />} href="https://x.com/easlegal" />
                            <SocialIcon icon={<Instagram size={18} />} href="https://www.instagram.com/easlegalpartners" />
                            <SocialIcon icon={<Facebook size={18} />} href="https://www.facebook.com/easlegalpartners/" />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-sans font-semibold mb-6 flex items-center gap-2 text-[#F0EEE9]">
                            <div className="w-1 h-4 bg-[#0D9488] rounded-full"></div>
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/about/our-firm" label="Our Firm" />
                            <FooterLink href="/about/our-team" label="Our Team" />
                            <FooterLink href="/resources/blogs" label="Insights" />
                            <FooterLink href="/careers" label="Careers" />
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-lg font-sans font-semibold mb-6 flex items-center gap-2 text-[#F0EEE9]">
                            <div className="w-1 h-4 bg-[#0D9488] rounded-full"></div>
                            Key Services
                        </h3>
                        <ul className="space-y-4">
                            <FooterLink href="/services/incorporation-registration" label="Incorporation" />
                            <FooterLink href="/services/ipr-protection" label="IPR Protection" />
                            <FooterLink href="/services/recurring-compliance" label="Compliance Mgmt" />
                            <FooterLink href="/services/mis-and-budgeting" label="Virtual CFO" />
                            <FooterLink href="/services/fundraising-and-mna" label="Fundraising Support" />
                        </ul>
                    </div>

                    {/* Column 4: Newsletter & Contact */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-sans font-semibold flex items-center gap-2 text-[#F0EEE9]">
                            <div className="w-1 h-4 bg-[#0D9488] rounded-full"></div>
                            Stay Updated
                        </h3>
                        <p className="text-[#F0EEE9]/70 text-sm font-sans">
                            Subscribe to our newsletter for the latest legal updates and startup insights.
                        </p>
                        <form className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-[#F0EEE9]/5 border-[#F0EEE9]/10 text-[#F0EEE9] placeholder:text-[#F0EEE9]/30 focus:border-[#0D9488] h-10 rounded-lg"
                            />
                            <Button size="icon" className="bg-[#0D9488] hover:bg-[#0F766E] text-white shrink-0 h-10 w-10 rounded-lg">
                                <ArrowRight size={18} />
                            </Button>
                        </form>

                        <div className="pt-4 space-y-3">
                            <div className="flex items-start gap-3 text-sm text-[#F0EEE9]/70 font-sans">
                                <MapPin size={16} className="mt-1 text-[#0D9488] shrink-0" />
                                <span>Mumbai | Delhi | Bangalore | GIFT City</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-[#F0EEE9]/70 font-sans">
                                <Mail size={16} className="text-[#0D9488] shrink-0" />
                                <span>support@easlegal.in</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#F0EEE9]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#F0EEE9]/40 font-sans">
                    <p>&copy; {currentYear} EasLegal Partners. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link to="#" className="hover:text-[#0D9488] transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-[#0D9488] transition-colors">Terms of Service</Link>
                        <Link to="#" className="hover:text-[#0D9488] transition-colors">Cookie Policy</Link>
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
        className="w-10 h-10 rounded-full bg-[#F0EEE9]/5 flex items-center justify-center text-[#F0EEE9]/70 hover:bg-[#0D9488] hover:text-white transition-all duration-300"
    >
        {icon}
    </a>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
    <li>
        <Link
            to={href}
            className="text-[#F0EEE9]/70 hover:text-[#0D9488] text-sm transition-colors duration-200 flex items-center gap-2 group font-sans"
        >
            <span className="w-1 h-1 bg-[#0D9488] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            {label}
        </Link>
    </li>
);

export default Footer;
