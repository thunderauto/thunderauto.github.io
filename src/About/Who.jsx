
const Who = () => {
  const details = [
    'Welcome to Thunder Auto LLP, your premier destination for cutting-edge "Vehicle Lifting Solutions Made Easy." With a pioneering partnership with a renowned German entity, we are proud to redefine vehicle lifting standards in India.',
    'At Thunder Auto LLP, innovation is ingrained in our DNA. Formerly recognised as "Thunder Horn," a leading name in introducing car air horns to the Indian market, we now embark on a new journey with an innovative car lifting concept - a first of its kind in India.',
    // "Our esteemed partner, IME-AUTOLIFT, boasts a rich legacy in Germany, spanning over 30 years. Renowned for manufacturing top-of-the-line car lifts, truck lifts, and train lifts, IME-Auto lift has revolutionised the automotive lifting industry. With headquarters in Salzburg, Austria, and manufacturing facilities in Germany and Hungary, IME-Auto lift has garnered widespread acclaim, having sold over 10,000 machines across Europe since its inception in 2004.",
    "Now, Thunder Auto LLP, in collaboration with Auto-lift GmbH and Sundar Enterprises, is proud to bring this legacy of excellence to India. Leveraging our joint expertise, we manufacture these state-of-the-art machines locally, ensuring the highest quality standards while importing critical components directly from Germany.Join us in our mission to elevate automotive lifting solutions in India with Thunder Auto LLP.",
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 lg:py-20">
      <h1 className="text-2xl tracking-tighter text-[#2d5f98] sm:text-3xl font-Mont mb-6 sm:mb-8 font-semibold">
        Who We Are?
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {details.map((item, index) => (
          <div key={index} className="max-w-xl sm:space-y-2">
            <p className="text-justify mb-4">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Who;
