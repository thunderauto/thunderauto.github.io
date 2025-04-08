/* eslint-disable react/prop-types */
import { InfoIcon } from "lucide-react";
import { Tooltip } from "flowbite-react";
import Form from "../Service/Quote";
import { Carousel } from "flowbite-react";
import { TbAerialLift } from "react-icons/tb";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import SEOComponent from './SEOComponent';

const Menu = ({ title, desc, i }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCardClick = () => {
    setIsChecked((state) => !state); // Set isChecked to true when the card is clicked
  };
  return (
    <div
      className={cn(
        `flex hover:border-orange-400 hover:border-2 items-center gap-2 justify-between bg-zinc-50 max-w-md mb-4 rounded-lg p-4`,
        isChecked ? "border-2 border-orange-400" : ""
      )}
      onClick={handleCardClick}
    >
      <div className="flex gap-5">
        <TbAerialLift className="text-color1 text-4xl bg-gradient-to-r rounded-full from-color2 to-orange-400" />
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-semibold text-xl">{title}</h1>
            <Tooltip content={i}>
              <InfoIcon />
            </Tooltip>
          </div>
          <p className="font-medium text-gray-400">{desc}</p>
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          className="rounded-full p-3 border-2"
          checked={isChecked}
          onChange={() => {}} // Prevent checkbox from being clicked directly
        />
      </div>
    </div>
  );
};
const Quote = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quote = [
    {
      title: "T-Profimaster 3000",
      desc: "Mobile lifting solution",
      i: "Thunder Profimaster 3000 Universal Lift is a mobile lifting solution, which can be used as single or in systems with 2 0r 4 columns.",
    },
    {
      title: "T-Transport Dolly",
      desc: "Easy transfer of immobile vehicles",
      i: "Transport Dolly is a safe tool for easy transfer of immobile vehicles within the shop floor efficiently. Using Transport Dolly vehicles can be moved in 360 degrees.",
    },
    {
      title: "T-Wheel Aligner",
      desc: "Precisioned Wheel Alignment System",
      i: "KOCH-ACHSMESSANLAGEN manufactures since more than 50 years wheel alignment systems. At the beginning the simple mechanical measurement...",
    },
    {
      title: "T-Strut Spring Compressor",
      desc: "Safely Compress the coil Springs",
      i: "The THUNDER Strut Spring Compressor is used to safely compress the coil spring on most cars and SUV.",
    }, 
  ];

  const cara = [
    ["./icon/1.jpg", "./icon/1.png", "./icon/8.png"],
    ["./icon/2.png", "./icon/3.png", "./icon/4.png"],
    ["./icon/5.png", "./icon/6.png", "./icon/7.png"],
  ];
  return (
    <>
     <SEOComponent
    title="Get a Quote"
    description="Get a Quote for Thunder Auto’s High-Quality Portable Car Lift.This Will Speed Up Your Work and Boost Productivity With Our High-Performance Lifting Equipment" 
/>
    <div className="w-full font-Mont">
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.5)), url('./images/background.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row  items-center justify-around py-10 ">
            <div className="max-w-sm text-center md:text-left">
              <h1 className="font-bold text-4xl mb-2">Get a Quote</h1>
              <p className="font-semibold text-3xl">
                Test our products and experience the scale, grade and class.
              </p>
            </div>
            <div className="max-w-sm relative ">
              <div className="absolute top-0 left-0 w-full h-full bg-[rgb(255,255,255,.5)]"></div>
              <img src="./images/img4.jpg" alt="" className="rounded-full bg-transparent" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full p-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <h1 className="font-semibold text-3xl mb-4">
            Select the primary product you are interested in :
          </h1>
          {quote.map((item, index) => (
            <Menu key={index} title={item.title} desc={item.desc} i={item.i} />
          ))}
        </div>
        <div>
          <Form disable={false} />
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto text-center py-10">
        <h1 className="font-bold text-4xl mb-4 sm:mb-8">
          Recognized by the clients
        </h1>
        <div className="mx-auto w-full h-56">
          <Carousel pauseOnHover>
            {cara.map((item, index) => (
              <div className="grid md:grid-cols-3 gap-5" key={index}>
                {item.map((data, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center relative group"
                  >
                    {/* <div className=" group-hover:block absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0,.5)]"></div> */}
                    <img src={data}  alt={`Carousel icon ${index + 1}`} style={{ filter: 'grayscale(100%)' }}  />
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
    </>
  );
};

export default Quote;
