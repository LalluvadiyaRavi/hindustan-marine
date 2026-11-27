import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { getRepairWhatsAppUrl } from '../../utils/whatsapp';

export const RepairProcessSection: React.FC = () => {
  const steps = [
    { number: '1', title: 'Send Details', desc: 'Share photos, part number or problem summary.' },
    { number: '2', title: 'Inspection', desc: 'Intake and physical check at our Bhavnagar workshop.' },
    { number: '3', title: 'Diagnosis', desc: 'Component testing to pinpoint the exact issue.' },
    { number: '4', title: 'Repair', desc: 'Servicing and component replacement by technicians.' },
    { number: '5', title: 'Testing', desc: 'Functional verification to ensure stable performance.' },
    { number: '6', title: 'Return', desc: 'Safe packaging and return delivery to customer.' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="text-xs uppercase font-bold tracking-wider text-accent-orange">
            Workshop & Repair Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 font-heading">
            Have Equipment That Needs Inspection or Repair?
          </h2>
          <p className="text-base text-charcoal-600 leading-relaxed font-normal">
            We provide diagnostic and repair support for industrial control boards, electronic modules, and machinery components.
          </p>
        </div>

        {/* Clean Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-surface-warm p-5 rounded-xl border border-surface-border space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-full bg-marine-900 text-white font-bold text-xs flex items-center justify-center mb-3">
                  {step.number}
                </div>
                <h3 className="text-sm font-bold text-charcoal-900 font-heading">
                  {step.title}
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed mt-1">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Human-Centered Workshop Callout Card */}
        <div className="bg-surface-soft rounded-2xl p-8 sm:p-10 border border-surface-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-charcoal-900 font-heading">
              Ready to Discuss a Faulty Part or Equipment?
            </h3>
            <p className="text-sm text-charcoal-600 max-w-xl">
              Send us equipment photos or symptoms directly over WhatsApp or submit our quick repair inquiry form.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              to="/repair-services"
              className="px-5 py-3 rounded-lg bg-marine-900 text-white text-sm font-semibold hover:bg-marine-800 transition-colors shadow-xs"
            >
              Repair Inquiry Form
            </Link>
            <a
              href={getRepairWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-accent-whatsapp text-white text-sm font-semibold hover:bg-accent-whatsappHover transition-colors flex items-center gap-2 shadow-xs"
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
