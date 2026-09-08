import React from 'react';
import { BUSINESS_INFO, PORTFOLIO_ITEMS } from '../data/siteData';
import { Sparkles, Store, ShieldCheck, CheckCircle2, Phone, ArrowRight, Sparkle } from 'lucide-react';

export default function SignagePage({ onOpenQuoteModal, onSelectPortfolioItem }) {
  return (
    <div className="space-y-20 pt-28 pb-16">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60">
              <Store className="w-3.5 h-3.5 text-red-600" />
              <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">3D SIGNAGE & STOREFRONT BRANDING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Signage That Makes Your Business <span className="text-red-600">Stand Out.</span>
            </h1>

            <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              Transform your shop elevation into a high-end luxury retail brand with custom ACP sheet cladding, laser-cut 3D acrylic channel letters, stainless steel titanium finishes, and LED backlighting.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-7 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-xl shadow-red-600/30"
              >
                REQUEST SIGNAGE CONSULTATION
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-6 py-4 rounded-xl bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-900 dark:text-white font-bold text-xs flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>CALL {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-neutral-800 shadow-2xl h-[420px]">
            <img
              src="/images/hero_led.jpg"
              alt="3D LED Lettering Signboard Installation Ghaziabad"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Before / After Storefront Transformation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest">STORE FRONT ELEVATION</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">The Storefront Transformation</h2>
          <p className="text-xs text-slate-600 dark:text-gray-400">See how modern ACP cladding and 3D LED letters completely elevate a local shop into a flagship outlet.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Ordinary Storefront */}
          <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-neutral-800 text-[10px] font-bold text-slate-600 dark:text-gray-400 uppercase">
                BEFORE BRANDING
              </span>
              <span className="text-xs text-slate-500 dark:text-gray-500">Ordinary Storefront</span>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800/80 text-center space-y-2">
              <p className="text-xs text-slate-600 dark:text-gray-400 italic">"Flat paint, dated wooden board, dim lighting, easily overlooked by passing road traffic."</p>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-gray-400">
              <li className="flex items-center gap-2">✕ Poor night-time visibility</li>
              <li className="flex items-center gap-2">✕ Weak customer trust & low walk-ins</li>
              <li className="flex items-center gap-2">✕ Weather damage & faded colors</li>
            </ul>
          </div>

          {/* Premium Branded Storefront */}
          <div className="p-6 rounded-3xl bg-white dark:bg-neutral-950 border border-red-200 dark:border-red-900/60 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-[10px] font-bold text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 uppercase">
                AFTER SHAIKH BRANDING
              </span>
              <span className="text-xs text-red-600 font-bold">Flagship Retail Look</span>
            </div>
            <div className="p-8 rounded-2xl bg-red-50 dark:bg-gradient-to-r dark:from-neutral-900 dark:to-red-950/30 border border-red-200 dark:border-red-800/40 text-center space-y-2">
              <p className="text-xs text-slate-900 dark:text-white font-bold">"Metallic ACP panelling + 3D laser-cut acrylic letters with vibrant red LED halo backlight."</p>
            </div>
            <ul className="space-y-2 text-xs text-slate-800 dark:text-gray-300">
              <li className="flex items-center gap-2 text-red-600 font-bold">✓ 24/7 High-illumination visibility</li>
              <li className="flex items-center gap-2 text-red-600 font-bold">✓ ₹50-Lakh showroom aesthetic</li>
              <li className="flex items-center gap-2 text-red-600 font-bold">✓ Waterproof IP67 long-life LEDs</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 dark:bg-neutral-950 border border-slate-800 dark:border-neutral-800 text-center space-y-4 text-white">
          <h3 className="text-2xl font-bold text-white">Upgrade Your Store Elevation Today</h3>
          <p className="text-xs text-slate-300 dark:text-gray-400 max-w-xl mx-auto">Get on-site measurements and 3D digital mockups from our Ghaziabad team.</p>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-950/80"
          >
            GET SIGNAGE QUOTE
          </button>
        </div>
      </section>

    </div>
  );
}
