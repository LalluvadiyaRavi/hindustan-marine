import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Wrench, Globe, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const PillarCards: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Electronic Parts & Components',
      subtitle: 'Component Supply',
      description: 'Supply of industrial and marine electronic modules, PCBs, power supplies, sensors, and electrical automation assemblies.',
      icon: <Cpu className="w-6 h-6 text-tech-orange" />,
      linkText: 'Browse Electronic Parts',
      linkUrl: '/products?category=electronic-components',
      borderAccent: 'hover:border-tech-orange',
      badge: 'SUPPLY & SOURCING',
    },
    {
      number: '02',
      title: 'Repair & Technical Services',
      subtitle: 'Workshop Diagnostics',
      description: 'Component-level troubleshooting, diagnostic testing, and repair support for industrial control boards, modules, and machinery units.',
      icon: <Wrench className="w-6 h-6 text-tech-cyan" />,
      linkText: 'View Repair Process',
      linkUrl: '/repair-services',
      borderAccent: 'hover:border-tech-cyan',
      badge: 'BHAVNAGAR WORKSHOP',
    },
    {
      number: '03',
      title: 'Machine Parts & Export',
      subtitle: 'Industrial Hardware & Supply',
      description: 'Supply and export facilitation of industrial machinery spares, hydraulic parts, valves, and precision mechanical components.',
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      linkText: 'Explore Machine Spares',
      linkUrl: '/machine-parts-export',
      borderAccent: 'hover:border-emerald-500',
      badge: 'DOMESTIC & EXPORT',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <SectionHeading
            badge="Core Operations // 03 Pillars"
            title="Comprehensive Marine & Industrial Capabilities"
            subtitle="Integrated component supply, technical workshop diagnostics, and industrial machine parts supply."
          />
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className={`bg-white rounded-xl border border-slate-200 p-7 shadow-sm hover:shadow-tech-md transition-all duration-200 flex flex-col justify-between ${pillar.borderAccent} group`}
            >
              <div className="space-y-4">
                
                {/* Card Top: Number & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-marine-900 transition-colors">
                    {pillar.number}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                    {pillar.icon}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500">
                    {pillar.badge}
                  </span>
                  <h3 className="text-xl font-bold text-marine-900 font-heading">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>

              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  to={pillar.linkUrl}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-marine-900 hover:text-tech-orange transition-colors group-hover:translate-x-1 duration-150"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRight className="w-4 h-4 text-tech-orange" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
