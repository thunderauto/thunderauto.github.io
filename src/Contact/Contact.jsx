import Container from "@/(Components)/Container";
import Input from "@/(Components)/Input";
import { useEffect } from "react";

const Contact = () => {
  const details = {
    officeAddress: {
      street: "441-A, Bharathiyar Road",
      area: "Pappanaicken Palayam",
      city: "Coimbatore",
      pincode: "641 037",
      phoneNumbers: ["+91 422 - 4387889", "+91 80981 01055"],
      email: "sales@thunderauto.in",
    },
    officeHours: {
      days: "Monday to Friday",
      timing: "9:30 AM - 4:30 PM",
    },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-4 sm:px-6 w-full gap-10">
        <div className="animate-fade-left animate-duration-500 border-opacity-50 antialiased mt-10 sm:mt-20 lg:mt-0 flex items-center  flex-col text-color4 font-Mont  ">
          <div className="bg-gradient-to-r from-color2  to-orange-400 text-color1 rounded pt-5 text-center w-full">
            <h1 className="text-color3 text-4xl sm:text-4xl font-bold font-Mont tracking-tighter mb-8">
              Contact Info
            </h1>
          </div>

          <div className="grid grid-cols-1 p-10 rounded bg-gray-100 text-color3 sm:grid-cols-2 gap-8 mt-5">
            <div>
              <h2 className="text-color4 font-semibold text-xl mb-4">
                Office Address
              </h2>
              <p className="mb-1">
                {details.officeAddress.street}, {details.officeAddress.area}
              </p>
              <p className="mb-1">
                {details.officeAddress.city}, {details.officeAddress.pincode}
              </p>
            </div>
            <div>
              <h2 className="text-color4 font-semibold text-xl mb-4">
                Office Hours
              </h2>
              <p className="mb-1">{details.officeHours.days}</p>
              <p className="mb-1">{details.officeHours.timing}</p>
            </div>
            <div>
              <h2 className="text-color4 font-semibold text-xl mb-4">
                Contact
              </h2>
              <p className="mb-1">
                {details.officeAddress.phoneNumbers.join(", ")}
              </p>
              <p className="mb-1">{details.officeAddress.email}</p>
            </div>
          </div>
        </div>
        <form className="animate-fade-right bg-gray-100 p-10 rounded duration-200 grid grid-cols-2 gap-5 text-color4 font-Mont ">
          <h1 className="text-color3 col-span-2 text-center mb-6 sm:mb-8 text-4xl sm:text-4xl font-bold font-Mont tracking-tighter">
            Contact Us
          </h1>{" "}
          <Input type={"text"} placeholder={"Name"} />
          <Input type={"email"} placeholder={"Email"} />
          <Input type={"tel"} placeholder={"Mobile"} />
          <Input type={"text"} placeholder={"City"} />
          <textarea
            placeholder="Comment"
            className="col-span-2 border-color3/30 p-2 bg-transparent border rounded "
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="mx-auto col-span-2 px-6 py-3 rounded-lg bg-color3 text-white font-semibold hover:bg-opacity-80 transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
