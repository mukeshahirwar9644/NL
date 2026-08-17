export interface Project {
  id: string;
  title: string;
  category: string;
  categoryKey: 'schools' | 'homes' | 'community' | 'infrastructure' | 'construction' | 'renovation';
  location: string;
  year?: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  overview: string;
  challenge: string;
  approach: string;
  result: string;
  specs: {
    area: string;
    timeline: string;
    materials: string;
    foundation: string;
    keyFeature: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 'primary-village-school',
    title: 'Rural Primary School Building',
    category: 'Schools',
    categoryKey: 'schools',
    location: 'Village Development Sector, Central Region',
    year: '2024',
    shortDescription: 'Modern 6-classroom sustainable school building featuring brick masonry, open verandahs, and natural ventilation.',
    image: '/images/hero/hero-school.jpg',
    gallery: [
      '/images/hero/hero-school.jpg',
      '/images/hero/hero-blueprint.jpg',
      '/images/architecture/brickwork-craft.jpg'
    ],
    overview: 'A community-funded primary school designed to replace a dilapidated temporary structure. The goal was to provide safe, durable, well-ventilated classrooms that stay cool during harsh summer months while incorporating child-safe courtyards.',
    challenge: 'The building site had clay-rich expansive black soil requiring a specialized foundation to prevent structural settling and wall cracks. Additionally, work had to be completed before the monsoon onset.',
    approach: 'Constructed an under-reamed pile foundation with reinforced concrete tie-beams. Used local high-density red clay bricks laid in English bond with concrete lintels. Integrated wide shaded verandahs that act as climate buffers and outdoor assembly areas.',
    result: 'Delivered a clean, durable, 6-classroom school on schedule with dedicated sanitation and safe drinking water platforms. The structure provides a cheerful, protective learning environment for over 180 local children.',
    specs: {
      area: '3,800 sq.ft',
      timeline: '5 Months',
      materials: 'Red Brick, Grade M25 Concrete, Terracotta Jaali',
      foundation: 'Reinforced Concrete Under-Reamed Piles',
      keyFeature: 'Passive Cross-Ventilation & Wide Verandahs'
    }
  },
  {
    id: 'rural-family-residence',
    title: 'Modern Village Family Residence',
    category: 'Homes',
    categoryKey: 'homes',
    location: 'Rural Residential Block',
    year: '2024',
    shortDescription: 'Custom two-storey brick and plaster residential home tailored for multi-generational living with open courtyard.',
    image: '/images/projects/residential-home.jpg',
    gallery: [
      '/images/projects/residential-home.jpg',
      '/images/services/renovation.jpg',
      '/images/architecture/brickwork-craft.jpg'
    ],
    overview: 'A spacious, climate-responsive family home built for a local agrarian family needing ample open-air verandahs, secure grain storage, modern washrooms, and comfortable living quarters.',
    challenge: 'Balancing modern construction standards (RCC roof slab, concealed wiring, modern plumbing) with traditional village living patterns such as front courtyard seating and rooftop accessibility.',
    approach: 'Designed a dual-level floor plan with an expansive shaded front porch, large open kitchen, and central living area. Used weather-proof lime-cement exterior plaster combined with terracotta roof tile eaves to shed heavy rainfall.',
    result: 'A sturdy, beautiful family home combining the warmth of village aesthetics with the longevity and safety of modern engineering.',
    specs: {
      area: '2,450 sq.ft',
      timeline: '4.5 Months',
      materials: 'First-Class Red Bricks, TMT 500D Steel, Mangalore Tiles',
      foundation: 'Strip Footing with RCC Plinth Beam',
      keyFeature: 'Double-Height Shaded Porch & Roof Terrace'
    }
  },
  {
    id: 'panchayat-community-hall',
    title: 'Gram Panchayat & Community Centre',
    category: 'Community',
    categoryKey: 'community',
    location: 'Central Village Square',
    year: '2023',
    shortDescription: 'Open colonnade community pavilion with decorative brick jaali work for village meetings and social functions.',
    image: '/images/projects/community-hall.jpg',
    gallery: [
      '/images/projects/community-hall.jpg',
      '/images/hero/hero-blueprint.jpg',
      '/images/services/custom-construction.jpg'
    ],
    overview: 'A civic building built for gram panchayat administrative proceedings, community meetings, medical camps, and festive gatherings.',
    challenge: 'Achieving a wide column-free central hall on a modest rural budget while ensuring high aesthetic dignity and robust natural airflow.',
    approach: 'Constructed an open structural grid with reinforced concrete perimeter columns and brick jaali lattice screens that allow continuous breeze while keeping direct glare out. Built polished Kota stone flooring for long-term wear resistance.',
    result: 'A landmark civic space that now hosts all major village gatherings, meetings, and public events in comfort and dignity.',
    specs: {
      area: '4,200 sq.ft',
      timeline: '6 Months',
      materials: 'RCC Frame, Perforated Brick Jaali, Kota Stone',
      foundation: 'Isolated Column Footings with Tie Beams',
      keyFeature: 'Column-Free Main Assembly Hall'
    }
  },
  {
    id: 'paved-village-road-drainage',
    title: 'Village Approach Road & Drainage Network',
    category: 'Infrastructure',
    categoryKey: 'infrastructure',
    location: 'Connecting Village Corridor',
    year: '2024',
    shortDescription: 'Reinforced concrete road with covered stormwater drainage channels and solar lighting pedestals.',
    image: '/images/projects/village-road.jpg',
    gallery: [
      '/images/projects/village-road.jpg',
      '/images/services/custom-construction.jpg',
      '/images/hero/hero-blueprint.jpg'
    ],
    overview: 'Upgradation of a dirt road that became impassable during the rainy season into an all-weather cement concrete road with proper drainage.',
    challenge: 'Managing water runoff from adjacent elevated fields without causing waterlogging or erosion to adjoining village homesteads.',
    approach: 'Graded the sub-base with compacted gravel (WMM), laid heavy-gauge polythene moisture barriers, and poured M30 concrete pavement with contraction joints. Built reinforced side drain channels with cast concrete cover slabs.',
    result: 'Safe, year-round access for school children, tractors, ambulances, and daily commuters, eliminating monsoon waterlogging completely.',
    specs: {
      area: '1.2 km Length',
      timeline: '3 Months',
      materials: 'M30 Concrete, Welded Wire Mesh, Precast Slabs',
      foundation: 'Compacted Sub-Base with Crushed Stone',
      keyFeature: 'Integrated Storm Drain & All-Weather Durability'
    }
  },
  {
    id: 'heritage-residence-restoration',
    title: 'Rural Heritage Home Renovation & Extension',
    category: 'Renovation',
    categoryKey: 'renovation',
    location: 'Old Settlement Quarter',
    year: '2023',
    shortDescription: 'Structural restoration of an ancestral brick home with modernized kitchen, reinforced roof, and arched verandah.',
    image: '/images/services/renovation.jpg',
    gallery: [
      '/images/services/renovation.jpg',
      '/images/architecture/brickwork-craft.jpg',
      '/images/projects/residential-home.jpg'
    ],
    overview: 'Comprehensive structural rehabilitation and modern amenity upgrade for an old brick homestead experiencing roof leaks and dampness.',
    challenge: 'Preserving the original brick arch character while safely inserting modern RCC support lintels and new sanitary plumbing lines.',
    approach: 'Underpinned weakened wall sections, applied epoxy crack injections, rebuilt sagging roof rafters with treated timber and clay tiles, and finished with breathable lime-based plaster.',
    result: 'Revitalized a multi-generational heritage home, making it structurally sound, weather-tight, and comfortable for decades to come.',
    specs: {
      area: '2,100 sq.ft',
      timeline: '2.5 Months',
      materials: 'Handmade Bricks, Lime Mortar, Terracotta Tiles',
      foundation: 'Underpinned Stone Masonry',
      keyFeature: 'Restored Arched Verandah & Waterproof Roof'
    }
  },
  {
    id: 'agricultural-facility-godown',
    title: 'Agricultural Storage & Utility Center',
    category: 'Construction',
    categoryKey: 'construction',
    location: 'Agrarian Hub',
    year: '2024',
    shortDescription: 'High-capacity rural warehouse and grain storage facility with heavy concrete flooring and reinforced boundary.',
    image: '/images/services/custom-construction.jpg',
    gallery: [
      '/images/services/custom-construction.jpg',
      '/images/architecture/brickwork-craft.jpg',
      '/images/hero/hero-blueprint.jpg'
    ],
    overview: 'Construction of a secure, rodent-proof grain storage facility and equipment shed for local agricultural produce.',
    challenge: 'Ensuring zero moisture ingress from ground dampness and accommodating heavy tractor and trolley turning loads.',
    approach: 'Raised plinth level 4 feet above road level with heavy gravel backfill and waterproof DPC membrane. Built reinforced concrete floor slab with hardener finish.',
    result: 'Delivered a sturdy, secure facility providing safe storage for over 500 metric tons of grain and machinery.',
    specs: {
      area: '5,000 sq.ft',
      timeline: '4 Months',
      materials: 'Steel Truss, Concrete Decking, 9-inch Brick Walls',
      foundation: 'RCC Isolated Footings & Heavy Plinth Beam',
      keyFeature: 'Moisture-Proof Raised Plinth'
    }
  }
];
