import React from 'react';
import { motion } from 'framer-motion';

export default function IdentitySlide({ imageSrc, altText, _isPlaying, prefersReducedMotion }) {
  // Editorial motion scale/fade variant
  const imageVariants = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.2 } }
      }
    : {
        initial: { opacity: 0, scale: 1.01 },
        animate: { 
          opacity: 1, 
          scale: 1, 
          transition: { duration: 0.9, ease: "easeOut" } 
        },
        exit: { 
          opacity: 0, 
          scale: 0.99, 
          transition: { duration: 0.6, ease: "easeIn" } 
        }
      };

  return (
    <div className="w-full max-w-[72vw] aspect-[4/3] md:h-[65vh] md:aspect-none relative overflow-hidden bg-[#171717]/5 border border-charcoal/5 shadow-xl select-none">
      <motion.img
        src={imageSrc}
        alt={altText}
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Subtle border highlight */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none" />
    </div>
  );
}
