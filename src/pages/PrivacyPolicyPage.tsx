import React from 'react';
import { Link } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import { usePageMeta } from '../hooks/usePageMeta';

export const PrivacyPolicyPage: React.FC = () => {
  usePageMeta({
    title: 'Privacy Policy',
    description: 'Privacy Policy and data practices for Hindustan Marine B2B inquiry and catalogue services.'
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-marine-950 text-white border-b border-marine-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-accent-orange">Privacy Policy</span>
          </div>
          <h1 className="text-3xl font-bold font-heading">Privacy Policy</h1>
          <p className="text-xs text-slate-400 font-mono">Last Updated: September 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-xs space-y-6 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal-900 font-heading">1. Introduction</h2>
            <p>
              {businessConfig.businessName} ("we", "our", or "us") respects your privacy regarding any information we may collect through our website, contact forms, RFQ submissions, and direct communication channels including WhatsApp and email.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal-900 font-heading">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when inquiring about products, workshop repair services, or machine parts quotations. This may include:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-600">
              <li>Name and contact details (phone number, WhatsApp number, email address).</li>
              <li>Company name and country/location.</li>
              <li>Equipment specifications, part numbers, and problem descriptions.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal-900 font-heading">3. How We Use Information</h2>
            <p>
              The information provided is strictly used to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-charcoal-600">
              <li>Formulate and deliver price quotations and RFQ responses.</li>
              <li>Coordinate workshop inspection and component repair.</li>
              <li>Communicate dispatch and delivery logistics.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-charcoal-900 font-heading">4. Contact Information</h2>
            <p>
              For privacy-related questions or data inquiries, contact {businessConfig.businessName} at <span className="font-mono text-marine-900 font-medium">{businessConfig.email}</span>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
