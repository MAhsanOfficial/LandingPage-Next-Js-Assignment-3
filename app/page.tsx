// import Image from "next/image";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Portfolio from "./components/Portfolio/Portfolio";





// // get some data array

// const houseData = [
//   {
//     id: 1,
//     houseUrl:
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fHww",
//     type: "Cabin",
//   },
//   {
//     id: 2,
//     houseUrl:
//       "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
//     type: "Cottage",
//   },
//   {
//     id: 3,
//     houseUrl:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww",
//     type: "Villa",
//   },
// ];


// export default function Home() {
//   return (
//    <>
//    {/* <Header/> */}
//    <Hero/>
//    <About/>
   
   
//    <div className="bg-[#475569] min-h-screen flex justify-center items-center px-10">
//       <div className="w-full">
//         <h1 className="text-2xl text-white text-center py-3">
//           Simpe TailwindCSS Card Hover Effect
//         </h1>

//         <div className="grid grid-cols-fluid gap-5">
//           {houseData.map(({ id, houseUrl, type }) => (
//             <Portfolio key={id} houseUrl={houseUrl} type={type} />
//           ))}
//         </div>
//       </div>
//     </div>


//    <Footer/>
//    </>
//   );
// }





import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

// get some data array
const houseData = [
  {
    id: 1,
    houseUrl:
      "/portfolio.jpg",
    type: "Portfolio",
  },
  {
    id: 2,
    houseUrl:
      "/ecommerce.jpg",
    type: "E-Commerce Web React.JS",
  },
  {
    id: 3,
    houseUrl:
      "/crypto.jpg",
    type: "Crypto Web",
  },
  {
    id: 4,
    houseUrl:
      "/passgenerator.jpg",
    type: "Password Generator",
  },
  {
    id: 5,
    houseUrl:
      "/resume.jpg",
    type: "Resume Builder CV",
  },
  {
    id: 6,
    houseUrl:
      "/cv.jpg",
    type:  "CV",
  }
  
];

export default function Home() {
  return (
    <>

      <Hero />
      <About />

      <div className="bg-[#f7f7f7] min-h-screen flex justify-center items-center px-10">
        <div className="w-full">
          <h1 className=" text-yellow-500 text-center py-3 font-mono font-semibold text-4xl ">
          PortFolio
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {houseData.map(({ id, houseUrl, type }) => (
              <Portfolio key={id} houseUrl={houseUrl} type={type} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
