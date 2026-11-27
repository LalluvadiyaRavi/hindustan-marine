import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowRight, MessageSquare } from 'lucide-react';
import { repairProcessSteps } from '../../data/services';
import { SectionHeading } from '../common/SectionHeading';
import { getRepairWhatsAppUrl } from '../../utils/whatsapp';

export const RepairProcessTeaser: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Technical Workshop // 6-Step Protocol"
            title="Systematic Diagnostic & Repair Workflow"
            subtitle="Our structured workshop process ensures clear logging, precise component-level diagnostics, and thorough post-repair bench testing."
          />

          <Link
            to="/repair-services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-marine-900 hover:text-tech-orange transition-colors shrink-0"
          >
            <span>Full Repair Details</span>
            <ArrowRight className="w-4 h-4 text-tech-orange" />
          </Link>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {repairProcessSteps.map((step) => (
            <div
              key={step.step}
              className="bg-slate-50 rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:bg-white transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xl font-bold text-tech-orange">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-tech-orange transition-colors"></span>
                </div>
                
                <h3 className="text-sm font-bold text-marine-900 font-heading mb-1">
                  {step.title}
                </h3>
                
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200/60 text-[10px] font-mono text-slate-400">
                STAGE {step.step} // 06
              </div>
            </div>
          ))}
        </div>

        {/* Quick Workshop CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-marine-950 text-white border border-marine-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-tech-cyan">
              <Wrench className="w-4 h-4" />
              <span>NEED WORKSHOP REPAIR ASSISTANCE?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Have faulty electronics, control modules, or machinery parts?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Send equipment photos, model numbers, or problem descriptions directly to our Bhavnagar workshop team.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/repair-services"
              className="px-5 py-3 rounded-lg bg-white text-marine-900 text-sm font-bold hover:bg-slate-100 transition-colors shadow"
            >
              Repair Inquiry Form
            </Link>
            <a
              href={getRepairWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-[#25D366] text-white text-sm font-bold hover:bg-[#20bd5a] transition-colors flex items-center gap-2 shadow"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Workshop</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
