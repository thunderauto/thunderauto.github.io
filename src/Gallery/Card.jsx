/* eslint-disable react/prop-types */
import { useState } from "react";

/* eslint-disable no-undef */
const Card = ({ image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="object-cover w-full h-full"
      />
      {isExpanded && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
          <img
            src={image.src}
            alt={image.alt}
            className="object-contain max-h-full"
          />
          <button
            className="absolute top-0 right-0 m-4 text-white text-xl"
            onClick={handleClick}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
