/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  FaAddressBook,
  FaClock,
  FaFacebookSquare,
  FaInbox,
  FaMobile,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  FaInstagram,
  FaLinkedin,
  FaPhoneFlip,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
// import { Bread } from "./Bread";
const FooterSection = ({ title, items }) => {
  return (
    <div>
      <h2 className="font-medium text-lg text-color1 mb-2">{title}</h2>
      <ul className="space-y-4 text-sm text-color1/70 flex flex-col">
        {items.map((item, index) => (
          <Link className="hover:text-color2" key={index} to={item.link}>
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};
const Footer = () => {
  const details = {
    officeAddress: {
      street: "441-A, Bharathiyar Road",
      area: "Pappanaicken Palayam",
      city: "Coimbatore, Tamil Nadu",
      pincode: "641 037, India.",
      phoneNumbers: [
        { no: "+91 422 - 4387889", comp: <FaPhoneFlip className="mr-2" /> },
        { no: "+91 80981 01055", comp: <FaMobile className="mr-2" /> },
      ],
      email: "sales@thunderauto.in",
    },
    officeHours: {
      days: "Monday to Saturday",
      timing: "9:00 AM - 6:00 PM",
    },
  };
  const product = [
    {
      title: "Thunder Profimaster",
      link: "/thunder-profimaster-mobile-car-lift",
    },
    {
      title: "Transport Dolly",
      link: "/thunder-transport-dolly",
    },
   
    {
      title: "Strut Spring Compressor",
      link: "/thunder-strut-spring-compressor",
    },
     {
      title: "Aluminium Ingots",
      link: "/thunder-aluminium-ingots",
    },
  ];
  const company = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
  ];
  const information = [
    {
      title: "Product Archive",
      link: "/thunder-profimaster-mobile-car-lift",
    },
    // {
    //   title: "Privacy policy",
    //   link: "",
    // },
  ];
  const social = [
    {
      com: <FaFacebookSquare />,
      link: "https://www.facebook.com/thunderautollp?mibextid=LQQJ4d",
    },
    {
      com: <FaXTwitter />,
      link: "https://twitter.com/thunderautollp",
    },
    {
      com: <FaLinkedin />,
      link: "https://www.linkedin.com/company/thunder-auto-llp/",
    },

    {
      com: <FaYoutube />,
      link: "https://www.youtube.com/@thunderautollp4571",
    },
    {
      com: <FaInstagram />,
      link: "https://www.instagram.com/thunder__auto/?igsh=d2tkeTR3OXY0ZW9i#",
    },
  ];

  return (
    <div className="bg-black w-full font-Mont">
      <div className="max-w-7xl w-full mx-auto text-color px-10 md:px-5 py-10 md:pt-20">
        <h2 className="text-4xl font-bold text-[#2d5f98]">Thunder</h2>
        <div className="grid grid-cols-1 text-color1 sm:grid-cols-2 mt-5">
          <div>
            <h2 className="flex items-center font-semibold text-xl mb-2">
              <FaAddressBook className="mr-2" />
              Office Address
            </h2>
            <p className="mb-1">Thunder Auto LLP</p>
            <p className="mb-1">
              {details.officeAddress.street}, {details.officeAddress.area}
            </p>
            <p className="mb-1">
              {details.officeAddress.city}, {details.officeAddress.pincode}
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl flex items-center">
              <FaClock className="mr-2" />
              Office Hours
            </h2>
            <p className="mb-1">{details.officeHours.days}</p>
            <p className="mb-1">{details.officeHours.timing}</p>
          </div>
          <div>
            <h2 className="text-color1 font-semibold text-xl mb-4">Contact</h2>
            <div className="">
              {details.officeAddress.phoneNumbers.map((item, index) => (
                <div className="flex items-center mb-1" key={index}>
                  {item.comp}
                  {item.no}
                </div>
              ))}
            </div>
            <div className="mb-1 flex items-center">
              <MdEmail className="mr-2" />
              {details.officeAddress.email}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 mt-10">
          <FooterSection title={"Products"} items={product} />
          <FooterSection title={"Company"} items={company} />
          <FooterSection title={"Resources"} items={information} />
          <div>
            <h2 className="font-medium mb-2 text-color1">Social Media</h2>
            <ul className="flex text-2xl text-color1 space-x-4">
              {social.map((item, index) => (
                <Link
                  key={index}
                  className="hover:scale-110 hover:text-color2"
                  to={item.link}
                >
                  {item.com}
                </Link>
              ))}
            </ul>
            <Link to={"#"}>
              {/* <button className="px-4 py-2 text-color1 font-medium bg-gradient-to-r from-[#2d5f98] via-[#d12e28] to-[#d12e28] hover:bg-[#2d5f98] rounded mt-4"> */}
              <button className="px-4 py-2 text-color1 font-medium bg-[#d12e28] hover:bg-[#2d5f98] rounded mt-4">
                Reach Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-xs my-10 md:my-16 flex flex-col space-y-2 md:space-y-0 md:flex-row  space-x-6 text-gray-200 items-center justify-center">
        <h2>@ 2025 THUNDER AUTO LLP. All Rights Reserved.</h2>
        {/* <p>Designed & Maintained by RBG.AI.</p> */}
      </div>
    </div>
  );
};

export default Footer;
