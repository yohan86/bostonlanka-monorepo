import { getImageUrl } from '@/lib/prefix'
import { NewsArticle } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlayCircle } from 'react-icons/fa'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const OneColPostCard = ({post}: {post:NewsArticle}) => {
  return (
    <div key={post.slug} className="flex flex-col gap-2">
        <div className="relative w-full h-18 md:h-26 shrink-0">
            <Image 
            src={getImageUrl(post.featuredImage.node.sourceUrl)} 
            alt={post.slug} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover" />
        </div>
        <div className="p-2">
            <h2 className="text-[12px] md:text-[14px] font-bold pb-3">{post.title}</h2>
            <div className="flex  gap-2 md:gap-3">
                {post.videourl && (
                  <Link
                    href={`/post/${post.slug}`}
                    className="video-btn"
                  >
                    <FaPlayCircle size={11} />
                    <span>Watch</span>
                  </Link>
                )}
                <Link href={`/post/${post.slug}`} aria-label={`view ${post.slug} details`} className="flex gap-2 items-center text-[12px] hover:gap-3 hover:text-black animate duration-300 text-site-red uppercase">Read more <MdKeyboardDoubleArrowRight size={14}  /></Link>
            </div>
        </div>

    </div>
  )
}

export default OneColPostCard