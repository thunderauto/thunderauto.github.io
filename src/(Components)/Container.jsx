import { cn } from "@/lib/utils";

/* eslint-disable react/prop-types */
const Container = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        "max-w-7xl mx-auto w-full min-h-screen flex flex-col justify-center items-center font-Poppins ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
