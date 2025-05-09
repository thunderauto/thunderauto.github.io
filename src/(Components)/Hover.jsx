/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export const HoverEffectCard = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8 py-10 px-5">
      {items.map((item, index) => (
        <Link key={index} to={item.link ? item.link : "#"}>
          <div key={index} className="group h-64 w-64 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {item.img ? (
                <div
                  style={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${item.img}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="absolute inset-0 h-full z-50 w-full rounded-xl
              
               px-12 text-center text-color1"
                >
                  <div className="flex min-h-full flex-col items-center justify-center">
<<<<<<< HEAD
                    <h1 className="text-2xl font-bold">{item.title}</h1>
=======
                    <h2 className="text-2xl font-bold">{item.title}</h2>
>>>>>>> 6b0fd18 (latest version)
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 h-full z-50 w-full rounded-xl bg-white px-12 text-center text-black">
                  <div className="flex min-h-full flex-col items-center justify-center">
<<<<<<< HEAD
                    <h1 className="text-2xl font-bold">{item.title}</h1>
=======
                    <h2 className="text-2xl font-bold">{item.title}</h2>
>>>>>>> 6b0fd18 (latest version)
                  </div>
                </div>
              )}

<<<<<<< HEAD
              <div className="absolute inset-0 h-full z-50 w-full rounded-xl bg-gradient-to-r from-color2 via-orange-400 to-orange-400 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
=======
              <div className="absolute inset-0 h-full z-50 w-full rounded-xl bg-gradient-to-r from-[#2d5f98] via-[#d12e28] to-[#d12e28] px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
>>>>>>> 6b0fd18 (latest version)
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p className="font-semibold">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
