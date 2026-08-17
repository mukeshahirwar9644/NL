import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlueprintGrid } from '../components/ui/BlueprintGrid';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { ConstructionProcessSection } from '../components/sections/ConstructionProcessSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ContactCTA } from '../components/sections/ContactCTA';

export const WhyChooseUs: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Subpage Header Banner */}
      <section className="relative py-16 lg:py-24 bg-earth-950 text-white overflow-hidden">
        <BlueprintGrid variant="dark" withCoordinates={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            theme="dark"
            badge="Trust & Reliability"
            tagline="Our Core Commitments"
            title="Why Choose Nandlal Ahirwar?"
            subtitle="Understand how our grounded local expertise, uncompromising focus on structural quality, and clear communication set us apart."
          />
        </div>
      </section>

      {/* 6 Reasons Section */}
      <WhyChooseUsSection />

      {/* Construction Process Section */}
      <ConstructionProcessSection />

      {/* Community Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <ContactCTA />
    </div>
  );
};
