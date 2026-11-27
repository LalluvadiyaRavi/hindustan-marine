import { useEffect } from 'react';
import { businessConfig } from '../config/businessConfig';

interface PageMetaOptions {
  title?: string;
  description?: string;
}

export const usePageMeta = ({ title, description }: PageMetaOptions) => {
  useEffect(() => {
    const fullTitle = title 
      ? `${title} | ${businessConfig.businessName}`
      : `${businessConfig.businessName} — ${businessConfig.tagline} | ${businessConfig.city}, ${businessConfig.state}`;
    
    document.title = fullTitle;

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);
};
