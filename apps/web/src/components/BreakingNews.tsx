import { MOCK_POSTS } from "@/lib/mock-data"
import TwoColsPostCard from "./TwoColsPostCard";
import OneColPostCard from "./OneColPostCard";
import CategoryFooterLink from "./CategoryFooterLink";

const BreakingNews = () => {
  const lgposts = MOCK_POSTS.filter(post => post.category === "breakingnews-large");
  const posts = MOCK_POSTS.filter(post => post.category === "breakingnews");
  return (
    <div className="flex flex-col w-full">
      <h2 className="font-medium text-2xl w-full pb-3 mb-5 uppercase b-line">Breaking News</h2>
      <div className="flex flex-col w-full">
          {lgposts.map((post)=>(
           <TwoColsPostCard post={post} key={post.slug} />
          ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3 mt-12">
          {posts.map((post)=> (
            <OneColPostCard key={post.slug} post={post} />
          ))}
      </div>
      <CategoryFooterLink categoryName="Breaking news" categorySlug="sdsd" />
    </div>
  )
}

export default BreakingNews