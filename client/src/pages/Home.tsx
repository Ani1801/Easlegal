import React from 'react';
import Hero from '@/features/hero/Hero';
import ValueSection from '@/features/values/ValueSection';
import ReviewsSection from '@/features/reviews/ReviewsSection';
import WhatWeDoSection from '@/features/services/WhatWeDoSection';
import ResourcesSection from '@/features/resources/ResourcesSection';
import CollaborationSection from '@/features/team/CollaborationSection';
import TrustSection from '@/features/values/TrustSection';
import FAQSection from '@/features/faq/FAQSection';
import LetsConnectSection from '@/features/contact/LetsConnectSection';


export default function Home() {
    const handleExplore = () => {
        console.log('Exploring services');
    };

    return (
        <main>
            <Hero
                headline="EasLegal Partners"
                subheadline="One of India's most trusted legal and financial firms for founders and startups"
                ctaText="Explore Our Services"
                ctaHref="#services"
                ctaOnClick={handleExplore}
            />
            <ValueSection />
            <CollaborationSection />
            <WhatWeDoSection />
            <ResourcesSection />
            <TrustSection />
            <ReviewsSection />
            <FAQSection />
            <LetsConnectSection />
        </main>
    );
}
