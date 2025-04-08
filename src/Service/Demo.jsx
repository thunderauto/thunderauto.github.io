import Input from "@/(Components)/Input";

const Demo = () => {
  return (
    <div className="max-w-xl w-full bg-gray-200 p-10 rounded-l-lg">
      <h1 className="text-color3 font-bold font-Mont mb-6 sm:mb-8 text-4xl">
        Request Demo
      </h1>
      <div className="w-full  grid-cols-2 grid gap-5">
        <Input type={"text"} placeholder={"Name"} />
        <Input type={"email"} placeholder={"Email"} />
        <Input type={"number"} placeholder={"Mobile Number"} />
        <Input type={"text"} placeholder={"City / Town"} />
        <textarea
          className="col-span-2 p-5 rounded"
          placeholder="Address"
        ></textarea>
        <textarea
          className="col-span-2 p-5 rounded"
          placeholder="Comment"
        ></textarea>
      </div>

      <h1 className="text-color4 font-Mont my-6 sm:my-8  text-4xl font-bold">
        Product
      </h1>
      <div className="grid grid-cols-2 text-color3 gap-5">
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
      <button className="px-4 py-2 bg-color4 text-color1 rounded-lg mt-10">Submit</button>
    </div>
  );
};

export default Demo;
