
import { HoverEffectCard } from "@/(Components)/Hover";
import SEOComponent from '../(Components)/SEOComponent';

// export default Who;

const Who = () => {
  const cardData = [
    {
      link:"/thunder-profimaster-mobile-car-lift",
      img: "./Photos/profimaster.png",
      title: "Thunder portable carlift",
      description:
        "Thunder Portable Car Lift Universal Lift is a mobile lifting solution, which can be used as single or in systems with 2 0r 4 columns.",
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
        <h2 className="pt-8 text-center mb-4 sm:mb-4 text-[#2d5f98]  font-Mont text-4xl sm:text-3xl px-4 font-bold tracking-tighter">
          Explore Our Products
        </h2>
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
