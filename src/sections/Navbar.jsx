import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants/index.js';
import { ninjaLogo } from '../assets/images/index.js';
import { close, menu } from '../assets/icons/index.js';

const scrollToSection = (href) => {
  const element = document.querySelector(href);
  if (element) {
    const yOffset = -75; // Adjust for navbar height
    const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: 'smooth',
    });
  }
};

const NavItems = ({ onClick = () => {} }) => (
  <ul className="list-none flex flex-col gap-4">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a
          href={item.href}
          className="nav-li_a"
          onClick={(e) => {
            e.preventDefault(); 
            scrollToSection(item.href);
            onClick(); // Close menu after navigation
          }}
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled || isOpen ? 'bg-black' : 'bg-transparent'
      } hover:bg-black`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a className="flex items-center gap-2" href="/">
          <h5 className="text-2xl font-semibold text-white">
              {"<Abel />"}
            </h5>
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? close : menu} // Fixed src issue
              alt="toggle"
              className="w-[32px] h-[32px] object-contain cursor-pointer"
            />
          </button>
        </div>
      </div>

      <div
        className={`absolute top-full left-0 right-0 bg-black text-white overflow-hidden transition-all duration-500 ${
          isOpen ? 'opacity-100 h-auto' : 'opacity-0 h-0'
        }`}
      >
        <nav className="p-5 transition-opacity duration-500">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
