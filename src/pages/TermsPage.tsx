import React from 'react';
import { Link } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import { usePageMeta } from '../hooks/usePageMeta';

export const TermsPage: React.FC = () => {
  usePageMeta({
    title: 'Terms of Service',
    description: 'Terms and conditions for quotation requests and catalogue browsing with Hindustan Marine.'
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-marine-950 text-white border-b border-marine-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-accent-orange">Terms of Service</span>
          </div>
          <h1 className="text-3xl font-bold font-heading">Terms & Conditions</h1>
          <p className="text-xs text-slate-400 font-mono">Last Updated: September 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-xs space-y-6 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal-900 font-heading">1. Website Purpose & Quotations</h2>
            <p>
              This website serves as a B2B product catalogue, technical capability showcase, and RFQ inquiry platform for {businessConfig.businessName}. Listings and descriptions do not constitute binding online sales contracts until formal price quotations and order confirmations are exchanged.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal-900 font-heading">2. Product Specifications & Availability</h2>
            <p>
              Product specifications, availability, and lead times are confirmed on a case-by-case basis through direct communication. Part numbers, model references, and sample photos should be verified prior to dispatch.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal-900 font-heading">3. Workshop Repair Estimates</h2>
            <p>
              Initial estimates provided via WhatsApp or online forms are preliminary and subject to physical and bench testing upon intake at our Bhavnagar workshop.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal-900 font-heading">4. Contact & Inquiries</h2>
            <p>
              Questions regarding these terms may be directed to <span className="font-mono text-marine-900 font-medium">{businessConfig.email}</span>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
