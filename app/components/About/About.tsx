import React from 'react'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <>
      <section id='about'>
        <div className="max-w-[1320px] md:py-[80px] py-5 flex mx-auto sm:flex-row flex-col">

          <div className="basis-[45%] pb-5 relative">
            <Image 
              src="https://i.pinimg.com/736x/29/6d/cd/296dcdbd03d450dfda7ffc92232b08b8.jpg" 
              alt="Ahsan's profile"  
              layout="responsive"
              width={500} 
              height={500} 
              className='w-full'
            />
          </div>
          
          <div className="basis-[55%] px-5">
            <h1 className="text-4xl pb-5 font-semibold text-yellow-400 font-mono">
              I'm Ahsan, a Passionate Front-End Web Developer Dedicated to Transforming Innovative Ideas into Digital Realities.
            </h1>
            <p className="py-3 font-sans ">
              Leveraging the power of modern technologies like React.js, Next.js, TypeScript, and Tailwind CSS, I strive to create elegant and efficient solutions to complex challenges. Whether it's crafting intuitive user interfaces or optimizing website performance, I'm committed to delivering top-notch results that exceed expectations.
            </p>
            <p className="py-3 font-sans ">
              Front-end Specialist in Web Development ... I am also a Student Leader at GIAIC 🎓, where I am Enrolled in Certified Cloud Applied Generative AI Engineer. I'm eager to embark on a journey towards becoming a versatile Full-Stack, DevOps, and Cloud Engineer.
            </p>
            <p className="py-3 font-sans ">
              Tech Enthusiast with one year of experience in Front-End Development, specializing in Tailwind CSS, JavaScript, and TypeScript. 🚀 I have expertise in these technologies, and if you'd like to work on web applications or any skill-based project, let me know — I'm ready to collaborate.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
