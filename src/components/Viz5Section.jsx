import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Viz5Section = forwardRef((_props, ref) => {
  const { AnimatePresence } = motion;

  return (
    <AnimatePresence>
      <section className="viz-section" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="viz-header">
              <h2>Visualization 5</h2>
              <h3>Static Heatmap Showing Theft Frequency by Car Type and Time of Day</h3>
            </div>

            <div className="viz-content">
              <div className="viz-image-container">
                <img
                  src="/api/placeholder/800/450"
                  alt="viz 5"
                  className="viz-image"
                />
              </div>

              <div className="viz-explanation">
                <p>
                  We will make this visualization using D3
                </p>

                <h4>Key Insights:</h4>
                <ul>
                  <li>Coming soon!</li>
                  <li>Coming soon!</li>
                  <li>Coming soon!</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
});

export default Viz5Section;
