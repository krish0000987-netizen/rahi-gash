import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO, MAIN_SERVICES } from '../data/siteData';

export default function QuoteModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: 'LED Board',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto reset after 4s
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-neutral-950 rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden">
        
        {/* Top Header Glow */}
        <div className="h-2 bg-gradient-to-r from-red-600 via-red-500 to-red-700"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-neutral-900 border border-neutral-800 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-950/60 text-red-500 border border-red-800">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">Quotation Request Received!</h3>
              <p className="text-sm text-gray-300">
                Thank you <span className="text-white font-semibold">{formData.fullName}</span>. Our Ghaziabad team will call you back shortly at <span className="text-red-400 font-bold">{formData.phone}</span>.
              </p>
              <div className="pt-4 text-xs text-gray-500">
                Immediate requirement? Call us directly: <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white font-bold underline">{BUSINESS_INFO.phone}</a>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Get Fast Quote</span>
                <h3 className="text-2xl font-extrabold text-white mt-1">Request Project Quote</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Tell us your LED board, signage or flex printing requirements for immediate price estimate.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Service Required *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  >
                    <option value="LED Board">LED Board</option>
                    <option value="Flex Printing">Flex Printing</option>
                    <option value="Signage">Signage</option>
                    <option value="3D LED Board">3D LED Board</option>
                    <option value="Visiting Card">Visiting Card Printing</option>
                    <option value="Wedding Card">Wedding Card Printing</option>
                    <option value="Other Advertising Work">Other Advertising Work</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Project Details / Sizes (Optional)</label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe board dimensions, location in Ghaziabad, or specific design idea..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-sm font-bold shadow-lg shadow-red-950/80 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT ENQUIRY</span>
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-red-500" /> Khoda Colony, Ghaziabad
                </span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-1 text-red-400 font-bold">
                  <Phone className="w-3.5 h-3.5" /> {BUSINESS_INFO.phone}
                </a>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
