



"use client";

import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className='bg-yellow-500 h-19 py-2 px-6 md:px-8 rounded-3xl flex flex-col md:flex-row gap-3 justify-between items-center'>
      {/* Logo */}
      <div>
        <h1 className='text-xl md:text-2xl font-semibold'>
          <Link href="#home">AH5AN'S</Link>
        </h1>
      </div>
      
      {/* Navigation Links */}
      <div className='mt-2 md:mt-0'>
        <ul className='flex flex-col md:flex-row gap-2 md:gap-4'>
          <li>
            <Link className='hover:text-orange-500' href="#home">Home</Link>
          </li>
          <li>
            <Link className='hover:text-orange-500' href="#about">About</Link>
          </li>
          <li>
            <Link className='hover:text-orange-500' href="#portfolio">Portfolio</Link>
          </li>
        </ul>
      </div>
      
      {/* Auth Links */}
      <div className='mt-2 md:mt-0'>
        <ul className='flex flex-col md:flex-row gap-2 md:gap-4'>
          <li>
            <Link className='hover:text-orange-500' href="/">Login</Link>
          </li>
          <li>
            <Link className='hover:text-orange-500' href="/">SignUp</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
