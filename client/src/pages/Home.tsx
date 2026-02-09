import React from 'react';
import Hero from '@/features/hero/Hero';
import ValueSection from '@/features/values/WhereEasLegalAddsValue';
import ReviewsSection from '@/features/reviews/ReviewsSection';
import WhatWeDoSection from '@/features/services/WhatWeDoSection';
import ResourcesSection from '@/features/resources/ResourcesSection';
import CollaborationSection from '@/features/team/CollaborationSection';
import TrustSection from '@/features/values/TrustSection';
import StrategicBreakSection from '@/features/values/StrategicBreakSection';
import FAQSection from '@/features/faq/FAQSection';
import LetsConnectSection from '@/features/contact/LetsConnectSection';
import WhereEasLegalAddsValue from '@/features/values/WhereEasLegalAddsValue';


export default function Home() {
    const handleExplore = () => {
        console.log('Exploring services');
    };

    return (
        <main>
            <Hero
                headline="EasLegal Partners"
                subheadline="One of India's most trusted legal and financial firms for founders and startups"
                ctaText="See Why Founders Trust Us"
                ctaHref="#services"
                ctaOnClick={handleExplore}
            />
            <WhereEasLegalAddsValue />
            <CollaborationSection />
            <WhatWeDoSection />
            <TrustSection />
            <StrategicBreakSection />
            <ReviewsSection />
            <FAQSection />
            <LetsConnectSection />
        </main>
    );
}
