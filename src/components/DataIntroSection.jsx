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
                We're working with a dataset from <a 
                  href="https://www.kaggle.com/datasets/ashaychoudhary/car-theft-data-in-india/data" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >Kaggle</a> that tracks motor
                vehicle thefts across 10 different Indian states in 2023. It includes
                10,000 records with details on 22 key attributes, like the car
                brand, model, manufacturing year, theft location, time of theft,
                police station jurisdiction, and insurance status. It also notes
                whether the car had GPS or CCTV and if it was eventually
                recovered. By analyzing these factors, we're hoping to spot
                trends in theft patterns, see how security measures impact
                recovery rates, and get a better understanding of what
                influences car theft in India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </AnimatePresence>
  );
});

export default DataIntroSection;