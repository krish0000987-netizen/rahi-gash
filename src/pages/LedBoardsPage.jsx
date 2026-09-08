import React from 'react';
import { BUSINESS_INFO, PORTFOLIO_ITEMS } from '../data/siteData';
import { Sparkles, Zap, ShieldCheck, CheckCircle2, Phone, ArrowRight, Sun, Moon } from 'lucide-react';

export default function LedBoardsPage({ onOpenQuoteModal, onSelectPortfolioItem }) {
  const ledTypes = [
    {
      title: "Front-Lit Acrylic LED Boards",
      desc: "Vibrant glowing front faces with high translucent colored acrylics and IP67 LED modules.",
      badge: "High Brightness"
    },
    {
      title: "Halo/Backlit 3D Lettering",
      desc: "Sophisticated backlight aura radiating onto stainless steel, titanium, or ACP backing.",
      badge: "Luxury Aesthetic"
    },
    {
      title: "Dual-Illuminated (Front & Back)",
      desc: "Combines sharp front lettering clarity with warm ambient background halo glow.",
      badge: "Maximum Impact"
    },
    {
      title: "Slim Edge-Lit Lightboxes",
      desc: "Ultra thin poster lightboxes for retail showroom displays, menus, and internal branding.",
      badge: "Sleek Indoor"
    }
  ];

  return (
    <div className="space-y-20 pt-28 pb-16">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/60">
              <Zap className="w-3.5 h-3.5 text-red-500" />
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest">LED SIGNBOARD FABRICATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Light Up Your <span className="text-red-500">Brand.</span>
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Capture 24/7 attention with illuminated 3D LED signboards engineered for high night-time visibility, long module lifespan, and sleek architectural presence in Ghaziabad.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-7 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-xl shadow-red-950/90"
              >
                GET YOUR LED BOARD DESIGNED
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-6 py-4 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-bold text-xs flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-500" />
                <span>CALL {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl h-[420px]">
            <img
              src="/images/hero_led.jpg"
              alt="Illuminated 3D LED Shop Signboard Ghaziabad"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Types of LED Boards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">VARIATIONS</span>
          <h2 className="text-3xl font-extrabold text-white">Types of LED Signage We Build</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ledTypes.map((type, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-red-600/40 transition-all space-y-4">
              <span className="px-3 py-1 rounded-full bg-red-950 text-[10px] font-bold text-red-400 border border-red-800">
                {type.badge}
              </span>
              <h3 className="text-xl font-bold text-white">{type.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-neutral-950 py-16 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <Sun className="w-8 h-8 text-red-500 mx-auto" />
              <h3 className="text-lg font-bold text-white">Day & Night Visibility</h3>
              <p className="text-xs text-gray-400">High contrast vibrant acrylic faces remain clear under direct sunlight and glow intensely at night.</p>
            </div>
            <div className="space-y-2">
              <Zap className="w-8 h-8 text-red-500 mx-auto" />
              <h3 className="text-lg font-bold text-white">Low Electricity Cost</h3>
              <p className="text-xs text-gray-400">Energy-efficient 12V LED modules reduce power consumption by up to 70% compared to traditional light tubes.</p>
            </div>
            <div className="space-y-2">
              <ShieldCheck className="w-8 h-8 text-red-500 mx-auto" />
              <h3 className="text-lg font-bold text-white">Weatherproof Waterproofing</h3>
              <p className="text-xs text-gray-400">IP67 rated water-sealed modules withstand rain, dust, and extreme temperature variations in Ghaziabad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Portfolio Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">LED Board Portfolio Showcase</h2>
          <button onClick={onOpenQuoteModal} className="text-xs font-bold text-red-500 hover:text-red-400">
            Request Similar Design →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_ITEMS.filter(i => i.category === 'LED Boards' || i.category === '3D Letters').map(item => (
            <div
              key={item.id}
              onClick={() => onSelectPortfolioItem(item)}
              className="cursor-pointer rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 h-64 relative group"
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs text-gray-400">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
