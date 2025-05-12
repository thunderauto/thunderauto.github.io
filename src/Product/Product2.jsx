/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import SubNavbar from "./Navbar";
import SEOComponent from '../(Components)/SEOComponent';

const VideoPlayer = () => {
  return (
    <div className="max-w-sm h-full flex justify-center items-center ">
      <img src="./Photos/img4.png" className="rounded-lg"></img>
    </div>
  );
};
const Mobile = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row justify-between ">
          <div className="flex flex-col w-full sm:w-1/2 py-10">
            <h1 className="text-lg  text-[#2d5f98] mb-4">
              Thunder Aluminium Ingots
            </h1>
            <h2 className="text-4xl font-bold mb-8 text-center sm:text-left">
            High-Quality Aluminium Ingots for Industrial Use
            </h2>
            <p className="mb-6 text-center sm:text-left">
              Thunder Auto LLP is a leading name in the field of aluminium
              recycling, offering comprehensive solutions for industries looking
              to recycle aluminium scrap. With a commitment to sustainability
              and quality, we are your trusted partner in the recycling process.
              Our state-of-the-art facilities and advanced technologies ensure
              that we can handle large quantities of aluminium scrap efficiently
              and responsibly.
            </p>
            {/* <a
              href="brochure4.pdf"
              className="block px-4 py-2 hover:bg-orange-400 text-color1 bg-color3 rounded mt-4 text-center max-w-xs"
              download
            >
              Download the brochure
            </a> */}
          </div>
          <div className="w-full flex items-center justify-center sm:w-1/2">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};
const Product1 = () => {
  return (
    <div className="flex items-start max-w-7xl mx-auto  my-6 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-8">
          Thriving in Coimbatore's Foundry Hub
        </h1>
        <p>
          Situated in Coimbatore, a city renowned for its foundries and
          metalworking industries, Thunder Auto LLP benefits from its strategic
          location. Our recycling plant efficiently collects and recycles
          aluminium scrap, contributing to Coimbatore's reputation as a hub for
          sustainable manufacturing. Leveraging our expertise and the city's
          industrial heritage, we play a vital role in the circular economy,
          ensuring that aluminium scrap is repurposed into valuable resources.
        </p>
      </div>
    </div>
  );
};

const Product2 = () => {
  return (
    <div className="flex items-start max-w-7xl mx-auto  my-6 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-8">
          Comprehensive Recycling Solutions - Transforming Scrap into Ingots
        </h1>
        <p>
          At our state-of-the-art facility in Coimbatore, we specialize in
          recycling various types of aluminium scrap, including automotive
          parts, castings, and machining residues. Our advanced processes
          involve meticulous sorting, cleaning, and melting of aluminium scrap
          to produce high-quality ingots. These ingots meet rigorous industry
          standards and are ready for reuse in a wide range of applications. Our
          commitment to precision and quality ensures that each ingot is of the
          highest quality, making Thunder Auto LLP a preferred choice for
          aluminium recycling.
        </p>
      </div>
    </div>
  );
};

const Product3 = () => {
  return (
    <div className="flex items-start max-w-6xl mx-auto  my-6 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-8">
          Diverse Range of Alloys
        </h1>
        <p>
          Thunder Auto LLP takes pride in offering a diverse range of aluminium
          alloys tailored to meet the specific needs of our clients. Whether you
          require common alloys like LM6 and ADC12 or specialized blends for
          aerospace and automotive industries, our skilled team ensures precise
          alloy composition and exceptional quality in every batch. We provide
          high-strength alloys for structural applications and
          corrosion-resistant alloys for marine environments, among others. Our
          alloys are designed to excel in performance and durability, making
          them ideal for a wide range of applications. Partner with us to access
          a comprehensive range of aluminium alloys crafted to elevate your
          projects and products to new heights of excellence.
        </p>
      </div>
    </div>
  );
};

const Product4 = () => {
  return (
    <div className="flex items-start max-w-5xl mx-auto  my-5 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-8">
          Versatile and Adaptable
        </h1>
        <p>
          One of the key features of the Thunder Strut Spring Compressor is its
          versatility. It can accommodate different models of spring designs,
          thanks to its universal adapters. This makes it a versatile tool that
          can be used on a wide range of vehicles, making it a valuable addition
          to any workshop.
        </p>
      </div>
    </div>
  );
};

const Product5 = () => {
  return (
    <div className="flex items-start max-w-4xl mx-auto  my-6 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-8">
          Speed and Efficiency
        </h1>
        <p>
          With a spring compression time of less than 10 seconds, the Thunder
          Strut Spring Compressor is one of the fastest and most efficient tools
          on the market. Its quick operation minimizes downtime and allows
          technicians to complete suspension repair tasks quickly and
          effectively.
        </p>
      </div>
    </div>
  );
};
const Product6 = () => {
  return (
    <div className="flex items-start max-w-3xl mx-auto  my-6 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h1 className="text-2xl sm:text-4xl font-semibold mb-8">
          Durable Construction for Longevity
        </h1>
        <p>
          Built to withstand the rigors of daily use in a busy workshop
          environment, the Thunder Strut Spring Compressor is constructed from
          high-quality materials. Its durable construction ensures long-lasting
          performance, making it a reliable tool for years to come.
        </p>
      </div>
    </div>
  );
};

/* eslint-disable react/no-unescaped-entities */
const Build = () => {
  return (
    <div className="w-full">
      {/* <div className="max-w-7xl w-full mx-auto py-20 text-center">
        <h1 className="text-xl  sm:text-3xl mt-2 text-color3 font-bold font-Mont">
          {contentSections[2].title}
        </h1>
        <div className="grid md:grid-cols-3">
          {contentSections[2].description.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <div className="flex items-center justify-start text-orange-400">
                <img src={item.comp} />
              </div>
              <h1 className="text-xl font-semibold">{item.title}</h1>
            </div>
          ))}
        </div>
      </div> */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,0255,0255,0.6), rgba(255,255,255,0.5)), url('./images/background.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row py-20 gap-5 items-center">
          <FaQuoteLeft className="text-4xl md:text-9xl text-[#2d5f98]" />
          <h1 className="text-justify px-4 md:px-0 text-gray-900 text-xl font-medium">
            “ Join us in our mission to close the loop on aluminium recycling
            and promote a sustainable future. Thunder Auto LLP is committed to
            promoting sustainability through aluminium recycling. Join us in our
            mission to close the loop on aluminium recycling and create a more
            sustainable future for generations to come. Together, we can make a
            difference and contribute to a cleaner, greener planet.”
          </h1>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <SEOComponent
    title="Aluminium Ingots | Quality Aluminium Ingots for Automotive Industry"
    description="Are You Looking for Premium-Quality Aluminium Ingots?  Thunder Auto Provides Durable, Reliable, and Perfect for Your Production Needs. Learn More!" 
/>
    
    <div>
      <SubNavbar />
      <Mobile />
      <Product1 />
      <Product2 />
      {/* <Product3 /> */}
      {/* <Product4 />
      <Product5 /> */}
      <Product6 />
      <Build />
      <div className="md:px-20 py-10 bg-gradient-to-r from-[#2d5f98] via-[#d12e28] to-[#d12e28]">
        <div className="flex flex-col md:flex-row items-center max-w-7xl w-full mx-auto">
          <h1 className="text-xl text-center md:text-left w-1/2 sm:text-3xl mt-2 text-color3 font-bold font-Mont">
            Ready to transform your customer experience?
          </h1>

          <button className="mx-auto mt-5 md:mt-0 col-span-2 px-6 py-3 rounded-lg bg-color3 text-white font-semibold hover:bg-opacity-80 transition duration-300">
            Request a demo
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Product;
