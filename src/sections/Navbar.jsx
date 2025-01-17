import React, { useState } from 'react';
import { navLinks } from '../constants/index.js';
import { ninjaLogo } from '../assets/images/index.js';

const scrollToSection = (href) => {
  const element = document.querySelector(href);
  if (element) {
    const yOffset = -75; // Adjust this offset according to your navbar height
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
            e.preventDefault(); // Prevent default anchor behavior
            scrollToSection(item.href); // Custom scroll function
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isOpen ? 'bg-black' : 'bg-transparent hover:bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a className="flex items-center gap-2" href="/">
            <img src={ninjaLogo} alt="logo" className="h-12 sm:h-14" />
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
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
