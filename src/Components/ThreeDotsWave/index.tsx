import React from 'react';
import { motion } from 'framer-motion';

const ThreeDotsWave: React.FC = () => {
  const dotVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  };

  return (
    <div style={{ display: 'flex' }}>
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          style={{
            width: '8px',
            height: '8px',
            margin: '0 2px',
            backgroundColor: 'black',
            borderRadius: '50%'
          }}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.5,
            yoyo: Infinity, // Key property for infinite looping
            ease: "easeInOut",
            delay: index * 0.2  // Staggered delay for a smooth effect
          }}
        />
      ))}
    </div>
  );
};

export default ThreeDotsWave;
