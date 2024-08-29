import React, { useState } from "react";
import NavItem from "./NavItem";
import Button from "./Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    subItems: [
      { label: "Rental Agreements", href: "/services/consulting" },
      { label: "E-commerce contracts", href: "/services/support" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    subItems: [
      { label: "E-Stamp paper Services ", href: "/products/a" },
      { label: "Rental Receipts  ", href: "/products/b" },
    ],
  },
  { label: "Lawyer’s Connect", href: "/contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-wrap items-center justify-between px-6 w-full min-h-[28px] max-md:px-5">
      {/* Logo or Brand */}
      <div className="flex items-center space-x-3 w-8 min-h-[32px]">
        <div className="flex w-8 min-h-[32px]">
          {/* Replace with your logo or brand name */}
          <span className="font-bold text-xl">Logo</span>
        </div>
      </div>

      {/* Toggle Button for Mobile Menu */}
      <button
        className="block lg:hidden p-2 text-gray-600"
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        className={`lg:flex flex-col lg:flex-row flex-wrap items-center lg:space-x-4 ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-6 text-sm font-semibold leading-loose text-center lg:text-left text-stone-950 text-opacity-70">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              label={item.label}
              href={item.href}
              subItems={item.subItems}
            />
          ))}
        </ul>
      </nav>

      {/* Buttons */}
      <div className="flex gap-4 items-center mt-4 lg:mt-0 text-base font-semibold text-center">
        <Button variant="secondary">Log In</Button>
        <Button variant="primary">Register</Button>
      </div>

      <div className="border-b border-gray-300 w-full  m-3"></div>
    </header>
  );
}

export default Header;
