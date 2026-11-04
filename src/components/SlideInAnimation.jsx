import React from 'react';
import { motion } from 'framer-motion';

export  const SlideInAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Initial state: invisible and slightly below its final position
      whileInView={{ opacity: 1, x: 0 }} // Animate to: fully visible and in its original X position
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the item is in view, only once
      transition={{ duration: 0.8, ease: "easeOut" }} 
    >
      {children}
    </motion.div>
  );
};