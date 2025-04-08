/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { cn } from "@/lib/utils";
import { Carousel } from "flowbite-react";

export function CarouselComp({ data, className }) {
  return (
    <div
      className={cn(
        "w-full h-56 sm:h-64 xl:h-80 2xl:h-[50vh] text-color3",
        className
      )}
    >
      <Carousel>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url(${item.img})`,
              backgroundSize: "cover",
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <h1
              className="font-Mont text-2xl sm:text-3xl lg:text-4xl font-bold  text-color1 text-center
            
            
            "
            >
              {" "}
              {item.content}
            </h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
