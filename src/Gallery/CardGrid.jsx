/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Card";

const CardGrid = ({ title, images }) => {
  const [showMore, setShowMore] = useState(false);

  const handleClickLoadMore = () => {
    setShowMore(true);
  };

  const handleClickLoadLess = () => {
    setShowMore(false);
  };

  return (
    <div>
      <h1 className="text-color3 text-4xl sm:text-5xl font-bold font-Mont tracking-tighter mb-8">
        {title}
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {images.slice(0, showMore ? images.length : 6).map((image, index) => (
          <Card key={index} image={image} />
        ))}
        {!showMore && images.length > 6 && (
          <div className="col-span-3 flex items-center justify-end py-4 cursor-pointer">
            <button onClick={handleClickLoadMore} className="mt-8">
              Load More
            </button>
          </div>
        )}
        {showMore && (
          <div className="col-span-3 flex items-center justify-end py-4 cursor-pointer">
            <button onClick={handleClickLoadLess} className="mt-8">
              Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardGrid;
