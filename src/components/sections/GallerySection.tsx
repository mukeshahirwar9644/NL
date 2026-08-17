import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { LightboxModal } from '../ui/LightboxModal';
import { ZoomIn, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryKey: 'schools' | 'homes' | 'community' | 'infrastructure' | 'construction';
  image: string;
  span?: string;
  projectId?: string;
}

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Modern Village Primary School',
      category: 'Schools',
      categoryKey: 'schools',
      image: '/images/hero/hero-school.jpg',
      span: 'md:col-span-2 md:row-span-2',
      projectId: 'primary-village-school',
    },
    {
      id: 'g2',
      title: 'Village Family Home with Porch',
      category: 'Homes',
      categoryKey: 'homes',
      image: '/images/projects/residential-home.jpg',
      span: 'md:col-span-1 md:row-span-1',
      projectId: 'rural-family-residence',
    },
    {
      id: 'g3',
      title: 'Gram Panchayat Community Centre',
      category: 'Community',
      categoryKey: 'community',
      image: '/images/projects/community-hall.jpg',
      span: 'md:col-span-1 md:row-span-1',
      projectId: 'panchayat-community-hall',
    },
    {
      id: 'g4',
      title: 'Paved Approach Road & Drainage',
      category: 'Infrastructure',
      categoryKey: 'infrastructure',
      image: '/images/projects/village-road.jpg',
      span: 'md:col-span-1 md:row-span-1',
      projectId: 'paved-village-road-drainage',
    },
    {
      id: 'g5',
      title: 'Precision Brick Masonry & Plinth Beam',
      category: 'Construction',
      categoryKey: 'construction',
      image: '/images/architecture/brickwork-craft.jpg',
      span: 'md:col-span-1 md:row-span-1',
      projectId: 'primary-village-school',
    },
    {
      id: 'g6',
      title: 'Arched Rural Home Restoration',
      category: 'Homes',
      categoryKey: 'homes',
      image: '/images/services/renovation.jpg',
      span: 'md:col-span-1 md:row-span-1',
      projectId: 'heritage-residence-restoration',
    },
    {
      id: 'g7',
      title: 'Active Concrete Slab Casting & Reinforcement',
      category: 'Construction',
      categoryKey: 'construction',
      image: '/images/services/custom-construction.jpg',
      span: 'md:col-span-1 md:row-span-1',
      projectId: 'agricultural-facility-godown',
    },
  ];

  const categories = ['All', 'Schools', 'Homes', 'Community', 'Infrastructure', 'Construction'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category.toLowerCase() === activeFilter.toLowerCase());

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-earth-900 text-white overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10">
          <SectionHeading
            theme="dark"
            badge="Visual Gallery"
            tagline="Field Photography"
            title="On-Site Architectural Gallery."
            subtitle="Photographs capturing construction quality, finished community buildings, brickwork, and village development."
            className="mb-0"
          />

          {/* Filters */}
          <div className="mt-6 lg:mt-0 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-sm transition-all border ${
                  activeFilter === cat
                    ? 'bg-terracotta-600 border-terracotta-500 text-white font-bold'
                    : 'bg-earth-950/80 border-earth-800 text-sand-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-sm overflow-hidden border border-earth-800 hover:border-terracotta-500 transition-all duration-300 aspect-[4/3] bg-earth-950 cursor-pointer shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-950/90 via-earth-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

              {/* Top Category Tag */}
              <div className="absolute top-3 left-3 bg-earth-950/80 backdrop-blur-sm border border-earth-700 text-terracotta-400 font-mono text-[10px] uppercase px-2 py-0.5 rounded-xs">
                {item.category}
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 p-2 bg-earth-950/80 rounded-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-terracotta-400" />
              </div>

              {/* Bottom Title & Action */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-heading font-bold text-sm text-white group-hover:text-terracotta-400 transition-colors">
                  {item.title}
                </div>
                <div className="flex items-center justify-between mt-1 text-[11px] text-sand-400 font-mono">
                  <span>Click to expand high-res</span>
                  {item.projectId && (
                    <Link
                      to={`/projects/${item.projectId}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-terracotta-400 hover:underline flex items-center gap-0.5"
                    >
                      <span>Project Details</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={filteredItems.map((item) => item.image)}
        currentIndex={selectedImageIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))}
        onNext={() => setSelectedImageIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))}
        title={filteredItems[selectedImageIndex]?.title}
      />
    </section>
  );
};
