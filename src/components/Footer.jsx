import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, ArrowRight, ShieldCheck, Award, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function Footer({ onOpenQuoteModal, theme }) {
  return (
    <footer className={`pt-16 pb-24 lg:pb-12 border-t relative overflow-hidden transition-colors ${
      theme === 'dark'
        ? 'bg-black text-gray-400 border-neutral-900'
        : 'bg-slate-950 text-slate-300 border-slate-800'
    }`}>
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-950/30 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Banner Callout */}
        <div className="mb-14 p-8 rounded-3xl bg-gradient-to-r from-neutral-900/90 via-neutral-900 to-red-950/40 border border-red-900/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-red-500 font-bold text-xs tracking-widest uppercase">Transform Your Business Visibility</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Need LED Boards, Signage or Flex Printing?</h3>
            <p className="text-slate-300 text-sm mt-1">Get custom design previews, transparent pricing, and fast local Ghaziabad delivery.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold transition-all border border-neutral-700"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>CALL {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/80 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>GET FREE QUOTE</span>
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-red-600/50 shadow-lg shadow-red-950/60">
                <span className="font-black text-xl text-white drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]">SAG</span>
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-white">SHAIKH <span className="text-red-500">ADVERTISING</span></h4>
                <p className="text-[11px] text-slate-400 tracking-wider">GHAZIABAD STUDIO</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed pr-4">
              Premium 3D LED Boards, Architectural Signage, Flex Printing, Visiting Cards, Wedding Invitation Cards and Complete Shop & Business Branding in Khoda Colony, Ghaziabad.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-slate-200">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:text-red-400 font-bold">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-slate-300">{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white text-xs font-bold tracking-wider uppercase mb-4 text-red-500">Quick Links</h5>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/portfolio" className="text-slate-300 hover:text-white transition-colors">Work Portfolio</Link></li>
              <li><Link to="/process" className="text-slate-300 hover:text-white transition-colors">Our Process</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h5 className="text-white text-xs font-bold tracking-wider uppercase mb-4 text-red-500">Main Services</h5>
            <ul className="space-y-2 text-xs">
              <li><Link to="/led-boards" className="text-slate-300 hover:text-white transition-colors">LED Boards</Link></li>
              <li><Link to="/flex-printing" className="text-slate-300 hover:text-white transition-colors">Flex Banner Printing</Link></li>
              <li><Link to="/signage-3d" className="text-slate-300 hover:text-white transition-colors">3D LED Lettering</Link></li>
              <li><Link to="/signage-3d" className="text-slate-300 hover:text-white transition-colors">Shop Sign Boards</Link></li>
              <li><Link to="/printing" className="text-slate-300 hover:text-white transition-colors">Visiting Card Printing</Link></li>
              <li><Link to="/printing" className="text-slate-300 hover:text-white transition-colors">Wedding Card Printing</Link></li>
            </ul>
          </div>

          {/* Local Ghaziabad Presence */}
          <div>
            <h5 className="text-white text-xs font-bold tracking-wider uppercase mb-4 text-red-500">Local Service Area</h5>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Providing fast, reliable installation and direct studio delivery across Ghaziabad & neighboring regions:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Khoda Colony', 'Indirapuram', 'Vaishali', 'Vasundhara', 'Noida Sec 62', 'Ghaziabad City'].map((area) => (
                <span key={area} className="px-2 py-1 rounded bg-neutral-900 text-[10px] text-slate-200 border border-neutral-800">
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Shaikh Advertising | Ghaziabad. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Designed for Premium Local Business Elevation</span>
            <span className="text-red-500 font-bold">SAG Studios</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
