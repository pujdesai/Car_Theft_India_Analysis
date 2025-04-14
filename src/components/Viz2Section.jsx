import React, { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Viz2Section = forwardRef((_props, ref) => {
  const { AnimatePresence } = motion;

  const [isShortScreen, setIsShortScreen] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      setIsShortScreen(window.innerHeight < 711);
    };

    checkHeight();
    window.addEventListener("resize", checkHeight);
    return () => window.removeEventListener("resize", checkHeight);
  }, []);

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
              <h2>Visualization 2</h2>
              <h3>
                Interactive Stacked Bar Chart Illustrating the Distribution of{" "}
                <br></br>
                Vehicle Thefts Across Major Car Brands and Their Subsequent
                Recovery Outcomes
              </h3>
            </div>

            <div className="viz-content">
              {isShortScreen ? (
                <button
                  className="explore-button"
                  onClick={() =>
                    window.open("/assets/stacked_barplot_diagram.html", "_blank")
                  }
                >
                  Click here to view visualization
                </button>
              ) : (
                <div
                  style={{
                    width: "800px",
                    height: "425px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <iframe
                    src="/assets/stacked_barplot_diagram.html"
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </div>
              )}

              <div className="viz-explanation">
                <p>
                  We created an interactive stacked bar chart to visualize the
                  distribution of car thefts and recovery rates across major
                  automobile brands. Each bar represents the total number of
                  stolen vehicles per brand, broken down into recovered (green)
                  and not recovered (red) segments. Hovering over a segment
                  reveals the exact count and percentage, allowing users to
                  explore detailed recovery statistics brand by brand.
                </p>

                <h4>Key Insights:</h4>
                <ul>
                  <li>
                    Across all brands, more than two-thirds of stolen vehicles
                    were not recovered, underscoring a widespread gap in
                    effective vehicle recovery efforts
                  </li>
                  <li>
                    Recovery percentages are relatively consistent, ranging from
                    ~28% to ~33% across brands, reinforcing the idea that low
                    recovery rates are an industry-wide issue rather than a
                    problem specific to one manufacturer
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

export default Viz2Section;
