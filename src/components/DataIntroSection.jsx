import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const DataIntroSection = forwardRef((_props, ref) => {
  const { AnimatePresence } = motion;

  return (
    <AnimatePresence>
      <section className="data-intro" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="content-box"
          >
            <h2>Introduction to Data</h2>
            <div className="prose-box">
              <p>
                We're working with a dataset from{" "}
                <a
                  href="https://www.kaggle.com/datasets/ashaychoudhary/car-theft-data-in-india/data"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kaggle
                </a>{" "}
                that tracks motor vehicle thefts across 10 different Indian
                states in 2023. The dataset consists of 10,000 individual
                records and spans 22 key attributes capturing information
                related to the stolen vehicle, theft circumstances, and recovery
                outcomes. These include car-specific details like brand (e.g.,
                Renault, Tata), model (e.g., Kwid, Nexon), and manufacturing
                year, as well as theft location, time and date of theft, and
                police station jurisdiction. It also includes situational
                factors like whether the vehicle was insured, equipped with GPS,
                or had access to CCTV footage. The binary outcome of recovery
                status (recovered or not) is also recorded.
              </p>
              <p>
                To support effective analysis, categorical features such as
                Car_Brand, Car_Model, Police_Station, and Location_of_Theft are encoded
                as strings. The dataset also includes date fields like
                Theft_Date and Report_Date, which can be used to examine
                reporting delays or seasonal patterns. Our goal is to analyze
                these features to identify trends in car theft patterns, assess
                how security measures like GPS or CCTV influence recovery rates,
                and uncover regional or behavioral patterns in theft and
                recovery across India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
});

export default DataIntroSection;
