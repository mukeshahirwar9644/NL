export interface Reason {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export const reasonsData: Reason[] = [
  {
    id: 'local-understanding',
    number: '01',
    title: 'Local Understanding',
    tagline: 'Rooted in Village Realities',
    description: 'We understand the practical requirements of village construction—from soil variations and water tables to local climate conditions and rural family living habits.',
    iconName: 'MapPin'
  },
  {
    id: 'practical-design',
    number: '02',
    title: 'Practical Design',
    tagline: 'Function Before Excess',
    description: 'Buildings designed around real-world needs. We focus on natural ventilation, abundant natural lighting, wide shaded verandahs, and low-maintenance longevity.',
    iconName: 'Compass'
  },
  {
    id: 'quality-focus',
    number: '03',
    title: 'Quality Focus',
    tagline: 'Solid Materials & Craft',
    description: 'Uncompromising attention to construction quality—solid foundation depth, high-grade cement, first-class bricks, and thorough water curing at every stage.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'transparent-communication',
    number: '04',
    title: 'Transparent Communication',
    tagline: 'Honesty from Day One',
    description: 'Clear, honest communication throughout the project. We provide straightforward material estimates and progress updates without hidden surprises.',
    iconName: 'MessageSquareCheck'
  },
  {
    id: 'custom-approach',
    number: '05',
    title: 'Custom Approach',
    tagline: 'Tailored to Your Budget',
    description: 'Every project can be adapted to its specific requirements, whether you want a phased room-by-room construction or a complete turnkey school building.',
    iconName: 'SlidersHorizontal'
  },
  {
    id: 'community-first',
    number: '06',
    title: 'Community First',
    tagline: 'Meaningful Spaces',
    description: 'Construction that creates meaningful spaces for people—schools where children learn with pride, and community halls that bring people together.',
    iconName: 'HeartHandshake'
  }
];
