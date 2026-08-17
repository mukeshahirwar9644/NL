import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { School, Home, Users, Milestone } from 'lucide-react';

export const VillageDevelopmentStory: React.FC = () => {
  const [activeMarker, setActiveMarker] = useState<number | null>(0);

  const markers = [
    {
      id: 0,
      title: 'School',
      purpose: 'Learning & Growth',
      description: 'Well-ventilated classrooms with shaded verandahs where village children receive quality education in a protective, inspiring atmosphere.',
      icon: School,
      top: '38%',
      left: '24%',
    },
    {
      id: 1,
      title: 'Community Hall',
      purpose: 'Togetherness & Civic Life',
      description: 'Central gathering pavilion for Gram Panchayat meetings, social functions, festive celebrations, and public health assemblies.',
      icon: Users,
      top: '52%',
      left: '52%',
    },
    {
      id: 2,
      title: 'Family Home',
      purpose: 'Safety & Daily Living',
      description: 'Durable pukka residential home with climate-smart roofing, open courtyards, and clean sanitation built for multi-generational living.',
      icon: Home,
      top: '32%',
      left: '78%',
    },
    {
      id: 3,
      title: 'Paved Approach Road',
      purpose: 'All-Weather Connectivity',
      description: 'Reinforced concrete road with covered stormwater drainage ensuring reliable access for school buses, tractors, and medical transit.',
      icon: Milestone,
      top: '74%',
      left: '38%',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-earth-950 text-white overflow-hidden" id="village-impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          theme="dark"
          badge="Community Impact"
          tagline="Rural Architecture"
          title="Building More Than Buildings."
          subtitle="Good construction is not only about walls and roofs. It is about creating places where children learn, families live, and communities come together."
          align="center"
        />

        {/* Interactive Rural Landscape Showcase Canvas */}
        <div className="relative rounded-sm overflow-hidden border border-earth-800 bg-earth-900 shadow-2xl mt-8">
          
          {/* Main Panorama Image */}
          <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] w-full overflow-hidden">
            <img
              src="/images/projects/village-road.jpg"
              alt="Rural village development landscape"
              className="w-full h-full object-cover filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth-950/90 via-earth-950/30 to-transparent"></div>

            {/* Interactive Hotspot Pins */}
            {markers.map((marker) => {
              const Icon = marker.icon;
              const isSelected = activeMarker === marker.id;
              return (
                <div
                  key={marker.id}
                  style={{ top: marker.top, left: marker.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => setActiveMarker(isSelected ? null : marker.id)}
                    className={`relative p-2.5 sm:p-3 rounded-full border-2 transition-all duration-300 shadow-2xl flex items-center justify-center ${
                      isSelected
                        ? 'bg-terracotta-600 border-white text-white scale-125'
                        : 'bg-earth-950/90 border-terracotta-500 text-terracotta-400 hover:scale-110'
                    }`}
                    aria-label={`View ${marker.title} details`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    
                    {/* Pulsing Beacon Ring */}
                    <span className="absolute -inset-1 rounded-full bg-terracotta-500/40 animate-ping pointer-events-none"></span>
                  </button>

                  {/* Pin Title Label */}
                  <div className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap bg-earth-950/90 border border-earth-800 text-[11px] font-mono px-2 py-0.5 rounded text-sand-200 pointer-events-none">
                    {marker.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Marker Detail Panel / Drawer */}
          <div className="p-6 sm:p-8 bg-earth-950 border-t border-earth-800">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {markers.map((marker) => {
                const Icon = marker.icon;
                const isSelected = activeMarker === marker.id;
                return (
                  <button
                    key={marker.id}
                    onClick={() => setActiveMarker(marker.id)}
                    className={`p-4 rounded-sm border text-left transition-all ${
                      isSelected
                        ? 'bg-earth-900 border-terracotta-500 shadow-md'
                        : 'bg-earth-900/40 border-earth-800 hover:border-earth-700'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`p-1.5 rounded-xs ${isSelected ? 'bg-terracotta-600 text-white' : 'bg-earth-800 text-terracotta-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-heading font-bold text-sm text-white">{marker.title}</span>
                    </div>
                    <div className="text-xs font-serif italic text-terracotta-300 mb-1">{marker.purpose}</div>
                    <p className="text-xs font-sans text-sand-300 leading-relaxed line-clamp-2">{marker.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
