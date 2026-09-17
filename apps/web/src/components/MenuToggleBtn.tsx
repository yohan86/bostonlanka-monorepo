"use client";
import { useState } from "react";
import CatNavBar from "./CatNavBar";
import NavBar from "./NavBar";


const MenuToggleBtn = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Toggle Menu"
      className={`md:hidden flex flex-col justify-center items-center  h-8 gap-[5px] focus:outline-none`}
    >
        <span className="flex gap-3 justify-center items-center">
        <span className="text-sm leading-4">MENU</span>
        <span className={`menu-toggle flex flex-col justify-center items-center  h-8 gap-[5px] ${mobileMenuOpen}? "active":""`}>
          <span />
          <span />
          <span />
      </span>
      </span>
    </button>


    <div className={`fixed inset-0 bg-white z-100 flex flex-col space-y-3 items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`} >
            <button className="fixed top-4 right-4"
          onClick={()=> setMobileMenuOpen(false) }
          >Close X</button>
          <CatNavBar />
          <NavBar />
    </div>
    </>
  )
}

export default MenuToggleBtn