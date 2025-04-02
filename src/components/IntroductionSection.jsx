import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const IntroductionSection = forwardRef((_props, ref) => {
  const { AnimatePresence } = motion;

  return (
    <AnimatePresence>
      <section className="intro" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="content-box"
          >
            <h2>Overall Introduction</h2>
            <div className="prose-box">
              <p>
                Car theft is a growing problem in India, with thousands of
                vehicles stolen every year, especially in major cities. Certain
                car brands and models tend to be targeted more often, and thefts
                are usually concentrated in areas with high vehicle density and
                limited security measures. The lack of GPS tracking, CCTV
                surveillance, and effective law enforcement responses all
                contribute to the low recovery rates of stolen vehicles. While
                some cars are found and returned to their owners, many remain
                missing, highlighting serious gaps in security and policing
                efforts. Understanding these patterns is key to improving
                prevention strategies and increasing vehicle recovery rates.
              </p>
              <p>
                We chose this dataset because it provides a detailed breakdown
                of 10,000 car theft cases, including information on car brands,
                theft locations, security measures, and recovery outcomes. To
                analyze and visualize the data, we used Matplotlib, Plotly,
                Folium, D3, and Altair to create interactive charts and maps
                that help identify the most stolen car brands, high-risk
                locations, and factors that impact recovery rates. By exploring
                these trends, we hope to gain insights into what makes certain
                vehicles more vulnerable, how law enforcement responses affect
                recovery, and what measures could help reduce car theft in
                India.
              </p>
              <p>
                Read these articles to learn more about car theft in India:{" "}
                <a
                  href="https://www.cars24.com/article/car-theft-in-india-is-on-rise/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Article 1
                </a>{" | "}
                <a
                  href="https://indianexpress.com/article/cities/chandigarh/vehicles-stolen-2021-chandigarh-police-recover-data-9462579/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Article 2
                </a>{" | "}
                <a
                  href="https://www.jagranjosh.com/general-knowledge/unsafe-cities-car-owners-india-2024-1710500740-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Article 3
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
});

export default IntroductionSection;
