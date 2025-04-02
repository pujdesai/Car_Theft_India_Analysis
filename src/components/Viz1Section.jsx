import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Viz1Section = forwardRef((_props, ref) => {
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
              <h2>Visualization 1</h2>
              <h3>
                Interactive Sankey Diagram Illustrating the Flow of Stolen{" "}
                <br></br>
                Vehicles Across Major Brands and Their Subsequent Recovery
                Outcomes
              </h3>
            </div>

            <div className="viz-content">
              <div
                style={{
                  width: "850px",
                  height: "450px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <iframe
                  src="/assets/sankey_diagram.html"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    transform: "scale(1.15)",
                    transformOrigin: "top center",
                  }}
                />
              </div>

              <div className="viz-explanation">
                <p>
                  We designed an interactive Sankey diagram to show how 10,000
                  stolen cars flowed through major brands and their recovery
                  status. Line thickness represents volume, and hovering reveals
                  exact numbers for easy exploration. Red and green colors
                  highlight recovery outcomes, while the left-to-right layout
                  makes it easy to compare patterns across brands.
                </p>

                <h4>Key Insights:</h4>
                <ul>
                  <li>
                    Over two-thirds of stolen vehicles were not recovered,
                    highlighting a significant gap in vehicle recovery efforts
                    across all brands
                  </li>
                  <li>
                    Recovery numbers are similar across brands, with each
                    showing a majority of unrecovered vehicles, suggesting this
                    is a broader issue rather than brand-specific
                  </li>
                  <li>
                    All brands experienced similar theft volumes, suggesting
                    that no single brand was disproportionately targeted in this
                    dataset. This likely reflects their overall popularity and
                    widespread presence, making them equally accessible and
                    appealing targets for theft
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

export default Viz1Section;
