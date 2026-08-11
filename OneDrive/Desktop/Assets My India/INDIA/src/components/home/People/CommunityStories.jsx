import React from 'react';
import { motion } from 'framer-motion';
import { communityStories } from '../../../data/peopleStories';
import StoryCard from './StoryCard';

export default function CommunityStories() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="space-y-12 md:space-y-16 py-12 border-t border-[#171717]/5 text-left">
      
      {/* Subsection Headers */}
      <div className="space-y-3 max-w-xl">
        <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
          COMMUNITIES
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal leading-tight">
          Many traditions. Many ways of belonging.
        </h3>
      </div>

      {/* Stories Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        {communityStories.map((story, index) => (
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
