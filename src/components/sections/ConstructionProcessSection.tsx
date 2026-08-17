import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { constructionSteps } from '../../data/timeline';
import { CheckCircle2, MessageSquare, Compass, HardHat, Sparkles, KeyRound } from 'lucide-react';
import { BlueprintGrid } from '../ui/BlueprintGrid';

export const ConstructionProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return MessageSquare;
      case 1:
        return Compass;
      case 2:
        return HardHat;
      case 3:
        return Sparkles;
      case 4:
      default:
        return KeyRound;
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-earth-950 text-white overflow-hidden" id="process">
      <BlueprintGrid variant="dark" withCoordinates={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          theme="dark"
          badge="Execution Roadmap"
          tagline="Step-By-Step Workflow"
          title="How We Build."
          subtitle="A clear, transparent 5-stage construction process from initial site discussion to completed key handover."
          align="center"
        />

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Connecting Line behind steps on desktop */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-earth-800 -z-0"></div>

          {constructionSteps.map((step, idx) => {
            const Icon = getStepIcon(idx);
            return (
              <div
                key={step.step}
                className="group relative bg-earth-900/90 rounded-sm border border-earth-800 hover:border-terracotta-500 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl z-10"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-bold text-terracotta-500">
                      {step.step}
                    </span>
                    <div className="p-2 rounded-xs bg-earth-950 text-sand-300 border border-earth-800 group-hover:text-terracotta-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-terracotta-400 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-serif italic text-sand-300 mt-0.5 mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs font-sans text-sand-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mt-4 pt-4 border-t border-earth-800 space-y-1.5">
                    {step.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-sand-400">
                        <CheckCircle2 className="w-3 h-3 text-terracotta-500 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-earth-800 text-[10px] font-mono text-earth-500 uppercase">
                  PHASE 0{idx + 1} OF 05
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
