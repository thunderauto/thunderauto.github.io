import { useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */
const Ingots = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full ">
      <div className="max-w-7xl flex justify-between gap-20 items-center mx-auto py-10">
        <img src="./Photos/image (2).png" className="rounded" alt="" />
        <div className="flex flex-col gap-5 text-justify">
          <p className="font-bold">
            Thunder Auto LLP: Your Premier Aluminium Recycling Partner
          </p>
          <p>
            <span className="font-semibold">
              Thriving in Coimbatore's Foundry Hub :{" "}
            </span>
            <br />
            Situated in the heart of Coimbatore, our recycling plant benefits
            from the city's rich heritage as a center for foundries and
            metalworking industries. Leveraging on this strategic location, we
            efficiently collect and recycle aluminium scrap, contributing to the
            vibrant ecosystem of sustainable manufacturing in Coimbatore.
          </p>
          <p>
            <span className="font-semibold">
              Comprehensive Recycling Solutions - Transforming Scrap into Ingots
              :
              <br />
            </span>
            At our Coimbatore facility, we specialize in recycling various types
            of aluminium scrap, including automotive parts, castings and
            machining residues. Through our advanced processes, we meticulously
            sort, clean, and melt these diverse aluminium scraps, transforming
            them into high-quality ingots. Our commitment to precision and
            quality ensures that each ingot produced meets rigorous industry
            standards. Whether it's automotive parts or Machining scrap, we
            repurpose aluminium scrap into valuable ingots ready for reuse in
            numerous applications.
          </p>
          <p>
            <span className="font-semibold">Diverse Range of Alloys: </span>
            <br />
            We pride ourselves on producing a diverse range of aluminium alloys
            tailored to meet the specific needs of our clients. From common
            alloys like LM6 and ADC12 to specialized blends for aerospace and
            automotive industries, our skilled team ensures precise alloy
            composition and exceptional quality in every batch. Whether it's
            high-strength alloys for structural applications or
            corrosion-resistant alloys for marine environments, we are equipped
            to deliver alloys that excel in performance and durability. Partner
            with us to access a comprehensive range of aluminium alloys crafted
            to elevate your projects and products to new heights of excellence.
          </p>
        </div>
      </div>
      <p className="font-medium max-w-7xl mx-auto text-lg text-center">
        Join us in our mission to close the loop on aluminium recycling and
        promote a sustainable future.
      </p>
    </div>
  );
};

export default Ingots;
