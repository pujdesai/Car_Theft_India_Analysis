import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const SummarySection = forwardRef((_props, ref) => {
  const { AnimatePresence } = motion;

  return (
    <AnimatePresence>
      <section className="summary" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="content-box"
          >
            <h2>Summary</h2>
            <div className="prose-box">
              <p>
                Our analysis showed that car thefts were fairly evenly spread
                across brands and states like Gujarat, Maharashtra, and
                Rajasthan saw the highest theft volumes. Recovery rates stayed
                low across states and brands, even when aids like CCTV were
                present, suggesting other factors at play. Theft activity spiked
                in late spring and early fall, dipped in summer, and peaked at
                night for sedans and pickups, while mornings and convertibles
                saw fewer incidents.
              </p>
              <p>
                With detailed features like theft timing, GPS installation, CCTV
                availability, location, and previous theft history already
                present in the dataset, future work could focus on combining
                these factors to uncover deeper patterns. Applying statistical
                analysis or machine learning models could help predict recovery
                likelihood or identify high-risk scenarios. Further improvement
                in data completeness across all regions, especially for
                currently missing states, would enhance the quality and accuracy
                of future insights.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="takeaways-box"
              >
                <h3>Key Takeaways</h3>
                <ul className="takeaways-list">
                  <li>
                    <span className="checkmark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>
                      Visual tools like line charts and heatmaps help simplify
                      large datasets and make patterns more obvious
                    </span>
                  </li>
                  <li>
                    <span className="checkmark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>
                      Interactivity (like hover info and radio buttons) makes it
                      easier to explore specific questions without overwhelming
                      the viewer
                    </span>
                  </li>
                  <li>
                    <span className="checkmark">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>
                      Combining raw data (like daily thefts) with calculated
                      trends (like rolling averages) provides both detailed and
                      big-picture understanding
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <footer className="footer">
              <p>
                © {new Date().getFullYear()} Car Theft in India Analysis | All
                Rights Reserved | Cathreen Paul, Pujan Desai, Pujita
                Kalinadhabhotla
              </p>
            </footer>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
});

export default SummarySection;
