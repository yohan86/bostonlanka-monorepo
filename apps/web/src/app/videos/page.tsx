// apps/web/src/app/videos/page.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaVideo, FaClock, FaShareAlt } from "react-icons/fa";
import AdBannerSidebarSticky from "@/components/AdBannerSidebarSticky";
import AdBannerLandscape from "@/components/AdBannerLandscape";

// Mock Video Data
interface VideoItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  youtubeId: string;
  thumbnailUrl: string;
  duration: string;
  publishedAt: string;
  excerpt: string;
}

const mockVideos: VideoItem[] = [
  {
    id: "1",
    title: "Exclusive Interview: Sri Lanka Economic Recovery Roadmap 2026",
    slug: "exclusive-interview-sri-lanka-economic-recovery-2026",
    category: "Interviews",
    youtubeId: "dQw4w9WgXcQ", // Replace with real YouTube Video IDs
    thumbnailUrl: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80",
    duration: "18:45",
    publishedAt: "Sep 15, 2026",
    excerpt: "Key economic policy experts discuss inflation controls, foreign investment, and industrial growth expectations for Sri Lanka.",
  },
  {
    id: "2",
    title: "Parliament Session Highlights: Key Policy Debates & Resolutions",
    slug: "parliament-session-highlights-key-policy-debates",
    category: "Politics",
    youtubeId: "HbC09xgMSH4",
    thumbnailUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80",
    duration: "12:10",
    publishedAt: "Sep 14, 2026",
    excerpt: "Anura of major political statements, opposition motions, and cabinet approvals during the latest parliamentary sitting.",
  },
  {
    id: "3",
    title: "Global Sri Lankan Cultural Festival & Heritage Showcase",
    slug: "global-sri-lankan-cultural-festival-heritage-showcase",
    category: "Culture",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    duration: "08:30",
    publishedAt: "Sep 12, 2026",
    excerpt: "Highlights from the annual international festival showcasing traditional music, dance, and authentic culinary heritage.",
  },
  {
    id: "4",
    title: "Tech & Innovation Forum: Sri Lanka's Growing IT Export Sector",
    slug: "tech-innovation-forum-sri-lanka-it-export-sector",
    category: "Business",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    duration: "15:20",
    publishedAt: "Sep 10, 2026",
    excerpt: "Leaders from the technology sector analyze workforce expansion, AI adoption, and foreign outsourcing partnerships.",
  },
  {
    id: "5",
    title: "Weekly Political Round-Up: Power Dynamics & Electoral Strategy",
    slug: "weekly-political-roundup-power-dynamics-electoral-strategy",
    category: "Politics",
    youtubeId: "dQw4w9WgXcQ",
    thumbnailUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    duration: "24:15",
    publishedAt: "Sep 08, 2026",
    excerpt: "Boston Lanka's editorial team dissects the week's major political news, coalition moves, and key national developments.",
  },
  {
    id: "6",
    title: "dsds Tourism Renaissance: Unveiling Sri Lanka's New Travel Destinations",
    slug: "tourism-renaissance-unveiling-sri-lankas-new-travel-destinations",
    category: "Culture",
    youtubeId: "JAOvzSV5fjU",
    thumbnailUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    duration: "10:50",
    publishedAt: "Sep 05, 2026",
    excerpt: "xcxc Exploring boutique travel hotspots and eco-tourism initiatives attracting visitors from across the globe.",
  },
];

const categories = ["All", "Politics", "Interviews", "Business", "Culture"];

export default function VideoGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<VideoItem>(mockVideos[0]);
  const [isPlayingHero, setIsPlayingHero] = useState(false);

  const filteredVideos =
    selectedCategory === "All"
      ? mockVideos
      : mockVideos.filter((v) => v.category === selectedCategory);

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlayingHero(true);
    const heading = (document.querySelector(".title-wrapper") as HTMLElement) || null;
    if (heading) {
      const titleoffsettop = heading.offsetTop;
      window.scrollTo({ top: titleoffsettop - 10, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCatClick = (cat:string)=> {
    setSelectedCategory(cat);
    const videoGridBlk = document.querySelector(".videos-grid-blk") as HTMLElement || null;
    const videoGridTop = videoGridBlk.offsetTop;
    window.scrollTo({top:videoGridTop-20, behavior:"smooth"})
  }

  return (
    <main className="container mx-auto px-2 sm:px-4 py-4 md:py-8">
      {/* Top Mobile Ad */}
      <div className="block lg:hidden mb-4 flex justify-center">
        <AdBannerLandscape />
      </div>

      {/* Page Header */}
      <div className="border-b-2 border-site-red pb-4 mb-6 md:mb-8 px-2 sm:px-0 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="title-wrapper">
          <span className="text-xs font-black uppercase tracking-widest text-site-red block mb-1">
            Multimedia Newsroom
          </span>
        <h1 className="flex gap-4 text-3xl md:text-2xl font-black uppercase tracking-tight text-slate-600">
            <FaVideo className="text-site-red" size={28} />
            Video Desk
          </h1>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCatClick(cat)}
              className={`px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-full transition-colors ${
                selectedCategory === cat
                  ? "bg-site-red text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Main Content Area */}
        <section className="lg:col-span-9 flex flex-col gap-8 md:gap-10">
          
          {/* Featured Video Player Showcase - Expanded for Mobile */}
          <div className="bg-slate-900 rounded-lg sm:rounded-xl overflow-hidden shadow-xl border border-slate-800">
            {/* Taller Aspect Ratio on Mobile (4:3) vs Desktop (16:9) */}
            <div className="relative aspect-[4/3] sm:aspect-video w-full bg-black">
              {isPlayingHero ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                  allowFullScreen
                />
              ) : (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setIsPlayingHero(true)}
                >
                  <Image
                    src={activeVideo.thumbnailUrl}
                    alt={activeVideo.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  
                  {/* Play Overlay Button - Enlarged for Mobile */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-site-red text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-2 border-white/30">
                      <FaPlay size={22} className="ml-1" />
                    </div>
                  </div>

                  <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/85 text-white text-xs font-bold px-2.5 py-1 rounded backdrop-blur-sm flex items-center gap-1.5">
                    <FaClock size={11} />
                    {activeVideo.duration}
                  </span>
                </div>
              )}
            </div>

            {/* Video Details Bar */}
            <div className="p-4 sm:p-6 text-white">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-site-red bg-red-950/60 border border-red-800/40 px-2 py-0.5 rounded">
                  {activeVideo.category}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
                  Published: {activeVideo.publishedAt}
                </span>
              </div>

              <h2 className="text-lg sm:text-2xl font-black leading-snug mb-2 sm:mb-3">
                {activeVideo.title}
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeVideo.excerpt}
              </p>
            </div>
          </div>

          {/* Video Grid Feed */}
          <div>
            <h3 className="videos-grid-blk text-base sm:text-lg font-bold text-slate-900 mb-4 sm:mb-6 uppercase tracking-wide border-l-4 border-site-red pl-3">
              {selectedCategory === "All" ? "Latest Video Reports" : `${selectedCategory} Videos`}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {filteredVideos.map((video) => {
                const isActive = activeVideo.id === video.id;

                return (
                  <div
                    key={video.id}
                    onClick={() => handleSelectVideo(video)}
                    className={`group cursor-pointer bg-white border rounded-lg overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md flex flex-col justify-between ${
                      isActive ? "border-site-red ring-1 ring-site-red" : "border-slate-200"
                    }`}
                  >
                    <div>
                      {/* Thumbnail with 16:9 ratio */}
                      <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                        <Image
                          src={video.thumbnailUrl}
                          alt={video.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 350px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-site-red/90 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <FaPlay size={13} className="ml-0.5" />
                          </div>
                        </div>

                        {/* Duration Pill */}
                        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          {video.duration}
                        </span>
                      </div>

                      {/* Info Container */}
                      <div className="p-2 sm:p-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-site-red block mb-1">
                          {video.category}
                        </span>
                        <h4 className="text-[12px] md:text-[14px] font-bold text-slate-900 group-hover:text-site-red transition-colors line-clamp-2 leading-snug">
                          {video.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row px-2 sm:px-4 pb-3.5 sm:pb-4 pt-1 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 mt-2">
                      <span>{video.publishedAt}</span>
                      <span className="font-bold text-site-red group-hover:underline">
                        Watch Now →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sidebar Ads & Sticky Widget */}
        <aside className="hidden lg:flex lg:col-span-3 flex-col items-center">
          <AdBannerSidebarSticky width="w-full max-w-[225px]" />
        </aside>
      </div>
    </main>
  );
}