import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Wrench, Globe, ArrowRight } from 'lucide-react';

export const WhatWeDoSection: React.FC = () => {
  const divisions = [
    {
      number: '01',
      title: 'Electronic Components',
      description: 'Components and parts for marine and industrial requirements, control modules, and electrical assemblies.',
      icon: <Cpu className="w-6 h-6 text-accent-orange" />,
      link: '/products?category=electronic-components',
      linkText: 'Explore Electronic Parts',
    },
    {
      number: '02',
      title: 'Repair & Technical Services',
      description: 'Inspection, diagnostics and repair support for supported equipment at our Bhavnagar workshop.',
      icon: <Wrench className="w-6 h-6 text-marine-700" />,
      link: '/repair-services',
      linkText: 'View Repair Services',
    },
    {
      number: '03',
      title: 'Machine Parts & Export',
      description: 'Machine parts sourcing and supply for domestic and international requirements with structured quotation support.',
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      link: '/machine-parts-export',
      linkText: 'Explore Machine Parts',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="text-xs uppercase font-bold tracking-wider text-accent-orange">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 font-heading">
            Three Core Divisions Serving Industrial & Marine Clients
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed font-normal">
            Whether you need replacement parts, urgent workshop diagnostic repair, or machinery spares, Hindustan Marine provides direct, reliable support.
          </p>
        </div>

        {/* 3 Clean Division Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {divisions.map((div) => (
            <div
              key={div.number}
              className="bg-surface-warm rounded-2xl p-7 sm:p-8 border border-surface-border hover:border-surface-borderHover hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-surface-border flex items-center justify-center shadow-xs">
                    {div.icon}
                  </div>
                  <span className="text-xl font-bold font-mono text-charcoal-400">
                    {div.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-charcoal-900 font-heading group-hover:text-marine-700 transition-colors">
                  {div.title}
                </h3>

                <p className="text-sm text-charcoal-600 leading-relaxed">
                  {div.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-surface-border/80">
                <Link
                  to={div.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-marine-900 hover:text-accent-orange transition-colors"
                >
                  <span>{div.linkText}</span>
                  <ArrowRight className="w-4 h-4 text-accent-orange group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
