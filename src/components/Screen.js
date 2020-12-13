import * as React from "react";
import { motion } from "framer-motion";

const transition = {
  duration: 0.3,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const backVariants = {
  initial: {x: 100, opacity: 0, transition},
  exit: { x: -100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition }
};

const Screen = ({ children, className }) => (
  <motion.div
    className={className}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    <motion.div variants={backVariants}>
      {children}
    </motion.div>
  </motion.div>
)

export default Screen
