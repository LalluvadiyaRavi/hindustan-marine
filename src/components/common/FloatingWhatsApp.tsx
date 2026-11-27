import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5"
    >
      {/* Tooltip on hover/focus */}
      <div
        className={`hidden sm:flex items-center px-3 py-1.5 rounded-lg bg-marine-950 text-white text-xs font-medium border border-marine-800 shadow-lg transition-all duration-200 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span>Instant WhatsApp Inquiry</span>
      </div>

      {/* Button */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-accent-whatsapp text-white flex items-center justify-center shadow-lg hover:bg-accent-whatsappHover hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-accent-whatsapp/40 group"
        aria-label="Chat with Hindustan Marine on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </aside>
  );
};
