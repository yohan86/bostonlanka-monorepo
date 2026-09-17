import { NewsArticle } from "@/types/types"
import {MOCK_POSTS} from "../lib/mock-data"
import PostThumbHorizCard from "./PostThumbHorizCard"
import Scroller from "./Scroller";

const PostThumbScroller = () => {
    const posts: NewsArticle[] = MOCK_POSTS;
  return (
    <div className="flex gap-4 py-4 w-full max-w-[980px] mx-auto px-4">
        <Scroller autoPlay={true} options={{ loop: true, align: "start" }}>
        {posts.map((post:NewsArticle)=> (
          <div key={post.slug} className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-8px)] md:flex-[0_0_calc(25%-12px)] min-w-0 md:pb-10">
            <PostThumbHorizCard key={post.slug} post={post} />
            </div>
        ))}
        </Scroller>
    </div>
  )
}

export default PostThumbScroller