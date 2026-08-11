import React from 'react';
import { motion } from 'framer-motion';
import IdentityCarousel from './IdentityCarousel';

export default function IndiaIdentity() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#F7F4EE] py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15% 0px" }}
        className="flex flex-col space-y-12 md:space-y-16"
      >
        {/* Section Header */}
        <motion.div 
          variants={fadeUp}
          className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mx-auto"
        >
          <span className="text-xs md:text-sm font-sans font-semibold text-[#E8752A] uppercase tracking-[0.3em] block">
            WHAT MAKES INDIA, INDIA?
          </span>
          <div className="space-y-3">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#171717] font-normal tracking-tight leading-tight">
              Symbols. Ideas. Identity.
            </h2>
            <p className="text-[#6B6B6B] font-sans text-base md:text-lg leading-relaxed font-light">
              Some are symbols we recognize. Others are ideas we continue to shape.
            </p>
          </div>
        </motion.div>

        {/* Identity Carousel Container */}
        <motion.div 
          variants={fadeUp}
          className="w-full flex justify-center"
        >
          <IdentityCarousel />
        </motion.div>

      </motion.div>
    </section>
  );
}
