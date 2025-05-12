import Container from "@/(Components)/Container";
import Who from "./Who";
import Why from "./Why";
import { useEffect } from "react";
import { HoverEffectCard } from "@/(Components)/Hover";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import SEOComponent from '../(Components)/SEOComponent';
const Where = () => {
  const cardData = [
    {
      img: "./icon2/service.jpg",
      title: "Car Service Centres",
      description:
        "Our Thunder Profimaster Lift and related accessories are designed to suit for all kind of car service centres / Garages",
    },
    {
      img: "./icon2/shop.jpg",
      title: "Body Shops Repair",
      description:
        "Thunder Profimaster 3000 is a perfect tools to access the vehicles in different angles for all kinds of body shop works.",
    },
    {
      img: "./icon2/tyre.jpg",
      title: "Tyre Shops",
      description:
        "A substitute for the manual hydraulic floor jack by our motorised Floor jack for all kinds of tyre shop services.",
    },
    {
      img: "./icon2/accessory.jpg",
      title: "Car Spa's / Accessories Shop",
      description:
        "Suits for almost every service areas like Foiling, Polishing, Reverse Sensor Mounting and Neon Light fixing etc",
    },
  ];
  return (
    <>
      <div className="animate-fade-left duration-300 text-color3 font-Mont flex flex-col md:flex-row py-10 gap-20">
        <div className="space-y-6 py-10 px-10 md:px-0  flex items-start justify-center flex-col">
          <h1 className=" w-full text-xl text-center text-orange-400 tracking-tighter sm:text-3xl mb-6 sm:mb-8 font-semibold font-Mont">
            Where Our Products Can be Utilised
          </h1>
          <p className="font-medium font-Mont text-2xl px-4 text-center">
            Our products find application in a variety of automotive settings,
            including:
          </p>
        </div>
      </div>
      <HoverEffectCard items={cardData} />
    </>
  );
};
const visionAndMission = [
  {
    title: "Vision",   
    content:
      "Forging Excellence, Shaping Tomorrow: At Thunder Auto, we envision leading the way in garage equipment manufacturing and aluminum ingot production, setting new benchmarks of quality and innovation. Grounded in our core values of excellence, integrity, and sustainability, we aim to redefine industry standards, driving growth and prosperity for our stakeholders while shaping the future of manufacturing worldwide.",
  },
  {
    title: "Mission",
    content:
      "Our mission is to deliver exceptional garage equipment solutions and premium-quality aluminum ingots, meeting the diverse needs of our customers while exceeding industry standards. Through relentless innovation, operational excellence, and a commitment to sustainable practices, we strive to enhance efficiency, drive growth, and create lasting value for our stakeholders. Guided by integrity and a dedication to customer satisfaction, we are committed to being a trusted partner in the success of our clients, fostering long-term relationships built on mutual trust and respect.",
  },
];
const teamMembers = [
  {
    name: "Mr. V. Sundaram",
    src: "./1.jpg",
    position: "CEO",
    linkedin: "https://www.linkedin.com/in/sundaram-venkatapathy-345b3287/",
  },
  {
    name: "Mrs. Sathya Sundaram",
    src: "3.jpeg",
    position: "CFO",
    linkedin: "https://www.linkedin.com/in/sathya-sundaram-429782138/",
  },
  {
    name: "Ms. Swathikha Sundaram",
    src: "2.jpeg",
    position: "Operations Head",
    linkedin: "https://www.linkedin.com/in/swathikha-sundaram-a9359875/",
  },
];
const Linkedln = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      {teamMembers.map((item, index) => (
        <Link key={index} to={item.linkedin}>
          <div className="group grayscale duration-300 hover:grayscale-0 max-w-xs mx-auto flex flex-col h-full shadow-sm rounded-lg p-5 sm:p-10">
            <img  src={item.src} className="rounded-xl" />
            <div className=" mt-5 flex items-center justify-end flex-col flex-1 flex-grow">
              <h1 className="group-hover:text-[#2d5f98] font-medium text-gray-500 ">{item.name}</h1>
              <p className="group-hover:text-[#2d5f98]  text-gray-400">{item.position}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEOComponent
    title=" About Us"
    description="Thunder Auto Offers High-Quality Automotive Workshop Equipment and Mobile Car Lift Solutions in India. Our Mission Is to Give Premium-Quality Products" 
/>

    <div>
      <div
        className="w-full"
        // style={{
        //   background:
        //     "linear-gradient(to bottom, rgba(255,0255,0255,0.6), rgba(255,255,255,0.5)), url('./images/background.jpg')",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="grid md:grid-cols-2 mt-10 sm:mt-20  px-10 gap-20 h-full max-w-7xl w-full mx-auto">
          {visionAndMission.map((item, index) => (
            <div
              key={index}
              className="flex  items-center justify-center border-2 shadow-lg border-gray-200 rounded-lg p-5 sm:p-10 flex-col"
            >
              <h1 className="pt-8 text-center mb-4 sm:mb-4 text-[#2d5f98]  font-Mont text-4xl sm:text-3xl px-4 font-bold tracking-tighter">
                {item.title}
              </h1>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Container className={"px-4 sm:px-6"}>
        <Who />
        <Linkedln />

        <div  className=" max-w-5xl mx-auto  my-6 xs:my-2 text-center p-7 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200 ">
          <h1 className="text-xl flex items-start capitalize sm:text-2xl mt-2 text-color4/90 font-bold font-Mont">
            <FaQuoteLeft className="text-4xl mr-2 w-1/4 text-[#2d5f98]" />
            At Thunder Auto, our directors form a family-driven leadership team,
            each contributing distinct expertise to our shared vision. With
            diverse backgrounds spanning finance, operations, marketing, and
            technology, we unite under common values of integrity and
            excellence. Together, we steer the company towards sustainable
            growth, guided by our familial bond and commitment to innovation.
          </h1>
        </div>
        {/* <Where /> */}

        {/* <Why/> */}
      </Container>
    </div>
    </>
  );
};

export default About;
