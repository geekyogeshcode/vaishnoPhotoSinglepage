import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Wedding Photography',
    description: 'Complete wedding coverage from engagement to reception',
    price: 'Starting at ₹50,000',
    features: [
      '8-10 hours of coverage',
      '500+ edited high-resolution photos',
      'Online gallery for sharing',
      'Engagement session included',
      'Wedding album design',
      'Second photographer available'
    ],
    popular: true
  },
  {
    id: '2',
    name: 'Portrait Sessions',
    description: 'Professional portraits for individuals and families',
    price: 'Starting at ₹20,000',
    features: [
      '1-2 hour session',
      'Multiple outfit changes',
      '25+ edited photos',
      'Online gallery access',
      'Print release included',
      'Location of your choice'
    ]
  },
  {
    id: '3',
    name: 'Event Photography',
    description: 'Corporate events, parties, and special occasions',
    price: 'Starting at ₹30,000',
    features: [
      'Full event coverage',
      'Professional editing',
      'Same-day preview',
      'High-resolution downloads',
      'Social media ready images',
      'Custom packages available'
    ]
  },
  {
    id: '4',
    name: 'Corporate Headshots',
    description: 'Professional headshots for businesses and LinkedIn',
    price: 'Starting at ₹15,000',
    features: [
      'Studio or on-location',
      'Multiple poses and expressions',
      '10+ retouched images',
      'Professional lighting setup',
      'Quick turnaround time',
      'Group discounts available'
    ]
  }
];