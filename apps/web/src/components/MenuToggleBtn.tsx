"use client";
import { useState } from "react";


const MenuToggleBtn = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Toggle Menu"
      className=" md:hidden flex flex-col justify-center items-center  h-8 gap-[5px] focus:outline-none"
    >
        <span className="flex gap-3 justify-center items-center">
        <span className="text-sm leading-4">MENU</span>
        <span className="menu-toggle flex flex-col justify-center items-center  h-8 gap-[5px]">
      <span
        className={` ${
          mobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
        }`}
      />
      <span
        className={`${
          mobileMenuOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={` ${
          mobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
        }`}
      />
      </span>
      </span>
    </button>
  )
}

export default MenuToggleBtn