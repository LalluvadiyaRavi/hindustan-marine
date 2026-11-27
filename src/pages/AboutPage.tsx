import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { businessConfig } from '../config/businessConfig';
import { usePageMeta } from '../hooks/usePageMeta';

export const AboutPage: React.FC = () => {
  usePageMeta({
    title: 'About Us',
    description: 'Learn about Hindustan Marine, our Bhavnagar operations, component sourcing, and technical workshop services.'
  });

  const valuePillars = [
    {
      title: 'Technical Verification',
      description: 'Prior to dispatch or repair intake, our team verifies part numbers, physical dimensions, and electrical parameters.',
      badge: 'VERIFICATION'
    },
    {
      title: 'Bhavnagar Maritime & Industrial Hub',
      description: 'Strategically located in Bhavnagar, Gujarat with direct access to regional industrial supply chains and transport networks.',
      badge: 'LOCATION'
    },
    {
      title: 'WhatsApp-First Direct Communication',
      description: 'Rapid technical exchange with real-time photographs, part condition updates, and immediate quotation turnarounds.',
      badge: 'COMMUNICATION'
    },
    {
      title: 'B2B & Industrial Focus',
      description: 'Structured to support plant engineers, marine technicians, procurement managers, and international supply requirements.',
      badge: 'B2B ORIENTED'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Page Header Banner */}
      <div className="bg-marine-950 text-white border-b border-marine-800 py-12 sm:py-16 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent-orange">About Us</span>
          </div>

          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-marine-900 border border-marine-700 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-accent-orange"></span>
              <span>BHAVNAGAR, GUJARAT, INDIA</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-white">
              About Hindustan Marine
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Supplying industrial electronic components, machine spares, and technical workshop repair services for commercial and maritime requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        
        {/* Section 1: Company Profile & Operating Context */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <SectionHeading
              badge="Company Profile // Background"
              title="Dedicated Industrial & Marine Supply Partner"
              subtitle="Rooted in Gujarat's prominent maritime and industrial corridor."
            />

            <div className="space-y-3 text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              <p>
                Based in Bhavnagar, Gujarat, <strong className="text-charcoal-900">Hindustan Marine</strong> operates across three core business divisions: electronic component supply, workshop-based diagnostic repair services, and industrial machine parts supply & export.
              </p>
              <p>
                We work with industrial facilities, workshop technicians, machine operators, and commercial purchasers who require reliable component sourcing, rapid quotation delivery, and transparent technical evaluation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 bg-white rounded-xl border border-surface-border shadow-xs">
                <span className="text-accent-orange block text-[11px] uppercase font-bold">Location Advantage</span>
                <span className="text-charcoal-900 font-semibold mt-0.5 block">{businessConfig.city} Hub, {businessConfig.state}</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-surface-border shadow-xs">
                <span className="text-marine-700 block text-[11px] uppercase font-bold">Core Sourcing</span>
                <span className="text-charcoal-900 font-semibold mt-0.5 block">Electronics & Machinery Parts</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-marine-900 text-white rounded-2xl border border-marine-800 p-7 sm:p-8 shadow-md space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-marine-800 border border-marine-700 flex items-center justify-center">
                  <Anchor className="w-5 h-5 text-accent-orange" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white">
                    {businessConfig.businessName}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {businessConfig.city}, {businessConfig.state}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Our operations emphasize clarity: verified part specifications, direct WhatsApp photo validation, and organized packing suited for domestic transit and international shipment.
              </p>

              <div className="pt-2 border-t border-marine-800 flex justify-between items-center text-xs text-slate-400">
                <span>Working Days:</span>
                <span className="text-slate-200">{businessConfig.businessHours}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why Choose Us */}
        <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-8">
          <SectionHeading
            badge="Operating Principles // Value"
            title="Why Work With Hindustan Marine"
            subtitle="Clear communication, structured part verification, and dependable B2B support."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePillars.map((val, idx) => (
              <div
                key={idx}
                className="bg-surface-warm rounded-xl border border-surface-border p-5 space-y-2.5"
              >
                <span className="text-[10px] font-mono text-accent-orange uppercase font-bold bg-accent-orangeLight px-2 py-0.5 rounded border border-orange-200">
                  {val.badge}
                </span>
                <h4 className="text-sm font-bold text-charcoal-900 font-heading">
                  {val.title}
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Direct Inquiry Banner */}
        <section className="p-8 rounded-2xl bg-marine-950 text-white border border-marine-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Have a Specific Requirement or Looking to Partner?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Connect with our Bhavnagar office to discuss component sourcing, machine parts, or technical repair arrangements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-5 py-3 rounded-lg bg-accent-orange text-white text-xs sm:text-sm font-bold hover:bg-accent-orangeHover transition-colors"
            >
              Contact Our Office
            </Link>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-accent-whatsapp text-white text-xs sm:text-sm font-bold hover:bg-accent-whatsappHover transition-colors flex items-center gap-2"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </section>

      </div>

    </div>
  );
};
