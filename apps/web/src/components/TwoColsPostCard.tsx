import { getImageUrl } from '@/lib/prefix'
import { NewsArticle } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import { FaLongArrowAltRight, FaPlayCircle } from 'react-icons/fa'

const TwoColsPostCard = ({post}: {post:NewsArticle}) => {
  return (
     <div key={post.slug} className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full h-40 md:w-[55%] md:h-68 shrink-0">
            <Image 
            src={getImageUrl(post.featuredImage.node.sourceUrl)} 
            alt={post.slug} 
            fill 
            className="object-cover" />
        </div>
        <div>
            <h2 className="text-[18px] md:text-xl font-bold pb-3">{post.title}</h2>
            <p className="text-[12px] md:text-sm">{post.excerpt}</p>
            <div className="flex gap-3 items-center mt-3">
                <button className="red-btn">Watch Now <FaPlayCircle size={18} color="#000" /></button>
                <Link href={`/post/${post.slug}`} aria-label={`view ${post.slug} details`} className="flex gap-2 items-center text-sm hover:gap-3 animate duration-300 text-site-red uppercase">Read more <FaLongArrowAltRight /></Link>
            </div>
        </div>

    </div>
  )
}

export default TwoColsPostCard