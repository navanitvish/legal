import React, { useState } from 'react';

function NavItem({ label, href, subItems = [] }) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <li
      className="relative group"
      onMouseEnter={() => setIsSubMenuOpen(true)}
      onMouseLeave={() => setIsSubMenuOpen(false)}
    >
      <a
        href={href}
        className="block py-2 px-4 text-stone-950 text-opacity-70 hover:text-stone-900"
      >
        {label}
      </a>
      {subItems.length > 0 && (
        <ul
          className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg ${
            isSubMenuOpen ? 'block' : 'hidden'
          } group-hover:block`}
        >
          {subItems.map((subItem, index) => (
            <li key={index} className="hover:bg-gray-100">
              <a
                href={subItem.href}
                className="block py-2 px-4 text-stone-950 text-opacity-70 hover:text-stone-900"
              >
                {subItem.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default NavItem;
