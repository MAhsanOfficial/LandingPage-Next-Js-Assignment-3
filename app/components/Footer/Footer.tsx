"use client"

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <footer className='h-60 bg-yellow-500 mt-5'>
    <div className='flex p-5 justify-around '>
        <div className='text-center flex justify-center flex-col'>
            <h1 className='text-3xl'>Welcome To AH5an's Works</h1>
            <p>I help real Website Developing Get more Clients by making highly Converting Websites</p>
            </div>
        <div className='center'>
            <h1>Important Links</h1>
            <ul>
                <li><Link href="#">FaceBook</Link></li>
                <li><Link href="#">LinkeDin</Link></li>
                <li><Link href="#">InstaGram</Link></li>
            </ul>
        </div>
    </div>
   </footer>
  )
}

export default Footer
