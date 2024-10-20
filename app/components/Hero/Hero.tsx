import React from 'react'
import Header from '../Header/Header'
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <Header/>
      <div>
        <div className='flex flex-col items-center bg-cover bg-no-repeat bg-[url(`./bg.jpg`)]'>
            <p className='font-extrabold text-5xl text-white mt-24 max-w-3xl 
   text-center leading-relaxed'>I'm Ahsan, a Passionate Front-End-Web Developer Dedicated to Transforming innovative ideas into Digital realities. 🚀</p>
   <p>Build Your Next Project Even Faster With UI Hub</p>
   <button>
    Browse All <FaAngleRight />
   </button>
        </div>
      </div>
    </>
  )
}

export default Hero
