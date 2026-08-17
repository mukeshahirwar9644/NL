import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { Button } from '../ui/Button';

export const FeaturedProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Schools', 'Homes', 'Community', 'Infrastructure', 'Renovation'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="relative py-20 lg:py-28 bg-earth-50 text-earth-900 overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Category Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <SectionHeading
            badge="Project Portfolio"
            tagline="Selected Works"
            title="Built For Real Life."
            subtitle="Explore our completed village schools, durable homes, panchayat halls, and rural infrastructure."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="mt-6 lg:mt-0 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-mono rounded-sm transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-earth-950 text-white border-earth-950 font-bold shadow-sm'
                    : 'bg-sand-100 text-earth-700 border-sand-300 hover:border-earth-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-sm border border-sand-300 hover:border-terracotta-500 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              {/* Image Thumbnail */}
              <Link to={`/projects/${project.id}`} className="relative h-64 overflow-hidden block">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-earth-950/90 text-terracotta-400 font-mono text-[11px] uppercase px-2.5 py-1 rounded-xs border border-earth-700">
                  {project.category}
                </div>

                {project.year && (
                  <div className="absolute top-3 right-3 bg-white/90 text-earth-900 font-mono text-[10px] px-2 py-0.5 rounded-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-terracotta-600" />
                    <span>{project.year}</span>
                  </div>
                )}

                {/* Specs quick tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-mono bg-earth-950/70 px-2 py-0.5 rounded-xs">
                    {project.specs.area}
                  </span>
                  <span className="font-mono bg-earth-950/70 px-2 py-0.5 rounded-xs">
                    {project.specs.timeline}
                  </span>
                </div>
              </Link>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-terracotta-700 mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>

                  <Link to={`/projects/${project.id}`}>
                    <h3 className="text-xl font-heading font-bold text-earth-950 group-hover:text-terracotta-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-sm font-sans text-earth-700 leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-sand-200 flex items-center justify-between">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700"
                  >
                    <span>View Project Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Link to="/projects">
            <Button variant="secondary" size="lg" icon="arrow">
              Explore Complete Project Archive
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
