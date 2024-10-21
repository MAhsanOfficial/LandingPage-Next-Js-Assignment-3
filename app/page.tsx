import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

// get some data array in portfolio cards
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
