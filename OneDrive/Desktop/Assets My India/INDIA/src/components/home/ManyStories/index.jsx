import React from 'react';
import { motion } from 'framer-motion';
import StorySlideshow from './StorySlideshow';

export default function ManyStories() {
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
            MANY PLACES. MANY STORIES.
          </span>
          <div className="space-y-3">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#171717] font-normal tracking-tight leading-tight">
              A Photographic Journey
            </h2>
            <p className="text-[#6B6B6B] font-sans text-base md:text-lg leading-relaxed font-light">
              A changing collection of photographs from across India.
            </p>
          </div>
        </motion.div>

        {/* Story Image Slideshow Container */}
        <motion.div 
          variants={fadeUp}
          className="w-full flex justify-center"
        >
          <StorySlideshow />
        </motion.div>

      </motion.div>
    </section>
  );
}
