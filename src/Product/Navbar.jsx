import { useState } from "react";
import { NavLink } from "react-router-dom";

const SubNavbar = () => {
  const links = [
    {
      to: "/thunder-profimaster-mobile-car-lift",
      text: "Thunder Portable Car Lift",
    },
    { to: "/thunder-transport-dolly", text: "Transport Dolly" },
    { to: "/thunder-strut-spring-compressor", text: "Strut Spring Compressor" },
    { to: "/thunder-aluminium-ingots", text: "Aluminium Ingots" },
  ];

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="sticky top-[var(--navbar-height,80px)] left-0 z-40 w-full bg-[#2d5f98] font-Mont border-b h-fit">
      <div className="relative rounded-xl flex justify-center items-center w-full max-w-7xl mx-auto py-6 px-5 font-Mont">
        <ul className="hidden md:flex text-white font-medium space-x-8 cursor-pointer">
          {links.map((link, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "scale-105 transition-all duration-500 text-white border-white border-b-2 rounded"
                  : "hover:text-[#d12e28]"
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
          <ul className="md:hidden bg-[#2d5f98] w-full absolute top-full left-0 items-start animate-flip-down duration-200 flex flex-col text-white space-y-6 sm:space-y-8 px-10 py-5 sm:px-20 cursor-pointer z-50 shadow-lg">
            {links.map((link, index) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "scale-125 transition-all duration-500 text-[#d12e28]"
                    : "hover:text-[#d12e28]"
                }
                key={index}
                to={link.to}
                onClick={() => setToggle(false)}
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

export default SubNavbar;
