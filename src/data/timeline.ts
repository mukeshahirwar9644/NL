export interface TimelineStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const constructionSteps: TimelineStep[] = [
  {
    step: '01',
    title: 'Discuss',
    subtitle: 'Understand the requirement',
    description: 'We meet directly on-site or discuss via WhatsApp/Call to understand your exact purpose, family needs, space availability, and budget constraints.',
    deliverables: ['Site visit & measurement', 'Requirement outline', 'Initial feasibility check']
  },
  {
    step: '02',
    title: 'Plan',
    subtitle: 'Finalize design & dimensions',
    description: 'We prepare clear floor plans, structural layouts, material specifications, and a transparent cost estimate with milestone-based schedules.',
    deliverables: ['Architectural floor plan', 'Material specification sheet', 'Clear cost breakdown']
  },
  {
    step: '03',
    title: 'Build',
    subtitle: 'Execute the construction',
    description: 'Our experienced masonry and RCC team carries out site excavation, foundation, bricklaying, column casting, and roof slab construction with strict quality checks.',
    deliverables: ['Foundation & plinth beam', 'Superstructure brickwork', 'RCC roof slab casting']
  },
  {
    step: '04',
    title: 'Finish',
    subtitle: 'Complete finishing & details',
    description: 'We execute smooth exterior and interior plastering, electrical and plumbing conduits, flooring, tiling, doors/windows, and weather-resistant paint.',
    deliverables: ['Plastering & waterproofing', 'Flooring & sanitation fitment', 'Protective painting']
  },
  {
    step: '05',
    title: 'Handover',
    subtitle: 'Deliver the completed space',
    description: 'We conduct a thorough final inspection walkthrough together, ensure all details meet the highest standards, and hand over the keys to your new space.',
    deliverables: ['Final joint inspection', 'Site cleanup', 'Handover to owner/community']
  }
];
