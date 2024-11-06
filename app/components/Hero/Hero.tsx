



import React from 'react';
import Header from '../Header/Header';

const Hero: React.FC = () => {
  return (
    <>
      <section id="home">
        <Header />
        <div>
          <div
            className="flex flex-col items-center bg-cover bg-no-repeat py-16 px-4 sm:px-8 lg:px-16"
            style={{ backgroundImage: 'url("/bg.jpg")' }}
          >
            <p className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-24 max-w-xl sm:max-w-2xl lg:max-w-3xl text-center leading-relaxed">
              I'm Ahsan, a Passionate Front-End-Web Developer 🚀
            </p>
            <p className="text-cyan-100 py-3 text-sm sm:text-base md:text-lg text-center">
              Build Your Next Project Even Faster with Complex UI
            </p>
            <button className="px-6 py-2 bg-cyan-50 hover:bg-yellow-500 hover:text-white text-orange-800 font-semibold rounded-md mt-8 sm:mt-12 lg:mt-20">
              Browse All {'>'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
