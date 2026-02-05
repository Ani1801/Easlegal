import React from 'react';
import AboutHero from '@/features/hero/AboutHero';
import TeamSection from '@/features/team/TeamSection';

// Removed Next.js App Router metadata

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <TeamSection />
        </main>
    );
}
