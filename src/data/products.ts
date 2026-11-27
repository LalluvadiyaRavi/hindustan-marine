import type { Product } from '../types/product';

/**
 * Development Placeholder Product Dataset (6 items)
 * 
 * NOTE FOR CLIENT INTEGRATION:
 * This file contains structured development placeholders for testing the UI and functionality.
 * When real client product data is provided (via Excel/CSV), replace this dataset with actual entries.
 */
export const products: Product[] = [
  {
    id: 'prod-01',
    slug: 'electronic-component-client-data-required',
    name: 'Electronic Component — Client Data Required',
    category: 'Electronic Components',
    shortDescription: 'Temporary placeholder entry for electronic modules and components. Client data required.',
    description: 'This listing is a development placeholder. Detailed descriptions, technical ratings, and specifications will be updated upon receipt of client product information.',
    modelNumber: 'ITEM-ELEC-TMP-01',
    model: 'ITEM-ELEC-TMP-01',
    partNumber: 'PN-ELEC-001',
    specifications: [
      { label: 'Category', value: 'Electronic Components' },
      { label: 'Status', value: 'Client Data Pending' },
      { label: 'Quotation', value: 'Available upon WhatsApp Inquiry' },
      { label: 'Documentation', value: 'Details available on request' }
    ],
    applications: [
      'Industrial and marine electronics (Example application placeholder)',
      'Control board power management systems'
    ],
    tags: ['electronics', 'control', 'circuit', 'pcb', 'marine'],
    featured: true,
    inquiryEnabled: true,
    inquiryAvailability: 'Inquire for Availability',
    isPlaceholder: true,
  },
  {
    id: 'prod-02',
    slug: 'marine-part-client-data-required',
    name: 'Marine Part — Client Data Required',
    category: 'Machine Parts & Hardware',
    shortDescription: 'Temporary placeholder entry for marine equipment parts. Client data required.',
    description: 'This listing is a development placeholder for marine parts and spares. Verified part numbers and specifications will be added once provided.',
    modelNumber: 'ITEM-MAR-TMP-02',
    model: 'ITEM-MAR-TMP-02',
    partNumber: 'PN-MAR-002',
    specifications: [
      { label: 'Category', value: 'Machine Parts & Hardware' },
      { label: 'Status', value: 'Client Data Pending' },
      { label: 'Inquiry', value: 'Direct WhatsApp Quotation' },
      { label: 'Documentation', value: 'Details available on request' }
    ],
    applications: [
      'Marine operational equipment (Example application placeholder)',
      'Auxiliary machinery fittings'
    ],
    tags: ['marine', 'hardware', 'machinery', 'spares', 'valves'],
    featured: true,
    inquiryEnabled: true,
    inquiryAvailability: 'Inquire for Availability',
    isPlaceholder: true,
  },
  {
    id: 'prod-03',
    slug: 'industrial-machine-part-client-data-required',
    name: 'Industrial Machine Part — Client Data Required',
    category: 'Industrial Components',
    shortDescription: 'Temporary placeholder entry for industrial machinery components. Client data required.',
    description: 'This listing is a development placeholder for industrial machine components and fittings. Awaiting client inventory data.',
    modelNumber: 'ITEM-MACH-TMP-03',
    model: 'ITEM-MACH-TMP-03',
    partNumber: 'PN-MACH-003',
    specifications: [
      { label: 'Category', value: 'Industrial Components' },
      { label: 'Status', value: 'Client Data Pending' },
      { label: 'Supply Request', value: 'Contact via WhatsApp / RFQ' },
      { label: 'Documentation', value: 'Details available on request' }
    ],
    applications: [
      'Industrial machinery and plant equipment (Example application placeholder)',
      'Hydraulic and pneumatic transmission'
    ],
    tags: ['industrial', 'machine', 'hydraulic', 'pneumatic', 'plant'],
    featured: true,
    inquiryEnabled: true,
    inquiryAvailability: 'Inquire for Availability',
    isPlaceholder: true,
  },
  {
    id: 'prod-04',
    slug: 'automation-part-client-data-required',
    name: 'Automation Part — Client Data Required',
    category: 'Automation Parts',
    shortDescription: 'Temporary placeholder entry for automation controllers and sensors. Client data required.',
    description: 'This listing is a development placeholder for automation components. Specifications and model references pending client confirmation.',
    modelNumber: 'ITEM-AUTO-TMP-04',
    model: 'ITEM-AUTO-TMP-04',
    partNumber: 'PN-AUTO-004',
    specifications: [
      { label: 'Category', value: 'Automation Parts' },
      { label: 'Status', value: 'Client Data Pending' },
      { label: 'Quotation', value: 'Inquire on WhatsApp' },
      { label: 'Documentation', value: 'Details available on request' }
    ],
    applications: [
      'Automation and control systems (Example application placeholder)',
      'PLC and sensor interfaces'
    ],
    tags: ['automation', 'plc', 'controllers', 'sensors', 'drives'],
    featured: true,
    inquiryEnabled: true,
    inquiryAvailability: 'Inquire for Availability',
    isPlaceholder: true,
  },
  {
    id: 'prod-05',
    slug: 'electrical-part-client-data-required',
    name: 'Electrical Part — Client Data Required',
    category: 'Electrical Parts',
    shortDescription: 'Temporary placeholder entry for industrial electrical parts. Client data required.',
    description: 'This listing is a development placeholder for industrial electrical parts and switchgear. Client details will replace this entry.',
    modelNumber: 'ITEM-ELEC-TMP-05',
    model: 'ITEM-ELEC-TMP-05',
    partNumber: 'PN-ELEC-005',
    specifications: [
      { label: 'Category', value: 'Electrical Parts' },
      { label: 'Status', value: 'Client Data Pending' },
      { label: 'Inquiry', value: 'Direct WhatsApp Quotation' },
      { label: 'Documentation', value: 'Details available on request' }
    ],
    applications: [
      'Industrial electrical setups (Example application placeholder)',
      'Switchgear and power distribution'
    ],
    tags: ['electrical', 'power', 'switchgear', 'relays', 'breakers'],
    featured: true,
    inquiryEnabled: true,
    inquiryAvailability: 'Inquire for Availability',
    isPlaceholder: true,
  },
  {
    id: 'prod-06',
    slug: 'industrial-supply-item-client-data-required',
    name: 'Industrial Supply Item — Client Data Required',
    category: 'Other Industrial Products',
    shortDescription: 'Temporary placeholder entry for general industrial supply. Client data required.',
    description: 'This listing is a development placeholder for general industrial supplies and parts. To be updated with verified client data.',
    modelNumber: 'ITEM-SPEC-TMP-06',
    model: 'ITEM-SPEC-TMP-06',
    partNumber: 'PN-SPEC-006',
    specifications: [
      { label: 'Category', value: 'Other Industrial Products' },
      { label: 'Status', value: 'Client Data Pending' },
      { label: 'Quotation', value: 'Available on RFQ / WhatsApp' },
      { label: 'Documentation', value: 'Details available on request' }
    ],
    applications: [
      'General industrial requirements (Example application placeholder)',
      'Workshop maintenance consumables'
    ],
    tags: ['general', 'supplies', 'tools', 'fasteners', 'hardware'],
    featured: true,
    inquiryEnabled: true,
    inquiryAvailability: 'Inquire for Availability',
    isPlaceholder: true,
  }
];
