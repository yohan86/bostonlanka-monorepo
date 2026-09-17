import AdBanner200 from "@/components/AdBanner200";
import AdBannerLandscape from "@/components/AdBannerLandscape";
import AdBannerSidebarSticky from "@/components/AdBannerSidebarSticky";
import BreakingNews from "@/components/BreakingNews";
import Header from "@/components/Header";
import Politics from "@/components/Politics";
import PostThumbScroller from "@/components/PostThumbScroller";
import VideoWall, { VideoItem } from "@/components/VideoWall";
import Weather from "@/components/Weather";
import { MOCK_POSTS } from "@/lib/mock-data";


const MOCK_VIDEOS: VideoItem[] = [
  {
    id: "v1",
    title: "Boston Sri Lankan Independence Day Celebration 2026",
    youtubeId: "dQw4w9WgXcQ", // Replace with real YouTube video IDs
    date: "Sep 12, 2026",
  },
  {
    id: "v2",
    title: "Exclusive Interview with Community Leaders in New England",
    youtubeId: "3JZ_D3ELwOQ",
    date: "Sep 10, 2026",
  },
  {
    id: "v3",
    title: "Sri Lanka Cultural Show & Food Festival Highlights",
    youtubeId: "L_LUpnjgPso",
    date: "Sep 08, 2026",
  },
];

export default function Home() {

  const posts = MOCK_POSTS.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {} as Record<string, typeof MOCK_POSTS>);


  return (
    <>
    <div className="flex w-full max-w-[94%] lg:max-w-[980px] xl:max-w-[1200px] mx-auto justify-between">
      <div className="flex flex-col w-full md:w-3/4">
      
      <div><BreakingNews /></div>
      {posts['politics'].length > 0 && <div><AdBannerLandscape /><Politics articles={posts['politics']} /> </div>}
      <VideoWall videos={MOCK_VIDEOS} /> 
    </div>
    
      <div className="hidden md:flex flex-col gap-5 w-[200px]">
        <Weather />
        <AdBanner200 />
        <AdBannerSidebarSticky />
      </div>
    </div>
    </>
  );
}
