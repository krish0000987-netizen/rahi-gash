import React from 'react';
import { BUSINESS_INFO, PORTFOLIO_ITEMS } from '../data/siteData';
import { Sparkles, CreditCard, Heart, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

export default function PrintingPage({ onOpenQuoteModal, onSelectPortfolioItem }) {
  return (
    <div className="space-y-20 pt-28 pb-16">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60">
          <Sparkles className="w-3.5 h-3.5 text-red-600" />
          <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">PREMIUM PRINTING SERVICES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white">
          Visiting Cards & <span className="text-red-600">Royal Wedding Invitations</span>
        </h1>
        <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Tactile luxury paper craftsmanship featuring velvet touch, raised gold foil embossing, metallic edges, and ornate Indian wedding card suites.
        </p>
      </section>

      {/* Visiting Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-xs font-bold text-slate-800 dark:text-gray-300">
              <CreditCard className="w-3.5 h-3.5 text-red-600" />
              <span>EXECUTIVE BUSINESS CARDS</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Visiting Cards Crafted to Leave an Impression
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
              We print premium visiting cards on 350+ GSM heavyweight cardstock with a range of custom finishes:
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-gray-300 shadow-sm">
                <span className="font-bold text-slate-900 dark:text-white block">Velvet Touch Laminate</span>
                Ultra soft matte tactile finish
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-gray-300 shadow-sm">
                <span className="font-bold text-slate-900 dark:text-white block">Gold & Red Foil Stamping</span>
                Metallic reflective foil detail
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-gray-300 shadow-sm">
                <span className="font-bold text-slate-900 dark:text-white block">Spot UV & Textured Gloss</span>
                Raised glossy logo elements
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-gray-300 shadow-sm">
                <span className="font-bold text-slate-900 dark:text-white block">Metallic Gilded Edges</span>
                Reflective crystal side profile
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-600/30"
            >
              ORDER VISITING CARDS
            </button>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-neutral-800 shadow-2xl h-[380px]">
            <img
              src="/images/visiting_cards.jpg"
              alt="Luxury Velvet Foil Visiting Cards Ghaziabad"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Wedding Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 rounded-3xl overflow-hidden border border-slate-200 dark:border-neutral-800 shadow-2xl h-[380px]">
            <img
              src="/images/wedding_cards.jpg"
              alt="Royal Indian Wedding Invitation Cards Ghaziabad"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-xs font-bold text-slate-800 dark:text-gray-300">
              <Heart className="w-3.5 h-3.5 text-red-600" />
              <span>ROYAL WEDDING INVITATIONS</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Royal Indian Wedding Cards Collection
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
              Celebrate your special day with regal invitation suites. Featuring traditional Indian motifs, rich velvet covers, gold calligraphy, custom monograms, and matching envelopes.
            </p>

            <div className="space-y-2 text-xs text-slate-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Rich Crimson & Emerald Velvet Pouch Covers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Acrylic Laser-Cut & Intricate Foil Stamping</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Matching RSVP, Sangeet & Reception Inserts</span>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-600/30"
            >
              EXPLORE WEDDING CARD SAMPLES
            </button>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 dark:bg-neutral-950 border border-slate-800 dark:border-neutral-800 text-center space-y-4 text-white">
          <h3 className="text-2xl font-bold text-white">Start Your Printing Project</h3>
          <p className="text-xs text-slate-300 dark:text-gray-400 max-w-xl mx-auto">Visit our Khoda Colony workshop to inspect physical paper samples and foil treatments.</p>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-950/80"
          >
            <Phone className="w-4 h-4" />
            <span>CALL {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </section>

    </div>
  );
}
