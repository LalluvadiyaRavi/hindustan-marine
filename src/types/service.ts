export interface ServiceCapability {
  id: string;
  title: string;
  category: string;
  description: string;
  typicalItems?: string[];
  diagnosticChecklist?: string[];
  isPlaceholder?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}
