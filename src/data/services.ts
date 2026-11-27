import type { ProcessStep, ServiceCapability } from '../types/service';

export const repairCapabilities: ServiceCapability[] = [
  {
    id: 'cap-01',
    title: 'Electronic Components & Control Module Repair — Client Data Required',
    category: 'Electronic Repair',
    description: 'Workshop diagnostics and component-level repair support. Exact equipment types and capabilities will be updated upon client confirmation.',
    typicalItems: [
      'Industrial control boards (Representative placeholder)',
      'Power supply units (Representative placeholder)'
    ],
    diagnosticChecklist: [
      'Visual and physical inspection',
      'Power and circuit continuity checks',
      'Faulty component diagnosis'
    ],
    isPlaceholder: true,
  },
  {
    id: 'cap-02',
    title: 'Automation & Controller Servicing — Client Data Required',
    category: 'Automation Services',
    description: 'Testing, inspection, and repair assistance for industrial automation hardware. Exact service scope pending client confirmation.',
    typicalItems: [
      'Automation modules & controllers (Representative placeholder)',
      'Drives and signal interfaces (Representative placeholder)'
    ],
    diagnosticChecklist: [
      'Input/output signal testing',
      'Bench simulation under load',
      'Parameter and operational verification'
    ],
    isPlaceholder: true,
  },
  {
    id: 'cap-03',
    title: 'Machine Parts & Mechanical Servicing — Client Data Required',
    category: 'Mechanical Support',
    description: 'Inspection, cleaning, and repair support for mechanical machine components. Verified scope will replace this placeholder.',
    typicalItems: [
      'Valves and actuator assemblies (Representative placeholder)',
      'Mechanical linkages & hardware (Representative placeholder)'
    ],
    diagnosticChecklist: [
      'Tolerance and seal checking',
      'Surface wear evaluation',
      'Mechanical movement validation'
    ],
    isPlaceholder: true,
  },
  {
    id: 'cap-04',
    title: 'Custom Diagnostics & Inspection — Client Data Required',
    category: 'General Diagnostics',
    description: 'Bench evaluation and fault identification for specialized or legacy components.',
    typicalItems: [
      'Unidentified or legacy modules (Representative placeholder)',
      'Specialized industrial parts (Representative placeholder)'
    ],
    diagnosticChecklist: [
      'Component trace analysis',
      'Controlled bench testing',
      'Diagnostic summary formulation'
    ],
    isPlaceholder: true,
  }
];

export const repairProcessSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Receive & Log',
    subtitle: 'Intake & Documentation',
    description: 'Component is received at our Bhavnagar workshop, logged, and documented with initial customer notes.'
  },
  {
    step: '02',
    title: 'Inspect',
    subtitle: 'Visual Examination',
    description: 'Visual check for physical defects, component wear, and noticeable damage.'
  },
  {
    step: '03',
    title: 'Diagnose',
    subtitle: 'Technical Testing',
    description: 'Bench testing to identify faulty parts, circuitry errors, or mechanical issues.'
  },
  {
    step: '04',
    title: 'Repair',
    subtitle: 'Servicing & Replacement',
    description: 'Replacement of identified faulty components and restoration work.'
  },
  {
    step: '05',
    title: 'Test & Validate',
    subtitle: 'Operational Check',
    description: 'Post-service functional check to verify operating stability before dispatch.'
  },
  {
    step: '06',
    title: 'Return / Handover',
    subtitle: 'Careful Dispatch',
    description: 'Protective packaging and return handover with repair summary to customer.'
  }
];
