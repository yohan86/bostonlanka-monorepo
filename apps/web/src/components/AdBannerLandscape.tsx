import Link from "next/link";

interface AdBannerLandscapeProps {
  contactEmail?: string;
}

export const AdBannerLandscape = ({
  contactEmail = "ads@bostonlanka.com",
}: AdBannerLandscapeProps) => {
  return (
    <section className="w-full my-8">
      <div className="w-full min-h-[100px] md:min-h-[140px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm relative overflow-hidden group">
        
        {/* Subtle decorative background accent */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-site-red/10 rounded-full blur-2xl pointer-events-none" />

        {/* Left Side: Tagline & Details */}
        <div className="flex flex-col text-center md:text-left z-10">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-site-red mb-1">
            Sponsorship Opportunity
          </span>
          <h3 className="text-lg md:text-2xl font-black text-white uppercase tracking-tight">
            Advertise Your Business Here
          </h3>
          <p className="text-xs md:text-sm text-gray-300 mt-1 max-w-xl">
            Promote your brand directly to thousands of daily readers across Greater Boston and Sri Lanka.
          </p>
        </div>

        {/* Right Side: Action Button */}
        <div className="flex items-center gap-3 z-10 shrink-0">
          <Link
            href={`mailto:${contactEmail}?subject=Inquiry%20about%20Landscape%20Banner%20Ad`}
            className="bg-site-red hover:bg-red-700 text-white font-extrabold text-xs md:text-sm uppercase py-2.5 px-6 rounded-md shadow transition-all duration-300 hover:scale-105 active:scale-95 text-center"
          >
            Get In Touch
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AdBannerLandscape;