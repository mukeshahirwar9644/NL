import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Compass, Eye, Layers, Sparkles, Building, School, Home, Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { BlueprintGrid } from '../ui/BlueprintGrid';
import { DimensionLine } from '../ui/DimensionLine';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export const Hero: React.FC = () => {
  // Visual Stage Mode: 'blueprint' | 'structure' | 'completed'
  const [activeStage, setActiveStage] = useState<'blueprint' | 'structure' | 'completed'>('completed');

  const floatingCards = [
    {
      title: 'Schools',
      tagline: 'Built for Learning',
      icon: School,
      position: 'top-4 -left-4 sm:-left-8',
      delay: 0.2,
    },
    {
      title: 'Homes',
      tagline: 'Built for Living',
      icon: Home,
      position: 'top-1/3 -right-4 sm:-right-8',
      delay: 0.4,
    },
    {
      title: 'Community Spaces',
      tagline: 'Built for Everyone',
      icon: Users,
      position: 'bottom-20 -left-4 sm:-left-6',
      delay: 0.6,
    },
    {
      title: 'Custom Projects',
      tagline: 'Built Around Your Needs',
      icon: Building,
      position: 'bottom-4 -right-4 sm:-right-6',
      delay: 0.8,
    },
  ];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-earth-950 text-white flex items-center justify-center pt-28 pb-16 lg:py-24 overflow-hidden">
      {/* Background blueprint grid & lighting gradient */}
      <BlueprintGrid variant="dark" withCoordinates={true} />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sand-700/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Contractor Architectural Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-earth-900/90 border border-terracotta-800/80 text-terracotta-300 font-mono text-xs mb-6 shadow-sm"
            >
              <Compass className="w-3.5 h-3.5 text-terracotta-400 animate-spin" style={{ animationDuration: '12s' }} />
              <span className="font-semibold tracking-wider uppercase">Nandlal Ahirwar</span>
              <span className="opacity-40">|</span>
              <span className="text-sand-300">Village Construction & Development</span>
            </motion.div>

            {/* Main Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Building Better <span className="text-terracotta-400">Villages,</span>
              <span className="block mt-2 font-serif italic font-normal text-3xl sm:text-4xl lg:text-5xl text-sand-100">
                One Project at a Time.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-sand-300 font-sans leading-relaxed max-w-xl"
            >
              From schools and homes to community buildings and village infrastructure, we build durable spaces that strengthen communities and improve everyday life across rural India.
            </motion.p>

            {/* 3 Call-To-Actions (Primary, Secondary, WhatsApp) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" icon="arrow" className="w-full sm:w-auto">
                  Start Your Project
                </Button>
              </Link>

              <Link to="/projects" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" icon="none" className="w-full sm:w-auto text-sand-100 border-earth-700 hover:bg-earth-900 hover:text-white">
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="whatsapp" size="lg" icon="whatsapp" className="w-full sm:w-auto">
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>

            {/* Subtle trust metric strip underneath hero text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 pt-6 border-t border-earth-800/80 grid grid-cols-3 gap-4 w-full max-w-md text-xs font-mono"
            >
              <div>
                <div className="text-terracotta-400 font-bold text-sm">PUKKA MASONRY</div>
                <div className="text-earth-400">Durable Materials</div>
              </div>
              <div>
                <div className="text-terracotta-400 font-bold text-sm">COMMUNITY</div>
                <div className="text-earth-400">Schools & Halls</div>
              </div>
              <div>
                <div className="text-terracotta-400 font-bold text-sm">PRACTICAL</div>
                <div className="text-earth-400">Climate Ready</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Architectural Transformation Visualizer */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            {/* Interactive Stage Selector Bar */}
            <div className="flex items-center justify-between bg-earth-900/90 p-1.5 rounded-sm border border-earth-800 mb-3 backdrop-blur-sm z-20 relative">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveStage('blueprint')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-xs transition-all flex items-center gap-1.5 ${
                    activeStage === 'blueprint'
                      ? 'bg-terracotta-600 text-white font-semibold shadow-sm'
                      : 'text-sand-300 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>01. Blueprint</span>
                </button>

                <button
                  onClick={() => setActiveStage('structure')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-xs transition-all flex items-center gap-1.5 ${
                    activeStage === 'structure'
                      ? 'bg-terracotta-600 text-white font-semibold shadow-sm'
                      : 'text-sand-300 hover:text-white'
                  }`}
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>02. Structure</span>
                </button>

                <button
                  onClick={() => setActiveStage('completed')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-xs transition-all flex items-center gap-1.5 ${
                    activeStage === 'completed'
                      ? 'bg-terracotta-600 text-white font-semibold shadow-sm'
                      : 'text-sand-300 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>03. Completed</span>
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-terracotta-400/80 pr-2">
                <Eye className="w-3 h-3" />
                <span>3D VIEW</span>
              </div>
            </div>

            {/* Main Visual Display Container */}
            <div className="relative rounded-sm overflow-hidden border border-earth-700 bg-earth-900/60 shadow-2xl aspect-[16/10] group">
              {/* Architectural measurement lines */}
              <DimensionLine label="ELEVATION 18.5m" className="absolute top-2 left-4 right-4 z-20 pointer-events-none opacity-80" />
              
              <AnimatePresence mode="wait">
                {activeStage === 'blueprint' && (
                  <motion.div
                    key="blueprint"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src="/images/hero/hero-blueprint.jpg"
                      alt="Architectural Blueprint wireframe"
                      className="w-full h-full object-cover object-center filter contrast-125"
                    />
                    <div className="absolute inset-0 bg-earth-950/30"></div>
                    <div className="absolute bottom-3 left-3 bg-earth-950/80 backdrop-blur-sm border border-terracotta-600/40 text-terracotta-300 px-2.5 py-1 text-xs font-mono rounded-xs">
                      STAGE 01 // ARCHITECTURAL BLUEPRINT & CAD
                    </div>
                  </motion.div>
                )}

                {activeStage === 'structure' && (
                  <motion.div
                    key="structure"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src="/images/architecture/brickwork-craft.jpg"
                      alt="Under construction structural frame"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-950/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 bg-earth-950/80 backdrop-blur-sm border border-terracotta-600/40 text-terracotta-300 px-2.5 py-1 text-xs font-mono rounded-xs">
                      STAGE 02 // FOUNDATION, BRICKWORK & RCC FRAMING
                    </div>
                  </motion.div>
                )}

                {activeStage === 'completed' && (
                  <motion.div
                    key="completed"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src="/images/hero/hero-school.jpg"
                      alt="Completed modern village school"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 bg-earth-950/80 backdrop-blur-sm border border-terracotta-600/40 text-terracotta-300 px-2.5 py-1 text-xs font-mono rounded-xs">
                      STAGE 03 // COMPLETED MODERN RURAL SCHOOL
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating Architectural Cards */}
              {floatingCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: card.delay }}
                    className={`absolute ${card.position} z-20 hidden sm:flex items-center gap-2.5 bg-earth-950/90 backdrop-blur-md px-3.5 py-2 rounded-sm border border-earth-700 shadow-xl pointer-events-none hover:border-terracotta-500 transition-colors animate-float-slow`}
                    style={{ animationDelay: `${idx * 1.5}s` }}
                  >
                    <div className="p-1.5 rounded-xs bg-terracotta-600/20 text-terracotta-400 border border-terracotta-500/30">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-heading font-bold text-white">{card.title}</div>
                      <div className="text-[10px] font-sans text-sand-300 italic">{card.tagline}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick caption under visual */}
            <div className="mt-3 flex items-center justify-between text-xs text-earth-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
                Interactive Architectural Transformation
              </span>
              <span className="text-terracotta-400">Click tabs above to preview stages</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
