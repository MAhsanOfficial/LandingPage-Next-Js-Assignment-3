"use client"

import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
  <nav className='bg-yellow-500 h-19 py-2 px-8 rounded-3xl flex gap-3 justify-between items-center'>
  <div>
    <h1 className='text-2xl font-semibold'>
    <Link href="/">AH5AN'S</Link>
    </h1>
  </div>
  <div>
    <ul className='flex gap-4'>
      <li><Link className=' hover:text-orange-500' href='#home'>Home</Link></li>
      <li><Link className=' hover:text-orange-500' href='#about'>About</Link></li>
      <li><Link className=' hover:text-orange-500' href='#portfolio'>Portfolio</Link></li>
    </ul>
  </div>
  <div>
    <ul className='flex gap-4'>
    <li><Link href="/">Login</Link></li>
    <li><Link href="/">SignUP</Link></li>
    </ul>
    </div>
  </nav>
  )
}
export default Header
