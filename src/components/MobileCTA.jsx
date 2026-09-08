import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function MobileCTA({ onOpenQuoteModal }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080808]/95 backdrop-blur-lg border-t border-neutral-800 p-2.5 flex items-center gap-2 shadow-2xl">
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white font-bold text-xs"
      >
        <Phone className="w-4 h-4 text-red-500" />
        <span>CALL NOW</span>
      </a>

      <a
        href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=Hi%20Shaikh%20Advertising,%20I%20need%20a%20quote%20for%20my%20signage/printing.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 font-bold text-xs"
      >
        <MessageCircle className="w-4 h-4 text-emerald-400" />
        <span>WHATSAPP</span>
      </a>

      <button
        onClick={onOpenQuoteModal}
        className="px-3.5 py-3 rounded-xl bg-red-600 text-white font-bold text-xs shadow-md shadow-red-950/80 flex items-center justify-center"
      >
        <Sparkles className="w-4 h-4" />
      </button>
    </div>
  );
}
