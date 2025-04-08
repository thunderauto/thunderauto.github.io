/* eslint-disable react/no-unescaped-entities */
// const Who = () => {
//   return (
//     <div className="animate-fade-left duration-300 text-color3 font-Mont flex flex-col md:flex-row py-10 p-10 sm:px-10 gap-20">
//       <div className="space-y-6 py-10 px-10 md:px-0  flex items-start justify-center flex-col">
//         <h1 className="font-bold font-Mont text-2xl text-color4 sm:text-4xl">
//           WHO WE ARE
//         </h1>
//         <p className="font-medium font-Mont text-2xl text-left">
//           THUNDER AUTO LLP is a new name in providing “VEHICLE LIFTING SOLUTIONS
//           MADE EASY” which means vehicle lifting is now completely redefined
//           with a German partnership. Now in India for the first time!
//         </p>
//         <p>
//           We are the same group who has been in the market known to all as
//           “THUNDER HORN” who introduced car air horns for the first time in
//           India. Here we are with yet another innovative car lifting concept
//           again for the first time in India.
//         </p>
//         <button className="px-4 py-1 mt-4 bg-color4 text-color1 rounded">
//           Read More
//         </button>
//       </div>
//       <img src="https://res.cloudinary.com/dcelwoupp/image/upload/v1710935246/img2_vohpfb.jpg" className="max-w-sm mx-auto rounded" />
//     </div>
//   );
// };

import { HoverEffectCard } from "@/(Components)/Hover";
import SEOComponent from '../(Components)/SEOComponent';

// export default Who;

const Who = () => {
  const cardData = [
    {
      link:"/thunder-profimaster-mobile-car-lift",
      img: "./Photos/profimaster.png",
      title: "Thunder Profimaster 3000",
      description:
        "Thunder Profimaster 3000 Universal Lift is a mobile lifting solution, which can be used as single or in systems with 2 0r 4 columns.",
    },
    {
      link:"/thunder-transport-dolly",
      img: "./Photos/transport-dolly.png",
      title: "Transport Dolly",
      description:
        "Transport Dolly is a safe tool for easy transfer of immobile vehicles within the shop floor efficiently. Using Transport Dolly vehicles can be moved in 360 degrees.",
    },
    {
      link:"/thunder-strut-spring-compressor",
      img: "./Photos/spring.png",
      title: "Strut Spring Compressor",
      description:
        "The THUNDER Strut Spring Compressor is used to safely compress the coil spring on most cars and SUV.",
    },
    {
      link:"/thunder-aluminium-ingots",
      img: "./Photos/img4.png",
      title: "Aluminium Ingots",
      description:
        " Through our advanced processes, we meticulously sort, clean, and melt these diverse aluminium scraps, transforming them into high-quality ingots.",
    },
  ];

  return (
    <>
      <SEOComponent
    title="Car Lifting Solutions | Thunder Auto | Efficient and Safe!"
    description="Thunder Auto Offers the Best Mobile Car Lift Designed for Automotive Businesses. Improve Your Workshop Efficiency With Our Best Lifting Solutions" 
/>
      <div className="bg-gray-100 w-full px-4 py-6">
        <h1 className="pt-8 text-center mb-4 sm:mb-4 text-orange-400  font-Mont text-4xl sm:text-3xl px-4 font-bold tracking-tighter">
          Explore Our Products
        </h1>
        <p className="font-medium font-Mont text-2xl px-4 text-center">
          Your premier destination for vehicle lifting solutions with a
          Pioneering partnership with German entity. Introducing India's first
          vehicle lifting solutions to redefine the vehicle lift standards.
        </p>
        <HoverEffectCard items={cardData} />
      </div>
    </>
  );
};

export default Who;
