import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/siteData';
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, Sparkles, Navigation } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: 'LED Board',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pt-28 pb-16">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/60">
          <Sparkles className="w-3.5 h-3.5 text-red-500" />
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest">GET IN TOUCH</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
          Let’s Build Something That <span className="text-red-500">Gets Noticed.</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Visit our Khoda Colony workshop or request an online consultation for your signboards, flex printing, and custom branding requirements.
        </p>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Info Column */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-6">
              <div>
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider">OFFICIAL CONTACT</span>
                <h3 className="text-2xl font-extrabold text-white mt-1">Shaikh Advertising | Ghaziabad</h3>
                <p className="text-xs text-gray-400 mt-1">Advertising • Printing • Signage • Branding</p>
              </div>

              <div className="space-y-4 pt-2 text-sm">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                  <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-gray-400 block uppercase">Direct Phone & WhatsApp</span>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-lg font-black text-white hover:text-red-400 transition-colors">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                  <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-gray-400 block uppercase">Studio Location</span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                    <span className="text-xs text-gray-400 block mt-1">{BUSINESS_INFO.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                  <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-gray-400 block uppercase">Studio Hours</span>
                    <p className="text-xs font-medium text-gray-200 mt-0.5">
                      {BUSINESS_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-950/80"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=Hi%20Shaikh%20Advertising,%20I%20want%20to%20enquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 rounded-xl bg-emerald-950 border border-emerald-700/60 hover:bg-emerald-900/80 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WHATSAPP</span>
                </a>
              </div>

            </div>

            {/* Location Card */}
            <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-red-500" />
                <h4 className="text-sm font-bold text-white">How to Reach Us</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Located near Nurani Jama Masjid in Khoda Colony, Ghaziabad. Easy access for customers from Indirapuram, Vaishali, Vasundhara, and Noida Sector 62.
              </p>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 space-y-6 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-950/80 text-red-500 border border-red-800">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Thank You for Your Enquiry!</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    We have received your message. Our team will contact you shortly at <span className="text-red-400 font-bold">{formData.phone}</span> with your project estimate.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-neutral-900 text-xs font-bold text-gray-300 hover:text-white"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-wider">PROJECT ENQUIRY FORM</span>
                    <h3 className="text-2xl font-extrabold text-white mt-1">Get Your Free Quotation</h3>
                    <p className="text-xs text-gray-400 mt-1">Fill out the details below and we will contact you immediately.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your 10-digit mobile number"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Service Required *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                      >
                        <option value="LED Board">LED Board</option>
                        <option value="Flex Printing">Flex Printing</option>
                        <option value="Signage">Signage</option>
                        <option value="3D LED Board">3D LED Board</option>
                        <option value="Visiting Card">Visiting Card</option>
                        <option value="Wedding Card">Wedding Card</option>
                        <option value="Other Advertising Work">Other Advertising Work</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1">Message / Specifications</label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us board sizes, design ideas, or specific requirements..."
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-sm focus:outline-none focus:border-red-600 transition-colors"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-sm font-bold shadow-xl shadow-red-950/80 flex items-center justify-center gap-2 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT ENQUIRY</span>
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
