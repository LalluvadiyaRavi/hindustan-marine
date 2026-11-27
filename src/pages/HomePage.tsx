import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { WhatWeDoSection } from '../components/home/WhatWeDoSection';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { RepairProcessSection } from '../components/home/RepairProcessSection';
import { MachinePartsSection } from '../components/home/MachinePartsSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';
import { usePageMeta } from '../hooks/usePageMeta';

export const HomePage: React.FC = () => {
  usePageMeta({
    title: 'Components, Machine Parts & Technical Solutions',
    description: 'Hindustan Marine supplies electronic components, machine parts, and technical diagnostic repair services based in Bhavnagar, Gujarat, India.'
  });

  return (
    <div className="space-y-0">
      {/* 01 Hero Section */}
      <HeroSection />

      {/* 02 What We Do (3 Divisions) */}
      <WhatWeDoSection />

      {/* 03 Products Section */}
      <FeaturedProducts />

      {/* 04 Repair & Technical Services */}
      <RepairProcessSection />

      {/* 05 Machine Parts & Industrial Supply */}
      <MachinePartsSection />

      {/* 06 Why Hindustan Marine */}
      <WhyChooseUsSection />

      {/* 07 Final Call to Action */}
      <FinalCtaSection />
    </div>
  );
};
