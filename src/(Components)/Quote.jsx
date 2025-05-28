/* eslint-disable react/prop-types */
import { InfoIcon } from "lucide-react";
import { Tooltip } from "flowbite-react";
import Form from "../Service/Quote";
import { Carousel } from "flowbite-react";
import { TbAerialLift } from "react-icons/tb";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import SEOComponent from './SEOComponent';
import { useMemo } from 'react';

const Menu = ({ title, desc, i }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCardClick = () => {
    setIsChecked((state) => !state); // Set isChecked to true when the card is clicked
  };
  return (
    <div
      className={cn(
        `flex hover:border-[#2d5f98] hover:border-2 items-center gap-2 justify-between bg-zinc-50 max-w-md mb-4 rounded-lg p-4`,
        isChecked ? "border-2 border-[#2d5f98]" : ""
      )}
      onClick={handleCardClick}
    >
      <div className="flex gap-5">
        <TbAerialLift className="text-color1 text-4xl bg-gradient-to-r rounded-full from-[#2d5f98] to-[#d12e28]" />
        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-xl">{title}</h2>
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
      title: "T-Portable Car Lift",
      desc: "Mobile lifting solution",
      i: "Thunder Portable Car Lift Universal Lift is a mobile lifting solution, which can be used as single or in systems with 2 0r 4 columns.",
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

  const cara = useMemo(() => [
    {
      src: "./icon/1.jpg",
      alt: "Client logo 1"
    },
    {
      src: "./icon/1.png",
      alt: "Client logo 2"
    },
    {
      src: "./icon/8.png",
      alt: "Client logo 3"
    },
    // {
    //   src: "./icon/2.png",
    //   alt: "Client logo 4"
    // },
    // {
    //   src: "./icon/3.png",
    //   alt: "Client logo 5"
    // },
    {
      src: "./icon/4.png",
      alt: "Client logo 6"
    },
    {
      src: "./icon/5.png",
      alt: "Client logo 7"
    },
    {
      src: "./icon/6.png",
      alt: "Client logo 8"
    },
    {
      src: "./icon/7.png",
      alt: "Client logo 9"
    }
  ], []);
  return (
    <>
     <SEOComponent
    title="Get a Quote"
    description="Get a Quote for Thunder Auto's High-Quality Portable Car Lift.This Will Speed Up Your Work and Boost Productivity With Our High-Performance Lifting Equipment" 
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
              <h2 className="font-bold text-4xl mb-2">Get a Quote</h2>
              <p className="font-semibold text-3xl">
                Test our products and experience the scale, grade and class.
              </p>
            </div>
            <div className="max-w-sm relative ">
              <div className="absolute top-0 left-0 w-full h-full bg-[rgb(255,255,255,.5)]"></div>
              <img src="./images/img4.jpg" className="rounded-full bg-transparent" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full p-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <h2 className="font-semibold text-3xl mb-4">
            Select the primary product you are interested in :
          </h2>
          {quote.map((item, index) => (
            <Menu key={index} title={item.title} desc={item.desc} i={item.i} />
          ))}
        </div>
        <div>
          <Form disable={false} />
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto text-center py-10">
        <h2 className="font-bold text-4xl mb-4 sm:mb-8">
          Recognized by the clients
        </h2>
        <div className="mx-auto w-full h-56">
          <Carousel pauseOnHover>
           {cara.map((image, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-full w-full"
                >
                  <div className="relative w-full h-full max-w-xs sm:max-w-sm md:max-w-md mx-auto flex items-center justify-center">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain transition-all duration-300 hover:filter-none"
                      style={{ 
                        filter: 'grayscale(100%)',
                        contentVisibility: 'auto'
                      }}
                      fetchPriority={index < 3 ? "high" : "low"}
                    />
                  </div>
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
