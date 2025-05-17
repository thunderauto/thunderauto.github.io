/* eslint-disable react/no-unescaped-entities */
import { HoverEffectCard } from "@/(Components)/Hover";
import { HoverEffect } from "@/(Components)/HoverEffect";
import SEOComponent from '../(Components)/SEOComponent';
import { FaQuoteLeft } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import { useMemo } from 'react';

const Service = () => {
  // Memoize the image array to prevent unnecessary re-renders
  const cara = useMemo(() => [
    {
      src: "./icon/1.jpg",
      width: 300,
      height: 200,
      alt: "Client logo 1"
    },
    {
      src: "./icon/1.png",
      width: 300,
      height: 200,
      alt: "Client logo 2"
    },
    {
      src: "./icon/8.png",
      width: 300,
      height: 200,
      alt: "Client logo 3"
    },
    {
      src: "./icon/2.png",
      width: 300,
      height: 200,
      alt: "Client logo 4"
    },
    {
      src: "./icon/3.png",
      width: 300,
      height: 200,
      alt: "Client logo 5"
    },
    {
      src: "./icon/4.png",
      width: 300,
      height: 200,
      alt: "Client logo 6"
    },
    {
      src: "./icon/5.png",
      width: 300,
      height: 200,
      alt: "Client logo 7"
    },
    {
      src: "./icon/6.png",
      width: 300,
      height: 200,
      alt: "Client logo 8"
    },
    {
      src: "./icon/7.png",
      width: 300,
      height: 200,
      alt: "Client logo 9"
    }
  ], []);

  return (
    <section>
      <SEOComponent
        title="Car Lifting Solutions | Thunder Auto | Efficient and Safe!"
        description="Thunder Auto Offers the Best Mobile Car Lift Designed for Automotive Businesses. Improve Your Workshop Efficiency With Our Best Lifting Solutions" 
      />
      <div>
        <blockquote className="flex items-start max-w-5xl mx-auto my-6 xs:my-2 text-center p-7 sm:p-12 bg-gray-200 rounded-xl shadow-xl border border-gray-200">
          <FaQuoteLeft className="text-9xl text-[#2d5f98]" aria-hidden="true" />
          <h1 className="text-xl capitalize sm:text-4xl mt-2 text-color4/90 font-bold font-Mont">
            Best Portable Car Lifting Solutions in India - Efficient and safe
          </h1>
        </blockquote>
 
        <section className="max-w-7xl w-full mx-auto text-center py-10">
          <h2 className="font-bold text-4xl mb-4 sm:mb-8">
            Recognized by the clients
          </h2>
          <div className="mx-auto w-full h-56">
            <Carousel 
              pauseOnHover 
              slideInterval={1000}
              indicators={false}
              leftControl={false}
              rightControl={false}
            >
              {cara.map((image, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center relative group h-40 md:h-56"
                >
                  <img 
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                    style={{ 
                      filter: 'grayscale(100%)',
                      contentVisibility: 'auto'
                    }}
                    fetchPriority={index < 3 ? "high" : "low"}
                  />
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

