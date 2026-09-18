"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface CatNavProps{
  onClose?: (value:boolean)=> void;
}
const CatMenuItems = [
  {name:"blvideos", label:"BL Videos", url:"/videos"},
  {name:"latestnews", label:"Latest News", url:"/category/latestnews"},
  {name:"business", label:"Business", url:"/category/business"},
  {name:"politics", label:"Politics", url:"/category/politics"},
  {name:"entertainment", label:"Entertainment", url:"/category/entertainment"},
  {name:"sports", label:"Sports", url:"/category/sports"},
  {name:"lifestyle", label:"Life Style", url:"/category/lifestyle"},
  {name:"usa", label:"USA", url:"/category/usa"},
  {name:"travel", label:"Travel", url:"/category/travel"},
]

const CatNavBar = ({onClose}:CatNavProps) => {
  const pathname = usePathname();
  return (
    <>
      {CatMenuItems.map((menu)=>{
        const isActive = menu.url === "/"? pathname === "/" : pathname.startsWith(menu.url);
        return(
          <Link key={menu.name} href={menu.url}
          className={`${isActive ? "text-[#d1181f] md:text-[#ffef00]" : ""}`}
          onClick={()=> onClose?.(false)}
          >{menu.label}</Link>
        )
      })}
    </>
  )
}

export default CatNavBar