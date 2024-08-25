import React, { useState } from "react";
import { Link } from "react-scroll";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="md:hidden">
      <div className="flex justify-between items-center p-4">
        <div>Logo</div>
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col items-center bg-white py-4">
          <li className="py-2">
            <Link to="home" smooth={true} duration={400} href="#home" className="text-black" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link to="about" smooth={true} duration={400} href="#about" className="text-black" onClick={toggleMenu}>
              About Me
            </Link>
          </li>
          <li className="py-2">
            <Link to="projects" smooth={true} duration={400} href="#projects" className="text-black" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li className="py-2">
            <Link to="contact" smooth={true} duration={400} href="#contact" className="text-black" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default MobileNavbar;