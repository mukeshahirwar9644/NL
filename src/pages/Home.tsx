import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { AboutPreview } from '../components/sections/AboutPreview';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ArchitecturalShowcase } from '../components/sections/ArchitecturalShowcase';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { VillageDevelopmentStory } from '../components/sections/VillageDevelopmentStory';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { ConstructionProcessSection } from '../components/sections/ConstructionProcessSection';
import { GallerySection } from '../components/sections/GallerySection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ContactCTA } from '../components/sections/ContactCTA';
import { ConsultationForm } from '../components/forms/ConsultationForm';
import { QuickQuoteCalculator } from '../components/forms/QuickQuoteCalculator';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlueprintGrid } from '../components/ui/BlueprintGrid';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Hero / 3D Architectural Visual */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. About / Introduction */}
      <AboutPreview />

      {/* 4. Services */}
      <ServicesSection />

      {/* 5. From Plan To Reality */}
      <ArchitecturalShowcase />

      {/* 6. Featured Projects */}
      <FeaturedProjects />

      {/* 7. Village Development Story */}
      <VillageDevelopmentStory />

      {/* 8. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 9. Construction Process */}
      <ConstructionProcessSection />

      {/* 10. Gallery */}
      <GallerySection />

      {/* 11. Testimonials / Trust */}
      <TestimonialsSection />

      {/* 12. Start Your Project CTA */}
      <ContactCTA />

      {/* 13. Consultation & Quick Quote Section */}
      <section className="relative py-20 lg:py-28 bg-earth-950 text-white overflow-hidden" id="get-quote">
        <BlueprintGrid variant="dark" withCoordinates={true} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            theme="dark"
            badge="Get in Touch"
            tagline="Fast Consultation"
            title="Let's Build Something Meaningful."
            subtitle="Send your project requirements or calculate an instant estimate for your village construction work."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto mt-8">
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
            <div className="lg:col-span-5">
              <QuickQuoteCalculator />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
