
import React from 'react'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <section id='about' className="bg-gray-900 text-white px-4 py-10 md:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-10">
        
        {/* Image Container */}
        <div className="w-full sm:w-[45%] flex-shrink-0">
          <Image 
            src="https://i.pinimg.com/736x/29/6d/cd/296dcdbd03d450dfda7ffc92232b08b8.jpg" 
            alt="Ahsan's profile"  
            layout="responsive"
            width={500} 
            height={500} 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Container */}
        <div className="w-full sm:w-[55%] space-y-6 px-4 sm:px-0">
          <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400 font-mono leading-tight">
            I'm Ahsan, a Passionate Front-End Web Developer Dedicated to Transforming Innovative Ideas into Digital Realities.
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            Leveraging the power of modern technologies like React.js, Next.js, TypeScript, and Tailwind CSS, I strive to create elegant and efficient solutions to complex challenges. Whether it's crafting intuitive user interfaces or optimizing website performance, I'm committed to delivering top-notch results that exceed expectations.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Front-end Specialist in Web Development... I am also a Student Leader at GIAIC 🎓, where I am Enrolled in Certified Cloud Applied Generative AI Engineer. I'm eager to embark on a journey towards becoming a versatile Full-Stack, DevOps, and Cloud Engineer.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Tech Enthusiast with one year of experience in Front-End Development, specializing in Tailwind CSS, JavaScript, and TypeScript. 🚀 I have expertise in these technologies, and if you'd like to work on web applications or any skill-based project, let me know — I'm ready to collaborate.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About
