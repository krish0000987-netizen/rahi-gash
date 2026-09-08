import React from 'react';
import { PROCESS_STEPS, WHY_CHOOSE_US, BUSINESS_INFO } from '../data/siteData';
import { Sparkles, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ProcessPage({ onOpenQuoteModal, theme }) {
  return (
    <div className="space-y-20 pt-28 pb-16">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60">
          <Sparkles className="w-3.5 h-3.5 text-red-600" />
          <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">TRANSPARENT WORKFLOW</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white">
          From Idea to Installation — <span className="text-red-600">We Make Branding Simple.</span>
        </h1>
        <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Experience a hassle-free, professional process designed to deliver perfect signboards and print materials on schedule.
        </p>
      </section>

      {/* Detailed Step-by-Step Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {PROCESS_STEPS.map((step, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 flex flex-col md:flex-row items-start md:items-center gap-8 hover:border-red-600/40 transition-all shadow-sm"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-950/80 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-500 font-black text-2xl shrink-0">
              {step.step}
            </div>

            <div className="space-y-1 flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed">{step.desc}</p>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-neutral-900 hover:bg-red-600 hover:text-white text-xs font-bold text-slate-800 dark:text-gray-300 transition-colors shrink-0"
            >
              Start Step {step.step}
            </button>
          </div>
        ))}
      </section>

      {/* Why Shaikh Advertising */}
      <section className="bg-slate-100/80 dark:bg-neutral-950 py-16 border-y border-slate-200 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Why Businesses Trust Shaikh Advertising</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-slate-200 dark:border-neutral-800 space-y-2 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 dark:bg-neutral-950 border border-slate-800 dark:border-neutral-800 text-center space-y-4 text-white">
          <h3 className="text-2xl font-bold text-white">Ready to begin your branding project?</h3>
          <p className="text-xs text-slate-300 dark:text-gray-400 max-w-xl mx-auto">Contact us now for quick initial consultation and digital proofing.</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-950/80"
            >
              GET STARTED NOW
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-8 py-3.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white font-bold text-xs flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>CALL {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
