import Image from 'next/image'
import SocailMedia from './SocailMedia'
import Link from 'next/link'
import NavBar from './NavBar'
import MenuToggleBtn from './MenuToggleBtn'

const Header = () => {
  return (
    <>
    <div className="flex w-full shadow-xl border-[#666]">
      <div className="header-wrapper flex flex-col w-full max-w-[96%] lg:max-w-[980px] m-auto">
        <div className="flex justify-between">
          <div className="relative w-[150px] h-[90px] shrink-0">
            <Image src="/boston-lanka-logo.png" alt="boston lanka news site logo" fill className="object-container" />
          </div>
          <div className="flex flex-col mt-3 mr-4 items-end md:m-0 md:items-center md:flex-row md:gap-3">
            <div className="flex gap-5 items-center">
              <div className="hidden md:flex">
                <NavBar />
              </div>
              <SocailMedia />
              
            </div>
            
            <div className="mt-4">
              <MenuToggleBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mobile-menu-wrapper flex w-full bg-site-red py-2">
      <div className="mobile-menu flex w-[96%] max-w-[980px] m-auto justify-evenly uppercase text-sm text-white">
          <div className="flex md:hidden"><NavBar /></div>
          <Link href="#" aria-label="">Bl Videos</Link>
          <Link href="#" aria-label="">Latest News</Link>
          <Link href="#" aria-label="">Business</Link>
          <Link href="#" aria-label="">Politics</Link>
          <Link href="#" aria-label="">Entertainment</Link>
          <Link href="#" aria-label="">Bl Videos</Link>
          <Link href="#" aria-label="">Sports</Link>
          <Link href="#" aria-label="">Life Style</Link>
          <Link href="#" aria-label="">USA</Link>
          <Link href="#" aria-label="">Travel</Link>
        </div>
    </div>
    </>
  )
}

export default Header