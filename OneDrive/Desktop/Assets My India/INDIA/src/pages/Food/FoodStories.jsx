import React from 'react';
import { motion } from 'framer-motion';
import { stories } from '../../data/food';

export default function FoodStories() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="flex flex-col space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-2xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            HISTORICAL CHRONICLES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            The stories behind what we eat.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            Tracing the ecological, historical, and commercial threads that connect ingredients to the subcontinent's kitchens.
          </p>
        </div>

        {/* Stories list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left"
        >
          {stories.map((story) => (
            <motion.div
              key={story.id}
              variants={itemVariants}
              className="space-y-3 pt-6 border-t border-[#171717]/10"
            >
              <h3 className="font-serif text-lg md:text-xl text-[#171717] font-normal leading-snug">
                {story.title}
              </h3>
              <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                {story.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
