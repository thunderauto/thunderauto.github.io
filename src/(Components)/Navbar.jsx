import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { to: "/", text: "Home" },
    {
      to: "/thunder-profimaster-mobile-car-lift",
      text: "Products",
      dropdown: true,
      dropdownOptions: [
        { to: "/products/product1", text: "Product 1" },
        { to: "/products/product2", text: "Product 2" },
        { to: "/products/product3", text: "Product 3" },
      ],
    },
    { to: "/resources", text: "Resources" },
    { to: "/about", text: "Company" },
  ];

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="sticky top-0 left-0 z-50 w-full bg-color1 font-MontF border-b-2">
      <div className="relative rounded-xl flex justify-between items-center w-full max-w-7xl mx-auto py-5 px-5 font-Mont">
        {/* <Link
          to="/"
          className="text-[#2d5f98] cursor-pointer tracking-tighter  hover:text-[#d12e28] text-2xl sm:text-5xl  font-semibold"
        >
          Thunder
        </Link> */}
        <a
          href="#"
          className="cursor-pointer hover:opacity-80 transition-opacity duration-300"
        >
          <img 
            src="/logo.jpg" 
            alt="Thunder" 
            className="h-10 w-20 md:h-12 md:w-22"
          />
        </a>

        {/* Mobile Menu Icon */}
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

        {/* Desktop Menu */}
        <ul className="hidden  md:flex text-color3  font-medium space-x-8 my-4 cursor-pointer">
          {links.map((link, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive 
                  ? "text-[#2d5f98] font-semibold border-b-2 border-[#2d5f98] transition-all duration-300" 
                  : "hover:text-[#2d5f98] transition-all duration-300"
              }
              key={index}
              to={link.to}
            >
              {link.text}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Menu */}
        {toggle && (
          <ul className="md:hidden bg-color1 w-full absolute top-14 left-0 items-start animate-flip-down duration-200 flex flex-col text-color3 space-y-6  sm:space-y-8 px-10 py-5 sm:px-20 cursor-pointer">
            {links.map((link, index) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#2d5f98] font-semibold border-b-2 border-[#2d5f98] transition-all duration-300"
                    : "hover:text-[#2d5f98] transition-all duration-300"
                }
                key={index}
                to={link.to}
              >
                {link.text}
              </NavLink>
            ))}
          </ul>
        )}

        {/* "Get Demo" button */}
        <NavLink
          to="/quote"
          className="hidden md:block bg-color3 hover:bg-[#2d5f98] text-white font-medium py-2 px-4 rounded-lg transition duration-300 hover:bg-color2-dark"
        >
          Get a Quote
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
