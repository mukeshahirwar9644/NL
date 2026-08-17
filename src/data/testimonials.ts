export interface Testimonial {
  id: string;
  quote: string;
  person: string;
  role: string;
  projectType: string;
  location: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: 'The school building Nandlal Ahirwar built has transformed how our children study. Even in peak summer, the classrooms remain cool because of the high ceilings and ventilation design.',
    person: 'School Committee Member',
    role: 'Primary School Project',
    projectType: 'School Construction',
    location: 'Village Education Wing'
  },
  {
    id: '2',
    quote: 'We wanted a strong pukka home that could accommodate our large family. Nandlal understood our needs immediately and completed the roof casting on time with great attention to foundation strength.',
    person: 'Homeowner',
    role: 'Residential Client',
    projectType: 'Residential Construction',
    location: 'Rural Family Residence'
  },
  {
    id: '3',
    quote: 'Our Gram Panchayat hall needed to be spacious and durable for large gatherings. The brick jaali work and stone flooring look magnificent and will serve our village for decades.',
    person: 'Panchayat Representative',
    role: 'Civic Project',
    projectType: 'Community Building',
    location: 'Central Village Square'
  }
];
