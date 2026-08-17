import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { MapPin, Compass, ShieldCheck, MessageSquareCheck, SlidersHorizontal, HeartHandshake } from 'lucide-react';
import { reasonsData } from '../../data/whyChooseUs';
import { BlueprintGrid } from '../ui/BlueprintGrid';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return MapPin;
      case 'Compass':
        return Compass;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'MessageSquareCheck':
        return MessageSquareCheck;
      case 'SlidersHorizontal':
        return SlidersHorizontal;
      case 'HeartHandshake':
      default:
        return HeartHandshake;
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-earth-50 text-earth-900 overflow-hidden" id="why-us">
      <BlueprintGrid variant="light" withCoordinates={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Trust & Credibility"
          tagline="Our Work Principles"
          title="Why Choose Nandlal Ahirwar?"
          subtitle="Honest village construction rooted in practical engineering, durability, and deep respect for community needs."
          align="center"
        />

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasonsData.map((reason) => {
            const Icon = getIcon(reason.iconName);
            return (
              <div
                key={reason.id}
                className="group bg-white p-7 rounded-sm border border-sand-300 hover:border-terracotta-500 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top Index & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-sm bg-sand-100 text-terracotta-600 border border-sand-200 group-hover:bg-terracotta-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-sand-500 group-hover:text-terracotta-600 transition-colors">
                      {reason.number} // 06
                    </span>
                  </div>

                  <div className="text-xs font-serif italic text-terracotta-600 mb-1">
                    {reason.tagline}
                  </div>

                  <h3 className="text-xl font-heading font-bold text-earth-950 group-hover:text-terracotta-600 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm font-sans text-earth-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand-200 flex items-center justify-between text-xs font-mono text-sand-500">
                  <span>SPECIFICATION CHECK</span>
                  <span className="text-terracotta-600 font-bold">100% VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
