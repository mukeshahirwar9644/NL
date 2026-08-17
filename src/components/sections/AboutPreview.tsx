import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Compass, Shield, Users, Award } from 'lucide-react';
import { BlueprintGrid } from '../ui/BlueprintGrid';
import { CONTRACTOR_NAME } from '../../lib/whatsapp';

export const AboutPreview: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-earth-50 text-earth-900 overflow-hidden" id="about-contractor">
      <BlueprintGrid variant="light" withCoordinates={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official Contractor Portrait & Architecture Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border-2 border-sand-300 shadow-2xl group bg-earth-950">
              <img
                src="/images/nandlal-ahirwar.jpg"
                alt="Nandlal Ahirwar - Village Construction & Development Contractor"
                className="w-full h-[460px] sm:h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-950/90 via-earth-950/20 to-transparent"></div>
              
              {/* Overlay Contractor Identification Badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-terracotta-600 text-white font-mono text-[11px] uppercase rounded-xs mb-2 shadow-sm border border-terracotta-500/50">
                  <Award className="w-3.5 h-3.5" />
                  <span>Lead Contractor & Founder</span>
                </div>
                <div className="font-heading font-bold text-2xl text-white">
                  {CONTRACTOR_NAME}
                </div>
                <div className="text-xs text-terracotta-300 font-mono mt-0.5">
                  Village Construction & Rural Development
                </div>
                <p className="text-xs text-sand-200 mt-2 font-serif italic max-w-sm">
                  "Dedicated to quality masonry, practical design, and long-lasting rural community spaces."
                </p>
              </div>

              {/* Architectural Grid Corner Indicators */}
              <div className="absolute top-3 left-3 bg-earth-950/80 backdrop-blur-sm border border-earth-700 text-terracotta-400 font-mono text-[10px] uppercase px-2 py-0.5 rounded-xs">
                OFFICIAL CONTRACTOR PROFILE
              </div>
            </div>

            {/* Inset Secondary Trust Card */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 w-60 rounded-sm overflow-hidden border-2 border-white shadow-2xl bg-earth-900 p-4 text-white">
              <div className="flex items-center gap-2 text-terracotta-400 font-mono text-[10px] uppercase mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span>DIRECT SUPERVISION</span>
              </div>
              <div className="text-xs font-heading font-bold text-sand-100 leading-tight">
                Hands-On Site Oversight
              </div>
              <div className="text-[11px] text-earth-300 mt-1">
                Every foundation, wall, and roof slab is personally inspected on ground.
              </div>
            </div>
          </div>

          {/* Right Column: Story & Principles */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <SectionHeading
              badge="About Contractor"
              tagline="Nandlal Ahirwar"
              title="More Than Construction. We Build For Communities."
              subtitle="Nandlal Ahirwar works on construction projects that serve real people and real communities — from schools where children learn to homes where families grow and community buildings where people come together."
            />

            {/* Three Core Principles */}
            <div className="space-y-5 w-full mt-2">
              
              {/* Our Approach */}
              <div className="flex items-start gap-4 p-4 rounded-sm bg-sand-100/80 border border-sand-200 hover:border-terracotta-400/50 transition-colors">
                <div className="p-2.5 rounded-sm bg-terracotta-600/10 text-terracotta-600 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-earth-950">
                    Our Approach
                  </h3>
                  <p className="font-sans text-sm text-earth-700 mt-1 leading-relaxed">
                    Practical construction designed around real needs. We prioritize functional floor plans, natural daylighting, and robust materials that endure without unnecessary maintenance costs.
                  </p>
                </div>
              </div>

              {/* Our Values */}
              <div className="flex items-start gap-4 p-4 rounded-sm bg-sand-100/80 border border-sand-200 hover:border-terracotta-400/50 transition-colors">
                <div className="p-2.5 rounded-sm bg-terracotta-600/10 text-terracotta-600 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-earth-950">
                    Our Values
                  </h3>
                  <p className="font-sans text-sm text-earth-700 mt-1 leading-relaxed">
                    Quality, honesty, reliability, and commitment. We maintain clear communication on material grades, structural depth, and project timelines from the first shovel to the final coat.
                  </p>
                </div>
              </div>

              {/* Our Work */}
              <div className="flex items-start gap-4 p-4 rounded-sm bg-sand-100/80 border border-sand-200 hover:border-terracotta-400/50 transition-colors">
                <div className="p-2.5 rounded-sm bg-terracotta-600/10 text-terracotta-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-earth-950">
                    Our Work
                  </h3>
                  <p className="font-sans text-sm text-earth-700 mt-1 leading-relaxed">
                    From individual village homes built for growing families to community-focused schools, panchayat buildings, and rural road networks that elevate daily life.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-4">
              <Link to="/about">
                <Button variant="primary" size="md" icon="arrow">
                  Read Full Profile
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="md" icon="none">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
