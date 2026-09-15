import Link from "next/link";

interface AdBannerSidebarStickyProps {
  contactEmail?: string;
  width?: string; // Standard width: 200px or 300px
}

export const AdBannerSidebarSticky = ({
  contactEmail = "ads@bostonlanka.com",
  width = "w-[200px]",
}: AdBannerSidebarStickyProps) => {
  return (
    <div
      className={`sticky top-20 ${width} h-[600px] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-lg p-5 flex flex-col justify-between items-center text-center shadow-md overflow-hidden group`}
    >
      {/* Background Glow Accent */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-site-red/20 rounded-full blur-xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-center gap-1.5 z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-site-red">
          Premium Spot
        </span>
        <h4 className="text-lg font-black text-white uppercase tracking-tight leading-snug">
          Grow Your Brand
        </h4>
        <div className="w-8 h-[2px] bg-site-red my-1" />
      </div>

      {/* Middle Content */}
      <div className="flex flex-col items-center gap-3 my-auto z-10">
        <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 text-site-red flex items-center justify-center font-black text-xl shadow-inner">
          📊
        </div>
        <p className="text-xs text-gray-300 leading-relaxed max-w-[170px]">
          Target Sri Lankan & New England audiences with high-visibility sidebar placement.
        </p>
      </div>

      {/* Footer / CTA */}
      <div className="w-full flex flex-col items-center gap-3 z-10">
        <span className="text-[10px] text-gray-400">Fixed Sidebar Space</span>
        <Link
          href={`mailto:${contactEmail}?subject=Inquiry%20about%20600px%20Sticky%20Sidebar%20Ad`}
          className="w-full bg-site-red hover:bg-red-700 text-white font-extrabold text-xs py-3 px-4 rounded uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 text-center shadow"
        >
          Reserve Spot
        </Link>
      </div>
    </div>
  );
};

export default AdBannerSidebarSticky;