


import Image from "next/image";
import React from "react";

interface PortfolioProps {
  houseUrl: string;
  type: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ houseUrl, type }) => {
  return (
    <section id="portfolio" className="p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="relative group max-w-lg mx-auto sm:max-w-xl lg:max-w-2xl">
        {/* Image Container with Aspect Ratio */}
        <div className="relative w-full h-60 sm:h-72 lg:h-80 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <Image
            src={houseUrl}
            alt={`${type} Image`}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Overlay Container with smooth hover effect */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0 bg-black bg-opacity-60 flex flex-col 
          justify-center items-center rounded-lg transition-all duration-500 group-hover:h-full"
        >
          <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl py-3 text-center">
            {type}
          </h3>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg mt-2 transition hover:bg-blue-700">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
