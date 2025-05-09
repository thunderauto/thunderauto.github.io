<<<<<<< HEAD
// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const links = [
//     { to: "/", text: "Home" },
//     { to: "/about", text: "Our Story" },
//     {
//       to: "/products",
//       text: "Product Offerings",
//       dropdown: true,
//       dropdownOptions: [
//         { to: "/products/product1", text: "Product 1" },
//         { to: "/products/product2", text: "Product 2" },
//         { to: "/products/product3", text: "Product 3" },
//       ],
//     },
//     { to: "/Ingots", text: "Ingots" },
//     { to: "/gallery", text: "Visual Showcase" },
//     { to: "/service", text: "Service" },
//     // { to: "/contact", text: "Contact Info" },

//   ];

//   const [toggle, setToggle] = useState(false);
//   return (
//     <div className="sticky top-0 left-0 z-50 w-full bg-color1 border-b-2">
//       <div className="  relative rounded-xl flex justify-between items-center w-full max-w-7xl mx-auto py-5 px-5 font-Mont">
//         <Link
//           to="/"
//           className=""
//         >
//           <img src="./Photos/Thunder-Logo.png" className="w-48" />
//         </Link>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           onClick={() => setToggle((state) => !state)}
//           className="w-6 h-6 text-color4 md:hidden"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 9h16.5m-16.5 6.75h16.5"
//           />
//         </svg>

//         <ul className="hidden text-sm md:flex text-color3 font-medium space-x-4 my-4 cursor-pointer">
//           {links.map((link, index) => (
//             <NavLink
//               className={({ isActive }) =>
//                 isActive ? "border-color2 border-b-2 rounded duration-300" : ""
//               }
//               key={index}
//               to={link.to}
//             >
//               {link.text}
//             </NavLink>
//           ))}
//         </ul>
//         {toggle ? (
//           <ul className="md:hidden bg-color1 w-full absolute top-14 left-0  animate-flip-down duration-200 flex flex-col text-color3 space-y-6 sm:space-y-8 px-10 py-5 sm:px-20  cursor-pointer">
//             {links.map((link, index) => (
//               <NavLink
//                 className={({ isActive }) =>
//                   isActive
//                     ? "border-color2 border-b-2 rounded duration-300"
//                     : ""
//                 }
//                 key={index}
//                 to={link.to}
//               >
//                 {link.text}
//               </NavLink>
//             ))}
//           </ul>
//         ) : (
//           <></>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Navbar;

=======
>>>>>>> 6b0fd18 (latest version)
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
        <Link
          to="/"
<<<<<<< HEAD
          className="text-orange-400 cursor-pointer tracking-tighter  hover:text-color4 text-2xl sm:text-5xl  font-semibold"
=======
          className="text-[#2d5f98] cursor-pointer tracking-tighter  hover:text-[#d12e28] text-2xl sm:text-5xl  font-semibold"
>>>>>>> 6b0fd18 (latest version)
        >
          Thunder
        </Link>

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
<<<<<<< HEAD
                isActive
                  ? "scale-105 transition-all duration-500 text-orange-400"
                  : "" + "hover:text-orange-400"
=======
                isActive 
                  ? "text-[#2d5f98] font-semibold border-b-2 border-[#2d5f98] transition-all duration-300" 
                  : "hover:text-[#2d5f98] transition-all duration-300"
>>>>>>> 6b0fd18 (latest version)
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
<<<<<<< HEAD
                    ? "scale-125 transition-all duration-500 text-color2"
                    : "" + "hover:text-orange-400"
=======
                    ? "text-[#2d5f98] font-semibold border-b-2 border-[#2d5f98] transition-all duration-300"
                    : "hover:text-[#2d5f98] transition-all duration-300"
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

        {/* "Get Demo" button */}
        <NavLink
          to="/quote"
<<<<<<< HEAD
          className="hidden md:block bg-color3 hover:bg-orange-400 text-white font-medium py-2 px-4 rounded-lg transition duration-300 hover:bg-color2-dark"
=======
          className="hidden md:block bg-color3 hover:bg-[#2d5f98] text-white font-medium py-2 px-4 rounded-lg transition duration-300 hover:bg-color2-dark"
>>>>>>> 6b0fd18 (latest version)
        >
          Get a Quote
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
