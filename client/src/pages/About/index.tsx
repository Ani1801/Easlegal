import React from 'react';
import AboutHero from '@/features/hero/AboutHero';
import TeamSection from '@/features/team/TeamSection';
import MissionBridge from '@/features/about/MissionBridge';

// Removed Next.js App Router metadata

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <MissionBridge />
            <TeamSection />
        </main>
    );
}
