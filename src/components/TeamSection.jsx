import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const TeamSection = forwardRef((_props, ref) => {
  const { AnimatePresence } = motion;
  
  const teamMembers = [
    { name: "Cathreen Paul", src: '/assets/cathreen.jpg'},
    { name: "Pujan Desai", src: '/assets/pujan.png'},
    { name: "Pujita Kalinadhabhotla", src: '/assets/pujita.jpg'}
  ];
  
  return (
    <AnimatePresence>
      <section className="team" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Our Group</h2>
          </motion.div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="team-member"
              >
                <motion.div whileHover={{ y: -10 }} className="member-card">
                  <div className="member-image">
                    <img
                      src={`${member.src}`}
                      alt={`${member.name}`}
                    />
                  </div>
                  <h3>{member.name}</h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
});

export default TeamSection;