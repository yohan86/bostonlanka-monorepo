import { NewsArticle } from "@/types/types"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

const PostThumbHorizCard = ({post}: {post:NewsArticle}) => {
  return (
    <div className="flex overflow-hidden shadow-xl items-center bg-white rounded-md">
        <div className="relative w-24 h-20 shrink-0">
            <Image 
            src={post.featuredImage.node.sourceUrl} 
            alt="" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill className="object-cover" />
        </div>
        <div className="flex flex-col m-2">
          <h2 className="text-[12px] leading-4  line-clamp-3 overflow-hidden">{post.title}</h2>
          <Link href="#" area-label={`view more ${post.slug} details`} className="flex items-center gap-1 text-[12px] text-site-red">Read more <MdKeyboardDoubleArrowRight size={14} className="mt-0.5" /></Link>
        </div>
    </div>
  )
}

export default PostThumbHorizCard