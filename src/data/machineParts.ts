export interface MachinePartCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  representativeItems: string[];
  inquiryTag: string;
}

export const machinePartCategories: MachinePartCategory[] = [
  {
    id: 'mp-01',
    title: 'Hydraulic & Pneumatic Components',
    subtitle: 'Valves, Cylinders & Actuators',
    description: 'Sourcing and supply of industrial hydraulic and pneumatic components. Exact catalogue items to be updated from client list.',
    representativeItems: [
      'Directional valves (Representative placeholder)',
      'Fittings & hoses (Representative placeholder)'
    ],
    inquiryTag: 'HM-HYD-SUPPLY'
  },
  {
    id: 'mp-02',
    title: 'Precision Mechanical Hardware',
    subtitle: 'Bearings, Couplings & Transmission',
    description: 'Supply of industrial mechanical hardware and transmission parts for plant and marine machinery.',
    representativeItems: [
      'Bearing assemblies (Representative placeholder)',
      'Shaft couplings (Representative placeholder)'
    ],
    inquiryTag: 'HM-MECH-SUPPLY'
  },
  {
    id: 'mp-03',
    title: 'Marine & Industrial Machinery Spares',
    subtitle: 'Operational & Auxiliary Spares',
    description: 'Sourcing and supply of machinery replacement parts for operational equipment.',
    representativeItems: [
      'Gaskets & sealing parts (Representative placeholder)',
      'Auxiliary machine spares (Representative placeholder)'
    ],
    inquiryTag: 'HM-SPARE-SUPPLY'
  },
  {
    id: 'mp-04',
    title: 'Custom Sourced Industrial Parts',
    subtitle: 'On-Demand Sourcing & Inquiries',
    description: 'Procurement assistance for hard-to-find or specialized industrial parts based on client drawing or sample.',
    representativeItems: [
      'Specialized fittings & adaptors',
      'On-demand custom sourced parts'
    ],
    inquiryTag: 'HM-CUSTOM-RFQ'
  }
];

export const exportSupplyFeatures = [
  {
    title: 'RFQ & Inquiry Handling',
    description: 'Processing technical RFQs with part identification, photographs, and clear quotation terms.',
    badge: 'RFQ READY'
  },
  {
    title: 'Careful Industrial Packaging',
    description: 'Packaging designed to protect components against moisture and transit impacts during domestic or export shipment.',
    badge: 'PACKAGING'
  },
  {
    title: 'Direct WhatsApp Quotations',
    description: 'Fast turnaround on technical inquiries with direct part photos and lead-time communication over WhatsApp.',
    badge: 'COMMUNICATION'
  }
];
