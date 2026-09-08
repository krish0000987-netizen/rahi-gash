import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { MAIN_SERVICES, WHY_CHOOSE_US, PROCESS_STEPS, PORTFOLIO_ITEMS, BUSINESS_INFO } from '../data/siteData';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, MapPin, PenTool, Tag, PhoneCall, Palette, CheckCircle2, Wrench, Truck, Phone, Star } from 'lucide-react';

export default function HomePage({ onOpenQuoteModal, onSelectPortfolioItem }) {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Zap: Zap,
    Layers: Layers,
    MapPin: MapPin,
    PenTool: PenTool,
    Tag: Tag,
    PhoneCall: PhoneCall,
    Palette: Palette,
    CheckCircle2: CheckCircle2,
    Wrench: Wrench,
    Truck: Truck
  };

  return (
    <div className="space-y-24 pb-12">
      
      {/* Section 1: Hero Automatic Slideshow */}
      <HeroSlider onOpenQuoteModal={onOpenQuoteModal} />

      {/* Section 2: Trust & Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/60">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider">ESTABLISHED BRANDING STUDIO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Your Complete Advertising & Branding Partner in <span className="text-red-500">Ghaziabad</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Shaikh Advertising provides comprehensive advertising, signage, printing, and brand elevate solutions for retail shops, corporate offices, local businesses, and personal events across Khoda Colony, Ghaziabad, and NCR.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              We combine modern LED lighting technology, precision CNC channel lettering, high-speed flex printing presses, and luxury card finishes to give your business an immediate competitive edge.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
                <h4 className="text-red-500 font-extrabold text-lg">Turnkey Signage</h4>
                <p className="text-xs text-gray-400 mt-1">Design, ACP panelling, 3D lettering, and electrical setup.</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
                <h4 className="text-red-500 font-extrabold text-lg">Fast Execution</h4>
                <p className="text-xs text-gray-400 mt-1">Prompt turnaround with direct local Ghaziabad workshop rates.</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-lg shadow-red-950/80 transition-all flex items-center gap-2"
              >
                <span>REQUEST FREE QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/about"
                className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-gray-300 text-xs font-semibold border border-neutral-800 transition-all"
              >
                Learn Our Story
              </Link>
            </div>

          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl shadow-red-950/30 group">
              <img
                src="/images/hero_led.jpg"
                alt="Shaikh Advertising Studio Workshop Ghaziabad"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/80 backdrop-blur-md border border-neutral-800 space-y-1">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-red-500 fill-red-500" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">GHAZIABAD WORKSHOP HUB</span>
                </div>
                <p className="text-xs text-gray-300">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Services Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Our Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Full-Spectrum Advertising & Print Solutions</h2>
          <p className="text-sm text-gray-400">
            From high-illumination 3D LED shop signboards to luxury embossed wedding invitations, explore our core categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MAIN_SERVICES.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-neutral-950 border border-neutral-800/80 overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-bold text-red-400 border border-neutral-800">
                  {service.badge}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-2">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-neutral-900">
                  <Link
                    to={service.path}
                    className="text-xs font-bold text-red-500 hover:text-red-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>EXPLORE SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={onOpenQuoteModal}
                    className="text-[11px] font-semibold px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-red-600 hover:text-white text-gray-300 transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Why Choose Shaikh Advertising */}
      <section className="bg-neutral-950/60 py-20 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Why Businesses Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Engineered for Visibility & Longevity</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800/80 space-y-4 hover:border-red-600/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-800/50 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 5: Featured Work Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Selected Works</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Featured Advertising Projects</h2>
          </div>
          <Link
            to="/portfolio"
            className="text-xs font-bold text-red-500 hover:text-red-400 flex items-center gap-1"
          >
            <span>VIEW FULL PORTFOLIO GALLERY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_ITEMS.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPortfolioItem(item)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 h-72 shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="px-2.5 py-1 rounded bg-red-600 text-[10px] font-bold text-white uppercase">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors pt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Process Horizontal Timeline */}
      <section className="bg-neutral-950 py-20 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Seamless Execution</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">How We Bring Your Brand to Life</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3 relative">
                <span className="text-3xl font-black text-red-600/40">{step.step}</span>
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Primary Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-red-950/80 via-neutral-900 to-black border border-red-800/60 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto leading-tight">
            Ready to Give Your Business a <span className="text-red-500">Better First Impression?</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Get in touch with Shaikh Advertising today. Fast quotes, high quality LED fabrication, and reliable local service in Ghaziabad.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm shadow-xl shadow-red-950/90 transition-all transform hover:scale-105"
            >
              GET A QUOTE NOW
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-8 py-4 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-white font-bold text-sm flex items-center gap-2"
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
