import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, BUSINESS_INFO } from '../data/siteData';
import { Phone, MessageCircle, ChevronLeft, ChevronRight, Sparkles, Shield, Star } from 'lucide-react';

export default function HeroSlider({ onOpenQuoteModal }) {
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
      className="relative w-full h-[92vh] min-h-[620px] max-h-[900px] bg-black overflow-hidden flex items-center justify-center"
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

            {/* Dark Cinematic Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-black/70"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-transparent"></div>
          </div>
        );
      })}

      {/* Main Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl space-y-6">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-600/50 backdrop-blur-md shadow-lg shadow-red-950/80 animate-pulse-glow">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span className="text-xs font-bold tracking-widest text-red-400 uppercase">
              {HERO_SLIDES[currentIndex].badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] drop-shadow-2xl">
            Make Your Brand <br />
            <span className="bg-gradient-to-r from-white via-red-200 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]">
              Impossible to Ignore.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
            Premium LED Boards, Signage, Flex Printing, 3D LED Branding, Visiting Cards, Wedding Cards & Complete Advertising Solutions in Ghaziabad.
          </p>

          {/* Hero Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-7 py-4 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-950/80 hover:shadow-red-600/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <span>{HERO_SLIDES[currentIndex].ctaPrimary}</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-7 py-4 rounded-xl text-sm font-bold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 backdrop-blur-md transition-all flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>CALL NOW: {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=Hello%20Shaikh%20Advertising,%20I%20want%20a%20quote%20for%20my%20business%20branding.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-4 rounded-xl text-sm font-bold text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/60 transition-all flex items-center gap-2 backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: {BUSINESS_INFO.whatsapp}</span>
            </a>
          </div>

          {/* Quick Features Row */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-neutral-800/60 max-w-xl text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-red-500 shrink-0" />
              <span>High Quality Craftsmanship</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-red-500 shrink-0" />
              <span>Custom 3D & LED Designs</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-500 shrink-0" />
              <span>Fast Ghaziabad Delivery</span>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 z-30 p-3 rounded-full bg-black/60 border border-neutral-800 text-white hover:bg-red-600 transition-colors backdrop-blur-md"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 z-30 p-3 rounded-full bg-black/60 border border-neutral-800 text-white hover:bg-red-600 transition-colors backdrop-blur-md"
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
              idx === currentIndex ? 'w-8 bg-red-600' : 'w-2 bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
