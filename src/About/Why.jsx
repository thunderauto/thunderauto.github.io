import { HoverEffect } from "@/(Components)/HoverEffect";

const Why = () => {
  const features = [
    {
      title: "Portability",
      description:
        "A very compact design and the total weight of the machine doesn't exceed 85kg.",
    },
    {
      title: "Mobility",
      description:
        "Current practice allows positioning of vehicle to lift whereas our Thunder Profimaster provides a solution to position the lift accordingly to vehicle.",
    },
    {
      title: "One Man Operable",
      description:
        "Designed to be a one-man operational tool which limits the available human workforce.",
    },
    {
      title: "Space Conscious",
      description:
        "Requires very limited space to operate when compared to the currently practiced tools and is easy to relocate.",
    },
    {
      title: "Plug & Play",
      description:
        "No commissioning or installation is required; just plug and use the device once out of the box.",
    },
    {
      title: "No Maintenance",
      description:
        "Designed in a way that the overall machine eliminates maintenance when compared to current industry-practiced tools like oil maintenance or frequent spare replacements.",
    },
    {
      title: "Ease of Handling",
      description:
        "As a simple concept, our lifting solution to the passenger vehicles segment is made easy.",
    },
    {
      title: "Increased TAT (Turn Around Time)",
      description:
        "Our lift acts as the best automation tool, which increases bay productivity by 20 to 30 percent.",
    },
  ];

  return (
    <div className="text-center text-color3 bg-zinc-50 p-10 rounded-lg sm:px-20">
      <h1 className=" w-full text-xl text-center text-orange-400 tracking-tighter sm:text-3xl mb-6 sm:mb-8 font-semibold font-Mont">
        Lifting Made Easy
      </h1>
      <p className="font-medium font-Mont text-2xl px-4 text-center">
        Supercharge your workspace with the combined power of Indian and German
        Technology
      </p>
      <HoverEffect items={features} />
    </div>
  );
};

export default Why;
