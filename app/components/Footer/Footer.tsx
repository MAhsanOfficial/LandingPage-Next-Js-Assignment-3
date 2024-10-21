"use client";

import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='h-60 bg-yellow-600 mt-5'>
      <div className='flex p-5 justify-around'>
        <div className='text-center flex justify-center flex-col'>
          <h1 className='text-3xl'>Welcome To AH5an's Works</h1>
          <p>I help real Website Developing Get more Clients by making highly Converting Websites</p>
        </div>
        <div className='flex justify-center'>
          <ul>
          
               <li><Link href="https://www.facebook.com/profile.php?id=100067506227566" target='blank' className='hover:text-orange-900'>FaceBook</Link></li>
               <li><Link href="https://www.linkedin.com/in/muhammad-ahsan-b26317296" target='blank' className='hover:text-orange-800'>LinkeDin</Link></li>
               <li><Link href="https://www.instagram.com/notyour__ahsan" target='blank' className='hover:text-orange-800'>InstaGram</Link></li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
