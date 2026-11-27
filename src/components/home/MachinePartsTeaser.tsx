import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, PackageCheck, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { exportSupplyFeatures } from '../../data/machineParts';

export const MachinePartsTeaser: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Information & Capabilities */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="Machine Parts // Industrial & Export"
              title="Industrial Supply & Machine Parts Sourcing"
              subtitle="We handle technical procurement, machinery spare supply, and export consignments with export-standard packing and direct communication."
            />

            <div className="space-y-4">
              {exportSupplyFeatures.slice(0, 3).map((feat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-marine-50 border border-marine-100 flex items-center justify-center shrink-0 mt-0.5">
                    <PackageCheck className="w-4 h-4 text-tech-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-marine-900 font-heading">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/machine-parts-export"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-marine-900 text-white text-sm font-semibold hover:bg-marine-800 transition-colors shadow-sm"
              >
                <span>Machine Parts & RFQ Details</span>
                <ArrowRight className="w-4 h-4 text-tech-orange" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Technical Summary Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-tech-orange" />
                  <span className="font-heading font-bold text-marine-900 text-base">
                    B2B Quotation & RFQ Readiness
                  </span>
                </div>
                <span className="font-mono text-xs bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                  ACTIVE
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you need a single replacement valve, emergency machine module, or bulk industrial parts, submit your part number or drawing specifications for a rapid quotation.
              </p>

              {/* Technical Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                  <div className="text-slate-400 text-[10px]">VERIFICATION</div>
                  <div className="font-semibold text-marine-900 mt-0.5">Photo & Dimension Check</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                  <div className="text-slate-400 text-[10px]">PACKAGING</div>
                  <div className="font-semibold text-marine-900 mt-0.5">Anti-Corrosion Crate</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                  <div className="text-slate-400 text-[10px]">LOCATION</div>
                  <div className="font-semibold text-marine-900 mt-0.5">Bhavnagar Hub (Gujarat)</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80">
                  <div className="text-slate-400 text-[10px]">DISPATCH</div>
                  <div className="font-semibold text-marine-900 mt-0.5">Air / Sea / Surface</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/machine-parts-export#rfq"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-tech-orange text-white text-sm font-bold hover:bg-[#CC5200] transition-colors shadow-sm"
                >
                  <span>Submit Industrial RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
