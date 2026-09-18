'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaPlay, FaVideo } from 'react-icons/fa';
import CategoryFooterLink from './CategoryFooterLink';
import Link from 'next/link';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string; // e.g. "dQw4w9WgXcQ"
  date?: string;
  thumbnailUrl?: string;
}

interface VideoWallProps {
  videos: VideoItem[];
}

export const VideoWall = ({ videos }: VideoWallProps) => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(
    videos?.[0] || null
  );
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videos || videos.length === 0) return null;

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlaying(true); // Auto-start embed on click
  };

  const activeThumb =
    activeVideo?.thumbnailUrl ||
    `https://img.youtube.com/vi/${activeVideo?.youtubeId}/hqdefault.jpg`;

  return (
    <section className="w-full bg-slate-950 text-white rounded-xl p-4 md:p-6 my-8 shadow-xl">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-3">
        <FaVideo className="text-site-red text-xl" />
        <h2 className="text-xl font-black uppercase tracking-tight text-white">
          Video Gallery
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Featured Video Player (Takes 7 or 8 cols) */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-3">
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-slate-800 shadow-inner">
            {isPlaying && activeVideo ? (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full group cursor-pointer text-left focus:outline-none"
                aria-label={`Play video: ${activeVideo?.title}`}
              >
                <Image
                  src={activeThumb}
                  alt={activeVideo?.title || 'Featured video'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Big Red Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-site-red text-white flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaPlay size={22} />
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-site-red bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    Now Playing
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-white mt-1.5 line-clamp-2">
                    {activeVideo?.title}
                  </h3>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Playlist Thumbnails (Takes 5 or 4 cols) */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col h-[320px] md:h-[380px] lg:h-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Up Next
          </span>

          <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 custom-scrollbar">
            {videos.map((vid) => {
              const isActive = vid.id === activeVideo?.id;
              const thumb =
                vid.thumbnailUrl ||
                `https://img.youtube.com/vi/${vid.youtubeId}/mqdefault.jpg`;

              return (
                <button
                  key={vid.id}
                  type="button"
                  onClick={() => handleSelectVideo(vid)}
                  className={`flex gap-3 p-2 rounded-lg transition-all text-left border ${
                    isActive
                      ? 'bg-slate-800/90 border-site-red'
                      : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-28 aspect-video shrink-0 rounded overflow-hidden bg-slate-950">
                    <Image
                      src={thumb}
                      alt={vid.title}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-site-red/90 text-white flex items-center justify-center pl-0.5">
                        <FaPlay size={8} />
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-center min-w-0">
                    <h4
                      className={`text-xs font-semibold line-clamp-2 leading-snug ${
                        isActive ? 'text-site-red' : 'text-slate-200'
                      }`}
                    >
                      {vid.title}
                    </h4>
                    {vid.date && (
                      <span className="text-[10px] text-slate-500 mt-1">
                        {vid.date}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Link */}
          <div className="w-full pt-4 mt-4 border-t border-gray-100 flex justify-end">
      <Link
        href={`/videos`}
        className="group inline-flex items-center gap-1.5 text-xs md:text-sm font-bold uppercase tracking-wider text-site-red hover:text-black transition-colors duration-200"
      >
        <span>More Videos</span>
        <MdKeyboardDoubleArrowRight
          size={18} 
          className="transition-transform duration-300 group-hover:translate-x-1.5" 
        />
      </Link>
    </div>
    </section>
  );
};

export default VideoWall;