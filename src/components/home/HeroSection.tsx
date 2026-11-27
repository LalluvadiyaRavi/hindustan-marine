import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  ArrowRight, 
  Cpu, 
  Wrench, 
  Globe,
  CheckCircle2
} from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';
import { businessConfig } from '../../config/businessConfig';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-marine-950 text-white overflow-hidden border-b border-marine-800">
      {/* Subtle radial ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-marine-700/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clear Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location & Industry Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-marine-900 border border-marine-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-accent-orange"></span>
              <span className="font-medium text-slate-200">{businessConfig.city.toUpperCase()}, GUJARAT</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Marine & Industrial Supply</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading text-white leading-tight">
              Components, Machine Parts & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">Technical Solutions</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Supporting marine, industrial and workshop requirements with component sourcing, machine parts and technical repair services.
            </p>

            {/* Quick 3 Pillar Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-marine-900/70 border border-marine-800 text-xs text-slate-200">
                <Cpu className="w-4 h-4 text-accent-orange shrink-0" />
                <span className="font-medium">Electronic Parts</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-marine-900/70 border border-marine-800 text-xs text-slate-200">
                <Wrench className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-medium">Repair Services</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-marine-900/70 border border-marine-800 text-xs text-slate-200">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">Parts & Export</span>
              </div>
            </div>

            {/* CTA Buttons Group */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent-orange hover:bg-accent-orangeHover text-white text-sm font-semibold shadow-sm hover:shadow transition-all"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent-whatsapp hover:bg-accent-whatsappHover text-white text-sm font-semibold shadow-sm hover:shadow transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Inquiry</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-marine-900 hover:bg-marine-850 text-slate-200 border border-marine-700 text-sm font-medium transition-all"
              >
                <span>Send Inquiry</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Clean Corporate Overview Card */}
          <div className="lg:col-span-5">
            <div className="bg-marine-900 rounded-2xl border border-marine-800 p-7 sm:p-8 shadow-xl space-y-6">
              
              <div className="space-y-1.5 border-b border-marine-800 pb-5">
                <span className="text-xs uppercase font-semibold tracking-wider text-accent-orange">
                  Corporate Overview
                </span>
                <h2 className="text-xl font-bold text-white font-heading">
                  Hindustan Marine
                </h2>
                <p className="text-xs text-slate-400">
                  Industrial & Marine Supply Operations • Bhavnagar, Gujarat
                </p>
              </div>

              {/* Core Features List */}
              <div className="space-y-3.5 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct sourcing of electronic & industrial components</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Workshop-based inspection and technical diagnostic repair</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Machinery parts supply for domestic and export requirements</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Rapid response via WhatsApp with part photos and quotations</span>
                </div>
              </div>

              {/* Action Link Box */}
              <div className="pt-2 border-t border-marine-800">
                <Link
                  to="/machine-parts-export"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-marine-950 hover:bg-marine-850 border border-marine-800 text-xs font-medium text-slate-200 transition-colors"
                >
                  <span>Need specific machine parts or custom sourcing?</span>
                  <ArrowRight className="w-4 h-4 text-accent-orange" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
