import Image from 'next/image'
import SocailMedia from './SocailMedia'
import Link from 'next/link'
import NavBar from './NavBar'
import MenuToggleBtn from './MenuToggleBtn'
import CatNavBar from './CatNavBar'

const Header = () => {
  return (
    <>
    <div className="flex w-full shadow-xl border-[#666]">
      <div className="header-wrapper flex flex-col w-full max-w-[96%] lg:max-w-[980px] m-auto">
        <div className="flex justify-between">
          <Link href="/">
          <div className="relative w-[150px] h-[90px] shrink-0">
            <Image src="/boston-lanka-logo.png" alt="boston lanka news site logo" fill className="object-container" />
          </div>
          </Link>
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
      <div className="mobile-menu menu flex w-[96%] max-w-[980px] m-auto justify-evenly uppercase text-sm text-white">
          <div className="flex md:hidden"><NavBar /></div>
          <CatNavBar />
        </div>
    </div>
    </>
  )
}

export default Header