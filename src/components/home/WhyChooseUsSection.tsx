import React from 'react';
import { MessageSquare, Search, CheckCircle, Headphones, Shield } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    {
      title: 'Clear & Direct Communication',
      description: 'Direct communication with our team via WhatsApp and email, ensuring fast answers on availability and quotation terms.',
      icon: <MessageSquare className="w-5 h-5 text-accent-orange" />,
    },
    {
      title: 'Requirement-Based Sourcing',
      description: 'We source electronic parts and machinery spares directly against your drawings, part references, or sample photographs.',
      icon: <Search className="w-5 h-5 text-marine-700" />,
    },
    {
      title: 'Technical Understanding',
      description: 'Our workshop team understands industrial control systems, PCB modules, and machinery mechanics to evaluate parts properly.',
      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'WhatsApp-First Inquiries',
      description: 'Send photos, nameplates, and questions directly for prompt feasibility confirmation without complicated paperwork.',
      icon: <Headphones className="w-5 h-5 text-accent-orange" />,
    },
    {
      title: 'Industrial & Workshop Support',
      description: 'Structured to support maintenance teams, marine technicians, plant engineers, and international commercial buyers.',
      icon: <Shield className="w-5 h-5 text-marine-700" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Value Context */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-accent-orange">
              Why Hindustan Marine
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 font-heading leading-tight">
              A Dependable Partner for Components & Spares
            </h2>
            <p className="text-base text-charcoal-600 leading-relaxed font-normal">
              Based in Bhavnagar, Gujarat, we combine component supply, workshop diagnostics, and machine parts sourcing into a straightforward B2B service.
            </p>
          </div>

          {/* Right Column: Clean Non-Repetitive List of 5 Reasons */}
          <div className="lg:col-span-7 space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-surface-warm border border-surface-border hover:border-surface-borderHover transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-surface-border flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  {reason.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-charcoal-900 font-heading">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
