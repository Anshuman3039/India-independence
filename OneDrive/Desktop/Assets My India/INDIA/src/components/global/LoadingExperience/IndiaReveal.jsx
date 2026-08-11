import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function IndiaReveal({ isReducedMotion, onComplete }) {
  useEffect(() => {
    // Reveal completes in about 2.0s, then triggers transition to homepage
    const timer = setTimeout(() => {
      onComplete();
    }, isReducedMotion ? 1000 : 2000);
    return () => clearTimeout(timer);
  }, [onComplete, isReducedMotion]);

  // Framer Motion transition configurations
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: isReducedMotion ? 0.1 : 0.35,
      }
    }
  };

  const itemVariants = {
    initial: { 
      opacity: 0, 
      y: isReducedMotion ? 0 : 15 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: isReducedMotion ? 0.3 : 0.7, 
        ease: [0.25, 0.1, 0.25, 1.0] // smooth easeOut
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col items-center justify-center text-center select-none px-6 max-w-xl mx-auto"
    >
      {/* 1. INDIA Reveal */}
      <motion.h1 
        variants={itemVariants}
        className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-[0.1em] text-charcoal font-normal"
      >
        INDIA
      </motion.h1>

      <div className="h-px w-16 bg-saffron/30 my-6 md:my-8" />

      {/* 2. Subtitles */}
      <div className="space-y-4">
        <motion.p 
          variants={itemVariants}
          className="text-xs md:text-sm tracking-[0.3em] font-sans font-medium text-charcoal/70 uppercase"
        >
          80th Independence Day
        </motion.p>

        <motion.p 
          variants={itemVariants}
          className="text-xs md:text-sm tracking-[0.2em] font-sans text-muted uppercase"
        >
          79 Years of Independence
        </motion.p>
      </div>

      {/* 3. Closing Statement */}
      <motion.div 
        variants={itemVariants}
        className="mt-12 md:mt-16"
      >
        <span className="block text-xs tracking-[0.4em] text-saffron uppercase font-sans font-semibold mb-2">
          Theme
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic tracking-wide text-[#16734A]">
          Infinite Stories
        </h2>
      </motion.div>
    </motion.div>
  );
}
