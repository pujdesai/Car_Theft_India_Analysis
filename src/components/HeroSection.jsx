import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ scrollToNext }) => {
  const { AnimatePresence } = motion;

  return (
    <AnimatePresence>
      <section className="hero">
        <div className="overlay"></div>
        <div className="background-image"></div>
        <div className="content">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="title"
          >
            Car Theft in India
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="subtitle"
          >
            Analyzing and Visualizing Theft Patterns, Recovery Outcomes, and Contributing Factors
          </motion.p>
        </div>
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="scroll-indicator"
          onClick={scrollToNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default HeroSection;
