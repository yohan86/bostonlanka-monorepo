import { NewsArticle } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight, FaPlayCircle } from 'react-icons/fa'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

const OneColPostCard = ({post}: {post:NewsArticle}) => {
  return (
    <div key={post.slug} className="flex flex-col gap-2">
        <div className="relative w-full h-18 md:h-26 shrink-0">
            <Image 
            src={post.featuredImage.node.sourceUrl} 
            alt={post.slug} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover" />
        </div>
        <div className="p-2">
            <h2 className="text-[12px] md:text-[14px] font-bold pb-3">{post.title}</h2>
            <div className="flex flex-col gap-2 md:gap-3">
                <button className="flex gap-2 items-center uppercase cursor-pointer text-[12px]">Watch Now <FaPlayCircle size={14} color="#d1181f" /></button>
                <Link href="#" aria-label={`view ${post.slug} details`} className="flex gap-2 items-center text-[12px] hover:gap-3 animate duration-300 text-site-red uppercase">Read more <MdKeyboardDoubleArrowRight size={14}  /></Link>
            </div>
        </div>

    </div>
  )
}

export default OneColPostCard