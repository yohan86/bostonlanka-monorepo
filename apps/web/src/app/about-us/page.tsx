// apps/web/src/app/about-us/page.tsx

import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaNewspaper, FaBullhorn, FaUsers } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AdBannerSidebarSticky from "@/components/AdBannerSidebarSticky";
import AdBannerLandscape from "@/components/AdBannerLandscape";

export const metadata = {
  title: "About Us | Boston Lanka",
  description:
    "Boston Lanka is a premier news and media outlet dedicated to bringing accurate Sri Lankan news, political insights, and cultural stories to global readers.",
};

export default function AboutUsPage() {
  return (
    <main className="container mx-auto px-4 py-2">
      {/* Top Mobile Banner */}
      <div className="block lg:hidden mb-6 flex justify-center">
        <AdBannerLandscape />
      </div>

      {/* Page Title Header */}
      <div className="border-b-2 border-site-red pb-4 mb-8">
        <span className="text-xs font-black uppercase tracking-widest text-site-red block mb-1">
          Who We Are
        </span>
        <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight text-slate-600">
          About Boston Lanka
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content Area */}
        <section className="lg:col-span-8 flex flex-col gap-10">
          {/* Editorial Hero Banner */}
          <div className="relative rounded-xl overflow-hidden bg-slate-900 text-white p-8 md:p-12 shadow-lg">
            <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/newsroom-bg.jpg')" }} />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-3 py-1 bg-site-red text-white text-[10px] font-bold uppercase tracking-wider rounded mb-4">
                Global Sri Lankan Voice
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
                Connecting Sri Lanka to Readers Worldwide with Uncompromised Journalism.
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Founded to bridge information gaps, Boston Lanka delivers breaking politics, business intelligence, cultural stories, and exclusive video interviews to an international audience.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-black text-site-red">15+</p>
              <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1">Years Active</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-site-red">500K+</p>
              <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1">Monthly Readers</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-site-red">10K+</p>
              <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1">Articles Published</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black text-site-red">24/7</p>
              <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-1">Live Updates</p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wide border-l-4 border-site-red pl-3">
              Our Core Pillars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg border border-slate-200 hover:border-site-red/40 transition-colors bg-white shadow-sm">
                <FaNewspaper className="text-site-red text-2xl mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-2">Unbiased Reporting</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We adhere to strict journalistic standards, prioritizing verified facts over sensationalism across all news stories.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 hover:border-site-red/40 transition-colors bg-white shadow-sm">
                <FaGlobe className="text-site-red text-2xl mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-2">Global Network</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Keeping Sri Lankans across North America, Europe, and Asia linked to real-time events unfolding home and abroad.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 hover:border-site-red/40 transition-colors bg-white shadow-sm">
                <FaBullhorn className="text-site-red text-2xl mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-2">Exclusive Video Coverage</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Featuring high-impact video interviews with key political leaders, economic analysts, and prominent public figures.
                </p>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 hover:border-site-red/40 transition-colors bg-white shadow-sm">
                <FaUsers className="text-site-red text-2xl mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-2">Community Focused</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Highlighting social, economic, and educational initiatives shaping Sri Lanka&apos;s ongoing development.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-slate-900 rounded-xl text-white gap-4">
            <div>
              <h4 className="font-bold text-base">Have a news tip or media query?</h4>
              <p className="text-xs text-slate-400 mt-1">Get in touch with our editorial newsroom team directly.</p>
            </div>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-site-red text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-red-700 transition-colors shrink-0 flex items-center gap-2"
            >
              <span>Contact Editorial</span>
              <MdKeyboardDoubleArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Sidebar Ads & Sticky Widget */}
        <aside className="hidden lg:flex lg:col-span-4 flex-col items-center">
          <AdBannerSidebarSticky width="w-full max-w-[250px]" />
        </aside>
      </div>
    </main>
  );
}