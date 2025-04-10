import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const VizHero = forwardRef(({ scrollToNext }, ref) => {
  const { AnimatePresence } = motion;

  return (
    <AnimatePresence>
      <section className="viz-hero" ref={ref}>
        <div className="overlay"></div>
        <div className="background-image"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="content-box"
          >
            <h2>Data Visualizations</h2>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="explore-button"
              onClick={scrollToNext}
            >
              Start Exploring
            </motion.button>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
});

export default VizHero;
