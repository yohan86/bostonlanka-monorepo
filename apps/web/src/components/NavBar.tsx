"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuProps{
  onClose?: (value:boolean)=> void;
}
const menuItems = [
  {name:"Home", url:"/"},
  {name:"About", url:"/about-us"},
  {name:"Contact", url:"/contact"},
]


const NavBar = ({onClose}:MenuProps) => {
  const pathname = usePathname();
 


  return (
    <nav className="flex gap-4 md:gap-2 md:text-gray-800 text-sm">
        {menuItems.map((menu)=>{
          const isActive = menu.url === "/" ? pathname === "/" : pathname.startsWith(menu.url);
          return(
          <Link key={menu.name} href={menu.url}
          className={`${isActive ? "text-[#d1181f]" : "text-black"} hover:text-[#d1181f] transition-all duration-100 `}
          onClick={()=> onClose?.(false)}
          >{menu.name}</Link>
          )
        })}
    </nav>

    
  )
}

export default NavBar