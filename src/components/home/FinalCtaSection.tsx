import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-marine-950 text-white border-t border-marine-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-accent-orange">
              Direct Contact & Quotations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white">
              Have a Product, Part or Technical Requirement?
            </h2>
            <p className="text-base text-slate-300 font-normal leading-relaxed">
              Send us your requirement and our team can review the details and respond with the next steps.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent-orange hover:bg-accent-orangeHover text-white text-sm font-semibold shadow-sm transition-all"
            >
              <span>Send Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent-whatsapp hover:bg-accent-whatsappHover text-white text-sm font-semibold shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
