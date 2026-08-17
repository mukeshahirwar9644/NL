import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Quote, School, Home, Users } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const getIcon = (type: string) => {
    if (type.includes('School')) return School;
    if (type.includes('Residential')) return Home;
    return Users;
  };

  return (
    <section className="relative py-20 lg:py-28 bg-earth-50 text-earth-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Community Voices"
          tagline="Real Experiences"
          title="Built For People Who Live There."
          subtitle="Feedback from village school committees, panchayat leaders, and homeowners."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => {
            const Icon = getIcon(t.projectType);
            return (
              <div
                key={t.id}
                className="bg-white p-8 rounded-sm border border-sand-300 hover:border-terracotta-500 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-8 h-8 text-terracotta-600/30" />
                    <div className="p-2 rounded-xs bg-sand-100 text-terracotta-700 border border-sand-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-earth-800 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-sand-200">
                  <div className="font-heading font-bold text-sm text-earth-950">
                    {t.person}
                  </div>
                  <div className="text-xs text-terracotta-700 font-medium">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-earth-400 font-mono mt-0.5">
                    {t.location}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
