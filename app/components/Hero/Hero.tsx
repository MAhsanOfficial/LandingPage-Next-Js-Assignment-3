import React from 'react';
import Header from '../Header/Header';

const Hero: React.FC = () => {
  return (
    <>
      <section id="home">
        <Header />
        <div>
          <div className='flex flex-col items-center bg-cover bg-no-repeat py-16' style={{ backgroundImage: 'url("/bg.jpg")' }}>
            <p className='font-extrabold text-5xl text-white mt-24 max-w-3xl text-center leading-relaxed'>
              I'm Ahsan, a Passionate Front-End-Web Developer 🚀
            </p>
            <p className='text-cyan-100 py-3'>
              Build Your Next Project Even Faster Complex UI
            </p>
            <button className='px-6 py-2 bg-cyan-50 hover:bg-yellow-500 hover:text-white text-orange-800 font-semibold rounded-md my-20'>
              Browse All {'>'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
