// apps/web/src/app/contact-us/page.tsx

"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import AdBannerSidebarSticky from "@/components/AdBannerSidebarSticky";
import AdBannerLandscape from "@/components/AdBannerLandscape";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <main className="container mx-auto px-4 py-2">
      {/* Top Mobile Ad Banner */}
      <div className="block lg:hidden mb-6 flex justify-center">
        <AdBannerLandscape />
      </div>

      {/* Page Header */}
      <div className="border-b-2 border-site-red pb-4 mb-8">
        <span className="text-xs font-black uppercase tracking-widest text-site-red block mb-1">
          Get In Touch
        </span>
        <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight text-slate-600">
          Contact Editorial
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Section */}
        <section className="lg:col-span-9 flex flex-col gap-8">
          
          {/* Quick Routing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-[10px] font-black uppercase tracking-widest text-site-red block mb-1">
                Press & Tips
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-1">News Desk</h3>
              <p className="text-xs text-slate-500 mb-3">Submit breaking stories and tips.</p>
              <a href="mailto:news@bostonlanka.com" className="text-xs font-bold text-slate-900 hover:text-site-red transition-colors flex items-center gap-1.5">
                <FaEnvelope className="text-site-red" size={12} />
                news@bostonlanka.com
              </a>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-[10px] font-black uppercase tracking-widest text-site-red block mb-1">
                Commercial
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Advertising</h3>
              <p className="text-xs text-slate-500 mb-3">Sponsorships & media kits.</p>
              <a href="mailto:ads@bostonlanka.com" className="text-xs font-bold text-slate-900 hover:text-site-red transition-colors flex items-center gap-1.5">
                <FaEnvelope className="text-site-red" size={12} />
                ads@bostonlanka.com
              </a>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-[10px] font-black uppercase tracking-widest text-site-red block mb-1">
                Inquiries
              </span>
              <h3 className="text-sm font-bold text-slate-900 mb-1">General Desk</h3>
              <p className="text-xs text-slate-500 mb-3">General questions and feedback.</p>
              <a href="mailto:info@bostonlanka.com" className="text-xs font-bold text-slate-900 hover:text-site-red transition-colors flex items-center gap-1.5">
                <FaEnvelope className="text-site-red" size={12} />
                info@bostonlanka.com
              </a>
            </div>
          </div>

          {/* Form & Info Section */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Fill out the form below to reach out to our editorial or support desk.
            </p>

            {submitted ? (
              <div className="py-12 text-center bg-slate-50 rounded-lg border border-slate-200">
                <FaCheckCircle className="text-emerald-500 text-4xl mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">Message Received</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Thank you for contacting Boston Lanka. Our newsroom team will review your submission and respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-4 py-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-slate-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-site-red transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-site-red transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Department
                    </label>
                    <select className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-site-red transition-colors">
                      <option value="editorial">Editorial / News Tip</option>
                      <option value="advertising">Advertising & Marketing</option>
                      <option value="general">General Inquiries</option>
                      <option value="technical">Website Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Story Submission / Inquiry"
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-site-red transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded focus:bg-white focus:outline-none focus:border-site-red transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-site-red text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-red-700 disabled:opacity-50 transition-colors self-start"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Submit Message</span>
                      <FaPaperPlane size={11} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Sidebar Ads */}
        <aside className="hidden lg:flex lg:col-span-3 flex-col items-center">
          <AdBannerSidebarSticky width="w-full max-w-[225px]" />
        </aside>
      </div>
    </main>
  );
}