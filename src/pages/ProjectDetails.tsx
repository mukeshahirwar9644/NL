import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData, type Project } from '../data/projects';
import { BlueprintGrid } from '../components/ui/BlueprintGrid';
import { Button } from '../components/ui/Button';
import { LightboxModal } from '../components/ui/LightboxModal';
import { getProjectWhatsAppUrl } from '../lib/whatsapp';
import { MapPin, ArrowLeft, ZoomIn, Layers, HardHat, Compass } from 'lucide-react';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const project: Project | undefined = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-earth-50 text-earth-900 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-heading font-bold mb-4">Project Not Found</h1>
        <p className="text-earth-600 font-sans mb-6">The requested project profile could not be located.</p>
        <Link to="/projects">
          <Button variant="primary" size="md" icon="arrow">
            Back to All Projects
          </Button>
        </Link>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen pt-24 bg-earth-50 text-earth-900">
      
      {/* Top Back Navigation Bar */}
      <div className="bg-earth-900 text-sand-200 py-4 border-b border-earth-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-mono text-terracotta-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO PREVIOUS VIEW</span>
          </button>

          <div className="text-xs font-mono text-earth-400">
            REF: PRJ-{project.id.toUpperCase().slice(0, 8)}
          </div>
        </div>
      </div>

      {/* Project Hero Header */}
      <section className="relative py-12 lg:py-16 bg-earth-950 text-white overflow-hidden">
        <BlueprintGrid variant="dark" withCoordinates={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-terracotta-400 uppercase tracking-widest mb-3">
            <span>{project.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.location}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-sand-300 font-sans max-w-3xl leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Quick Specifications Strip */}
          <div className="mt-8 pt-6 border-t border-earth-800 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl font-mono text-xs">
            <div>
              <div className="text-earth-500 uppercase text-[10px]">Built Area</div>
              <div className="text-sand-100 font-bold text-sm mt-0.5">{project.specs.area}</div>
            </div>
            <div>
              <div className="text-earth-500 uppercase text-[10px]">Timeline</div>
              <div className="text-sand-100 font-bold text-sm mt-0.5">{project.specs.timeline}</div>
            </div>
            <div>
              <div className="text-earth-500 uppercase text-[10px]">Structural Frame</div>
              <div className="text-sand-100 font-bold text-sm mt-0.5 truncate">{project.specs.foundation}</div>
            </div>
            <div>
              <div className="text-earth-500 uppercase text-[10px]">Primary Materials</div>
              <div className="text-terracotta-400 font-bold text-sm mt-0.5 truncate">{project.specs.materials.split(',')[0]}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Showcase Hero Image */}
      <section className="py-8 bg-earth-900 border-b border-earth-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            onClick={() => openLightbox(0)}
            className="relative h-[350px] sm:h-[500px] rounded-sm overflow-hidden border border-earth-700 cursor-pointer group shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute bottom-4 right-4 bg-earth-950/90 text-terracotta-400 px-3 py-1.5 rounded-xs font-mono text-xs flex items-center gap-1.5 border border-earth-700">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Click to view Full-Screen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content Grid */}
      <section className="py-16 lg:py-24 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Project Overview */}
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-terracotta-600 uppercase tracking-wider mb-2">
                  <Compass className="w-4 h-4" />
                  <span>01. Project Overview</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-earth-950 mb-4">
                  The Vision & Context
                </h2>
                <p className="text-earth-800 font-sans text-base leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Challenge */}
              <div className="p-6 bg-sand-100/80 rounded-sm border-l-4 border-terracotta-600 border-t border-r border-b border-sand-300">
                <div className="font-mono text-xs text-terracotta-700 uppercase tracking-wider mb-1">
                  02. Construction Challenge
                </div>
                <h3 className="text-xl font-heading font-bold text-earth-950 mb-3">
                  Ground & Site Realities
                </h3>
                <p className="text-earth-800 font-sans text-sm sm:text-base leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Construction Approach */}
              <div>
                <div className="flex items-center gap-2 font-mono text-xs text-terracotta-600 uppercase tracking-wider mb-2">
                  <HardHat className="w-4 h-4" />
                  <span>03. Construction Approach</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-earth-950 mb-4">
                  Engineering & Masonry Execution
                </h2>
                <p className="text-earth-800 font-sans text-base leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* Result */}
              <div className="p-6 bg-earth-900 text-white rounded-sm border border-earth-800">
                <div className="font-mono text-xs text-terracotta-400 uppercase tracking-wider mb-1">
                  04. Final Outcome
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  Completed & Handed Over
                </h3>
                <p className="text-sand-300 font-sans text-sm sm:text-base leading-relaxed">
                  {project.result}
                </p>
              </div>

              {/* Project Gallery Images */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="pt-6 border-t border-sand-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-heading font-bold text-earth-950">
                      Project Photography
                    </h3>
                    <span className="font-mono text-xs text-earth-500">
                      {project.gallery.length} High-Res Visuals
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.gallery.map((img: string, idx: number) => (
                      <div
                        key={idx}
                        onClick={() => openLightbox(idx)}
                        className="relative h-44 rounded-sm overflow-hidden border border-sand-300 cursor-pointer group shadow-sm"
                      >
                        <img
                          src={img}
                          alt={`${project.title} detail ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        <div className="absolute bottom-2 right-2 p-1.5 bg-earth-950/80 rounded-xs text-terracotta-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar: Detailed Specs & Sticky CTA */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Technical Specifications Card */}
              <div className="bg-white p-6 rounded-sm border border-sand-300 shadow-sm">
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-sand-200 font-heading font-bold text-base text-earth-950">
                  <Layers className="w-4 h-4 text-terracotta-600" />
                  <span>Technical Specifications</span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-earth-500 block uppercase text-[10px]">Built Area</span>
                    <span className="text-earth-900 font-bold text-sm">{project.specs.area}</span>
                  </div>
                  <div>
                    <span className="text-earth-500 block uppercase text-[10px]">Execution Timeline</span>
                    <span className="text-earth-900 font-bold text-sm">{project.specs.timeline}</span>
                  </div>
                  <div>
                    <span className="text-earth-500 block uppercase text-[10px]">Foundation Type</span>
                    <span className="text-earth-900 font-bold">{project.specs.foundation}</span>
                  </div>
                  <div>
                    <span className="text-earth-500 block uppercase text-[10px]">Material Specifications</span>
                    <span className="text-earth-900 font-bold">{project.specs.materials}</span>
                  </div>
                  <div>
                    <span className="text-earth-500 block uppercase text-[10px]">Signature Highlight</span>
                    <span className="text-terracotta-700 font-bold">{project.specs.keyFeature}</span>
                  </div>
                </div>
              </div>

              {/* Direct Enquiry Box */}
              <div className="bg-earth-950 text-white p-6 rounded-sm border border-earth-800 shadow-xl">
                <div className="text-xs font-mono text-terracotta-400 uppercase mb-1">
                  DISCUSS SIMILAR PROJECT
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-3">
                  Have a similar requirement in mind?
                </h3>
                <p className="text-xs font-sans text-sand-300 leading-relaxed mb-6">
                  Talk directly with Nandlal Ahirwar to discuss site suitability, floor layout, and cost estimation.
                </p>

                <div className="space-y-3">
                  <a
                    href={getProjectWhatsAppUrl(project.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="whatsapp" size="md" icon="whatsapp" className="w-full">
                      Discuss on WhatsApp
                    </Button>
                  </a>

                  <Link to="/contact" className="block">
                    <Button variant="outline" size="md" icon="none" className="w-full text-sand-100 border-earth-700 hover:bg-earth-900">
                      Submit Formal Enquiry
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for Project Gallery */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={project.gallery || [project.image]}
        currentIndex={selectedImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : (project.gallery?.length || 1) - 1))}
        onNext={() => setSelectedImageIndex((prev) => (prev < (project.gallery?.length || 1) - 1 ? prev + 1 : 0))}
        title={`${project.title} - View ${selectedImageIndex + 1}`}
      />
    </div>
  );
};
