export interface BlogPost {
    id: string;
    title: string;
    author: string;
    date: string;
    category: string;
    description: string;
    imageUrl: string;
    content: string; // HTML or Markdown content
}

export const blogs: BlogPost[] = [
    {
        id: 'turning-code-into-gold',
        title: "A CEO's Guide To Turning Code Into Gold Through Effective Software Licensing",
        author: 'Ankit Singh',
        date: 'October 21, 2024',
        category: 'Intellectual Property, Legal Help, Startups, Technology',
        description: 'Learn how to maximize the value of your software through strategic licensing.',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600', // Coding/Tech
        content: '<p>Content coming soon...</p>'
    },
    {
        id: 'hidden-costs-software-contracts',
        title: 'Hidden Costs In Software Contracts: The Impact Of License Scope',
        author: 'Ankit Singh',
        date: 'October 21, 2024',
        category: 'Copyrights, Corporate, Intellectual Property, Legal Help, Startups, Technology',
        description: 'Avoid unexpected expenses by understanding the scope of your software licenses.',
        imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800', // Contract/Signing
        content: '<p>Content coming soon...</p>'
    },
    {
        id: 'pro-bono-consultations',
        title: 'Expert Legal Guidance For Your Startup: Pro Bono Consultations',
        author: 'Ankit Singh',
        date: 'October 21, 2024',
        category: 'Intellectual Property, Legal Help',
        description: 'Get expert legal advice for your startup without breaking the bank.',
        imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800', // Gavel/Legal
        content: '<p>Content coming soon...</p>'
    },
    {
        id: 'technical-co-founder',
        title: 'Forget White Label, Get A Code Comrade: Why You Need A Technical Co-Founder (And How To Do It Right)',
        author: 'Ankit Singh',
        date: 'October 18, 2024',
        category: 'Corporate, Startups, Technology',
        description: 'Why a technical co-founder is better than white-label solutions for your startup.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800', // Team/Collaboration
        content: '<p>Content coming soon...</p>'
    },
    {
        id: 'foolproof-from-adani-fiasco',
        title: 'Corporate Actions You Should Take To Foolproof Yourself From Adani Fiasco',
        author: 'Ankit Singh',
        date: 'February 25, 2023',
        category: 'Cases and Verdicts, Corporate, Legal Help, Management',
        description: 'Lessons learned from the Adani fiasco and how to protect your corporation.',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800', // Skyscrapers/Corporate
        content: '<p>Content coming soon...</p>'
    },
    {
        id: 'protecting-digital-content',
        title: 'Protecting Your Digital Content With Copyrights',
        author: 'singhvaibhav109',
        date: 'October 29, 2014',
        category: 'Copyrights',
        description: 'Essential strategies for safeguarding your digital assets.',
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', // Digital Lock/Security
        content: '<p>Content coming soon...</p>'
    }
];
