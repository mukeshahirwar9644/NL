import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl, PHONE_NUMBER } from '../../lib/whatsapp';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-earth-950/95 backdrop-blur-lg border-t border-earth-800/90 px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* WhatsApp Button */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#25D366] text-white text-xs font-heading font-semibold rounded-sm shadow-sm active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-earth-800 text-sand-100 border border-earth-700 text-xs font-heading font-semibold rounded-sm shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-terracotta-400" />
          <span>Call</span>
        </a>

        {/* Get Quote Button */}
        <Link
          to="/contact"
          className="flex items-center justify-center gap-1 py-2.5 px-2 bg-terracotta-600 text-white text-xs font-heading font-semibold rounded-sm border border-terracotta-500 shadow-sm active:scale-95 transition-transform"
        >
          <span>Quote</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
