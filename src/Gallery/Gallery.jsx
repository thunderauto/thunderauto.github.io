// import { useEffect } from "react";
// import CardGrid from "./CardGrid";

// const images = [
//   {
//     src: "/Photos/Thunder__14.png",
//     alt: "Image 2",
//     title: "Thunder Profimaster 3000",
//   },
//   { src: "/Photos/Thunder (10).JPG", alt: "Image 1", title: "Jack Stand" },

//   { src: "/Photos/Thunder (17).JPG", alt: "Image 3", title: "" },
//   { src: "/Photos/Thunder (20).JPG", alt: "Image 4", title: "" },
//   { src: "/Photos/Thunder (23).JPG", alt: "Image 5", title: "" },
//   { src: "/Photos/Thunder (24).JPG", alt: "Image 6", title: "" },
//   { src: "/Photos/Thunder (67).JPG", alt: "Image 7", title: "" },
//   { src: "/Photos/Thunder (68).JPG", alt: "Image 8", title: "" },
//   { src: "/Photos/Thunder (70).JPG", alt: "Image 9", title: "" },
//   { src: "/Photos/Thunder (71).JPG", alt: "Image 10", title: "" },
//   { src: "/Photos/Thunder (72).JPG", alt: "Image 11", title: "" },
//   { src: "/Photos/Thunder (73).JPG", alt: "Image 12", title: "" },
//   { src: "/Photos/Thunder (75).JPG", alt: "Image 13", title: "" },
//   { src: "/Photos/Thunder (76).JPG", alt: "Image 14", title: "" },
// ];

// const Gallery = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="container mx-auto py-8">
//       <CardGrid title={"Image Gallery"} images={images} />
//     </div>
//   );
// };

// export default Gallery;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import SEOComponent from '../(Components)/SEOComponent';

const FAQVideos = [
  "https://www.youtube.com/embed/rWka3UteyYs?si=AIFr9QCei_ssjjDh",
  "https://www.youtube.com/embed/FW0FyepfFUU?si=9oUY8jUYhELGrN1l",
  "https://www.youtube.com/embed/e8JOHPLeJOw?si=7enp7a3ry99duMpM",
  "https://www.youtube.com/embed/r09zLFpQE1k?si=34PNz-jlRyfPzn58",
  "https://www.youtube.com/embed/P-6YRdloPNo?si=VCRv-rWTWW-C0k82",
  "https://www.youtube.com/embed/-b29C146d1Q?si=bhVZ_DZtGUU1T47w",
  "https://www.youtube.com/embed/zsiAiolmy_Y?si=hxwXaoMXXGoo4V70",
  "https://www.youtube.com/embed/jRFWk-1De2o?si=FTQhR-K2nWZraT-5",
  "https://www.youtube.com/embed/ZRMvEavo8Fs?si=PxkD_Mty0lUUjEbi",
];

const CaseStudyVideos = [
  "https://www.youtube.com/embed/nx6qWVfKRM4?si=896BqNy1KyS6padN",
  "https://www.youtube.com/embed/BmZyggO8ciA?si=G2tbgyANKJUkAQ2Q",
  "https://www.youtube.com/embed/c3fWGDDt9VY?si=AnSttdZxayNAcqQt",
  "https://www.youtube.com/embed/75Atkw73cFE?si=N0Sqwq_B80C7w4ac",
  "https://www.youtube.com/embed/4Dxa0vmcfBo?si=wr-OiXmGWcypiyQ_",
];

const VideoPlayer = ({ videoList }) => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
  }, [videoList.length]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? videoList.length - 1 : prevPage - 1
    );
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % videoList.length);
  };

  return (
    <>
     <SEOComponent
    title="FAQ"
    description="Find Common Questions About Thunder Auto Portable Car Lift. Get the Information You Need to Make Informed Decisions. Visit Our FAQ Page!" 
/>
    <div className="w-full md:grid grid-cols-3 relative">
      {videoList.map((video, index) => (
        <div
          key={index}
          className={`w-full  p-4 hover:transform hover:scale-105`}
        >
          <iframe
<<<<<<< HEAD
            className="border-orange-400 border-4 rounded-lg transition-transform duration-300"
=======
            className="border-[#d12e28] border-4 rounded-lg transition-transform duration-300"
>>>>>>> 6b0fd18 (latest version)
            width="100%"
            height="240"
            src={video}
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
    </>
  );
};

const Gallery = () => {
  const [faqOpen, setFaqOpen] = useState(true);
  const [caseStudiesOpen, setCaseStudiesOpen] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const toggleFaq = () => {
    setFaqOpen(!faqOpen);
  };

  const toggleCaseStudies = () => {
    setCaseStudiesOpen(!caseStudiesOpen);
  };

  return (
    <div className="mx-auto py-14 px-20 sm:p-10 sm:mx-6">
      <div
        className="flex items-center"
        onClick={toggleFaq}
        style={{ cursor: "pointer" }}
      >
        <FontAwesomeIcon
          icon={faqOpen ? faChevronDown : faChevronRight}
          size="lg"
          className="pb-4"
        />
        <h1 className="text-4xl font-bold mb-4 ml-2">FAQs</h1>
      </div>
      {faqOpen && (
        <div className="mb-8">
          <VideoPlayer videoList={FAQVideos} />
        </div>
      )}
      <div
        className="flex items-center"
        onClick={toggleCaseStudies}
        style={{ cursor: "pointer" }}
      >
        <FontAwesomeIcon
          icon={caseStudiesOpen ? faChevronDown : faChevronRight}
          size="lg"
          className="pb-4"
        />
        <h1 className="text-4xl font-bold mb-4 ml-2">Case Studies</h1>
      </div>
      {caseStudiesOpen && (
        <div>
          <VideoPlayer videoList={CaseStudyVideos} />
        </div>
      )}
    </div>
  );
};

export default Gallery;
