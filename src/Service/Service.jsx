import Container from "@/(Components)/Container";
import Quote from "./Quote";
import Demo from "./Demo";
import Request from "./Request";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Service = () => {
  const [active, setActive] = useState("quote");

  return (
    <>
      <div className="flex items-center justify-center gap-2 py-5 my-10 bg-gradient-to-r from-color2  to-orange-400 w-full">
        <button
          onClick={() => setActive("quote")}
          className={cn(
            "px-4 py-2 bg-color1 rounded-lg",
            active === "quote" ? "bg-color3 text-color1" : ""
          )}
        >
          Request Quote
        </button>
        <button
          onClick={() => setActive("demo")}
          className={cn(
            "px-4 py-2 bg-color1 rounded-lg",
            active === "demo" ? "bg-color3 text-color1" : ""
          )}
        >
          Request Demo
        </button>
        <button
          onClick={() => setActive("service")}
          className={cn(
            "px-4 py-2 bg-color1 rounded-lg",
            active === "service" ? "bg-color3 text-color1" : ""
          )}
        >
          Request Service
        </button>
      </div>
      <Container className={"justify-start"}>
        <div className="flex justify-between">
          {active === "demo" && <Demo />}

          <img
            src="https://res.cloudinary.com/dcelwoupp/image/upload/v1710935246/img3_ezgu2h.jpg"
            className="max-w-sm rounded-lg"
            alt=""
          />
          {active === "quote" && <Quote />}
          {active === "service" && <Request />}
        </div>
      </Container>
    </>
  );
};

export default Service;
