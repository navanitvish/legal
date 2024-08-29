import React from 'react';

function Header() {
  return (
    <header className="flex flex-col w-full text-black max-md:max-w-full text-left">
      <h1 className="text-3xl font-bold leading-10 max-md:max-w-full">
        Secure Your Legal Needs Effortlessly
      </h1>
      <p className="mt-3 text-lg leading-7 max-md:max-w-full">
        Explore our comprehensive range of legal agreements and documents tailored for your business and personal needs.
      </p>
    </header>
  );
}

export default Header;