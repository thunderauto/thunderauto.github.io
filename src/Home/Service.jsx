/* eslint-disable react/no-unescaped-entities */

import SEOComponent from "../(Components)/SEOComponent";
import { FaQuoteLeft } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import { useMemo } from "react";

const Service = () => {
  // Memoize the image array to prevent unnecessary re-renders
  const cara = useMemo(
    () => [
      {
        src: "./icon/1.jpg",
        alt: "Client logo 1",
      },
      {
        src: "./icon/1.png",
        alt: "Client logo 2",
      },
      {
        src: "./icon/8.png",
        alt: "Client logo 3",
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
        alt: "Client logo 6",
      },
      {
        src: "./icon/5.png",
        alt: "Client logo 7",
      },
      {
        src: "./icon/6.png",
        alt: "Client logo 8",
      },
      {
        src: "./icon/7.png",
        alt: "Client logo 9",
      },
    ],
    []
  );

  return (
    <section className="w-full overflow-hidden">
      <SEOComponent
        title="Car Lifting Solutions | Thunder Auto | Efficient and Safe!"
        description="Thunder Auto Offers the Best Mobile Car Lift Designed for Automotive Businesses. Improve Your Workshop Efficiency With Our Best Lifting Solutions"
      />
      <div className="px-4 sm:px-6">
        <blockquote className="flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto my-4 md:my-6 text-center p-4 md:p-8 lg:p-12 bg-gray-200 rounded-xl shadow-xl border border-gray-200">
          <FaQuoteLeft
            className="text-5xl md:text-7xl lg:text-9xl text-[#2d5f98] mb-4 md:mb-0 md:mr-4"
            aria-hidden="true"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-0 md:mt-2 text-color4/90 font-bold font-Mont">
            Best Portable Car Lifting Solutions in India - Efficient and safe
          </h1>
        </blockquote>

        <section className="max-w-7xl w-full mx-auto text-center py-6 md:py-10">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-8">
            Recognized by the clients
          </h2>
          <div className="mx-auto w-full h-32 sm:h-40 md:h-56">
            <Carousel
              pauseOnHover
              slideInterval={1000}
              indicators={false}
              leftControl={false}
              rightControl={false}
              className="h-full"
            >
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
                        filter: "grayscale(100%)",
                        contentVisibility: "auto",
                      }}
                      fetchPriority={index < 3 ? "high" : "low"}
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Service;
