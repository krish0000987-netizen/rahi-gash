import React from 'react';
import { X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function Lightbox({ item, onClose, onOpenQuoteModal }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-neutral-950 rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-neutral-700 text-white hover:bg-red-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Container */}
        <div className="w-full md:w-3/5 bg-black flex items-center justify-center min-h-[300px] max-h-[500px] relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        {/* Details Panel */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            <span className="px-3 py-1 rounded-full bg-red-950/80 border border-red-800/80 text-[11px] font-bold text-red-400 uppercase tracking-widest">
              {item.category}
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-3 leading-tight">{item.title}</h3>
            <p className="text-xs font-semibold text-gray-400 mt-1">{item.subtitle}</p>
            
            <p className="text-xs text-gray-300 leading-relaxed mt-4">
              {item.description}
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-900 space-y-3">
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/80 transition-all text-center"
            >
              ENQUIRE ABOUT THIS DESIGN
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-gray-300 text-xs font-semibold border border-neutral-800 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
