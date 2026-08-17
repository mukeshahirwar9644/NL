import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight, School, Home, Users, Milestone, RefreshCw, Layers, Check } from 'lucide-react';
import { servicesData } from '../../data/services';
import { getServiceWhatsAppUrl } from '../../lib/whatsapp';
import { BlueprintGrid } from '../ui/BlueprintGrid';

export const ServicesSection: React.FC = () => {
  // Map icons for each service
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'school-construction':
        return School;
      case 'residential-construction':
        return Home;
      case 'community-buildings':
        return Users;
      case 'village-infrastructure':
        return Milestone;
      case 'renovation-improvement':
        return RefreshCw;
      case 'custom-construction':
      default:
        return Layers;
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-earth-950 text-white overflow-hidden" id="services">
      <BlueprintGrid variant="dark" withCoordinates={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            theme="dark"
            badge="Scope of Works"
            tagline="Village Construction Services"
            title="What We Build"
            subtitle="Specialized rural construction engineered for durability, climate resilience, and local community needs."
            className="mb-0"
          />
          <Link
            to="/services"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terracotta-400 hover:text-terracotta-300 py-2 border-b border-terracotta-500/50 group"
          >
            <span>View Detailed Specifications</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric 6-Card Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const Icon = getServiceIcon(service.id);
            return (
              <div
                key={service.id}
                className="group relative bg-earth-900/90 rounded-sm border border-earth-800 hover:border-terracotta-500 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-terracotta-900/10"
              >
                {/* Top Image Frame with Zoom Effect */}
                <div className="relative h-56 overflow-hidden bg-earth-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  {/* Floating Architectural Index Tag */}
                  <div className="absolute top-3 left-3 bg-earth-950/90 backdrop-blur-sm border border-earth-700 group-hover:border-terracotta-500/60 px-2.5 py-1 text-xs font-mono text-terracotta-400 rounded-xs transition-colors">
                    {service.number} // {service.category}
                  </div>

                  {/* Corner Icon Badge */}
                  <div className="absolute top-3 right-3 p-2 bg-earth-950/90 backdrop-blur-sm rounded-xs border border-earth-700 text-sand-200 group-hover:text-terracotta-400 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Tagline overlay */}
                  <div className="absolute bottom-3 left-3 text-xs font-serif italic text-sand-200">
                    "{service.tagline}"
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-terracotta-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm font-sans text-sand-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key features bullets */}
                    <div className="mt-4 pt-4 border-t border-earth-800/80 space-y-2">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-sand-400">
                          <Check className="w-3.5 h-3.5 text-terracotta-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Row */}
                  <div className="mt-6 pt-4 border-t border-earth-800 flex items-center justify-between">
                    <a
                      href={getServiceWhatsAppUrl(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-terracotta-400 group-hover:text-white transition-colors"
                    >
                      <span>Discuss Your Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>

                    <span className="font-mono text-[10px] text-earth-500 uppercase">
                      SEC-{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Decorative Architectural Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-terracotta-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-terracotta-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
