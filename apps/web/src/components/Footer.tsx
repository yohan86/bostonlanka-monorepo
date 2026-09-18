"use client"
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaTwitter, FaEnvelope } from "react-icons/fa";
import CatNavBar from "./CatNavBar";
import {getImageUrl} from  "../lib/prefix"

const CATEGORY_LINKS = [
  { name: "Politics", slug: "politics" },
  { name: "Boston & New England", slug: "boston" },
  { name: "Sri Lanka News", slug: "sri-lanka" },
  { name: "Sports", slug: "sports" },
  { name: "Entertainment", slug: "entertainment" },
  { name: "Videos", slug: "videos" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t-4 border-site-red mt-16">
      {/* Top Footer Section */}
      <div className="w-[96%] max-w-[1180px] mx-auto px-4 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        
        {/* Brand Info (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <Link href="/" className="text-2xl font-black text-white tracking-tight">
          </Link>
          <div className="relative w-[150px] h-[90px] shrink-0">
            <Image src={getImageUrl("/boston-lanka-logo.png")} alt="boston lanka news site logo" fill className="object-container" />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Connecting the Sri Lankan diaspora in Greater Boston, New England, and worldwide with reliable news, cultural highlights, and community updates.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://web.facebook.com/bostonlanka/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-site-red text-white flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://www.youtube.com/Bostonlanka/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-site-red text-white flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
            Categories
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <CatNavBar />
          </div>
        </div>

        {/* Newsletter Signup (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
            Stay Updated
          </h3>
          <p className="text-xs text-slate-400">
            Subscribe to our weekly news digest delivered straight to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-2 mt-1"
          >
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-900 border border-slate-800 text-xs text-white rounded px-3 py-2.5 pl-9 focus:outline-none focus:border-site-red"
              />
              <FaEnvelope className="absolute left-3 top-3 text-slate-500 text-xs" />
            </div>
            <button
              type="submit"
              className="w-full bg-site-red hover:bg-red-700 text-white font-bold text-xs py-2.5 rounded uppercase tracking-wider transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-500 gap-2">
          <p>© {currentYear} Boston Lanka. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-slate-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;