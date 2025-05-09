import { useState } from "react";
<<<<<<< HEAD
import { Link, NavLink } from "react-router-dom";
=======
import { NavLink } from "react-router-dom";
>>>>>>> 6b0fd18 (latest version)

const Navbar = () => {
  const links = [
    { to: "/thunder-profimaster-mobile-car-lift", text: "ProfiMaster 3000" },
    { to: "/thunder-transport-dolly", text: "Transport Dolly" },
    { to: "/thunder-strut-spring-compressor", text: "Strut Spring Compressor" },
    { to: "/thunder-aluminium-ingots", text: "Aluminium Ingots" },
  ];

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
<<<<<<< HEAD
    <div className="sticky top-0 left-0 z-50 w-full bg-orange-400 font-Mont border-b h-fit" >
      <div className="relative rounded-xl flex justify-center items-center w-full max-w-7xl mx-auto py-6 px-5 font-Mont">
        <ul className="hidden md:flex text-white  font-medium space-x-8  cursor-pointer">
=======
    <div className="sticky top-0 left-0 z-50 w-full bg-[#2d5f98] font-Mont border-b h-fit" >
      <div className="relative rounded-xl flex justify-center items-center w-full max-w-7xl mx-auto py-6 px-5 font-Mont">
        <ul className="hidden md:flex text-white font-medium space-x-8 cursor-pointer">
>>>>>>> 6b0fd18 (latest version)
          {links.map((link, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive
<<<<<<< HEAD
                  ? "scale-105 transition-all duration-500 text-color3 border-color3 border-b-2 rounded"
                  : ""
=======
                  ? "scale-105 transition-all duration-500 text-white border-white border-b-2 rounded"
                  : "hover:text-[#d12e28]"
>>>>>>> 6b0fd18 (latest version)
              }
              key={index}
              to={link.to}
            >
              {link.text}
            </NavLink>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-color3 hover:text-color4 focus:outline-none"
          >
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2H3zm0 6a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2H3zm0 6a1 1 0 1 1 0-2h14a1 1 0 0 1 0 2H3z"
              />
            </svg>
          </button>
        </div>

        {toggle && (
<<<<<<< HEAD
          <ul className="md:hidden bg-color1 w-full absolute top-14 left-0 items-start animate-flip-down duration-200 flex flex-col text-color3 space-y-6  sm:space-y-8 px-10 py-5 sm:px-20 cursor-pointer">
=======
          <ul className="md:hidden bg-[#2d5f98] w-full absolute top-14 left-0 items-start animate-flip-down duration-200 flex flex-col text-white space-y-6 sm:space-y-8 px-10 py-5 sm:px-20 cursor-pointer">
>>>>>>> 6b0fd18 (latest version)
            {links.map((link, index) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
<<<<<<< HEAD
                    ? "scale-125 transition-all duration-500 text-color2"
                    : ""
=======
                    ? "scale-125 transition-all duration-500 text-[#d12e28]"
                    : "hover:text-[#d12e28]"
>>>>>>> 6b0fd18 (latest version)
                }
                key={index}
                to={link.to}
              >
                {link.text}
              </NavLink>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;