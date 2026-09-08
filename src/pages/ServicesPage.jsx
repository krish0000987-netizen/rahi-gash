import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_SERVICES, BUSINESS_INFO } from '../data/siteData';
import { Sparkles, ArrowRight, CheckCircle2, Phone } from 'lucide-react';

export default function ServicesPage({ onOpenQuoteModal }) {
  return (
    <div className="space-y-20 pt-28 pb-16">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60">
          <Sparkles className="w-3.5 h-3.5 text-red-600" />
          <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">COMPLETE ADVERTISING CATALOGUE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white">
          Our Specialized <span className="text-red-600">Services & Solutions</span>
        </h1>
        <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Explore our range of illuminated signboards, high-resolution flex banner printing, luxury business stationery, and customized event branding.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MAIN_SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800/80 overflow-hidden flex flex-col justify-between hover:border-red-600/50 transition-all shadow-lg group"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-bold text-red-400 border border-neutral-800">
                    {service.badge}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider">Key Benefits</span>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={onOpenQuoteModal}
                  className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md shadow-red-600/30 transition-all"
                >
                  ENQUIRE NOW
                </button>
                <Link
                  to={service.path}
                  className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-neutral-900 hover:bg-slate-200 dark:hover:bg-neutral-800 text-slate-800 dark:text-gray-300 text-xs font-bold border border-slate-200 dark:border-neutral-800 transition-all"
                >
                  Details
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 dark:bg-neutral-950 border border-slate-800 dark:border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-white">
          <div>
            <h3 className="text-2xl font-bold text-white">Need a custom size or specific material specification?</h3>
            <p className="text-xs text-slate-300 dark:text-gray-400 mt-1">We fabricate signboards and print materials according to your exact requirements.</p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-950/80 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>CALL {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </section>

    </div>
  );
}
