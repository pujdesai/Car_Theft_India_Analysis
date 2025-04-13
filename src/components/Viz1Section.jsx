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
                Interactive Choropleth Map Showing the <br></br> Geographic
                Distribution of Car Thefts and Recovery Outcomes Across 10
                Indian States
              </h3>
            </div>

            <div className="viz-content">
              <div
                style={{
                  width: "800px",
                  height: "450px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <iframe
                  src="/assets/choropleth.html"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    left: "0px",
                    backgroundColor: "white",
                    border: "1px solid grey",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "50px",
                  }}
                >
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: "gray",
                      marginRight: "10px",
                      opacity: 0.7,
                      border: "1px solid black",
                    }}
                  ></div>
                  <p style={{ fontSize: "10px", color: "black" }}>
                    Missing Data
                  </p>
                </div>
              </div>

              <div className="viz-explanation">
                <p>
                  We designed this interactive choropleth map to show car theft
                  volumes and recovery rates across Indian states. Darker blue
                  shades indicate higher thefts, while hovering reveals exact
                  values for each state. Missing data is shown in gray with a
                  labeled legend for clarity. The design makes it easy to spot
                  regional patterns while keeping the map clean and informative.
                </p>

                <h4>Key Insights:</h4>
                <ul>
                  <li>
                    States like Gujarat, Maharashtra, and Rajasthan had some of
                    the highest theft volumes, as shown by the darkest blue
                    shades
                  </li>
                  <li>
                    Recovery rates remained relatively low and consistent across
                    states, suggesting a widespread challenge in recovering
                    stolen vehicles
                  </li>
                  <li>
                    Several states have missing data, which limits complete
                    analysis and highlights the need for more comprehensive
                    reporting across regions
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