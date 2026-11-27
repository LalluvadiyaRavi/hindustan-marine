import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, CheckCircle2, FileText, Package } from 'lucide-react';

export const MachinePartsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-surface-warm border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: B2B Capability Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-accent-orange">
                Machine Parts & Industrial Supply
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal-900 font-heading">
                Reliable Machine Parts Sourcing for Domestic & Export Inquiries
              </h2>
              <p className="text-base text-charcoal-600 leading-relaxed font-normal">
                We handle component procurement and machinery spare supply with clear part verification, structured RFQ response, and protective transit packaging.
              </p>
            </div>

            {/* Practical B2B Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-xl border border-surface-border space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-marine-900 font-bold text-sm font-heading">
                  <Package className="w-4 h-4 text-accent-orange shrink-0" />
                  <span>Part Sourcing</span>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Hydraulic components, precision hardware, and machinery spares based on your exact requirements.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-surface-border space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-marine-900 font-bold text-sm font-heading">
                  <FileText className="w-4 h-4 text-accent-orange shrink-0" />
                  <span>Drawings & References</span>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Submit technical drawings, OEM references, or sample photos for rapid quotation and feasibility.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-surface-border space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-marine-900 font-bold text-sm font-heading">
                  <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0" />
                  <span>Quantity Flexibility</span>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Support for single replacement units, workshop batches, or recurring industrial supply needs.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-surface-border space-y-1.5 shadow-xs">
                <div className="flex items-center gap-2 text-marine-900 font-bold text-sm font-heading">
                  <Globe className="w-4 h-4 text-accent-orange shrink-0" />
                  <span>Export Readiness</span>
                </div>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  Inquiries welcomed from domestic industrial operations and international commercial buyers.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/machine-parts-export#rfq"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-marine-900 text-white text-sm font-semibold hover:bg-marine-800 transition-colors shadow-xs"
              >
                <span>Request a Part Quote</span>
                <ArrowRight className="w-4 h-4 text-accent-orange" />
              </Link>
            </div>

          </div>

          {/* Right Column: Clean RFQ Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-surface-border p-8 shadow-elevated space-y-6">
              
              <div className="space-y-1 border-b border-surface-border pb-4">
                <span className="text-xs font-semibold text-accent-orange uppercase tracking-wide">
                  Quick Quotation Process
                </span>
                <h3 className="text-xl font-bold text-charcoal-900 font-heading">
                  How to Request a Quotation
                </h3>
              </div>

              <div className="space-y-4 text-sm text-charcoal-600">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-surface-soft text-marine-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-charcoal-900 block font-semibold">Share Your Part Details</strong>
                    <span className="text-xs">Send part name, model number, photograph, or drawing.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-surface-soft text-marine-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-charcoal-900 block font-semibold">Specify Quantity & Location</strong>
                    <span className="text-xs">State the required quantity and your destination city or country.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-surface-soft text-marine-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-charcoal-900 block font-semibold">Receive Quotation</strong>
                    <span className="text-xs">Our team reviews availability and provides clear pricing and lead time.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-surface-border">
                <Link
                  to="/machine-parts-export"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-surface-soft hover:bg-surface-border text-charcoal-800 text-xs font-semibold transition-colors"
                >
                  <span>Explore Sourcing Details & RFQ Form</span>
                  <ArrowRight className="w-3.5 h-3.5 text-accent-orange" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
