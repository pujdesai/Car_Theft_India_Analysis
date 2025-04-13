import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Viz4Section = forwardRef((_props, ref) => {
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
              <h2>Visualization 4</h2>
              <h3>
                Interactive Linechart Analyzing Daily <br></br>Theft Trends with
                a 30-Day Rolling Average to Reveal Patterns
              </h3>
            </div>

            <div className="viz-content">
              <div
                style={{
                  width: "825px",
                  height: "425px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <iframe
                  src="/assets/linechart.html"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </div>

              <div className="viz-explanation">
                <p>
                  For this visualization, we used a line chart to show daily car
                  thefts in 2023, along with a 30-day rolling average to
                  highlight overall trends. The yellow line captures daily
                  fluctuations, while the red line smooths things out for a
                  clearer big-picture view. This combo lets you see both
                  short-term spikes and long-term patterns. The colors make it
                  easy to focus on the trendline without losing sight of the raw
                  data, and the full-year timeline helps spot seasonal changes
                  in theft activity. You are able to zoom in and out of specific
                  date ranges to see a clearer picture of the analysis.
                </p>

                <h4>Key Insights:</h4>
                <ul>
                  <li>
                    There’s a noticeable peak in theft activity from mid-May to
                    early June, as shown by the rolling average hitting its
                    highest point
                  </li>
                  <li>
                    From mid-June through July, the average theft rate shows a
                    steady decline, indicating a shift in trend during the
                    summer
                  </li>
                  <li>
                    There’s a second smaller rise in thefts (following the
                    decline from mid-June through July) during late August to
                    mid-September, suggesting a possible secondary spike later
                    in the year
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

export default Viz4Section;
