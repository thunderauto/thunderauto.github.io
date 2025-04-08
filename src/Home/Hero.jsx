/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const Hero = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  return (
    <motion.div className={className} ref={scope}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className="font-Mont text-2xl sm:text-3xl lg:text-4xl font-bold  text-color1 opacity-0"
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
