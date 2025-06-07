import React from 'react';
import { motion } from 'framer-motion';

export  const FadeInAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial state: invisible and slightly below its final position
      whileInView={{ opacity: 1, y: 0 }} // Animate to: fully visible and in its final position when in view
      viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the item is in view, only once
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition for the animation
      
    >
      {children}
    </motion.div>
  );
};