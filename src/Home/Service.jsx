/* eslint-disable react/no-unescaped-entities */
import { HoverEffectCard } from "@/(Components)/Hover";
import { HoverEffect } from "@/(Components)/HoverEffect";
import SEOComponent from '../(Components)/SEOComponent';
import { FaQuoteLeft } from "react-icons/fa";
import { Carousel } from "flowbite-react";

const Service = () => {
  // const data = [
  //   {
  //     img: "./icon2/service.jpg",
  //     title: "Car Service Centres",
  //     description:
  //       "Our Thunder Profimaster Lift and related accessories are designed to suit for all kind of car service centres / Garages",
  //   },
  //   {
  //     img: "./icon2/shop.jpg",
  //     title: "Body Shops Repair",
  //     description:
  //       "Thunder Profimaster 3000 is a perfect tools to access the vehicles in different angles for all kinds of body shop works.",
  //   },
  //   {
  //     img: "./icon2/tyre.jpg",
  //     title: "Tyre Shops",
  //     description:
  //       "A substitute for the manual hydraulic floor jack by our motorised Floor jack for all kinds of tyre shop services.",
  //   },
  //   {
  //     img: "./icon2/accessory.jpg",
  //     title: "Car Spa's / Accessories Shop",
  //     description:
  //       "Suits for almost every service areas like Foiling, Polishing, Reverse Sensor Mounting and Neon Light fixing etc",
  //   },
  // ];

  const cara = [
    ["./icon/1.jpg", "./icon/1.png", "./icon/8.png"],
    ["./icon/2.png", "./icon/3.png", "./icon/4.png"],
    ["./icon/5.png", "./icon/6.png", "./icon/7.png"],
  ];

  return (
    <section>
      <SEOComponent
        title="Car Lifting Solutions | Thunder Auto | Efficient and Safe!"
        description="Thunder Auto Offers the Best Mobile Car Lift Designed for Automotive Businesses. Improve Your Workshop Efficiency With Our Best Lifting Solutions" 
      />
      <div>
        <blockquote className="flex items-start max-w-5xl mx-auto my-6 xs:my-2 text-center p-7 sm:p-12 bg-gray-200 rounded-xl shadow-xl border border-gray-200">
          <FaQuoteLeft className="text-9xl text-[#2d5f98]" aria-hidden="true" />
          <p className="text-xl capitalize sm:text-4xl mt-2 text-color4/90 font-bold font-Mont">
            Best Portable Car Lifting Solutions in India - Efficient and safe
          </p>
        </blockquote>
 
        <section className="max-w-7xl w-full mx-auto text-center py-10">
          <h2 className="font-bold text-4xl mb-4 sm:mb-8">
            Recognized by the clients
          </h2>
          <div className="mx-auto w-full h-56">
            <Carousel pauseOnHover>
              {cara.map((item, index) => (
                <div className="grid md:grid-cols-3 gap-5" key={index}>
                  {item.map((data, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center relative group"
                    >
                      <img 
                        src={data} 
                        style={{ filter: 'grayscale(100%)' }}
                        alt={`Client logo ${index + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
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

