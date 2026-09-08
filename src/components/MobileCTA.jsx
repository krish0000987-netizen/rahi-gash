import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function MobileCTA({ onOpenQuoteModal, theme }) {
  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 flex items-center gap-2 shadow-2xl backdrop-blur-lg border-t ${
      theme === 'dark'
        ? 'bg-[#080808]/95 border-neutral-800'
        : 'bg-white/95 border-slate-200'
    }`}>
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs border ${
          theme === 'dark'
            ? 'bg-neutral-900 border-neutral-700 text-white'
            : 'bg-slate-100 border-slate-300 text-slate-900'
        }`}
      >
        <Phone className="w-4 h-4 text-red-600" />
        <span>CALL NOW</span>
      </a>

      <a
        href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=Hi%20Shaikh%20Advertising,%20I%20need%20a%20quote%20for%20my%20signage/printing.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 text-white font-bold text-xs shadow-sm"
      >
        <MessageCircle className="w-4 h-4 text-white" />
        <span>WHATSAPP</span>
      </a>

      <button
        onClick={onOpenQuoteModal}
        className="px-3.5 py-3 rounded-xl bg-red-600 text-white font-bold text-xs shadow-md flex items-center justify-center"
      >
        <Sparkles className="w-4 h-4" />
      </button>
    </div>
  );
}
