import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlueprintGrid } from '../components/ui/BlueprintGrid';
import { servicesData, type Service } from '../data/services';
import { Button } from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { getServiceWhatsAppUrl } from '../lib/whatsapp';
import { ContactCTA } from '../components/sections/ContactCTA';

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Subpage Header Banner */}
      <section className="relative py-16 lg:py-24 bg-earth-950 text-white overflow-hidden">
        <BlueprintGrid variant="dark" withCoordinates={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            theme="dark"
            badge="Construction Capabilities"
            tagline="Scope of Services"
            title="What We Build & Develop."
            subtitle="Explore our specialized construction services tailored specifically for rural communities, educational structures, and residential homes."
          />
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-20 bg-earth-50 text-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {servicesData.map((service: Service, index: number) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 bg-white rounded-sm border border-sand-300 shadow-sm"
              >
                {/* Visual Image Frame */}
                <div className={`lg:col-span-6 relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-sm overflow-hidden aspect-[16/11] border border-sand-300 shadow-md group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-earth-950/90 text-terracotta-400 font-mono text-xs px-3 py-1 rounded-xs">
                      {service.number} // {service.category}
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className={`lg:col-span-6 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div>
                    <div className="text-xs font-serif italic text-terracotta-600 mb-1">
                      "{service.tagline}"
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-earth-950">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm sm:text-base font-sans text-earth-700 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-6 pt-6 border-t border-sand-200 space-y-2.5">
                      <div className="font-mono text-xs uppercase tracking-wider text-earth-500 mb-2">
                        Key Specifications & Features:
                      </div>
                      {service.features.map((feature: string, fIdx: number) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-earth-800">
                          <CheckCircle2 className="w-4 h-4 text-terracotta-600 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Action for this service */}
                  <div className="mt-8 pt-6 border-sand-200 flex flex-wrap items-center gap-3">
                    <a
                      href={getServiceWhatsAppUrl(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="whatsapp" size="md" icon="whatsapp">
                        Discuss {service.title} on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </div>
  );
};
