import { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import SubNavbar from "./Navbar";
import SEOComponent from '../(Components)/SEOComponent';
const contentSections = [
  {
    title: "Thunder Transport Dolly",
    description:
      "Effortless Vehicle Transfer within Your Workspace. The Transport Dolly stands as a pinnacle of innovation in the realm of vehicle handling, offering a seamless solution for the movement of immobile vehicles within service centers, garages, and tire shops...",
  },
  {
    title: "Innovative Design for Easy Maneuverability",
    description:
      "The Transport Dolly features a unique design that makes moving vehicles a breeze...",
  },
  {
    title:
      "Build and deploy your lifting solutions effortlessly, ensuring precision and safety every time",
    description: [
      { title: "Quick Initial Inspection", comp: "./icon2/img5.png" },
      { title: "Insurance Surveys", comp: "./icon2/img4.png" },
      { title: "Suspension Repair", comp: "./icon2/img7.png" },
      { title: "Wheel Rotation", comp: "./icon2/img9.png" },
      { title: "Body Shop repair", comp: "./icon2/img2.png" },
      { title: "Brake Servicing", comp: "./icon2/img3.png" },
      { title: "Underbody Jobs", comp: "./icon2/img8.png" },
      { title: "Body Polishing", comp: "./icon2/img1.png" },
      { title: "Mounting of reverse sensors", comp: "./icon2/img6.png" },
    ],
  },
  {
    title: "Customer Testimonial",
    description: `"Thunder ProfiMaster 3000 integrates seamlessly into our commitment to enhancing customer service and satisfaction..."`,
  },
  {
    title: "THUNDER ProfiMaster 3000 in Action",
    description: "Video clip",
    features: [
      {
        title: "Versatile Inspection Capability",
        description:
          "With Thunder ProfiMaster 3000, automotive inspection becomes effortless. Lift the car from any side to facilitate visual inspection by insurance surveyors...",
      },
      {
        title: "Enhanced Damage Assessment",
        description:
          "Unlike traditional methods, Thunder ProfiMaster provides a proven solution for assessing damages effectively...",
      },
      {
        title: "Streamlined Suspension Repair",
        description:
          "Thunder ProfiMaster simplifies suspension repair procedures by eliminating the need for a designated service area...",
      },
      {
        title: "Ergonomic Working Angle",
        description:
          "The innovative design of Thunder ProfiMaster jacks allows tilting the vehicle to an ergonomic working angle...",
      },
    ],
  },
];

const VideoPlayer = () => {
  return (
    <div className="w-full h-full flex justify-center items-center ">
      <iframe
        className="
      border-orange-400 border-4 rounded-lg"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qkoPSWhRcjI?si=aO4ZMEfxP3P5RnOn"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
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
          <div className="flex flex-col w-full sm:w-1/2 py-10">
            <h2 className="text-lg  text-[#2d5f98] mb-4">
              Thunder Transport Dolly
            </h2>
            <h1 className="text-4xl font-bold mb-8 text-center sm:text-left">
            Vehicle Transport Dolly for Seamless Vehicle Transfers Within Your Workspace
            </h1>
            <p className="mb-6 text-center sm:text-left">
              The Transport Dolly stands as a pinnacle of innovation in the
              realm of vehicle handling, offering a seamless solution for the
              movement of immobile vehicles within service centers, garages, and
              tire shops. Its revolutionary design redefines ease of use,
              allowing vehicles to be maneuvered effortlessly, thereby
              transforming the workspace dynamics. even the most challenging
              vehicle transfers become a simple task. Its ergonomic design and
              intuitive controls empower technicians to move vehicles with
              precision and confidence, enhancing both safety and efficiency in
              the workplace.
            </p>
            <a
              href="brochure3.pdf"
              className="block px-4 py-2 hover:bg-[#d12e28] text-color1 bg-color3 rounded mt-4 text-center max-w-xs"
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
          Innovative Design for Easy Maneuverability
        </h2>
        <p>
          Discover the power of Thunder ProfiMaster 3000 – the ultimate solution
          for automotive lifting needs. Whether it's lifting cars, off-road
          vehicles, vans, or small buses, this versatile system streamlines
          operations and enhances efficiency. Automate your lifting tasks with
          precision, reducing manual effort and improving workflow. Boost
          productivity and ensure ergonomic working conditions with Thunder
          ProfiMaster 3000.
        </p>
      </div>
    </div>
  );
};

const Product2 = () => {
  return (
    <div className="flex items-start max-w-6xl mx-auto  my-6 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-8">
          Safe and Efficient
        </h2>
        <p>
          Safety is paramount when it comes to vehicle handling, and the
          Transport Dolly delivers. Its robust construction and secure wheel
          locks ensure that vehicles remain stable and secure during transfer.
          The dolly's UHMW wheels are designed to minimize noise and vibration,
          providing a smooth and quiet operation that won't disturb your
          workspace.
        </p>
      </div>
    </div>
  );
};
const Product4 = () => {
  return (
    <div className="flex items-start max-w-5xl mx-auto  my-6 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-8">
          Versatile Usage
        </h2>
        <p>
          Whether you need to move a car from a two-post lift or a Thunder
          Profimaster Lift, the Transport Dolly is the ideal solution for your
          vehicle transfer needs.
        </p>
      </div>
    </div>
  );
};

const Product3 = () => {
  return (
    <div className="flex items-start max-w-4xl mx-auto  my-6 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-8">
          Built to Last
        </h2>
        <p>
          The Transport Dolly is built to withstand the rigors of daily use in a
          busy workshop environment. Its durable construction and high-quality
          materials ensure long-lasting performance, making it a reliable tool
          for years to come.
        </p>
      </div>
    </div>
  );
};
const Product5 = () => {
  return (
    <div className="flex items-start max-w-3xl mx-auto  my-6 xs:my-2 text-center p-5 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-col py-2 gap-5 items-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-8">
          Rigid and Strong
        </h2>
        <p>
          Built to last, the Transport Dolly is constructed with durability in
          mind. It is fitted with wheels made of UHMW
          (Ultra-High-Molecular-Weight Polyethylene), known for its shock
          resistance, chemical resistance, self-lubricating properties, and high
          resistance to abrasion
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
        <h2 className="text-xl  sm:text-3xl mt-2 text-color3 font-bold font-Mont">
          {contentSections[2].title}
        </h2>
        <div className="grid md:grid-cols-3">
          {contentSections[2].description.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <div className="flex items-center justify-start text-orange-400">
                <img src={item.comp} />
              </div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
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
          <h2 className="text-justify px-4 md:px-0 text-gray-900 text-xl font-medium">
            “Transport Dolly stands as a testament to innovation and excellence,
            offering a safe, efficient, and user-friendly solution for the
            movement of vehicles within service centers, garages, and tire
            shops. Elevate your workspace with the Transport Dolly and
            experience the future of vehicle handling technology firsthand.”
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
    title="Thunder Transport Dolly | Effortlessly transfer your vehicle"
    description="We Understand How Challenging It Can Be to Move Vehicles Around in Your Workshop. The Only Reason We Designed Thunder Auto's Heavy-Duty Transport Dolly" 
/>

    <div>
      
      <SubNavbar />
      <Mobile />
      <Product1 />
      <Product2 />
      <Product4 />
      <Product3 />
      <Product5 />
      {/* <div className="md:px-20 py-10 bg-gradient-to-r from-color2 via-orange-400 to-orange-400">
        <div className="flex flex-col md:flex-row items-center jus max-w-7xl w-full mx-auto">
          <h2 className="text-xl w-1/2 sm:text-3xl mt-2 text-color3 font-bold font-Mont">
            How to choose a Mobile Lift Solution
          </h2>

          <a
            href="brochure3.pdf"
            className="block  hover:bg-orange-400 px-4 py-2 text-color1 bg-color3 rounded mt-4 text-center"
            download
          >
            Download the buyer's guide
          </a>
        </div>
      </div> */}
      <Build />
      {/* <div className="md:px-20 py-10 bg-gradient-to-r from-[#2d5f98] via-[#d12e28] to-[#d12e28]"> */}
      <div className="md:px-20 py-10 bg-[#d12e28]">
        <div className="flex flex-col md:flex-row items-center max-w-7xl w-full mx-auto">
          <h2 className="text-xl text-center md:text-left w-1/2 sm:text-3xl mt-2 text-color3 font-bold font-Mont">
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
