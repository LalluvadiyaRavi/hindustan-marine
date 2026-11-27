export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  modelNumber?: string;
  model?: string; // backwards compatibility
  partNumber?: string;
  specifications?: ProductSpecification[];
  applications?: string[];
  image?: string;
  gallery?: string[];
  tags?: string[];
  featured?: boolean;
  inquiryEnabled?: boolean;
  inquiryAvailability?: string;
  isPlaceholder?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  itemCount?: number;
  badge?: string;
}
