import { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import SubNavbar from "./Navbar";
import SEOComponent from "../(Components)/SEOComponent";

const VideoPlayer = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <iframe
        className="border-[#d12e28] border-4 rounded-lg"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Beoy8XN2dUo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
const Mobile = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row justify-between ">
          <div className="flex flex-col w-full sm:w-1/2 py-10 p-2">
            <h2 className="text-lg  text-[#2d5f98] mb-4">
              Thunder Strut Spring Compressor
            </h2>
            <h1 className="text-4xl font-bold mb-8 text-center sm:text-left">
              Thunder Coil Spring Compressor For Enhanced Suspension Repair
            </h1>
            <p>
              The Thunder Strut Spring Compressor is a game-changer in the field
              of suspension repair, offering a seamless solution for safely
              compressing coil springs on most cars and SUVs. Its innovative
              design and advanced features make it a must-have tool for service
              centers, garages, and auto workshops looking to streamline their
              suspension repair processes.
            </p>
            <a
              href="brochure4.pdf"
              className="block  hover:bg-[#2d5f98] px-4 py-2 text-color1 bg-color3 rounded mt-4 sm:mt-0 text-center"
              download
            >
              Download the brochure
            </a>
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
        <h2 className="text-2xl sm:text-4xl font-semibold mb-8">
          Innovative Design for Enhanced Efficiency
        </h2>
        <p>
          Crafted with precision and attention to detail, the Thunder Strut
          Spring Compressor features an innovative design that redefines ease of
          use. Its ergonomic controls and sturdy construction ensure that even
          the most challenging coil spring compression tasks can be completed
          with ease and precision.
        </p>
      </div>
    </div>
  );
};

const Product2 = () => {
  return (
    <div className="flex items-start max-w-7xl mx-auto  my-6 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-8">
          Safe and Secure Operation
        </h2>
        <p>
          Safety is a top priority when it comes to coil spring compression, and
          the Thunder Strut Spring Compressor delivers. Equipped with a safety
          guard to protect against accidental contact with moving parts, this
          compressor ensures that technicians can work with confidence, knowing
          that they are protected from potential hazards.
        </p>
      </div>
    </div>
  );
};

const Product3 = () => {
  return (
    <div className="flex items-start max-w-6xl mx-auto  my-6 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-8">
          Mobility and Accessibility
        </h2>
        <p>
          The Thunder Strut Spring Compressor is designed for maximum mobility
          and accessibility. With its castors, it can be easily moved and
          positioned close to the vehicle undergoing suspension repair, allowing
          technicians to work efficiently and effectively.
        </p>
      </div>
    </div>
  );
};

const Product4 = () => {
  return (
    <div className="flex items-start max-w-5xl mx-auto  my-5 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-8">
          Versatile and Adaptable
        </h2>
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
        <h2 className="text-2xl sm:text-4xl font-semibold mb-8">
          Speed and Efficiency
        </h2>
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
        <h2 className="text-2xl sm:text-4xl font-semibold mb-8">
          Durable Construction for Longevity
        </h2>
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
          <h2 className="text-justify px-4 md:px-0 text-gray-900 text-xl font-medium">
            “Upgrade your suspension repair capabilities with the Thunder Strut
            Spring Compressor. With its innovative design, ease of use, and
            safety features, it is the perfect tool for any workshop looking to
            enhance efficiency and productivity in suspension repair tasks.”
          </h2>
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
        title="Coil Spring Compressor | Premium Quality Equipment for Workshops"
        description="Are you struggling with an unsafe coil spring compressor? Thunder Auto's Coil Spring Compressor provides durability and safety for your workshops. Learn more!"
      />

      <div>
        <SubNavbar />
        <Mobile />
        <Product1 />
        <Product2 />
        <Product3 />
        <Product4 />
        <Product5 />
        <Product6 />
        <Build />
        {/* <div className="md:px-20 py-10 bg-gradient-to-r from-[#2d5f98] via-[#d12e28] to-[#d12e28]"> */}
        <div className="md:px-20 py-10 bg-[#d12e28]">
          <div className="flex flex-col md:flex-row items-center max-w-7xl w-full mx-auto">
            <h2 className="text-xl text-center sm:text-3xl mt-2 text-color3 font-bold font-Mont text-white">
              Ready to transform your customer experience?
            </h2>

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
