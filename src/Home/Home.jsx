/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import Service from "./Service";
import { Link } from "react-router-dom";
import Who from "./Who";
import Why from "@/About/Why";
import SEOComponent from '../(Components)/SEOComponent';

const What = () => {
  const handleClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Optionally, you can add smooth behavior for a smooth scroll effect
    });
  };

  return (
    <div className="w-full py-20 px-5 bg-gradient-to-r from-color2 via-orange-400 to-orange-400 text-color1">
      <div className="max-w-7xl mx-auto w-full md:px-10">
        {/* <h1 className="font-Poppins text-2xl font-semibold">
          What Thunder Auto Do For You ?
        </h1> */}
        <h2 className="font-Poppins text-2xl font-semibold">
          What Thunder Auto Do For You ?
        </h2>
        <div className="space-x-5">
          {/* <Link to="/"> */}
          <button
            onClick={handleClick}
            className="px-4 py-2 text-color1 bg-color3 rounded mt-4"
          >
            Reach Us
          </button>
          {/* </Link> */}
          <Link to={"/quote"}>
            <button className="px-4 py-2 text-color1 bg-color3 rounded mt-4">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselData = [
    "CONTINUOUS SUPPORT FOR EFFECTIVE UTILIZATION",
    "LIFTING SOLUTION MADE EASY",
    "INNOVATIVE IDEAS AND PRODUCTS",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  const data = [
    {
      img: "./images/img1.jpg",
      content: "CONTINUOUS SUPPORT FOR EFFECTIVE UTILIZATION",
    },
    {
      img: "./images/img1.jpg",
      content: "LIFTING SOLUTION MADE EASY",
    },
    {
      img: "./images/img1.jpg",
      content: "INNOVATIVE IDEAS AND PRODUCTS",
    },
  ];
  const product = {
    title: "Thunder ProfiMaster",
    link: "#",
    img: "./Photos/Thunder__14.png",
    data: [
      {
        img: "./Photos/Thunder (68).JPG",
        title: "Car",
      },
      {
        img: "./Photos/Thunder (70).JPG",
        title: "ATV ",
      },
      {
        img: "./Photos/Thunder (68).JPG",
        title: "Bike",
      },
      {
        img: "./Photos/Thunder (71).JPG",
        title: "product1",
      },
      {
        img: "./Photos/Thunder (72).JPG",
        title: "product1",
      },
      {
        img: "./Photos/Thunder (76).JPG",
        title: "product1",
      },
    ],
  };
  const product2 = {
    title: "Thunder ProfiMaster",
    link: "#",
    img: "./Photos/image (2).png",
    data: [
      {
        img: "./images/img1.jpg",
        title: "Car",
      },
      {
        img: "./images/img1.jpg",
        title: "ATV ",
      },
      {
        img: "./images/img1.jpg",
        title: "Bike",
      },
    ],
  };
  return (
    <>
    <SEOComponent
    title="Car Lifting Solutions | Thunder Auto | Efficient and Safe!"
    description="Thunder Auto Offers the Best Mobile Car Lift Designed for Automotive Businesses. Improve Your Workshop Efficiency With Our Best Lifting Solutions" 
/>
      <div className="w-full px-2 md:h-[70vh] relative overflow-hidden">
        <div className="gradient-overlay absolute top-0 left-0 w-full h-full md:h-[70vh] bg-[rgb(0,0,0,.5)] bg-cover z-10"></div>
        <video
          className="w-full"
          src="./Photos/Thunder.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute  duration-300 top-0 left-0 w-full h-full flex items-center text-center justify-center font-bold text-2xl sm:text-5xl text-color1 z-10">
          {carouselData[carouselIndex]}
        </div>
      </div>
      <Service />
      <Why />
      <Who />
      <What />
    </>
  );
};

export default Home;
