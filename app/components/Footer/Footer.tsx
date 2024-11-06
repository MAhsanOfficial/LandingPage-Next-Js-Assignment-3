

"use client";

import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-yellow-600 mt-5 py-10'>
      <div className='flex flex-col md:flex-row items-center justify-around px-5'>
        <div className='text-center md:text-left flex flex-col items-center md:items-start mb-5 md:mb-0'>
          <h1 className='text-2xl md:text-3xl font-bold'>Welcome To AH5an's Works</h1>
          <p className='text-sm md:text-base max-w-xs md:max-w-md text-center md:text-left'>
            I help real Website Developing Get more Clients by making highly Converting Websites
          </p>
        </div>
        <div className='flex justify-center'>
          <ul className='text-center md:text-left space-y-2'>
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100067506227566"
                target='_blank'
                className='hover:text-orange-900 text-sm md:text-base'
              >
                FaceBook
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/muhammad-ahsan-b26317296"
                target='_blank'
                className='hover:text-orange-800 text-sm md:text-base'
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/notyour__ahsan"
                target='_blank'
                className='hover:text-orange-800 text-sm md:text-base'
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
