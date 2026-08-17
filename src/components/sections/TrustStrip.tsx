import React from 'react';
import { ShieldCheck, Compass, MapPin, CheckCircle2, HeartHandshake } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const pillars = [
    { title: 'Quality Construction', icon: ShieldCheck, desc: 'Durable brick & RCC' },
    { title: 'Practical Design', icon: Compass, desc: 'Climate-responsive' },
    { title: 'Local Understanding', icon: MapPin, desc: 'Rural ground reality' },
    { title: 'Reliable Execution', icon: CheckCircle2, desc: 'On-time milestone delivery' },
    { title: 'Community Focus', icon: HeartHandshake, desc: 'Built for real people' },
  ];

  return (
    <section className="relative bg-earth-900 border-y border-earth-800 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Ticker Phrase */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono tracking-widest text-terracotta-400 uppercase text-center pb-6 border-b border-earth-800/80">
          <span>Building</span>
          <span className="text-earth-600">•</span>
          <span>Developing</span>
          <span className="text-earth-600">•</span>
          <span>Improving</span>
          <span className="text-earth-600">•</span>
          <span>Serving</span>
        </div>

        {/* 5 Key Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-6 items-center">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 group"
              >
                <div className="p-2.5 rounded-sm bg-earth-950 text-terracotta-400 border border-earth-800 group-hover:border-terracotta-500/50 transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-sand-100 group-hover:text-white transition-colors">
                    {pillar.title}
                  </div>
                  <div className="font-sans text-xs text-earth-400 mt-0.5">
                    {pillar.desc}
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
