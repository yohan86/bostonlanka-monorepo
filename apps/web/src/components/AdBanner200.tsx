import Link from "next/link";

interface AdBanner200Props {
  height?: string; // Optional custom height override e.g. "250px", "600px", or "auto"
  contactEmail?: string;
}

export const AdBanner200 = ({
  height = "250px",
  contactEmail = "ads@bostonlanka.com",
}: AdBanner200Props) => {
  return (
    <div
      style={{ height }}
      className="w-[200px] bg-slate-100 border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-between text-center transition-all hover:border-site-red group"
    >
      {/* Top Header */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
          Sponsor
        </span>
        <h4 className="text-base font-extrabold text-gray-800 uppercase leading-tight group-hover:text-site-red transition-colors">
          Advertise Here
        </h4>
      </div>

      {/* Middle Visual/Message */}
      <div className="flex flex-col items-center my-auto py-2">
        <div className="w-10 h-10 rounded-full bg-red-50 text-site-red flex items-center justify-center font-bold text-lg mb-2">
          📢
        </div>
        <p className="text-xs text-gray-600 leading-snug">
          Reach thousands of readers in Greater Boston & Sri Lanka.
        </p>
      </div>

      {/* Action Button */}
      <Link
        href={`mailto:${contactEmail}?subject=Inquiry%20about%20200px%20Ad%20Space`}
        className="w-full bg-site-red text-white font-bold text-xs py-2 px-3 rounded shadow-sm hover:opacity-90 active:scale-95 transition-all text-center"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default AdBanner200;