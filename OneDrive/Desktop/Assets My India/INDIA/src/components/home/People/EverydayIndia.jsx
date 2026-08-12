import React from 'react';
import { motion } from 'framer-motion';
import { everydayLifeStories } from '../../../data/peopleStories';
import StoryCard from './StoryCard';

export default function EverydayIndia() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="space-y-12 md:space-y-16 pt-12 pb-0 border-t border-[#171717]/5 text-left">
      
      {/* Subsection Headers */}
      <div className="space-y-3 max-w-xl">
        <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
          EVERYDAY LIFE
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal leading-tight">
          India beyond monuments.
        </h3>
      </div>

      {/* Stories Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {everydayLifeStories.map((story, index) => (
          <StoryCard 
            key={story.id} 
            story={story} 
            index={index} 
          />
        ))}
      </motion.div>

    </div>
  );
}
