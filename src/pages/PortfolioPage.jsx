import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, BUSINESS_INFO } from '../data/siteData';
import { Sparkles, Filter, Eye, Phone } from 'lucide-react';

export default function PortfolioPage({ onSelectPortfolioItem, onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'LED Boards', '3D Letters', 'Flex Printing', 'Visiting Cards', 'Wedding Cards'];

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-16 pt-28 pb-16">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/60">
          <Sparkles className="w-3.5 h-3.5 text-red-500" />
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest">SHOWCASE GALLERY</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
          Our Work Speaks <span className="text-red-500">Before We Do.</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Explore our completed 3D LED signboards, flex banners, shopfront elevations, executive visiting cards, and royal wedding invitations.
        </p>

        {/* Category Filters */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-lg shadow-red-950/80 scale-105'
                  : 'bg-neutral-900 text-gray-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPortfolioItem(item)}
              className="group cursor-pointer relative rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800/80 hover:border-red-600/50 transition-all duration-300 shadow-xl h-80 flex flex-col justify-end"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="relative p-6 space-y-2 z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-red-600 text-[10px] font-bold text-white uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white group-hover:bg-red-600 transition-colors">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white">Have a specific design in mind?</h3>
            <p className="text-xs text-gray-400 mt-1">Send us your image reference over WhatsApp or request a custom quote.</p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-950/80"
          >
            DISCUSS YOUR PROJECT
          </button>
        </div>
      </section>

    </div>
  );
}
