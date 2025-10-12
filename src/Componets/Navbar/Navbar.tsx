"use client"
import { useState } from "react";
import { fixedMargin } from "@/constants/style";
import { classnames } from "@/utils/style";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "🏠 HOME", href: "/" },
    { name: "📝 RESUME", href: "/resume" },
    { name: "💻 PROJECT", href: "/project" },
    { name: "✉️ CONTACT", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 w-full z-50  bg-[#000] shadow text-white"  style={{boxShadow:'0px 2px 4px #26a0da'}}>
      <div
        className={classnames(
          fixedMargin,
          "flex justify-between items-center py-2  " 
        )}

       
      >
        {/* Logo */}
        <h1 className="flex flex-col font-serif font-bold text-lg text-white">
          SAKSHI
          <span className="text-sm text-[#26a0da]">- Crafting Digital Magic</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <p className="py-1 px-4 rounded-full hover:bg-[#171f29] hover:border-b-2 hover:border-[#26a0da] transition-all cursor-pointer">
                {item.name}
              </p>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#212A37] flex flex-col justify-center items-center gap-10 z-50 transition-all duration-300">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-4xl text-[#26a0da] hover:text-white transition-colors"
          >
            ✖️
          </button>

          {/* Menu Links */}
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
              <p className="text-3xl text-white hover:text-[#26a0da] transition-colors cursor-pointer">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
