import React from 'react';
import { BUSINESS_INFO, PORTFOLIO_ITEMS } from '../data/siteData';
import { Sparkles, Printer, CheckCircle2, Phone, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function FlexPrintingPage({ onOpenQuoteModal, onSelectPortfolioItem }) {
  const flexServices = [
    {
      title: "Star Flex Banners",
      desc: "Heavy duty 340+ GSM star flex material engineered for large outdoor hoardings & weather resistance."
    },
    {
      title: "Eco-Solvent HD Banners",
      desc: "High-definition photo-quality printing for close-range retail banners, indoor exhibitions, and standees."
    },
    {
      title: "Shop Promotional Banners",
      desc: "Vibrant discount, sale, season launch, and grand opening shopfront banners with reinforced eyelets."
    },
    {
      title: "Event & Stage Backdrops",
      desc: "Seamless large format stage backdrops for corporate conferences, weddings, and political campaigns."
    }
  ];

  return (
    <div className="space-y-20 pt-28 pb-16">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60">
              <Printer className="w-3.5 h-3.5 text-red-600" />
              <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">LARGE FORMAT PRINTING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Big Prints. <span className="text-red-600">Bold Visibility.</span>
            </h1>

            <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              Industrial heavy-duty flex banner printing for shop promotions, roadside hoardings, event backdrops, and marketing campaigns with vibrant eco-solvent inks.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-7 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-xl shadow-red-600/30"
              >
                REQUEST FLEX PRINTING QUOTE
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
              src="/images/flex_press.jpg"
              alt="High Speed Flex Printing Press Machine Ghaziabad"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest">FLEX CATEGORIES</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Commercial Flex Printing Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {flexServices.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 space-y-3 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Flex Banner Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_ITEMS.filter(i => i.category === 'Flex Printing').map(item => (
            <div
              key={item.id}
              onClick={() => onSelectPortfolioItem(item)}
              className="cursor-pointer rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-neutral-800 h-64 relative group shadow-lg"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs text-gray-300">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
