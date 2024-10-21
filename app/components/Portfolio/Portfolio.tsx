// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Portfolio = () => {
//   return (
//     <>
// <div className='relative group'>
// <div className="bg-[#475569] min-h-screen flex justify-center items-center px-10 ">
//       <div className="w-full">

//     <div className='gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#f7f7f7]'>
//       <div className='text-center font-semibold uppercase tracking-[1rem] text-yellow-400 pb-20 text-3xl'>Portfolio</div>
//     </div>
   
     
//    <div className="grid grid-cols-fluid gap-5">
//     <Image className='w-64 h-64'
//     src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UG9ydGZvbGlvfGVufDB8fDB8fHww"
//     alt=''
//     width={500}
//     height={500}
//     sizes='100vw'
//     style={{
//         width:"100%",
//         height:'350px',
//         objectFit:"cover"
//     }}
//     />
//    </div>
//     <div className='bg-black absolute bottom-0 right-0 left-0 bg-opacity-50 h-0 overflow-hidden
//      group:hover:h-full transition-all duration-500'> 
//      <div>
//         <h3 className='text-yellow-500 font-mono font-semibold text-2xl '>PortFolio Web</h3>
//         <button className='bg-orange-500 text-white p-3 rounded'><Link href="https://portfolio-advan-next-js-g6u7.vercel.app/" />View Now</button>
//      </div>
//    </div>
//    </div>
// </div>
// </div>
// </>
//   )
// }

// export default Portfolio







// import Image from "next/image";
// import React from "react";

// function Portfolio({ houseUrl, type }) {
//   return (
//     <div className="relative group">
//       {/* image div below */}
//       <div>
//         <Image
//           src={houseUrl}
//           alt=""
//           width={0}
//           height={0}
//           sizes="100vw"
//           style={{
//             width: "100%",
//             height: "350px",
//             objectFit: "cover",
//           }}
//         />
//       </div>

//       {/* overlay div below */}
//       <div
//         className="bg-black bg-opacity-50 absolute bottom-0 right-0 left-0 h-0 overflow-hidden 
//       group-hover:h-full transition-all duration-500 flex justify-center items-center"
//       >
//         <div>
//           <h3 className="text-white font-semibold text-xl py-3 text-center">
//             {type}
//           </h3>
//           <button className="bg-blue-600 text-white p-3 rounded">
//             View Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Portfolio;





import Image from "next/image";
import React from "react";

interface PortfolioProps {
  houseUrl: string;
  type: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ houseUrl, type }) => {
  return (
    <section id="portfolio">
    <div className="relative group">
      <div className="relative w-full h-80">
        <Image
          src={houseUrl}
          alt={`${type} Image`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div
        className="bg-black bg-opacity-50 absolute bottom-0 right-0 left-0 h-0 overflow-hidden 
        group-hover:h-full transition-all duration-500 flex justify-center items-center"
      >
        <div>
          <h3 className="text-white font-semibold text-xl py-3 text-center">
            {type}
          </h3>
          <button className="bg-blue-600 text-white p-3 rounded">
            Projects
          </button>
        </div>
      </div>
    </div>
    </section>
  );

};

export default Portfolio;
