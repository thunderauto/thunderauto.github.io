
import { HoverEffect } from "@/(Components)/HoverEffect";
import SEOComponent from '../(Components)/SEOComponent';

const Why = () => {
  const expertise = [
    {
      img:"./images/profimaster.jpeg",
      title: "Thunder Profimaster 3000",
      description:
        "Thunder Profimaster 3000 Universal Lift is a mobile lifting solution, which can be used as single or in systems with 2 0r 4 columns.",
    },
    {
      img:"./images/Dolly.jpeg",
      title: "Transport Dolly",
      description:
        "Transport Dolly is a safe tool for easy transfer of immobile vehicles within the shop floor efficiently. Using Transport Dolly vehicles can be moved in 360 degrees.",
    },
    {
      img:"./images/Aligner.png",
      title: "Wheel Aligner",
      description:
        "KOCH-ACHSMESSANLAGEN manufactures since more than 50 years wheel alignment systems. At the beginning the simple mechanical measurement...",
    },
    {
      img:"./images/Spring.png",
      title: "Strut Spring Compressor",
      description:
        "The THUNDER Strut Spring Compressor is used to safely compress the coil spring on most cars and SUV.",
    },
  ];

  return (
    <>
      <SEOComponent
    title="Car Lifting Solutions | Thunder Auto | Efficient and Safe!"
    description="Thunder Auto Offers the Best Mobile Car Lift Designed for Automotive Businesses. Improve Your Workshop Efficiency With Our Best Lifting Solutions" 
/>
    <div className="text-center font-Mont ">
      <div className="bg-gradient-to-l flex flex-col  w-full py-5 rounded">
        <h1 className="text-xl text-color4  mb-4 sm:text-3xl font-semibold ">
          What We Offer
        </h1>
        <h2 className="flex items-center mx-auto text-color3 text-xl font-semibold">
          We Are Expert In
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
            />
          </svg>
        </h2>
      </div>
      <HoverEffect items={expertise} />
    </div>
    </>
  );
};

export default Why;
