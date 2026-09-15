import { NewsArticle } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import { FaLongArrowAltRight, FaPlayCircle } from 'react-icons/fa'

const TwoColsPostCard = ({article}: {article:NewsArticle}) => {
  return (
     <div key={article.slug} className="flex flex-col gap-4 items-center w-full md:w-[50%]">
        <div className="relative w-full h-40  md:h-75 shrink-0">
            <Image 
            src={article.featuredImage.node.sourceUrl} 
            alt={article.slug} 
            fill 
            className="object-cover" />
        </div>
        <div>
            <h2 className="text-[18px] md:text-xl font-bold pb-3 line-clamp-2">{article.title}</h2>
            <p className="text-[12px] md:text-sm">{article.excerpt}</p>
            <div className="flex gap-3 items-center my-4">
                <button className="red-btn">Watch Now <FaPlayCircle size={18} color="#000" /></button>
                <Link href="#" aria-label={`view ${article.slug} details`} className="flex gap-2 items-center text-sm hover:gap-3 animate duration-300 text-site-red uppercase">Read more <FaLongArrowAltRight /></Link>
            </div>
        </div>

    </div>
  )
}

export default TwoColsPostCard