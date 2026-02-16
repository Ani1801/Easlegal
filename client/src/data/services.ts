import {
    Calculator, FileCheck, Landmark, PiggyBank,
    Users, Briefcase, TrendingUp, ShieldCheck,
    Scale, ScrollText, Gavel, Globe,
    Building2, FileText, BadgeCheck,
    Plane, Map, Network, ArrowUpRight, Award, Flag, Smile
} from 'lucide-react';

export interface ServiceData {
    id: string;
    title: string;
    description: string;
    details: string;
    heroImage: string;
    deliverables: string[];
    benefits: {
        title: string;
        desc: string;
        icon: any;
    }[];
}

export const servicesData: Record<string, ServiceData> = {
    // INFO: STARTUP
    // 1. Virtual CFO
    'accounting-tax-compliance': {
        id: 'accounting-tax-compliance',
        title: 'Accounting & Tax Compliance',
        description: 'Precision financial management and compliance.',
        details: 'Our Virtual CFO services ensure that your financial records are accurate and compliant with all legal requirements. We provide financial management services with precision, ensuring timely tax filings and reconciliations across India and beyond, so you can focus on growing your business.',
        heroImage: '/images/services/accounting.jpg',
        deliverables: ['Accurate Financial Records', 'Timely Tax Filings', 'Reconciliations', 'Cross-border Compliance'],
        benefits: [
            { title: 'Accuracy', desc: 'Precision in every financial record.', icon: Calculator },
            { title: 'Compliance', desc: 'Adherence to all legal requirements.', icon: FileCheck },
            { title: 'Focus', desc: 'Free up time to grow your business.', icon: TrendingUp },
            { title: 'Timeliness', desc: 'Never miss a filing deadline.', icon: ArrowUpRight }
        ]
    },
    'payroll-management': {
        id: 'payroll-management',
        title: 'Payroll Management',
        description: 'Smooth, accurate, and compliant payroll.',
        details: 'Our Payroll services are designed to be smooth, accurate, and fully compliant with statutory requirements. From salary structuring to employee tax optimization, we handle every aspect of payroll processing. With our outsourced payroll solutions, you can trust that your employees will be paid correctly and on time, every time.',
        heroImage: '/images/services/payroll.jpg',
        deliverables: ['Salary Structuring', 'Employee Tax Optimization', 'Statutory Compliance', 'Timely Processing'],
        benefits: [
            { title: 'Accuracy', desc: 'Zero errors in payroll processing.', icon: Calculator },
            { title: 'Compliance', desc: 'Full adherence to statutory laws.', icon: Scale },
            { title: 'Optimization', desc: 'Tax-efficient salary structures.', icon: PiggyBank },
            { title: 'Reliability', desc: 'On-time payments, every time.', icon: FileCheck }
        ]
    },
    'mis-and-budgeting': {
        id: 'mis-and-budgeting',
        title: 'MIS and Budgeting',
        description: 'Financial insights for informed decisions.',
        details: 'Our MIS & Budgeting services provide you with the financial insights needed to steer your business towards success. Our financial forecasting and budgeting services help you track expenses, monitor business performance, and plan for future growth, ensuring you have the data to make informed decisions.',
        heroImage: '/images/services/mis.jpg',
        deliverables: ['Financial Forecasting', 'Expense Tracking', 'Performance Monitoring', 'Growth Planning'],
        benefits: [
            { title: 'Insight', desc: 'Data-driven decision making.', icon: Landmark },
            { title: 'Control', desc: 'Better expense tracking.', icon: Calculator },
            { title: 'Planning', desc: 'Structured growth strategies.', icon: TrendingUp },
            { title: 'Clarity', desc: 'Clear view of business health.', icon: FileText }
        ]
    },
    'due-diligence-support': {
        id: 'due-diligence-support',
        title: 'Due Diligence Support',
        description: 'End-to-end investment readiness support.',
        details: 'We offer end-to-end support for your investment readiness, conducting comprehensive reviews to ensure your startup is prepared for a fundraising round. From financial readiness assessments to vendor and legal diligence, we ensure your startup is investor-ready and compliant.',
        heroImage: '/images/services/due-diligence.jpg',
        deliverables: ['Comprehensive Reviews', 'Readiness Assessments', 'Vendor Diligence', 'Legal Diligence'],
        benefits: [
            { title: 'Readiness', desc: 'Be prepared for fundraising.', icon: Briefcase },
            { title: 'Compliance', desc: 'Ensure all boxes are checked.', icon: FileCheck },
            { title: 'Confidence', desc: 'Face investors with certainty.', icon: ShieldCheck },
            { title: 'Speed', desc: 'Faster closing of rounds.', icon: ArrowUpRight }
        ]
    },
    'financial-modeling': {
        id: 'financial-modeling',
        title: 'Financial Modeling',
        description: 'Investor-ready models for strategic planning.',
        details: 'We build investor-ready financial models tailored for startups, helping you plan, raise funds, and make informed business decisions. Our models go beyond spreadsheets to include revenue forecasts, cash flow projections, and scenario analysis, ensuring clarity and credibility for your financial strategies.',
        heroImage: '/images/services/modeling.jpg',
        deliverables: ['Revenue Forecasts', 'Cash Flow Projections', 'Scenario Analysis', 'Investor-Ready Models'],
        benefits: [
            { title: 'Credibility', desc: 'Professional models investors trust.', icon: BadgeCheck },
            { title: 'Clarity', desc: 'Clear financial roadmap.', icon: Map },
            { title: 'Strategy', desc: 'Informed business decisions.', icon: TrendingUp },
            { title: 'Fundraising', desc: 'Essential tool for raising capital.', icon: Landmark }
        ]
    },

    // 2. Legal Support
    'fundraising-and-mna': {
        id: 'fundraising-and-mna',
        title: 'Fundraising and M&A',
        description: 'End-to-end transaction support.',
        details: 'We provide end-to-end support for private equity, venture capital transactions, fundraising services, and M&A structuring, across all sectors. Our expertise spans from initial term sheet negotiations to global fundraising services, deal structuring, and cross-border transactions, guiding the transaction to a successful close.',
        heroImage: '/images/services/legal.jpg',
        deliverables: ['Term Sheet Negotiations', 'Deal Structuring', 'Cross-border Support', 'Transaction Closing'],
        benefits: [
            { title: 'Expertise', desc: 'Sector-agnostic transaction knowledge.', icon: Briefcase },
            { title: 'Global Reach', desc: 'Support for cross-border deals.', icon: Globe },
            { title: 'Structuring', desc: 'Optimal deal architecture.', icon: Building2 },
            { title: 'Success', desc: 'Guided path to closing.', icon: Award }
        ]
    },
    'legal-contracts': {
        id: 'legal-contracts',
        title: 'Legal Contracts', // Using generic description from mapped content likely meant for contracts
        description: 'Comprehensive contract support.',
        details: 'We provide end-to-end support for drafting, reviewing, and negotiating legal contracts. Our expertise ensures that your agreements are robust, compliant, and protective of your interests, covering everything from employment contracts to vendor agreements and complex commercial deals.',
        heroImage: '/images/services/contracts.jpg',
        deliverables: ['Drafting', 'Review', 'Negotiation', 'Compliance Check'],
        benefits: [
            { title: 'Protection', desc: 'Safeguard your interests.', icon: ShieldCheck },
            { title: 'Clarity', desc: 'Unambiguous terms.', icon: FileText },
            { title: 'Compliance', desc: 'Legally sound agreements.', icon: Scale },
            { title: 'Efficiency', desc: 'Faster turnaround times.', icon: TrendingUp }
        ]
    },
    'ipr-protection': {
        id: 'ipr-protection',
        title: 'Intellectual Property Rights',
        description: 'Protect and manage your IP assets.',
        details: 'Our IPR services offer comprehensive solutions to protect and manage your intellectual property assets such as Trademarks, Copyrights & Patents domestically as well as internationally. We specialize in working with startups and can assist with strategies to manage your IP resources in an appropriate and cost-effective manner for your business’s development.',
        heroImage: '/images/services/ipr.jpg',
        deliverables: ['Trademarks', 'Copyrights', 'Patents', 'IP Strategy'],
        benefits: [
            { title: 'Protection', desc: 'Secure your innovations.', icon: ShieldCheck },
            { title: 'Strategy', desc: 'Cost-effective IP management.', icon: PiggyBank },
            { title: 'Growth', desc: 'Asset for business development.', icon: TrendingUp },
            { title: 'Global', desc: 'Domestic and international coverage.', icon: Globe }
        ]
    },
    'posh-compliance': {
        id: 'posh-compliance',
        title: 'POSH Compliance',
        description: 'Safe and respectful workplaces.',
        details: 'Our POSH compliance services assist organizations in adhering to the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013 (POSH Act). We help companies create safe, respectful work environments by ensuring that all compliance requirements are met. From drafting policies to establishing and training Internal Committees (IC), we provide end-to-end support in implementing effective mechanisms for addressing and preventing workplace harassment.',
        heroImage: '/images/services/posh.jpg',
        deliverables: ['Policy Drafting', 'IC Establishment', 'Training', 'Compliance Audits'],
        benefits: [
            { title: 'Safety', desc: 'Create a safe work environment.', icon: ShieldCheck },
            { title: 'Compliance', desc: 'Adherence to POSH Act.', icon: Scale },
            { title: 'Training', desc: 'Empower your team.', icon: Users },
            { title: 'Prevention', desc: 'Effective harassment prevention.', icon: Gavel }
        ]
    },

    // 3. Secretarial Compliance
    'incorporation-registration': {
        id: 'incorporation-registration',
        title: 'Incorporation & Registration',
        description: 'Seamless entity setup in India.',
        details: 'We offer a comprehensive approach to help clients with company incorporation services and related activities required after setting up the entity in India. This includes legal compliance for startups India, ensuring that all regulatory compliance requirements are met in a timely manner. Services also cover GST registration for startups India and the application of digital signatures.',
        heroImage: '/images/services/incorporation.jpg',
        deliverables: ['Company Incorporation', 'GST Registration', 'Digital Signatures', 'Regulatory Compliance'],
        benefits: [
            { title: 'Speed', desc: 'Quick entity setup.', icon: TrendingUp },
            { title: 'Compliance', desc: 'Meet all regulatory norms.', icon: FileCheck },
            { title: 'Full Service', desc: 'End-to-end registration support.', icon: Briefcase },
            { title: 'Expertise', desc: 'Navigate bureaucracy with ease.', icon: Map }
        ]
    },
    'recurring-compliance': {
        id: 'recurring-compliance',
        title: 'Recurring Compliance',
        description: 'Hassle-free ongoing compliance.',
        details: 'Recurring corporate compliance services ensure all necessary filings and submissions are managed at specified intervals—monthly, quarterly, bi-annually, or annually to regulatory authorities, ensuring that you meet your legal obligations without the hassle. Our team also provides compliance audit services, ensuring your filings are accurate and up to date.',
        heroImage: '/images/services/compliance.jpg',
        deliverables: ['Periodic Filings', 'Regulatory Submissions', 'Compliance Audits', 'Updates'],
        benefits: [
            { title: 'Peace of Mind', desc: 'Never worry about deadlines.', icon: ShieldCheck },
            { title: 'Accuracy', desc: 'Error-free filings.', icon: FileCheck },
            { title: 'Updates', desc: 'Stay ahead of regulations.', icon: Network },
            { title: 'Efficiency', desc: 'Streamlined compliance process.', icon: TrendingUp }
        ]
    },
    'event-based-compliances': {
        id: 'event-based-compliances',
        title: 'Event Based Compliances',
        description: 'Compliance for specific corporate events.',
        details: 'Recurring corporate compliance services ensure all necessary filings and submissions are managed at specified intervals—monthly, quarterly, bi-annually, or annually to regulatory authorities, ensuring that you meet your legal obligations without the hassle. Our team also provides compliance audit services, ensuring your filings are accurate and up to date.', // Note: User repeated text, using placeholder to reflect likely intent or keeping as provided. Keeping as provided for now but context implies event specific.
        heroImage: '/images/services/event-compliance.jpg',
        deliverables: ['Event Filings', 'Regulatory Submissions', 'Audit Services', 'Documentation'],
        benefits: [
            { title: 'Responsiveness', desc: 'Quick action on events.', icon: TrendingUp },
            { title: 'Compliance', desc: 'Adherence to event regulations.', icon: FileCheck },
            { title: 'Accuracy', desc: 'Precise documentation.', icon: FileText },
            { title: 'Support', desc: 'Expert guidance.', icon: Users }
        ]
    },
    'fema-compliance': {
        id: 'fema-compliance',
        title: 'FEMA Compliance',
        description: 'Forex management and compliance.',
        details: 'Recurring corporate compliance services ensure all necessary filings and submissions are managed at specified intervals—monthly, quarterly, bi-annually, or annually to regulatory authorities, ensuring that you meet your legal obligations without the hassle. Our team also provides compliance audit services, ensuring your filings are accurate and up to date.', // Note: User repeated text. 
        heroImage: '/images/services/fema.jpg',
        deliverables: ['FEMA Filings', 'Regulatory Submissions', 'Compliance Audits', ' Advisory'],
        benefits: [
            { title: 'Compliance', desc: 'Adherence to forex laws.', icon: Scale },
            { title: 'Risk Mgmt', desc: 'Avoid penalties.', icon: ShieldCheck },
            { title: 'Accuracy', desc: 'precise reporting.', icon: FileCheck },
            { title: 'Expertise', desc: 'Handle complex FEMA norms.', icon: Briefcase }
        ]
    },

    // 4. Tax & Regulatory
    'tax-structuring': {
        id: 'tax-structuring',
        title: 'Tax Structuring',
        description: 'Compliant and optimized tax solutions.',
        details: 'We help you with tailored tax solutions that ensure your business remains compliant while optimizing your financial strategies.',
        heroImage: '/images/services/tax.jpg',
        deliverables: ['Tailored Solutions', 'Compliance Check', 'Optimization Strategy', 'Financial Strategy'],
        benefits: [
            { title: 'Optimization', desc: 'Maximize financial efficiency.', icon: TrendingUp },
            { title: 'Compliance', desc: 'Stay within legal bounds.', icon: Scale },
            { title: 'Strategy', desc: 'Long-term financial health.', icon: Landmark },
            { title: 'Customization', desc: 'Solutions for your specific needs.', icon: Briefcase }
        ]
    },
    'regulatory-advisory': {
        id: 'regulatory-advisory',
        title: 'Regulatory Advisory',
        description: 'Expert guidance on complex regulations.',
        details: 'We help you with expert regulatory advisory, ensuring your business navigates complex legal landscapes with ease.',
        heroImage: '/images/services/regulatory.jpg',
        deliverables: ['Expert Advisory', 'Landscape Navigation', 'Legal Guidance', 'Risk Assessment'],
        benefits: [
            { title: 'Expertise', desc: 'Deep regulatory knowledge.', icon: Briefcase },
            { title: 'Ease', desc: 'Simplify complex laws.', icon: FileCheck },
            { title: 'Security', desc: 'Mitigate legal risks.', icon: ShieldCheck },
            { title: 'Clarity', desc: 'Understand your obligations.', icon: FileText }
        ]
    },
    'esop-advisor-equity': {
        id: 'esop-advisor-equity',
        title: 'ESOP & Advisor Equity',
        description: 'Effective equity-based compensation.',
        details: 'We provide end-to-end structuring of equity-based compensation strategies, including Employee Stock Option Plans (ESOPs), phantom stock, stock appreciation rights (SARs), and other innovative instruments tailored to business needs.',
        heroImage: '/images/services/esop.jpg',
        deliverables: ['ESOP Structuring', 'Phantom Stock', 'SARs', 'Custom Instruments'],
        benefits: [
            { title: 'Retention', desc: 'Attract and keep top talent.', icon: Users },
            { title: 'Motivation', desc: 'Align employee interests.', icon: TrendingUp },
            { title: 'Innovation', desc: 'Creative compensation models.', icon: PiggyBank },
            { title: 'Tailored', desc: 'Strategies that fit your culture.', icon: Briefcase }
        ]
    },

    // INFO: INVESTORS
    // 1. AIF Setup
    'fund-structuring': {
        id: 'fund-structuring',
        title: 'Fund Structuring',
        description: 'Effective fund setup for capital raising.',
        details: 'We can help you set up the right structures to effectively set up funds for raising capital for investments. From Category 1 AIF Setup, Category 2 Formation to Category 3, our expertise ensures that your fund is aligned & is in compliance with tax and regulatory environments.',
        heroImage: '/images/services/fund-structuring.jpg',
        deliverables: ['Category 1-3 Setup', 'Tax Alignment', 'Regulatory Compliance', 'Capital Raising Structure'],
        benefits: [
            { title: 'Alignment', desc: 'Structure fits your goals.', icon: Map },
            { title: 'Compliance', desc: 'Adherence to regulations.', icon: Scale },
            { title: 'Efficiency', desc: 'Optimized for operations.', icon: TrendingUp },
            { title: 'Expertise', desc: 'Deep AIF knowledge.', icon: Briefcase }
        ]
    },
    'aif-documentation': {
        id: 'aif-documentation',
        title: 'AIF Documentation',
        description: 'Comprehensive documentation support.',
        details: 'We provide comprehensive support in drafting and finalising all necessary documentation for a fund.',
        heroImage: '/images/services/documentation.jpg',
        deliverables: ['Drafting', 'Finalization', 'Legal Review', 'Compliance Check'],
        benefits: [
            { title: 'Completeness', desc: 'All documents covered.', icon: FileText },
            { title: 'Precision', desc: 'Legally sound drafts.', icon: Scale },
            { title: 'Support', desc: 'End-to-end assistance.', icon: Users },
            { title: 'Speed', desc: 'Faster documentation process.', icon: ArrowUpRight }
        ]
    },
    'aif-application-process': {
        id: 'aif-application-process',
        title: 'AIF Application Process',
        description: 'Seamless application navigation.',
        details: 'We help you with navigating the application process to the relevant regulator like SEBI or IFSCA.',
        heroImage: '/images/services/application.jpg',
        deliverables: ['Process Navigation', 'Regulator Liaison', 'Submission Support', 'Follow-up'],
        benefits: [
            { title: 'Guidance', desc: 'Expert navigation.', icon: Map },
            { title: 'Liaison', desc: 'Effective regulator communication.', icon: Network },
            { title: 'Success', desc: 'Higher approval chances.', icon: BadgeCheck },
            { title: 'Ease', desc: 'Stress-free application.', icon: FileCheck }
        ]
    },

    // 2. Investment Support
    'due-diligence': {
        id: 'due-diligence',
        title: 'Due Diligence for Investors',
        description: 'Detailed evaluation for informed decisions.',
        details: 'Our services provide a detailed evaluation of a startup’s financial, legal, tax, and compliance aspects, offering you a clear understanding of the company’s strengths and vulnerabilities. This ensures that your investment decisions are informed and aligned with your financial goals.',
        heroImage: '/images/services/dd-investors.jpg',
        deliverables: ['Financial Evaluation', 'Legal Assessment', 'Tax Review', 'Compliance Check'],
        benefits: [
            { title: 'Clarity', desc: 'Understand strengths & risks.', icon: FileText },
            { title: 'Safety', desc: 'Minimize investment risk.', icon: ShieldCheck },
            { title: 'Alignment', desc: 'Fits your financial goals.', icon: TrendingUp },
            { title: 'Insight', desc: 'Deep dive into startup health.', icon: Landmark }
        ]
    },
    'transaction-agreements': {
        id: 'transaction-agreements',
        title: 'Transaction Agreements',
        description: 'Structured and negotiated agreements.',
        details: 'Our expertise in structuring and negotiating transaction agreements ensures that every aspect of the investment is carefully considered, reducing the risk of disputes and ensuring a smooth transaction process.',
        heroImage: '/images/services/transaction.jpg',
        deliverables: ['Structuring', 'Negotiation', 'Risk Mitigation', 'Smooth Process'],
        benefits: [
            { title: 'Risk Reduction', desc: 'Minimize disputes.', icon: ShieldCheck },
            { title: 'Smoothness', desc: 'Seamless transaction flow.', icon: TrendingUp },
            { title: 'Care', desc: 'Every aspect considered.', icon: FileCheck },
            { title: 'Expertise', desc: 'Professional negotiation.', icon: Briefcase }
        ]
    },
    'investment-transaction-advisory': {
        id: 'investment-transaction-advisory',
        title: 'Investment Transaction Advisory',
        description: 'Strategic insights and customized solutions.',
        details: 'Our Transaction Advisory services provide investors with strategic insights and customized solutions that align with your investment goals. We ensure that every transaction is structured to achieve optimal tax efficiency, regulatory compliance, and financial success.',
        heroImage: '/images/services/advisory.jpg',
        deliverables: ['Strategic Insights', 'Custom Solutions', 'Tax Efficiency', 'Compliance'],
        benefits: [
            { title: 'Insight', desc: 'Data-driven strategy.', icon: Landmark },
            { title: 'Success', desc: 'Financial optimization.', icon: TrendingUp },
            { title: 'Compliance', desc: 'Regulatory adherence.', icon: Scale },
            { title: 'Alignment', desc: 'Meets investment goals.', icon: BadgeCheck }
        ]
    },

    // 3. Lifecycle Assistance
    'fund-operations-vendor-mgmt': {
        id: 'fund-operations-vendor-mgmt',
        title: 'Fund Operations and Vendor Management',
        description: 'Simplified ecosystem management.',
        details: 'We simplify the operational and compliance ecosystem of your fund by acting as a Single Point of Contact (SPOC) with various vendors, including trustees, custodians, brokers, RTAs, fund accountants, bankers, and other essential service providers.',
        heroImage: '/images/services/ops.jpg',
        deliverables: ['SPOC Services', 'Vendor Coordination', 'Operational Simplicity', 'Ecosystem Mgmt'],
        benefits: [
            { title: 'Simplicity', desc: 'One point of contact.', icon: Users },
            { title: 'Coordination', desc: 'Seamless vendor mgmt.', icon: Network },
            { title: 'Efficiency', desc: 'Streamlined operations.', icon: TrendingUp },
            { title: 'Reach', desc: 'Access to essential providers.', icon: Globe }
        ]
    },
    'tax-regulatory-advisory': {
        id: 'tax-regulatory-advisory',
        title: 'Tax and Regulatory Advisory',
        description: 'Ongoing compliance support.',
        details: 'We provide extensive support to manage ongoing tax and regulatory requirements, ensuring your fund remains fully compliant and up to date with evolving laws and regulations.',
        heroImage: '/images/services/tax-reg.jpg',
        deliverables: ['Ongoing Support', 'Regulatory Updates', 'Compliance Mgmt', 'Evolving Law Advice'],
        benefits: [
            { title: 'Compliance', desc: 'Always up to date.', icon: Scale },
            { title: 'Support', desc: 'Extensive assistance.', icon: Users },
            { title: 'Safety', desc: 'Adhere to laws.', icon: ShieldCheck },
            { title: 'Knowledge', desc: 'Expert updates.', icon: FileText }
        ]
    },
    'governance-legal-support': {
        id: 'governance-legal-support',
        title: 'Governance and Legal Support',
        description: 'High standards of governance.',
        details: 'We help establish and enforce high standards of governance and structured processes, ensuring your fund operates efficiently while staying compliant with legal and regulatory frameworks.',
        heroImage: '/images/services/governance.jpg',
        deliverables: ['Standard Establishment', 'Process Structuring', 'Enforcement', 'Framework Compliance'],
        benefits: [
            { title: 'Efficiency', desc: 'Structured processes.', icon: TrendingUp },
            { title: 'Standards', desc: 'High governance quality.', icon: BadgeCheck },
            { title: 'Compliance', desc: 'Legal framework adherence.', icon: Scale },
            { title: 'Order', desc: 'Disciplined operations.', icon: FileCheck }
        ]
    },

    // 4. Exit Support
    'due-diligence-for-exits': {
        id: 'due-diligence-for-exits',
        title: 'Due Diligence for Exits',
        description: 'Maximize value on exit.',
        details: 'A successful startup exit strategy begins with comprehensive due diligence to identify potential risks and maximize value. Our due diligence services evaluate financial, legal, tax, and compliance aspects, ensuring informed decisions throughout the business exit strategy process.',
        heroImage: '/images/services/exit-dd.jpg',
        deliverables: ['Risk Identification', 'Value Maximization', 'Comprehensive DD', 'Informed Decisions'],
        benefits: [
            { title: 'Value', desc: 'Maximize exit returns.', icon: PiggyBank },
            { title: 'Risk', desc: 'Identify potential pitfalls.', icon: ShieldCheck },
            { title: 'Information', desc: 'Data-backed decisions.', icon: FileText },
            { title: 'Success', desc: 'Smooth exit process.', icon: Award }
        ]
    },
    'transaction-advisory': {
        id: 'transaction-advisory',
        title: 'Transaction Advisory for Exits',
        description: 'Strategic exit advice.',
        details: 'A successful startup exit strategy begins with comprehensive due diligence to identify potential risks and maximize value. Our due diligence services evaluate financial, legal, tax, and compliance aspects, ensuring informed decisions throughout the business exit strategy process.', // Note: User repeated text.
        heroImage: '/images/services/exit-advisory.jpg',
        deliverables: ['Strategic Advice', 'Risk Assessment', 'Compliance Check', 'Process Mgmt'],
        benefits: [
            { title: 'Strategy', desc: 'Optimal exit path.', icon: Map },
            { title: 'Value', desc: 'Maximize returns.', icon: TrendingUp },
            { title: 'Decisions', desc: 'Informed choices.', icon: FileText },
            { title: 'Process', desc: 'Guided exit strategy.', icon: Briefcase }
        ]
    },
    'exit-agreements': {
        id: 'exit-agreements',
        title: 'Transaction Agreements for Exits',
        description: 'Solid agreements for successful exits.',
        details: 'A successful startup exit strategy begins with comprehensive due diligence to identify potential risks and maximize value. Our due diligence services evaluate financial, legal, tax, and compliance aspects, ensuring informed decisions throughout the business exit strategy process.', // Note: User repeated text.
        heroImage: '/images/services/exit-agreements.jpg',
        deliverables: ['Agreement Drafting', 'Risk Assessment', 'Value Focus', 'Process Support'],
        benefits: [
            { title: 'Security', desc: 'Solid legal footing.', icon: ShieldCheck },
            { title: 'Value', desc: 'Protect exit value.', icon: PiggyBank },
            { title: 'Clarity', desc: 'Clear terms.', icon: FileText },
            { title: 'Success', desc: 'Successful closing.', icon: Award }
        ]
    },

    // INFO: GOING GLOBAL
    // 1. Setting up Foreign Business
    'jurisdiction-selection': {
        id: 'jurisdiction-selection',
        title: 'Foreign Jurisdiction Selection',
        description: 'Strategic global expansion.',
        details: 'Choose the right country for your global operations with our in-depth jurisdiction analysis and structuring services. We will help you assess regulatory frameworks, tax regimes, double tax avoidance treaties and operational ease across key international markets to help you select the most strategic jurisdiction. Our structuring approach ensures legal efficiency and long-term scalability.',
        heroImage: '/images/services/jurisdiction.jpg',
        deliverables: ['Jurisdiction Analysis', 'Framework Assessment', 'Tax Regime Review', 'Structuring'],
        benefits: [
            { title: 'Strategy', desc: 'Best country for you.', icon: Map },
            { title: 'Efficiency', desc: 'Legally sound structure.', icon: TrendingUp },
            { title: 'Scalability', desc: 'Built for growth.', icon: Briefcase },
            { title: 'Insight', desc: 'Deep market knowledge.', icon: Globe }
        ]
    },
    'entity-incorporation': {
        id: 'entity-incorporation',
        title: 'Foreign Entity Incorporation',
        description: 'Seamless overseas setup.',
        details: 'From selecting the right legal structure to handling documentation, filings, local registrations and opening bank accounts, we help you in every aspect of your overseas entity incorporation. Whether you’re registering a company in US, UAE, Singapore, Mauritius or any other country, we ensure your offshore entity is operational, compliant, and aligned with business goals.',
        heroImage: '/images/services/foreign-inc.jpg',
        deliverables: ['Structure Selection', 'Documentation', 'Local Registrations', 'Bank Accounts'],
        benefits: [
            { title: 'Seamlessness', desc: 'Hassle-free setup.', icon: FileCheck },
            { title: 'Compliance', desc: 'Local law adherence.', icon: Scale },
            { title: 'Operations', desc: 'Ready for business.', icon: Briefcase },
            { title: 'Alignment', desc: 'Fits business goals.', icon: TrendingUp }
        ]
    },
    'parent-subsidiary-structuring': { // Mapped from "Parent-Subsidiary Structuring and Transfer Pricing" to match "Parent-Subsidiary Structuring" route or "Local Compliance" as user list had "Local Compliance Setup" in navbar but "Parent..." here? 
        // Navbar has: Foreign Setup -> Jurisdiction, Entity Inc, Local Compliance Setup.
        // User content has: Foreign Entity Inc..., Parent-Subsidiary Structuring...
        // I will map "Parent-Subsidiary..." to 'parent-subsidiary-structuring' but checking navbar routes...
        // Navbar routes for Foreign Setup: /services/jurisdiction-selection, /services/entity-incorporation, /services/local-compliance-setup
        // I will map the content to likely matches. "Parent-Subsidiary" content seems distinct. 
        // Wait, Navbar "Going Global" -> "India Entry" has "Parent-Subsidiary Structuring".
        // Navbar "Going Global" -> "Foreign Setup" has "Local Compliance Setup".
        // Let's use the provided text for "Parent-Subsidiary" for the mapped ID 'parent-subsidiary-structuring' under India Entry? Or "Going Global" section 1?
        // User text section 1: "Parent-Subsidiary Structuring and Transfer Pricing".
        // I will assign this to 'parent-subsidiary-structuring' ID.
        id: 'parent-subsidiary-structuring',
        title: 'Parent-Subsidiary Structuring',
        description: 'Optimal global models.',
        details: 'We help you design optimal parent-subsidiary models and implement compliant transfer pricing mechanisms aligned with international guidelines. From defining intercompany transactions to ensuring documentation and audit readiness, our focus is on minimizing tax risk while supporting global operations.',
        heroImage: '/images/services/parent-sub.jpg',
        deliverables: ['Model Design', 'Transfer Pricing', 'Documentation', 'Audit Readiness'],
        benefits: [
            { title: 'Optimization', desc: 'Tax efficient models.', icon: PiggyBank },
            { title: 'Compliance', desc: 'International guidelines.', icon: Scale },
            { title: 'Risk Min', desc: 'Lower tax risk.', icon: ShieldCheck },
            { title: 'Support', desc: 'Global ops backing.', icon: Globe }
        ]
    },
    'local-compliance-setup': {
        // Placeholder content as user didn't explicitly allow a 3rd item in Section 1 titled "Local Compliance Setup" but listed "Parent-Subsidiary" instead. 
        // I will use "Parent-Subsidiary" text for that route if they don't match, or create a specific one.
        // Actually, I'll copy Parent-Subsidiary text here too if needed, or leave generic.
        // Let's create a generic one for "Local Compliance Setup" based on General Foreign Setup info.
        id: 'local-compliance-setup',
        title: 'Local Compliance Setup',
        description: 'Ensure local adherence.',
        details: 'Ensuring your foreign entity adheres to all local laws is critical. We assist with setting up initial compliance frameworks, tax registrations, and statutory filings in your chosen jurisdiction to ensure a compliant start.',
        heroImage: '/images/services/local-comp.jpg',
        deliverables: ['Compliance Framework', 'Tax Registrations', 'Statutory Filings', 'Local Adherence'],
        benefits: [
            { title: 'Start', desc: 'Compliant from day one.', icon: Flag },
            { title: 'Framework', desc: 'Robust systems.', icon: Building2 },
            { title: 'Safety', desc: 'Avoid local penalties.', icon: ShieldCheck },
            { title: 'Confidence', desc: 'Operate freely.', icon: Smile }
        ]
    },


    // 2. Setup India Business
    'india-entity-integration': { // "Entity Incorporation and Setup in India"
        id: 'india-entity-integration',
        title: 'Entity Incorporation in India',
        description: 'Expert support for India entry.',
        details: 'Set up your business in India with expert support at every step. From registering your company to selecting the right legal structure, we handle all aspects of entity incorporation, ensuring compliance with India’s regulatory and tax frameworks. Whether you’re starting a private limited company, LLP, or branch office, we simplify the process, making it efficient and hassle-free.',
        heroImage: '/images/services/india-inc.jpg',
        deliverables: ['Registration', 'Structure Selection', 'Compliance Check', 'Process Mgmt'],
        benefits: [
            { title: 'Efficiency', desc: 'Hassle-free process.', icon: TrendingUp },
            { title: 'Compliance', desc: 'Adhere to Indian laws.', icon: Scale },
            { title: 'Support', desc: 'Expert guidance.', icon: Users },
            { title: 'Options', desc: 'Pvt Ltd, LLP, Branch.', icon: Building2 }
        ]
    },
    'tax-legal-advisory': {
        id: 'tax-legal-advisory',
        title: 'Tax, Legal & Accounting Advisory',
        description: 'Comprehensive India advisory.',
        details: 'Set up your business in India with expert support at every step. From registering your company to selecting the right legal structure, we handle all aspects of entity incorporation, ensuring compliance with India’s regulatory and tax frameworks. Whether you’re starting a private limited company, LLP, or branch office, we simplify the process, making it efficient and hassle-free.', // Note: User repeated text.
        heroImage: '/images/services/india-advisory.jpg',
        deliverables: ['Legal Structure', 'Tax Framework', 'Registration', 'Process Simplification'],
        benefits: [
            { title: 'Comprehensive', desc: 'All aspects covered.', icon: FileText },
            { title: 'Expertise', desc: 'Deep Indian market knowledge.', icon: Briefcase },
            { title: 'Efficiency', desc: 'Simplified processes.', icon: TrendingUp },
            { title: 'Compliance', desc: 'Regulatory adherence.', icon: Scale }
        ]
    },
    // 'parent-subsidiary-structuring' is already defined above. Route uses it.

    // 3. Global Compliances
    'transfer-pricing-advisory': {
        id: 'transfer-pricing-advisory',
        title: 'Transfer Pricing Advisory',
        description: 'International pricing compliance.',
        details: 'Ensure compliance with global transfer pricing regulations as you expand internationally. Our transfer pricing advisory services help you set up and maintain pricing policies for intercompany transactions, aligned with local tax laws and international guidelines. We provide thorough documentation, risk management strategies and support during audits, minimizing potential tax liabilities.',
        heroImage: '/images/services/tp.jpg',
        deliverables: ['Pricing Policies', 'Documentation', 'Risk Mgmt', 'Audit Support'],
        benefits: [
            { title: 'Compliance', desc: 'Global regulation adherence.', icon: Globe },
            { title: 'Strategy', desc: 'Risk management.', icon: ShieldCheck },
            { title: 'Support', desc: 'Audit assistance.', icon: Users },
            { title: 'Savings', desc: 'Minimize liabilities.', icon: PiggyBank }
        ]
    },
    'international-tax-compliance': {
        id: 'international-tax-compliance',
        title: 'International Tax Compliance',
        description: 'Cross-border tax adherence.',
        details: 'Stay compliant with international tax regulations as you set up your business abroad. Our international tax compliance services ensure that your cross-border operations adhere to local tax laws, transfer pricing guidelines and reporting requirements. We help you navigate tax treaties, VAT/GST and compliance frameworks across multiple jurisdictions, reducing the risk of penalties.',
        heroImage: '/images/services/intl-tax.jpg',
        deliverables: ['Cross-border Adherence', 'Reporting', 'Treaty Navigation', 'Framework Mgmt'],
        benefits: [
            { title: 'Adherence', desc: 'Follow local laws.', icon: Scale },
            { title: 'Navigation', desc: 'Handle tax treaties.', icon: Map },
            { title: 'Risk', desc: 'Reduce penalties.', icon: ShieldCheck },
            { title: 'Coverage', desc: 'Multiple jurisdictions.', icon: Globe }
        ]
    },
    'regulatory-management': {
        id: 'regulatory-management',
        title: 'International Regulatory Compliance',
        description: 'Seamless global operations.',
        details: 'Ensure your business meets all international regulatory requirements as you expand globally. Our cross-border regulatory compliance services help you navigate complex laws across jurisdictions. We provide expert guidance on meeting local and international standards, ensuring your business operates seamlessly and in full compliance.',
        heroImage: '/images/services/intl-reg.jpg',
        deliverables: ['Requirement Meeting', 'Complex Law Navigation', 'Guidance', 'seamless Ops'],
        benefits: [
            { title: 'Compliance', desc: 'Meet all standards.', icon: BadgeCheck },
            { title: 'Guidance', desc: 'Expert advice.', icon: Briefcase },
            { title: 'Operations', desc: 'Seamless functioning.', icon: TrendingUp },
            { title: 'Navigation', desc: 'Handle complexity.', icon: Map }
        ]
    },

    // 4. GIFT IFSC
    'setup-assistance': {
        id: 'setup-assistance',
        title: 'Setup Assistance',
        description: 'Feasibility and setup analysis.',
        details: 'Setting up in GIFT IFSC first requires a thorough use case analysis for your business. We provide comprehensive support for this analysis, followed by a cost-benefit analysis to determine the feasibility of setting up your business in GIFT IFSC.',
        heroImage: '/images/services/gift-setup.jpg',
        deliverables: ['Use Case Analysis', 'Cost-Benefit Analysis', 'Feasibility Study', 'Support'],
        benefits: [
            { title: 'Analysis', desc: 'Thorough use case study.', icon: FileText },
            { title: 'Feasibility', desc: 'Determine viability.', icon: Scale },
            { title: 'Clarity', desc: 'Cost-benefit view.', icon: Calculator },
            { title: 'Support', desc: 'Comprehensive assistance.', icon: Users }
        ]
    },
    'regulatory-tax-advisory-ifsc': {
        id: 'regulatory-tax-advisory-ifsc',
        title: 'GIFT Regulatory & Tax Advisory',
        description: 'IFSC landscape navigation.',
        details: 'We help you navigate the complex regulatory and tax landscape in GIFT IFSC, ensuring that your business is optimally structured and remains compliant with all relevant laws and regulations.',
        heroImage: '/images/services/gift-tax.jpg',
        deliverables: ['Landscape Navigation', 'Structuring', 'Compliance', 'Advisory'],
        benefits: [
            { title: 'Navigation', desc: 'Handle complexity.', icon: Map },
            { title: 'Structure', desc: 'Optimal setup.', icon: Building2 },
            { title: 'Compliance', desc: 'Stay legal.', icon: Scale },
            { title: 'Knowledge', desc: 'Expert advice.', icon: Briefcase }
        ]
    },
    'legal-compliance-support': {
        id: 'legal-compliance-support',
        title: 'GIFT Legal & Compliance Support',
        description: 'Ongoing business support.',
        details: 'We also assist with your ongoing business needs, ensuring that your operations run smoothly and remain in compliance with all regulatory requirements.',
        heroImage: '/images/services/gift-legal.jpg',
        deliverables: ['Ongoing Support', 'Operational Smoothness', 'Compliance', 'Assistance'],
        benefits: [
            { title: 'Support', desc: 'Continuous assistance.', icon: Users },
            { title: 'Operations', desc: 'Smooth running.', icon: TrendingUp },
            { title: 'Compliance', desc: 'Regulatory adherence.', icon: Scale },
            { title: 'Peace', desc: 'Hassle-free business.', icon: Smile }
        ]
    }
};
