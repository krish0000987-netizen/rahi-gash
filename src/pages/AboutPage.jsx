import React from 'react';
import { BUSINESS_INFO } from '../data/siteData';
import { Sparkles, ShieldCheck, Award, MapPin, Phone, CheckCircle2, Layers, PenTool, Flame } from 'lucide-react';

export default function AboutPage({ onOpenQuoteModal }) {
  const highlights = [
    { label: "Creative Solutions", desc: "Customized designs tailored to your brand identity" },
    { label: "Precision Finishing", desc: "Flawless acrylic joints & high-res print outputs" },
    { label: "Quality Illumination", desc: "IP67 rated waterproof long-life LED modules" },
    { label: "Local Ghaziabad Reliability", desc: "Khoda Colony workshop with prompt direct service" }
  ];

  return (
    <div className="space-y-20 pt-28 pb-16">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/60">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">ABOUT SHAIKH ADVERTISING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Built Around Creativity, <span className="text-red-500">Quality & Visibility.</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Shaikh Advertising is Ghaziabad's dedicated advertising, printing, signage and branding studio operating from Khoda Colony, Ghaziabad.
          </p>
        </div>

        <div className="mt-12 rounded-3xl overflow-hidden border border-neutral-800 relative h-[420px] shadow-2xl">
          <img
            src="/images/hero_led.jpg"
            alt="Shaikh Advertising Ghaziabad Studio Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 max-w-xl p-6 rounded-2xl bg-black/80 backdrop-blur-md border border-neutral-800">
            <span className="text-xs font-bold text-red-500 uppercase">LOCAL ADVERTISING CRAFTSMANSHIP</span>
            <h3 className="text-xl font-bold text-white mt-1">Khoda Colony, Ghaziabad Studio</h3>
            <p className="text-xs text-gray-300 mt-1">Conveniently serving Ghaziabad, Noida & NCR region with comprehensive printing & signage.</p>
          </div>
        </div>
      </section>

      {/* Non-Numeric Highlights Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-2">
              <span className="text-xs font-extrabold text-red-500 tracking-widest uppercase">HIGHLIGHT</span>
              <h3 className="text-lg font-black text-white">{item.label}</h3>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story & Approach Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-red-500 uppercase tracking-wider">WHO WE ARE</span>
            <h2 className="text-3xl font-extrabold text-white">Crafting Standout Brand Identities</h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              At Shaikh Advertising, we believe that your signage and promotional materials represent your business before you even speak to a customer. A well-designed 3D LED board or a crisp velvet visiting card creates instant credibility and trust.
            </p>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              We specialize in custom storefront elevations, ACP panelling, 3D channel letter fabrication, flex banners, visiting cards, and regal Indian wedding card invitations.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-red-500" />
              <span>Our Core Principles</span>
            </h3>
            
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Quality Without Compromise</h4>
                  <p className="text-gray-400">We use weatherproof acrylics, high-density flex vinyl, and long-life LEDs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Transparent Pricing</h4>
                  <p className="text-gray-400">No hidden fees or unexpected costs. Honest local workshop rates.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">On-Time Execution</h4>
                  <p className="text-gray-400">We respect business deadlines for shop inaugurations, campaigns, and events.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white">Want to discuss your branding project?</h3>
            <p className="text-xs text-gray-400 mt-1">Visit our studio in Khoda Colony, Ghaziabad or get an online consultation.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-950/80"
            >
              REQUEST A QUOTE
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-6 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-bold text-xs flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>CALL {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
