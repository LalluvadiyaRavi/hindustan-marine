import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Package, MessageSquare } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';

export const NotFoundPage: React.FC = () => {
  usePageMeta({
    title: '404 - Page Not Found',
    description: 'The page you requested does not exist. Browse Hindustan Marine products or contact us.'
  });

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 py-16 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-surface-border text-center space-y-5 shadow-xs">
        
        <div className="w-16 h-16 rounded-2xl bg-marine-950 text-accent-orange flex items-center justify-center mx-auto shadow-xs">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        <div className="space-y-1.5">
          <span className="text-xs text-accent-orange uppercase font-bold">
            ERROR 404
          </span>
          <h1 className="text-2xl font-bold text-charcoal-900 font-heading">
            Page Not Located
          </h1>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            The page you are trying to access does not exist or may have been moved.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            to="/"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-marine-900 text-white text-xs font-semibold hover:bg-marine-800 transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/products"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-surface-border bg-surface-warm text-charcoal-700 text-xs font-semibold hover:bg-surface-soft transition-colors"
          >
            <Package className="w-4 h-4" />
            <span>Browse Product Catalog</span>
          </Link>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Us for Help</span>
          </a>
        </div>

      </div>
    </div>
  );
};
