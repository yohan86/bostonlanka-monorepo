import { NewsArticle } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlayCircle } from 'react-icons/fa'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const TwoColsPostCardSm = ({articles}: {articles:NewsArticle[]}) => {
    if(!articles || articles.length === 0) return null;
  return (
    <div className="flex flex-col gap-2 w-full md:w-[50%]">
    {articles.length > 0 && articles.map((post:NewsArticle)=> (

        <div key={post.slug} className="flex gap-2 w-full">
            <div className="relative w-[40%] md:w-[45%] h-20 md:h-28 shrink-0">
                <Image 
                src={post.featuredImage.node.sourceUrl} 
                alt={post.slug} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover" />
            </div>
            <div className="p-2">
                <h2 className="text-[12px] md:text-[14px] font-bold mb-3 line-clamp-3">{post.title}</h2>
                <div className="flex gap-2 justify-between md:gap-3">
                    {post.videourl &&
                        <button className="flex gap-2 items-center uppercase cursor-pointer text-[12px]">Video <FaPlayCircle size={14} color="#d1181f" /></button>
                    }
                    <Link href="#" aria-label={`view ${post.slug} details`} className="flex gap-2 items-center text-[12px] hover:gap-3 animate duration-300 text-site-red uppercase">Read more <MdKeyboardDoubleArrowRight size={14}  /></Link>
                </div>
            </div>

        </div>
    ))}
    </div>
  )
}

export default TwoColsPostCardSm