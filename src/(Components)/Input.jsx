/* eslint-disable react/prop-types */

const Input = ({ type, id, ...props }) => {
  return <input className="bg-color1 border-color3/30  placeholder:text-color3 border px-2 py-1 rounded text-orange-400" type={type} id={id} {...props} />;
};

export default Input;
