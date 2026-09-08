import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Sparkles, Send, Sun, Moon } from 'lucide-react';
import { BUSINESS_INFO } from '../data/siteData';

export default function Header({ onOpenQuoteModal, theme, toggleTheme }) {
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
          ? theme === 'dark'
            ? 'bg-[#060606]/90 backdrop-blur-md border-b border-red-950/40 shadow-xl shadow-black/80 py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-lg shadow-slate-900/5 py-3'
          : theme === 'dark'
            ? 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4'
            : 'bg-gradient-to-b from-white/95 via-white/70 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - SAG Illuminated Crystal Style */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-neutral-900 to-black border border-red-600/40 shadow-lg shadow-red-950/50 group-hover:border-red-500'
                : 'bg-gradient-to-br from-red-50 to-white border border-red-200 shadow-md shadow-red-500/10 group-hover:border-red-600'
            }`}>
              <span className={`font-black text-2xl tracking-tighter ${
                theme === 'dark'
                  ? 'text-white drop-shadow-[0_0_10px_rgba(239,68,68,0.9)]'
                  : 'text-red-600 drop-shadow-[0_2px_4px_rgba(239,68,68,0.2)]'
              }`}>
                SAG
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_#ef4444]"></span>
            </div>
            <div className="flex flex-col">
              <span className={`font-extrabold text-lg leading-none tracking-tight transition-colors ${
                theme === 'dark' ? 'text-white group-hover:text-red-400' : 'text-slate-900 group-hover:text-red-600'
              }`}>
                SHAIKH <span className="text-red-600">ADVERTISING</span>
              </span>
              <span className={`text-[10px] tracking-widest font-medium uppercase mt-0.5 ${
                theme === 'dark' ? 'text-gray-400' : 'text-slate-500'
              }`}>
                Ghaziabad • Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={`hidden xl:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md ${
            theme === 'dark'
              ? 'bg-neutral-950/60 border-neutral-800/80'
              : 'bg-slate-100/80 border-slate-200/90'
          }`}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30 font-bold'
                      : theme === 'dark'
                        ? 'text-gray-300 hover:text-white hover:bg-neutral-800/60'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-bold ${
                theme === 'dark'
                  ? 'bg-neutral-900 border-neutral-800 text-amber-400 hover:bg-neutral-800'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-slate-800" />}
              <span className="hidden lg:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                theme === 'dark'
                  ? 'text-gray-200 hover:text-white bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700'
                  : 'text-slate-800 hover:text-red-600 bg-slate-100 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/30 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>GET A QUOTE</span>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border text-xs font-bold ${
                theme === 'dark'
                  ? 'bg-neutral-900 border-neutral-800 text-amber-400'
                  : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenQuoteModal}
              className="md:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-red-600 shadow-md shadow-red-950/60"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                theme === 'dark'
                  ? 'bg-neutral-900 border-neutral-800 text-gray-300 hover:text-white'
                  : 'bg-slate-100 border-slate-200 text-slate-800 hover:text-black'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={`xl:hidden px-4 pt-3 pb-6 space-y-2 mt-3 border-b shadow-xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-200 ${
          theme === 'dark'
            ? 'bg-[#0a0a0a]/98 border-neutral-800'
            : 'bg-white/98 border-slate-200'
        }`}>
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-200 dark:border-neutral-900">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-red-600 text-white font-bold'
                      : theme === 'dark'
                        ? 'bg-neutral-900 text-gray-300 hover:bg-neutral-800'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
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
              className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold border ${
                theme === 'dark'
                  ? 'bg-neutral-900 text-white border-neutral-800'
                  : 'bg-slate-100 text-slate-900 border-slate-200'
              }`}
            >
              <Phone className="w-4 h-4 text-red-600" />
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
