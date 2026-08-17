import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlueprintGrid } from '../components/ui/BlueprintGrid';
import { Compass, Shield, Users, CheckCircle2, Award, HardHat, MessageSquare } from 'lucide-react';
import { ContactCTA } from '../components/sections/ContactCTA';
import { CONTRACTOR_NAME, getWhatsAppUrl, PHONE_NUMBER } from '../lib/whatsapp';
import { Button } from '../components/ui/Button';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Subpage Header Banner */}
      <section className="relative py-16 lg:py-24 bg-earth-950 text-white overflow-hidden">
        <BlueprintGrid variant="dark" withCoordinates={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            theme="dark"
            badge="About Contractor"
            tagline="Philosophy & Work"
            title="Building For Real People & Real Communities."
            subtitle="Nandlal Ahirwar is dedicated to raising the standard of rural construction through honest masonry, practical engineering, and community-centered design."
          />
        </div>
      </section>

      {/* Main Story & Contractor Portrait Section */}
      <section className="py-20 bg-earth-50 text-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Official Portrait & Badges */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-sm overflow-hidden border-2 border-sand-300 shadow-2xl bg-earth-950 relative group">
                <img
                  src="/images/nandlal-ahirwar.jpg"
                  alt="Nandlal Ahirwar - Village Construction Contractor"
                  className="w-full h-[480px] sm:h-[540px] object-cover object-top transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-950/90 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-terracotta-600 text-white font-mono text-[11px] uppercase rounded-xs mb-2 shadow-sm border border-terracotta-500/50">
                    <Award className="w-3.5 h-3.5" />
                    <span>Founder & Lead Contractor</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    {CONTRACTOR_NAME}
                  </h3>
                  <div className="text-xs text-terracotta-300 font-mono mt-0.5">
                    Village Construction & Development
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-earth-950/80 backdrop-blur-sm border border-earth-700 text-terracotta-400 font-mono text-[10px] uppercase px-2.5 py-1 rounded-xs">
                  DIRECT LEADERSHIP
                </div>
              </div>

              {/* Contact card underneath portrait on mobile/desktop */}
              <div className="mt-4 p-4 bg-white rounded-sm border border-sand-300 shadow-sm flex items-center justify-between">
                <div className="text-xs font-mono text-earth-600">
                  <span>Speak Directly:</span>
                  <div className="font-bold text-earth-950 text-sm">{PHONE_NUMBER}</div>
                </div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#25D366] text-white rounded-xs hover:bg-[#20bd5a] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Narrative & Values */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-700 uppercase tracking-wider bg-sand-200/60 px-3 py-1 rounded-xs border border-sand-300">
                <HardHat className="w-3.5 h-3.5" />
                <span>On-Ground Experience & Commitment</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-earth-950 leading-tight">
                Rooted in Rural Realities. Dedicated to Long-Term Quality.
              </h2>
              
              <p className="text-earth-700 font-sans text-base leading-relaxed">
                Village construction presents unique challenges: fluctuating seasonal temperatures, varying soil strengths, heavy monsoons, and distinct functional living patterns that generic urban templates overlook.
              </p>

              <p className="text-earth-700 font-sans text-base leading-relaxed">
                <strong>{CONTRACTOR_NAME}</strong> brings a deep, hands-on understanding of these practical realities. Whether constructing a six-classroom primary school, an open Gram Panchayat pavilion, a multi-generational family home, or village road connectivity, the focus remains steadfast on durable foundations, natural cooling through thoughtful layout, and enduring material choices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-sand-200">
                <div className="flex items-start gap-3 p-3 bg-white rounded-sm border border-sand-200">
                  <CheckCircle2 className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="block font-heading text-earth-950">High-Density Red Brick</strong>
                    <span className="text-earth-600 text-xs">Proper mortar ratio and water curing</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-sm border border-sand-200">
                  <CheckCircle2 className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="block font-heading text-earth-950">RCC Superstructure</strong>
                    <span className="text-earth-600 text-xs">Engineered plinth and lintel beams</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-sm border border-sand-200">
                  <CheckCircle2 className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="block font-heading text-earth-950">Climate-Smart Layouts</strong>
                    <span className="text-earth-600 text-xs">Cross-ventilation and wide verandahs</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-sm border border-sand-200">
                  <CheckCircle2 className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <strong className="block font-heading text-earth-950">Direct Supervision</strong>
                    <span className="text-earth-600 text-xs">Personal oversight at every stage</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <Button variant="whatsapp" size="md" icon="whatsapp">
                    Chat with Nandlal Ahirwar
                  </Button>
                </a>
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Button variant="outline" size="md" icon="phone">
                    Call Directly
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Site Construction Craftsmanship Showcase */}
      <section className="py-16 bg-white border-y border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-sm overflow-hidden h-64 border border-sand-300">
              <img src="/images/architecture/brickwork-craft.jpg" alt="Brickwork craft" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 bg-earth-950/80 text-sand-200 text-xs font-mono px-2.5 py-1 rounded-xs">
                PRECISION BRICK MASONRY
              </div>
            </div>
            <div className="relative rounded-sm overflow-hidden h-64 border border-sand-300">
              <img src="/images/services/custom-construction.jpg" alt="RCC casting" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 bg-earth-950/80 text-sand-200 text-xs font-mono px-2.5 py-1 rounded-xs">
                RCC ROOF SLAB CASTING
              </div>
            </div>
            <div className="relative rounded-sm overflow-hidden h-64 border border-sand-300">
              <img src="/images/hero/hero-school.jpg" alt="Completed school" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 bg-earth-950/80 text-sand-200 text-xs font-mono px-2.5 py-1 rounded-xs">
                COMPLETED COMMUNITY BUILDING
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="py-20 bg-earth-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="dark"
            badge="Core Philosophy"
            tagline="Guiding Tenets"
            title="Our Three Guiding Pillars."
            subtitle="The fundamental values that define every project we undertake."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-8 bg-earth-950 rounded-sm border border-earth-800">
              <div className="p-3 bg-terracotta-600/20 text-terracotta-400 rounded-sm inline-block mb-4 border border-terracotta-500/30">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                1. Practical Design
              </h3>
              <p className="text-sm font-sans text-sand-300 leading-relaxed">
                We design spaces around real daily life—how families gather, how school children play, and how communities conduct meetings. No superfluous expense; only honest, functional spaces.
              </p>
            </div>

            <div className="p-8 bg-earth-950 rounded-sm border border-earth-800">
              <div className="p-3 bg-terracotta-600/20 text-terracotta-400 rounded-sm inline-block mb-4 border border-terracotta-500/30">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                2. Uncompromising Quality
              </h3>
              <p className="text-sm font-sans text-sand-300 leading-relaxed">
                From foundation depth to the grade of cement and steel, we adhere to strict standards. A building in a village should last for generations without structural distress.
              </p>
            </div>

            <div className="p-8 bg-earth-950 rounded-sm border border-earth-800">
              <div className="p-3 bg-terracotta-600/20 text-terracotta-400 rounded-sm inline-block mb-4 border border-terracotta-500/30">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                3. Community Respect
              </h3>
              <p className="text-sm font-sans text-sand-300 leading-relaxed">
                We believe that every school classroom built helps a child learn, and every community hall built strengthens village unity. This sense of social responsibility guides our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </div>
  );
};
