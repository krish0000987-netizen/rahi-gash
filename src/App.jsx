import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import MobileCTA from './components/MobileCTA';
import Lightbox from './components/Lightbox';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import LedBoardsPage from './pages/LedBoardsPage';
import FlexPrintingPage from './pages/FlexPrintingPage';
import SignagePage from './pages/SignagePage';
import PrintingPage from './pages/PrintingPage';
import PortfolioPage from './pages/PortfolioPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

// Scroll to top component on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedLightboxItem, setSelectedLightboxItem] = useState(null);
  
  // Default theme is 'light' as requested by user
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen flex flex-col transition-colors duration-300 selection:bg-red-600 selection:text-white ${
        theme === 'dark' ? 'bg-[#060606] text-gray-100 dark' : 'bg-white text-slate-900 light'
      }`}>
        
        {/* Sticky Header */}
        <Header
          onOpenQuoteModal={() => setIsQuoteOpen(true)}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenQuoteModal={() => setIsQuoteOpen(true)}
                  onSelectPortfolioItem={(item) => setSelectedLightboxItem(item)}
                  theme={theme}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenQuoteModal={() => setIsQuoteOpen(true)} theme={theme} />}
            />
            <Route
              path="/services"
              element={<ServicesPage onOpenQuoteModal={() => setIsQuoteOpen(true)} theme={theme} />}
            />
            <Route
              path="/led-boards"
              element={
                <LedBoardsPage
                  onOpenQuoteModal={() => setIsQuoteOpen(true)}
                  onSelectPortfolioItem={(item) => setSelectedLightboxItem(item)}
                  theme={theme}
                />
              }
            />
            <Route
              path="/flex-printing"
              element={
                <FlexPrintingPage
                  onOpenQuoteModal={() => setIsQuoteOpen(true)}
                  onSelectPortfolioItem={(item) => setSelectedLightboxItem(item)}
                  theme={theme}
                />
              }
            />
            <Route
              path="/signage-3d"
              element={
                <SignagePage
                  onOpenQuoteModal={() => setIsQuoteOpen(true)}
                  onSelectPortfolioItem={(item) => setSelectedLightboxItem(item)}
                  theme={theme}
                />
              }
            />
            <Route
              path="/printing"
              element={
                <PrintingPage
                  onOpenQuoteModal={() => setIsQuoteOpen(true)}
                  onSelectPortfolioItem={(item) => setSelectedLightboxItem(item)}
                  theme={theme}
                />
              }
            />
            <Route
              path="/portfolio"
              element={
                <PortfolioPage
                  onOpenQuoteModal={() => setIsQuoteOpen(true)}
                  onSelectPortfolioItem={(item) => setSelectedLightboxItem(item)}
                  theme={theme}
                />
              }
            />
            <Route
              path="/process"
              element={<ProcessPage onOpenQuoteModal={() => setIsQuoteOpen(true)} theme={theme} />}
            />
            <Route path="/contact" element={<ContactPage theme={theme} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenQuoteModal={() => setIsQuoteOpen(true)} theme={theme} />

        {/* Global Quick Action Modal */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          theme={theme}
        />

        {/* Portfolio Image Lightbox */}
        <Lightbox
          item={selectedLightboxItem}
          onClose={() => setSelectedLightboxItem(null)}
          onOpenQuoteModal={() => setIsQuoteOpen(true)}
          theme={theme}
        />

        {/* Mobile Sticky Quick CTA */}
        <MobileCTA onOpenQuoteModal={() => setIsQuoteOpen(true)} theme={theme} />

      </div>
    </Router>
  );
}
