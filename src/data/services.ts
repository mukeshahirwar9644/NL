export interface Service {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  slug: string;
  highlights: string[];
}

export const servicesData: Service[] = [
  {
    id: 'school-construction',
    number: '01',
    title: 'School Construction',
    category: 'Education & Community',
    tagline: 'Built for Learning',
    description: 'Schools designed to provide safe, practical and welcoming learning environments for village children. We focus on durable brickwork, natural ventilation, wide verandahs, and sturdy roofing.',
    image: '/images/services/school.jpg',
    slug: 'school-construction',
    features: [
      'High-ceiling classrooms with optimal natural airflow',
      'Wide covered verandahs for assembly and shaded play',
      'Sturdy brick and reinforced concrete structural frame',
      'Hygienic sanitation blocks and drinking water platforms',
      'Boundary walls and secure safety gates'
    ],
    highlights: ['Durable Masonry', 'Natural Daylight', 'Child-Safe Design']
  },
  {
    id: 'residential-construction',
    number: '02',
    title: 'Residential Construction',
    category: 'Homes & Living',
    tagline: 'Built for Living',
    description: 'Houses built around family needs, space, climate and budget. From foundation to roof, we construct durable pukka houses that stand strong across seasons.',
    image: '/images/services/residential.jpg',
    slug: 'residential-construction',
    features: [
      'Engineered foundation tailored to local soil conditions',
      'Spacious courtyard-oriented floor plans',
      'Weather-resistant exterior plaster and roof waterproofing',
      'Ventilated kitchens and modern washroom provisions',
      'Strong RCC lintel and roof slab construction'
    ],
    highlights: ['RCC Framing', 'Climate Resilient', 'Custom Family Layout']
  },
  {
    id: 'community-buildings',
    number: '03',
    title: 'Community Buildings',
    category: 'Civic & Gathering',
    tagline: 'Built for Everyone',
    description: 'Construction of spaces designed for village communities, panchayat meetings, cultural programs and public welfare activities.',
    image: '/images/services/community.jpg',
    slug: 'community-buildings',
    features: [
      'Large column-free open assembly halls',
      'Acoustically sound brick jaali ventilation accents',
      'Wide colonnade porches for community gatherings',
      'Durable stone flooring capable of high foot traffic',
      'Accessible ramps and steps for all age groups'
    ],
    highlights: ['Open Span Halls', 'Stone Flooring', 'Community Access']
  },
  {
    id: 'village-infrastructure',
    number: '04',
    title: 'Village Infrastructure',
    category: 'Development & Roads',
    tagline: 'Built for Tomorrow',
    description: 'Practical infrastructure and civil development work supporting rural connectivity, drainage, community water access, and public utility structures.',
    image: '/images/services/infrastructure.jpg',
    slug: 'village-infrastructure',
    features: [
      'Paved concrete CC village roads and approach pathways',
      'Covered storm-water drainage and greywater management',
      'Solar street-light mounting bases and utility structures',
      'Water storage tanks and public tap stand construction',
      'Panchayat boundary and retaining walls'
    ],
    highlights: ['Reinforced Concrete', 'Effective Drainage', 'Durable Paving']
  },
  {
    id: 'renovation-improvement',
    number: '05',
    title: 'Renovation & Improvement',
    category: 'Upgrades & Restoration',
    tagline: 'Built for Longevity',
    description: 'Upgrading and improving existing structures. We reinforce aging foundations, replace leaky roofs, add rooms, and modernize older houses while preserving their integrity.',
    image: '/images/services/renovation.jpg',
    slug: 'renovation-improvement',
    features: [
      'Structural crack stitching and pillar reinforcement',
      'Roof tile restoration and waterproof concrete topping',
      'Room additions, extra floors, and verandah extensions',
      'Plaster renewal, paint, and weatherproofing coatings',
      'Door, window, and ventilation upgrades'
    ],
    highlights: ['Structural Repair', 'Waterproofing', 'Extension Work']
  },
  {
    id: 'custom-construction',
    number: '06',
    title: 'Custom Construction',
    category: 'Bespoke Requirements',
    tagline: 'Built Around Your Needs',
    description: 'Projects built strictly according to specific requirements—shops, storage sheds, agricultural godowns, boundary enclosures, and specialized rural facilities.',
    image: '/images/services/custom-construction.jpg',
    slug: 'custom-construction',
    features: [
      'Agricultural storage sheds and grain godowns',
      'Village retail shops and commercial frontage blocks',
      'Boundary wall fencing with reinforced brick pillars',
      'Cattle sheds and rural dairy farm utility structures',
      'Custom architectural design and phased construction'
    ],
    highlights: ['Agricultural Sheds', 'Retail Frontages', 'Tailored Budgets']
  }
];
