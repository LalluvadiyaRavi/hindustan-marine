import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export const QuickRfqBanner: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-marine-950 text-white relative overflow-hidden border-t border-marine-800">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-tech-blueprint opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-marine-900 border border-marine-700 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>DIRECT BUSINESS INQUIRIES & QUOTATIONS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-white">
              Ready to Discuss Your Component or Machinery Requirement?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Connect directly with Hindustan Marine for technical specifications, product availability, repair feasibility, and quotation requests.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold shadow-lg transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Us Now</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-marine-800 hover:bg-marine-700 text-white border border-marine-600 text-sm font-semibold transition-all"
            >
              <span>Contact Page & Inquiries</span>
              <ArrowRight className="w-4 h-4 text-tech-orange" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
