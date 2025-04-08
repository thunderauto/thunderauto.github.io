/* eslint-disable react/prop-types */
import Input from "@/(Components)/Input";
import { useForm, ValidationError } from "@formspree/react";
import { toast} from "react-toastify";

const Quote = ({ disable = true }) => {
  const [state, handleSubmit] = useForm("xjvnedoj");

  if (state.succeeded) {
    toast("Thank you for your submission!");
  }
  return (
    <div className="max-w-xl  w-full bg-[#eeeeee] p-10 rounded-xl">
      <h1 className="text-color3 font-Mont font-bold mb-6 sm:mb-8 text-4xl">
        Request Quote
      </h1>
      <form
        className="w-full text-[#eeeeee] grid-cols-2 grid gap-5"
        onSubmit={handleSubmit}
      >
        <Input
          type={"text"}
          className="placeholder:text-gray-400 border-0 text-orange-400"
          placeholder={"First Name"}
          name="firstName"
        />
        <ValidationError
          prefix="First Name"
          field="firstName"
          errors={state.errors}
        />
        <Input
          type={"text"}
          className="placeholder:text-gray-400 border-0 text-orange-400"
          placeholder={"Last Name"}
          name="lastName"
        />
        <ValidationError
          prefix="Last Name"
          field="lastName"
          errors={state.errors}
        />
        <Input
          type={"text"}
          className="placeholder:text-gray-400 border-0 col-span-2 text-orange-400"
          placeholder={"Company Name"}
          name="companyName"
        />
        <ValidationError
          prefix="Company Name"
          field="companyName"
          errors={state.errors}
        />
        <Input
          type={"email"}
          className="placeholder:text-gray-400 border-0 col-span-2 text-orange-400"
          placeholder={"Email Address"}
          name="email"
        />
        <ValidationError
          prefix="Email Address"
          field="email"
          errors={state.errors}
        />
        <Input
          type={"text"}
          className="placeholder:text-gray-400 border-0 col-span-2 text-orange-400"
          placeholder={"Phone Number"}
          name="phoneNumber"
        />
        <ValidationError
          prefix="Phone Number"
          field="phoneNumber"
          errors={state.errors}
        />
        <Input
          type={"text"}
          className="placeholder:text-gray-400 border-0 col-span-2 text-orange-400"
          placeholder={"GSTIN"}
          name="gstin"
        />
        <ValidationError prefix="GSTIN" field="gstin" errors={state.errors} />
        <Input
          type={"text"}
          className="placeholder:text-gray-400 border-0 col-span-2 text-orange-400"
          placeholder={"City / Town"}
          name="cityTown"
        />
        <ValidationError
          prefix="City / Town"
          field="cityTown"
          errors={state.errors}
        />
        <textarea
          className="col-span-2 p-5 rounded border-0 text-orange-400"
          placeholder="Address"
          name="address"
        ></textarea>
        <ValidationError
          prefix="Address"
          field="address"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="px-4 py-2 bg-color4 text-color1 rounded-lg mt-10 hover:bg-orange-400"
        >
          Get a Quote
        </button>
      </form>

      {disable ? (
        <>
          <h1 className="text-color4  my-6 sm:my-8 font-Mont text-4xl font-bold">
            Product
          </h1>
          <div className="grid grid-cols-2 text-sm text-[#eeeeee] gap-5">
            {[
              "Thunder profitmaster 3000",
              "Transport Dolly",
              "Wheel Aligner",
              "Strut Spring Compressor",
            ].map((item, index) => (
              <div key={index}>
                <input type="checkbox" />
                <span className="ml-2">{item}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}

      {/* <button className="px-4 py-2 bg-color4 text-color1 rounded-lg mt-10 hover:bg-orange-400">
        Get a Quote
      </button> */}
    </div>
  );
};

export default Quote;
