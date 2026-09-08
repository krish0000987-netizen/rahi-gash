import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Sparkles, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function Header({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'LED Boards', path: '/led-boards' },
    { name: 'Flex Printing', path: '/flex-printing' },
    { name: 'Signage & 3D', path: '/signage-3d' },
    { name: 'Printing', path: '/printing' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060606]/90 backdrop-blur-md border-b border-red-950/40 shadow-xl shadow-black/80 py-3'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - SAG Illuminated Crystal Style */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-red-600/40 shadow-lg shadow-red-950/50 group-hover:border-red-500 transition-all duration-300">
              <span className="font-black text-2xl tracking-tighter text-white drop-shadow-[0_0_10px_rgba(239,68,68,0.9)]">
                SAG
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_#ef4444]"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight text-white group-hover:text-red-400 transition-colors">
                SHAIKH <span className="text-red-600">ADVERTISING</span>
              </span>
              <span className="text-[10px] tracking-widest text-gray-400 font-medium uppercase mt-0.5">
                Ghaziabad • Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-neutral-950/60 p-1.5 rounded-full border border-neutral-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-900/40 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-200 hover:text-white bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-950/60 hover:shadow-red-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>GET A QUOTE</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenQuoteModal}
              className="md:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-red-600 shadow-md shadow-red-950/60"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0a0a]/98 backdrop-blur-2xl border-b border-neutral-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-neutral-900">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-red-600 text-white font-bold'
                      : 'bg-neutral-900/80 text-gray-300 hover:bg-neutral-800'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-neutral-900 text-sm font-semibold text-white border border-neutral-800"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-sm font-bold text-white shadow-lg shadow-red-950/80"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Immediate Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
