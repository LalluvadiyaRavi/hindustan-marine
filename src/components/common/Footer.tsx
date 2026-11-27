import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Anchor, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Cpu, 
  Wrench, 
  Globe 
} from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-marine-950 text-slate-300 border-t border-marine-800">
      {/* Upper Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-marine-900 flex items-center justify-center text-white border border-marine-800 shadow-xs">
                <Anchor className="w-5 h-5 text-accent-orange" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                HINDUSTAN MARINE
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Supplier of electronic components, industrial and machine parts, and technical workshop repair services based in Bhavnagar, Gujarat, India.
            </p>

            <div className="pt-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-whatsapp text-white text-xs font-semibold hover:bg-accent-whatsappHover transition-all shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-200">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link to="/repair-services" className="text-slate-400 hover:text-white transition-colors">
                  Repair & Services
                </Link>
              </li>
              <li>
                <Link to="/machine-parts-export" className="text-slate-400 hover:text-white transition-colors">
                  Machine Parts & Export
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business Divisions */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-200">
              Core Divisions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-accent-orange shrink-0" />
                  <span>Electronic Components</span>
                </Link>
              </li>
              <li>
                <Link to="/repair-services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Workshop Repair</span>
                </Link>
              </li>
              <li>
                <Link to="/machine-parts-export" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Machine Parts & Supply</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-200">
              Location & Contact
            </h3>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                <span>{businessConfig.city}, {businessConfig.state}, {businessConfig.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{businessConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="truncate">{businessConfig.email}</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                {businessConfig.businessHours}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal Strip */}
      <div className="bg-marine-950/90 border-t border-marine-900 py-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 {businessConfig.businessName}. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
