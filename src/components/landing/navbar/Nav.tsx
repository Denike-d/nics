"use client";

import { useState } from "react";
import Link from "next/link";

// import { Menu, X } from "lucide-react";

import DesktopNavbar from "./DesktopNav";
import MobileNavbar from "./MobileNav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="">
      <div className="max-w-7xl">
        {/* Logo */}

        {/* Desktop Menu */}
        <DesktopNavbar />

        {/* Mobile Toggle Button */}
        {/* <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div> */}

        {/* Mobile Menu */}
        <MobileNavbar isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
}
