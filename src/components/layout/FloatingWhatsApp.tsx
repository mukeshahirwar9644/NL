import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppUrl, CONTRACTOR_NAME } from '../../lib/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-8 right-5 z-40 flex flex-col items-end gap-2">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-earth-900/95 text-white px-3.5 py-2 rounded-md shadow-xl border border-earth-700 text-xs font-sans animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
          <span>Chat directly with <strong>{CONTRACTOR_NAME}</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-earth-400 hover:text-white ml-1"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center border-2 border-white/20"
        aria-label="Chat on WhatsApp"
        title="Chat with Nandlal Ahirwar on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </a>
    </div>
  );
};
