import React, { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Viz3Section = forwardRef((_props, ref) => {
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
              <h2>Visualization 3</h2>
              <h3>
                Interactive Barchart with Radio Buttons Evaluating the <br></br>
                Role of Recovery Aids in Successful Car Recoveries
              </h3>
            </div>

            <div className="viz-content">
              {isShortScreen ? (
                <button
                  className="explore-button"
                  onClick={() =>
                    window.open(
                      "/assets/barchart.html",
                      "_blank"
                    )
                  }
                >
                  Click here to view visualization
                </button>
              ) : (
                <div
                  style={{
                    width: "850px",
                    height: "415px",
                    overflow: "hidden",
                    position: "relative",
                    background: "white",
                  }}
                >
                  <div
                    style={{
                      width: "850px",
                      height: "415px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <iframe
                      src="/assets/barchart.html"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="viz-explanation">
                <p>
                  We designed this visualization to explore how different
                  recovery aids might influence whether a stolen car gets
                  recovered. The bars show the percentage of recovered cars that
                  did or didn’t have the selected aid, giving a quick visual
                  comparison. To make it interactive, we added radio buttons so
                  users can easily switch between aids like GPS Installed,
                  Suspect Identification, and CCTV Availability. We also
                  included hover functionality so when you move your mouse over
                  a bar, it shows the exact percentage, giving more precise
                  insight.
                </p>

                <h4>Key Insights:</h4>
                <ul>
                  <li>
                    A large majority of recovered cars did not have suspect
                    identified, which is surprising and suggests that other
                    factors played a bigger role in recovery
                  </li>
                  <li>
                    CCTV Availability was the most common recovery aid present
                    amongst recovered cars, indicating that it is very important
                    in vehicle recovery
                  </li>
                  <li>
                    For each recovery aid, a higher percentage of recovered cars
                    did not have the aid present. This suggests that other
                    factors, possibly ones not captured in this dataset, may be
                    contributing to successful recoveries
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

export default Viz3Section;
