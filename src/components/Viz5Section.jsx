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
              <h3>
                Static Heatmap Showing Theft Frequency by Car Type and Time of
                Day
              </h3>
            </div>

            <div className="viz-content">
              <div className="viz-image-container">
                <img
                  src="/assets/heatmap.png"
                  alt="viz 5"
                  className="viz-image"
                />
              </div>

              <div className="viz-explanation">
                <p>
                  For this visualization, we used a heatmap to show how car
                  thefts in India vary by car type and time of day. Each square
                  represents a unique combination, with darker red shades
                  indicating higher theft counts. This layout makes it easy to
                  spot which types of cars are targeted most often and when. You
                  can quickly see that certain vehicles are more vulnerable
                  during evenings and nights. The use of a red-to-white color
                  scale draws attention to the most frequent theft windows
                  without overwhelming less active ones, helping to surface
                  subtle but important patterns in theft behavior.
                </p>

                <h4>Key Insights:</h4>
                <ul>
                  <li>
                    Pickup trucks and sedans are the most frequently stolen
                    vehicle types overall, showing darker intensity in multiple
                    time periods
                  </li>
                  <li>
                    Convertibles show lower theft rates across all time periods,
                    potentially due to their niche ownership or security
                    features
                  </li>
                  <li>
                    Mornings are consistently the lowest-risk window, with all
                    car types showing lighter shades, indicating fewer reported
                    thefts
                  </li>
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
