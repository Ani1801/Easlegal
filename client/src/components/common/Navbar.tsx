import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
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

interface ServiceSubItem {
    name: string;
    path: string;
}

interface ServiceItem {
    name: string;
    desc: string;
    subItems: ServiceSubItem[];
}

interface ServiceCategory {
    category: string;
    items: ServiceItem[];
}

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [expandedMobileService, setExpandedMobileService] = useState<string | null>(null);

    // State for tracking open service item in Mega Menu (Accordion style)
    const [openServiceItem, setOpenServiceItem] = useState<string | null>(null);

    // Desktop Mega Menu Data with Nested Sub-items
    const servicesData: ServiceCategory[] = [
        {
            category: "FOR STARTUPS",
            items: [
                {
                    name: "Virtual CFO",
                    desc: "Strategic financial leadership",
                    subItems: [
                        { name: "Accounting & Tax Compliance", path: "/services/accounting-tax-compliance" },
                        { name: "Payroll Management", path: "/services/payroll-management" },
                        { name: "MIS and Budgeting", path: "/services/mis-and-budgeting" },
                        { name: "Due Diligence Support", path: "/services/due-diligence-support" },
                        { name: "Financial Modeling", path: "/services/financial-modeling" }
                    ]
                },
                {
                    name: "Legal Support",
                    desc: "Contracts & IP protection",
                    subItems: [
                        { name: "Fundraising and M&A", path: "/services/fundraising-and-mna" },
                        { name: "Legal Contracts", path: "/services/legal-contracts" },
                        { name: "IPR Protection", path: "/services/ipr-protection" },
                        { name: "POSH Compliance", path: "/services/posh-compliance" }
                    ]
                },
                {
                    name: "Secretarial Compliance",
                    desc: "Corporate governance & filings",
                    subItems: [
                        { name: "Incorporation & Registration", path: "/services/incorporation-registration" },
                        { name: "Recurring Compliance", path: "/services/recurring-compliance" },
                        { name: "Event Based Compliances", path: "/services/event-based-compliances" },
                        { name: "FEMA Compliance", path: "/services/fema-compliance" }
                    ]
                },
                {
                    name: "Tax & Regulatory",
                    desc: "Optimal structuring & filings",
                    subItems: [
                        { name: "Tax Structuring", path: "/services/tax-structuring" },
                        { name: "Regulatory Advisory", path: "/services/regulatory-advisory" },
                        { name: "ESOP & Advisor Equity", path: "/services/esop-advisor-equity" }
                    ]
                }
            ]
        },
        {
            category: "FOR INVESTORS",
            items: [
                {
                    name: "AIF Setup",
                    desc: "Alternative Investment Funds",
                    subItems: [
                        { name: "Fund Structuring", path: "/services/fund-structuring" },
                        { name: "AIF Documentation", path: "/services/aif-documentation" },
                        { name: "AIF Application Process", path: "/services/aif-application-process" }
                    ]
                },
                {
                    name: "Investment Support",
                    desc: "Deal structuring & diligence",
                    subItems: [
                        { name: "Due Diligence", path: "/services/due-diligence" },
                        { name: "Transaction Agreements", path: "/services/transaction-agreements" },
                        { name: "Investment Transaction Advisory", path: "/services/investment-transaction-advisory" }
                    ]
                },
                {
                    name: "Lifecycle Assistance",
                    desc: "Portfolio management services",
                    subItems: [
                        { name: "Fund Operations & Vendor Mgmt", path: "/services/fund-operations-vendor-mgmt" },
                        { name: "Tax and Regulatory Advisory", path: "/services/tax-regulatory-advisory" },
                        { name: "Governance and Legal Support", path: "/services/governance-legal-support" }
                    ]
                },
                {
                    name: "Exit Support",
                    desc: "Strategic exit planning",
                    subItems: [
                        { name: "Due Diligence for Exits", path: "/services/due-diligence-for-exits" },
                        { name: "Transaction Advisory", path: "/services/transaction-advisory" },
                        { name: "Exit Agreements", path: "/services/exit-agreements" }
                    ]
                }
            ]
        },
        {
            category: "GOING GLOBAL",
            items: [
                {
                    name: "Foreign Setup",
                    desc: "Global entity formation",
                    subItems: [
                        { name: "Jurisdiction Selection", path: "/services/jurisdiction-selection" },
                        { name: "Entity Incorporation", path: "/services/entity-incorporation" },
                        { name: "Local Compliance Setup", path: "/services/local-compliance-setup" }
                    ]
                },
                {
                    name: "India Entry",
                    desc: "Market entry strategy",
                    subItems: [
                        { name: "India Entity Integration", path: "/services/india-entity-integration" },
                        { name: "Tax & Legal Advisory", path: "/services/tax-legal-advisory" },
                        { name: "Parent-Subsidiary Structuring", path: "/services/parent-subsidiary-structuring" }
                    ]
                },
                {
                    name: "Global Compliances",
                    desc: "Cross-border regulatory adherence",
                    subItems: [
                        { name: "Transfer Pricing Advisory", path: "/services/transfer-pricing-advisory" },
                        { name: "International Tax Compliance", path: "/services/international-tax-compliance" },
                        { name: "Regulatory Management", path: "/services/regulatory-management" }
                    ]
                },
                {
                    name: "GIFT IFSC",
                    desc: "International financial center",
                    subItems: [
                        { name: "Setup Assistance", path: "/services/setup-assistance" },
                        { name: "Regulatory & Tax Advisory", path: "/services/regulatory-tax-advisory-ifsc" },
                        { name: "Legal & Compliance Support", path: "/services/legal-compliance-support" }
                    ]
                }
            ]
        }
    ];

    const navLinks: NavLink[] = [
        // Services is handled separately
        {
            label: 'About',
            href: '#',
            children: [
                { label: 'Our Firm', href: '/our-firm' },
                { label: 'Our Team', href: '/our-team' }
            ]
        },
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
            setMobileResourcesOpen(false);
        }
    }, [mobileMenuOpen]);

    // Mobile Menu Animation Variants
    const menuVariants = {
        closed: { opacity: 0, transition: { duration: 0.2 } },
        open: { opacity: 1, transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.1 } }
    } as const;

    const linkVariants = {
        closed: { opacity: 0, x: -30 },
        open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
    } as const;

    const toggleServiceItem = (itemName: string) => {
        setOpenServiceItem(openServiceItem === itemName ? null : itemName);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-ink/5 bg-[#F0EEE9]",
                scrolled ? "py-4 shadow-sm" : "py-6"
            )}
            onMouseLeave={() => {
                setServicesOpen(false);
                setOpenServiceItem(null); // Close active items when leaving nav
            }}
        >
            <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 relative">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0 z-[101] relative">
                        <Link to="/" className="font-display font-extrabold text-xl md:text-2xl text-ink tracking-tighter" onClick={() => setMobileMenuOpen(false)}>
                            EasLegal<span className="text-[#0D9488]">.</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
                        {/* Services Mega Menu Trigger */}
                        <div
                            className="relative"
                            onMouseEnter={() => setServicesOpen(true)}
                        >
                            <button
                                className={cn(
                                    "flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300 outline-none leading-none py-4",
                                    servicesOpen ? "text-[#0D9488]" : "text-ink/80 hover:text-[#0D9488]"
                                )}
                            >
                                Services
                                <ChevronDown className={cn("w-3.5 h-3.5 stroke-[3px] transition-transform duration-300 mt-[-1px]", servicesOpen && "rotate-180")} />
                            </button>
                        </div>

                        {/* Other Links with Unified Styling */}
                        {navLinks.map((link) => (
                            link.children ? (
                                <div
                                    key={link.label}
                                    onMouseEnter={() => setOpenServiceItem(link.label)}
                                    onMouseLeave={() => setOpenServiceItem(null)}
                                    className="relative"
                                >
                                    <DropdownMenu open={openServiceItem === link.label} modal={false}>
                                        <DropdownMenuTrigger asChild>
                                            <button
                                                className={cn(
                                                    "flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300 outline-none leading-none py-4",
                                                    openServiceItem === link.label ? "text-[#0D9488]" : "text-ink/80 hover:text-[#0D9488]"
                                                )}
                                            >
                                                {link.label}
                                                <ChevronDown className={cn(
                                                    "w-3.5 h-3.5 stroke-[3px] transition-transform duration-300 mt-[-1px]",
                                                    openServiceItem === link.label && "rotate-180"
                                                )} />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            className="bg-[#F0EEE9] border-ink/10 w-48 p-2 data-[state=open]:duration-300 data-[state=closed]:duration-200"
                                            sideOffset={0}
                                            align="start"
                                            onMouseEnter={() => setOpenServiceItem(link.label)}
                                            onMouseLeave={() => setOpenServiceItem(null)}
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
                                </div>
                            ) : (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    className="text-sm font-bold uppercase tracking-[0.15em] text-ink/80 hover:text-[#0D9488] transition-colors duration-300 relative group py-4 leading-none"
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
                        <Button className="bg-[#0D9488] hover:bg-[#0F766E] text-white transition-all duration-300 rounded-full h-11 px-8 text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg">
                            Book Consultation
                        </Button>
                    </div>

                    {/* Mobile menu button */}
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

            {/* MEGA MENU CONTAINER - Desktop Only */}
            <AnimatePresence>
                {servicesOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 right-0 top-[calc(100%-1px)] bg-white shadow-2xl border-t border-gray-100 py-12 hidden lg:block"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => {
                            setServicesOpen(false);
                            setOpenServiceItem(null);
                        }}
                    >
                        <div className="max-w-7xl mx-auto px-12">
                            <div className="grid grid-cols-3 gap-12">
                                {servicesData.map((section, idx) => (
                                    <div key={idx} className="space-y-6">
                                        <h3 className="text-[#0D9488] font-bold uppercase tracking-widest text-xs border-b border-[#0D9488]/20 pb-4 mb-6">
                                            {section.category}
                                        </h3>
                                        <ul className="space-y-4">
                                            {section.items.map((item, i) => (
                                                <li key={i} className="group">
                                                    {/* Main Service Item */}
                                                    <div
                                                        className="flex items-start gap-3 mb-1 cursor-pointer"
                                                        onClick={() => toggleServiceItem(item.name)}
                                                    >
                                                        {/* Animated Line Indicator */}
                                                        <span className={cn(
                                                            "h-[1px] bg-[#0D9488] transition-all duration-300 mt-2.5",
                                                            openServiceItem === item.name ? "w-4" : "w-0 group-hover:w-4"
                                                        )} />

                                                        <div className="flex-1">
                                                            <div className="flex items-center justify-between">
                                                                <span className={cn(
                                                                    "font-bold text-sm uppercase tracking-wide transition-colors duration-300",
                                                                    openServiceItem === item.name ? "text-[#0D9488]" : "text-[#1A2B2C] group-hover:text-[#0D9488]"
                                                                )}>
                                                                    {item.name}
                                                                </span>
                                                                <ChevronDown className={cn(
                                                                    "w-3 h-3 text-[#0D9488] transition-transform duration-300 opacity-0 group-hover:opacity-100",
                                                                    openServiceItem === item.name && "rotate-180 opacity-100"
                                                                )} />
                                                            </div>
                                                            <p className="text-gray-400 text-[10px] font-medium tracking-wide mt-1 transition-all duration-300">
                                                                {item.desc}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Sub-items Accordion */}
                                                    <AnimatePresence>
                                                        {openServiceItem === item.name && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="overflow-hidden pl-7 mt-2 border-l border-[#0D9488]/10 ml-1.5"
                                                            >
                                                                <ul className="space-y-2 py-2">
                                                                    {item.subItems.map((sub, k) => (
                                                                        <li key={k}>
                                                                            <Link
                                                                                to={sub.path}
                                                                                className="block text-xs font-medium text-gray-500 hover:text-[#0D9488] transition-colors py-1 flex items-center gap-2 group/sub"
                                                                            >
                                                                                <span className="w-1 h-1 rounded-full bg-gray-300 group-hover/sub:bg-[#0D9488] transition-colors" />
                                                                                {sub.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[99] bg-black/20 backdrop-blur-sm lg:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-0 right-0 bottom-0 z-[100] w-[85%] md:w-[60%] bg-[#F0EEE9] shadow-2xl lg:hidden flex flex-col border-l border-ink/5"
                        >
                            <div className="flex items-center justify-between px-6 py-6 border-b border-ink/5">
                                <span className="font-bold uppercase tracking-[0.15em] text-sm text-ink/80">Menu</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-ink p-1 flex items-center justify-center w-8 h-8 group hover:bg-ink/5 rounded-full transition-colors"
                                >
                                    <X size={24} strokeWidth={1.5} className="text-ink transition-transform duration-300 group-hover:rotate-90" />
                                </button>
                            </div>

                            <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={menuVariants}
                                className="flex flex-col flex-grow px-8 py-8 gap-y-8 overflow-y-auto"
                            >
                                <nav className="flex flex-col items-start gap-6">
                                    {/* Mobile Services Link (Simple for now) */}
                                    {/* Mobile Services Accordion */}
                                    <div className="flex flex-col items-start w-full">
                                        <button
                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                            className="flex items-center justify-between w-full font-bold uppercase tracking-[0.15em] text-lg text-ink hover:text-[#0D9488] transition-colors leading-tight group"
                                        >
                                            Services
                                            <ChevronRight className={cn("w-5 h-5 ml-2 transition-transform duration-300 group-hover:text-[#0D9488]", mobileServicesOpen && "rotate-90")} />
                                        </button>
                                        <AnimatePresence>
                                            {mobileServicesOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden pl-2 flex flex-col gap-4 mt-4 w-full border-l border-ink/10 ml-1"
                                                >
                                                    {servicesData.map((category, idx) => (
                                                        <div key={idx} className="flex flex-col gap-3">
                                                            <h4 className="font-bold text-xs uppercase tracking-widest text-[#0D9488]/80 mb-1 pl-2 border-b border-[#0D9488]/10 pb-2">
                                                                {category.category}
                                                            </h4>
                                                            {category.items.map((service, sIdx) => (
                                                                <div key={sIdx} className="pl-2">
                                                                    <button
                                                                        onClick={() => setExpandedMobileService(expandedMobileService === service.name ? null : service.name)}
                                                                        className="flex items-center justify-between w-full font-bold text-sm text-ink/80 hover:text-[#0D9488] transition-colors mb-1 group/service"
                                                                    >
                                                                        {service.name}
                                                                        <ChevronRight
                                                                            className={cn(
                                                                                "w-4 h-4 text-ink/40 transition-transform duration-300 group-hover/service:text-[#0D9488]",
                                                                                expandedMobileService === service.name && "rotate-90 text-[#0D9488]"
                                                                            )}
                                                                        />
                                                                    </button>
                                                                    <AnimatePresence>
                                                                        {expandedMobileService === service.name && (
                                                                            <motion.ul
                                                                                initial={{ height: 0, opacity: 0 }}
                                                                                animate={{ height: "auto", opacity: 1 }}
                                                                                exit={{ height: 0, opacity: 0 }}
                                                                                className="overflow-hidden flex flex-col gap-2 pl-3 border-l-2 border-[#0D9488]/20 ml-1 py-1"
                                                                            >
                                                                                {service.subItems.map((sub, subIdx) => (
                                                                                    <Link
                                                                                        key={subIdx}
                                                                                        to={sub.path}
                                                                                        className="text-xs font-medium text-ink/60 hover:text-[#0D9488] block transition-colors py-0.5"
                                                                                        onClick={() => {
                                                                                            setMobileMenuOpen(false);
                                                                                            setMobileServicesOpen(false);
                                                                                            setExpandedMobileService(null);
                                                                                        }}
                                                                                    >
                                                                                        {sub.name}
                                                                                    </Link>
                                                                                ))}
                                                                            </motion.ul>
                                                                        )}
                                                                    </AnimatePresence>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {navLinks.map((link) => (
                                        <motion.div key={link.label} variants={linkVariants} className="w-full">
                                            {link.children ? (
                                                <div className="flex flex-col items-start w-full">
                                                    <button
                                                        onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                                                        className="flex items-center justify-between w-full font-bold uppercase tracking-[0.15em] text-lg text-ink hover:text-[#0D9488] transition-colors leading-tight group"
                                                    >
                                                        {link.label}
                                                        <ChevronRight className={cn("w-5 h-5 ml-2 transition-transform duration-300 group-hover:text-[#0D9488]", mobileResourcesOpen && "rotate-90")} />
                                                    </button>
                                                    <AnimatePresence>
                                                        {mobileResourcesOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                className="overflow-hidden pl-4 flex flex-col gap-3 mt-4 w-full border-l border-ink/10 ml-1"
                                                            >
                                                                {link.children.map(child => (
                                                                    <Link
                                                                        key={child.label}
                                                                        to={child.href}
                                                                        className="font-bold uppercase tracking-[0.1em] text-sm text-ink/70 hover:text-[#0D9488] transition-colors block py-2"
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
                                                    className="font-bold uppercase tracking-[0.15em] text-lg text-ink hover:text-[#0D9488] transition-colors leading-tight block w-full"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {link.label}
                                                </Link>
                                            )}
                                        </motion.div>
                                    ))}
                                </nav>

                                <motion.div variants={linkVariants} className="w-full mt-auto pt-8">
                                    <Button className="w-full bg-[#0D9488] text-white rounded-full h-12 text-sm font-bold uppercase tracking-widest hover:bg-[#0D9488]/90 shadow-lg transition-all duration-300">
                                        Book Consultation
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;