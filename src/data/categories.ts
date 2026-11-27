import type { Category } from '../types/product';

export const categories: Category[] = [
  {
    id: 'all',
    slug: 'all',
    name: 'All Items',
    description: 'Complete development catalogue overview'
  },
  {
    id: 'electronic-components',
    slug: 'electronic-components',
    name: 'Electronic Components',
    description: 'Marine & industrial electronic modules, control boards, and assemblies (Client Data Pending)',
    badge: 'Category / 01'
  },
  {
    id: 'industrial-components',
    slug: 'industrial-components',
    name: 'Industrial Components',
    description: 'Specialized industrial hardware and operational components (Client Data Pending)',
    badge: 'Category / 02'
  },
  {
    id: 'electrical-parts',
    slug: 'electrical-parts',
    name: 'Electrical Parts',
    description: 'Electrical control devices, relays, power units, and wiring accessories (Client Data Pending)',
    badge: 'Category / 03'
  },
  {
    id: 'automation-parts',
    slug: 'automation-parts',
    name: 'Automation Parts',
    description: 'Controllers, drives, sensing modules, and automation hardware (Client Data Pending)',
    badge: 'Category / 04'
  },
  {
    id: 'machine-parts',
    slug: 'machine-parts',
    name: 'Machine Parts & Hardware',
    description: 'Mechanical machinery components, valves, and precision parts (Client Data Pending)',
    badge: 'Category / 05'
  },
  {
    id: 'other-industrial',
    slug: 'other-industrial',
    name: 'Other Industrial Products',
    description: 'General industrial supply items and custom equipment (Client Data Pending)',
    badge: 'Category / 06'
  }
];
