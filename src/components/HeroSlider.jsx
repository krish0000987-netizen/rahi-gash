import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, BUSINESS_INFO } from '../data/siteData';
import { Phone, MessageCircle, ChevronLeft, ChevronRight, Sparkles, Shield, Star } from 'lucide-react';

export default function HeroSlider({ onOpenQuoteModal, theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 3-second automatic timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      className={`relative w-full h-[92vh] min-h-[620px] max-h-[900px] overflow-hidden flex items-center justify-center transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Background Images with Smooth Crossfade */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with subtle zoom effect */}
            <div
              className={`w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[4000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Overlays for Readability based on Theme */}
            {theme === 'dark' ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-black/70"></div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/85 to-white/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80"></div>
              </>
            )}
          </div>
        );
      })}

      {/* Main Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Badge */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md animate-pulse-glow ${
            theme === 'dark'
              ? 'bg-red-950/60 border-red-600/50'
              : 'bg-red-50 border-red-200'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span className="text-xs font-bold tracking-widest text-red-600 dark:text-red-400 uppercase">
              {HERO_SLIDES[currentIndex].badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.08] drop-shadow-sm">
            <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>Make Your Brand</span> <br />
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
              Impossible to Ignore.
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-base sm:text-lg font-medium leading-relaxed max-w-2xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-slate-700'
          }`}>
            Premium LED Boards, Signage, Flex Printing, 3D LED Branding, Visiting Cards, Wedding Cards & Complete Advertising Solutions in Ghaziabad.
          </p>

          {/* Hero Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-7 py-4 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-600/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <span>{HERO_SLIDES[currentIndex].ctaPrimary}</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={`px-7 py-4 rounded-xl text-sm font-bold border backdrop-blur-md transition-all flex items-center gap-2 shadow-sm ${
                theme === 'dark'
                  ? 'bg-neutral-900/90 text-white border-neutral-700 hover:bg-neutral-800'
                  : 'bg-slate-100/90 text-slate-900 border-slate-300 hover:bg-slate-200'
              }`}
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>CALL NOW: {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=Hello%20Shaikh%20Advertising,%20I%20want%20a%20quote%20for%20my%20business%20branding.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 rounded-xl text-sm font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>WhatsApp: {BUSINESS_INFO.whatsapp}</span>
            </a>
          </div>

          {/* Quick Features Row */}
          <div className={`pt-6 grid grid-cols-3 gap-4 border-t max-w-xl text-xs ${
            theme === 'dark' ? 'border-neutral-800/60 text-gray-400' : 'border-slate-200 text-slate-600'
          }`}>
            <div className="flex items-center gap-2 font-medium">
              <Shield className="w-4 h-4 text-red-600 shrink-0" />
              <span>High Quality Craftsmanship</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <Star className="w-4 h-4 text-red-600 shrink-0" />
              <span>Custom 3D & LED Designs</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <Sparkles className="w-4 h-4 text-red-600 shrink-0" />
              <span>Fast Ghaziabad Delivery</span>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className={`absolute left-4 z-30 p-3 rounded-full border transition-colors backdrop-blur-md ${
          theme === 'dark'
            ? 'bg-black/60 border-neutral-800 text-white hover:bg-red-600'
            : 'bg-white/80 border-slate-300 text-slate-800 hover:bg-red-600 hover:text-white'
        }`}
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className={`absolute right-4 z-30 p-3 rounded-full border transition-colors backdrop-blur-md ${
          theme === 'dark'
            ? 'bg-black/60 border-neutral-800 text-white hover:bg-red-600'
            : 'bg-white/80 border-slate-300 text-slate-800 hover:bg-red-600 hover:text-white'
        }`}
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-8 z-30 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? 'w-8 bg-red-600'
                : theme === 'dark' ? 'w-2 bg-gray-600 hover:bg-gray-400' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
