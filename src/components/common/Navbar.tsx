import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ChevronRight,
  Anchor
} from 'lucide-react';
import { businessConfig } from '../../config/businessConfig';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Repair & Services', path: '/repair-services' },
    { name: 'Machine Parts & Export', path: '/machine-parts-export' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Subtle, Compact Top Information Bar */}
      <div className="bg-marine-950 text-slate-300 text-xs border-b border-marine-800/80 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-6 text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent-orange" />
              <span>{businessConfig.city}, {businessConfig.state}</span>
            </div>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">{businessConfig.businessHours}</span>
          </div>

          <div className="flex items-center space-x-5 text-xs">
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent-orange" />
              <span>{businessConfig.phone}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md shadow-sm py-3.5 border-b border-surface-border'
            : 'bg-white py-4 border-b border-surface-border/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Title */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-marine-900 flex items-center justify-center text-white shadow-xs group-hover:bg-marine-800 transition-colors">
                <Anchor className="w-5 h-5 text-accent-orange" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-marine-900 font-heading">
                  HINDUSTAN MARINE
                </span>
                <span className="text-[11px] text-charcoal-500 font-medium tracking-wide">
                  Components • Machine Parts • Technical Services
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-lg text-sm transition-colors relative ${
                      active
                        ? 'text-marine-900 font-semibold bg-surface-soft'
                        : 'text-charcoal-600 hover:text-marine-900 hover:bg-surface-warm'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-accent-orange rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Header Right Action */}
            <div className="hidden lg:flex items-center">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent-whatsapp text-white text-sm font-semibold hover:bg-accent-whatsappHover shadow-xs hover:shadow transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center lg:hidden gap-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200"
                aria-label="WhatsApp Inquiry"
              >
                <MessageSquare className="w-5 h-5 text-accent-whatsapp fill-accent-whatsapp" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-charcoal-700 hover:bg-surface-soft hover:text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-marine-900"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[105px] sm:top-[115px] bottom-0 bg-white border-b border-surface-border shadow-lg overflow-y-auto z-40 p-4 space-y-4">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? 'bg-marine-900 text-white font-semibold'
                      : 'text-charcoal-700 hover:bg-surface-soft'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${active ? 'text-accent-orange' : 'text-charcoal-400'}`} />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-surface-border space-y-3">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-accent-whatsapp text-white font-semibold shadow-xs text-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Direct WhatsApp Inquiry</span>
            </a>

            <div className="bg-surface-soft p-3.5 rounded-lg text-xs space-y-2 text-charcoal-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-orange shrink-0" />
                <span>{businessConfig.city}, {businessConfig.state}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-marine-700 shrink-0" />
                <span>{businessConfig.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
