import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { BlueprintGrid } from '../ui/BlueprintGrid';
import { Layers, Building, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const ArchitecturalShowcase: React.FC = () => {
  const [activeStage, setActiveStage] = useState<0 | 1 | 2>(0);

  const stages = [
    {
      id: 'concept',
      number: '01',
      title: 'Concept & Blueprint',
      badge: 'STAGE 01 // ARCHITECTURAL DRAFTING',
      image: '/images/hero/hero-blueprint.jpg',
      icon: Layers,
      description:
        'Every project starts with site analysis, soil inspection, and precise architectural drafting. We create functional layouts with optimized airflow, lighting, and load-bearing calculations.',
      keyPoints: [
        'Detailed architectural floor plans & elevations',
        'Structural load analysis for local soil conditions',
        'Material estimation and transparent costing sheet',
      ],
    },
    {
      id: 'construction',
      number: '02',
      title: 'Structure & Execution',
      badge: 'STAGE 02 // RCC & BRICK MASONRY',
      image: '/images/architecture/brickwork-craft.jpg',
      icon: Building,
      description:
        'The blueprint comes to life on the ground. We execute deep foundation footing, plinth beam reinforcement, high-grade brick masonry, and RCC roof slab casting with rigorous water curing.',
      keyPoints: [
        'Reinforced plinth beam & column grid casting',
        'First-class red clay brickwork in uniform mortar bonds',
        'Integrated plumbing, electrical conduits & lintel bands',
      ],
    },
    {
      id: 'completion',
      number: '03',
      title: 'Completed Reality',
      badge: 'STAGE 03 // DELIVERED TO COMMUNITY',
      image: '/images/hero/hero-school.jpg',
      icon: Sparkles,
      description:
        'The finished building stands proud—weatherproofed, aesthetically dignified, and ready to serve. From smooth plastering to tiled verandahs and sturdy boundary walls, every detail is verified.',
      keyPoints: [
        'Smooth weather-resistant plaster and exterior finish',
        'Kota stone / tile flooring and child-safe fixtures',
        'Formal joint inspection walkthrough and handover',
      ],
    },
  ];

  const current = stages[activeStage];

  return (
    <section className="relative py-20 lg:py-28 bg-earth-900 text-white overflow-hidden" id="transformation">
      <BlueprintGrid variant="dark" withCoordinates={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          theme="dark"
          badge="Signature Process"
          tagline="Architectural Transformation"
          title="From Plan To Reality."
          subtitle="Watch how an architectural vision progresses from technical blueprint lines to a completed landmark for the village."
          align="center"
        />

        {/* 3-Step Interactive Timeline Switcher */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 max-w-2xl mx-auto">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx as 0 | 1 | 2)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-sm border font-mono text-xs transition-all duration-300 ${
                  isActive
                    ? 'bg-terracotta-600 border-terracotta-500 text-white shadow-lg'
                    : 'bg-earth-950/80 border-earth-800 text-sand-300 hover:border-earth-700 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="font-semibold">{stage.number}. {stage.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-earth-950/90 rounded-sm border border-earth-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
          
          {/* Visual Showcase Frame */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] rounded-sm overflow-hidden border border-earth-700 bg-black shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-transparent to-transparent"></div>
                  
                  {/* Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-earth-950/90 backdrop-blur-md px-3 py-1 text-xs font-mono text-terracotta-400 border border-earth-700 rounded-xs">
                    {current.badge}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Explanation & Key Checkpoints */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="font-mono text-xs text-terracotta-400 uppercase tracking-widest mb-1">
                STAGE {current.number} OF 03
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base font-sans text-sand-300 leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Checkpoints */}
              <div className="space-y-3 pt-4 border-t border-earth-800">
                {current.keyPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-sand-200">
                    <CheckCircle2 className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage Navigation & CTA */}
            <div className="mt-8 pt-6 border-t border-earth-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStage(idx as 0 | 1 | 2)}
                    aria-label={`Jump to stage ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeStage === idx ? 'w-8 bg-terracotta-500' : 'w-2 bg-earth-700 hover:bg-earth-600'
                    }`}
                  />
                ))}
              </div>

              <Link to="/contact">
                <Button variant="primary" size="sm" icon="arrow">
                  Discuss Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
