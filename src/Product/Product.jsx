import { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "./Navbar";
import { Tooltip } from "flowbite-react";
import { InfoIcon } from "lucide-react";
import SEOComponent from '../(Components)/SEOComponent';
const contentSections = [
  {
    title: "THUNDER ProfiMaster 3000",
    description:
      "Elevate your auto repair game with precision and power. Experience the seamless integration of advanced technology with Thunder ProfiMaster 3000...",
  },
  {
    title:
      "Revolutionize your automotive repair experience with advanced technology",
    description:
      "Discover the power of Thunder ProfiMaster 3000 – the ultimate solution for automotive lifting needs...",
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

const features = [
  {
    title: "Versatile Inspection Capability",
    i: "With Thunder ProfiMaster 3000, automotive inspection becomes effortless. Lift the car from any side to facilitate visual inspection by insurance surveyors. Its flexibility allows for thorough assessment, ensuring accurate damage evaluation.",
  },
  {
    title: "Enhanced Damage Assessment",
    i: "Unlike traditional methods, Thunder ProfiMaster provides a proven solution for assessing damages effectively. Its versatility makes it ideal for such applications, enabling precise and comprehensive evaluations.",
  },
  {
    title: "Streamlined Suspension Repair",
    i: " Thunder ProfiMaster simplifies suspension repair procedures by eliminating the need for a designated service area. Unlike conventional two-post lifts, it offers the flexibility to perform repairs anywhere, saving time and resources.",
  },
  {
    title: "Ergonomic Working Angle",
    i: "The innovative design of Thunder ProfiMaster jacks allows tilting the vehicle to an ergonomic working angle. This ergonomic advantage not only improves bay productivity but also reduces physical strain on technicians and painters.",
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
        src="https://www.youtube.com/embed/L9g_W232YY4"
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullscreen
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
            <h1 className="text-lg  text-orange-400 mb-4">
            Thunder Profimaster Mobile Car Lift
            </h1>
            <h2 className="text-4xl font-bold mb-8 text-center sm:text-left">
            Efficient & Safe Car Lift for Garages & Workshops
            </h2>
            <p className="mb-6 text-center sm:text-left">
              Experience the seamless integration of advanced technology with
              Thunder ProfiMaster 3000. This cutting-edge system enhances the
              self-service landscape by providing efficient solutions for
              automotive lifting tasks. With Thunder ProfiMaster 3000,
              efficiency and precision are guaranteed, ensuring smoother
              operations in the auto repair industry. Embrace innovation and
              elevate your automotive lifting game today.
            </p>
            <a
              href="brochure1.pdf"
              className="block px-4 py-2 hover:bg-orange-400 text-color1 bg-color3 rounded mt-4 text-center max-w-xs"
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

      <div className="bg-gray-200 py-10  sm:py-20">
        <div className="flex flex-col sm:flex-row p-2 gap-10 w-full max-w-7xl mx-auto">
          <div className="w-full sm:w-1/2">
            <h1 className=" text-2xl sm:text-4xl font-semibold mb-8">
              Revolutionize your automotive repair experience with advanced
              technology
            </h1>
            <p>
              Discover the power of Thunder ProfiMaster 3000 – the ultimate
              solution for automotive lifting needs. Whether it's lifting cars,
              off-road vehicles, vans, or small buses, this versatile system
              streamlines operations and enhances efficiency. Automate your
              lifting tasks with precision, reducing manual effort and improving
              workflow. Boost productivity and ensure ergonomic working
              conditions with Thunder ProfiMaster 3000.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex items-center  flex-col ">
            <div>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center text-xl font-semibold mb-4 sm:mb-8"
                >
                  <FaCheckCircle className="text-orange-400  text-4xl" />
                  {feature.title}
                  <Tooltip content={feature.i}>
                    <InfoIcon />
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* eslint-disable react/no-unescaped-entities */
const Build = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl w-full mx-auto py-20 text-center">
        <h1 className="text-xl  sm:text-3xl mt-2 text-color3 font-bold font-Mont">
          {contentSections[2].title}
        </h1>
        <div className="grid md:grid-cols-3">
          {contentSections[2].description.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <div className="flex items-center justify-start text-orange-400">
                <img src={item.comp} alt={item.title} />
              </div>
              <h1 className="text-xl font-semibold">{item.title}</h1>
            </div>
          ))}
        </div>
      </div>
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
          <FaQuoteLeft className="text-4xl md:text-9xl text-orange-400" />
          {/* <h1 className="text-justify px-4 md:px-0 text-gray-900 text-xl font-medium">
            “Thunder ProfiMaster 3000 integrates seamlessly into our commitment
            to enhancing customer service and satisfaction. Thunder ProfiMaster
            3000 transforms the automotive repair landscape, offering tailored
            solutions and innovative features. Invest in the future of
            automotive maintenance with Thunder ProfiMaster 3000.”
          </h1> */}
           <h2 className="text-justify px-4 md:px-0 text-gray-900 text-xl font-medium">
            “Thunder ProfiMaster 3000 integrates seamlessly into our commitment
            to enhancing customer service and satisfaction. Thunder ProfiMaster
            3000 transforms the automotive repair landscape, offering tailored
            solutions and innovative features. Invest in the future of
            automotive maintenance with Thunder ProfiMaster 3000.”
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
    title="Auto Car Lift | Thunder Profimaster from Thunder Auto"
    description="Your car lifting problems are made easy by our Mobile auto car lift, which will save you time, ensure precision, and increase space in your workshop" 
/>
    <div>
  
      <Navbar />
      <Mobile />
      <div className="md:px-20 py-10 bg-gradient-to-r from-color2 via-orange-400 to-orange-400">
        <div className="flex gap-5 flex-col md:flex-row items-center justify-center max-w-7xl w-full mx-auto">
          <h1 className="text-xl  sm:text-3xl mt-2 text-color3 font-bold font-Mont">
            Crafting the perfect Mobile Lift Solution : A Guide
          </h1>

          <a
            href="brochure1.pdf"
            className="block  hover:bg-orange-400 px-4 py-2 text-color1 bg-color3 rounded mt-4 sm:mt-0 text-center"
            download
          >
            Download the buyer's guide
          </a>
        </div>
      </div>
      <Build />
      <div className="md:px-20 py-10 bg-gradient-to-r from-color2 via-orange-400 to-orange-400">
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
