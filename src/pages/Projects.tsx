import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BlueprintGrid } from '../components/ui/BlueprintGrid';
import { projectsData, type Project } from '../data/projects';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { ContactCTA } from '../components/sections/ContactCTA';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Schools', 'Homes', 'Community', 'Infrastructure', 'Renovation', 'Construction'];

  const filteredProjects: Project[] = projectsData.filter((project: Project) => {
    const matchesCategory = activeCategory === 'All' || project.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24">
      {/* Subpage Header Banner */}
      <section className="relative py-16 lg:py-24 bg-earth-950 text-white overflow-hidden">
        <BlueprintGrid variant="dark" withCoordinates={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            theme="dark"
            badge="Project Archive"
            tagline="Built For Real Life"
            title="Our Construction Portfolio."
            subtitle="Browse through our rural school projects, residential family houses, community halls, and village infrastructure developments."
          />
        </div>
      </section>

      {/* Projects List & Filter Controls */}
      <section className="py-20 bg-earth-50 text-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 pb-6 border-b border-sand-300">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-mono rounded-sm transition-all border ${
                    activeCategory === cat
                      ? 'bg-earth-950 text-white border-earth-950 font-bold shadow-sm'
                      : 'bg-sand-100 text-earth-700 border-sand-300 hover:border-earth-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-sand-300 rounded-sm px-3.5 py-2 text-xs font-mono text-earth-900 placeholder-earth-400 focus:outline-none focus:border-terracotta-500"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project) => (
              <div
                key={project.id}
                className="group bg-white rounded-sm border border-sand-300 hover:border-terracotta-500 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                {/* Image */}
                <Link to={`/projects/${project.id}`} className="relative h-64 overflow-hidden block">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  <div className="absolute top-3 left-3 bg-earth-950/90 text-terracotta-400 font-mono text-[11px] uppercase px-2.5 py-1 rounded-xs border border-earth-700">
                    {project.category}
                  </div>

                  {project.year && (
                    <div className="absolute top-3 right-3 bg-white/90 text-earth-900 font-mono text-[10px] px-2 py-0.5 rounded-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-terracotta-600" />
                      <span>{project.year}</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-mono bg-earth-950/70 px-2 py-0.5 rounded-xs">{project.specs.area}</span>
                    <span className="font-mono bg-earth-950/70 px-2 py-0.5 rounded-xs">{project.specs.timeline}</span>
                  </div>
                </Link>

                {/* Content */}
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

                    <p className="mt-3 text-sm font-sans text-earth-700 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-sand-200 flex items-center justify-between">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-sand-100 rounded-sm border border-sand-300">
              <p className="font-mono text-sm text-earth-600">No projects found matching your filter.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-mono text-terracotta-600 underline font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </div>
  );
};
