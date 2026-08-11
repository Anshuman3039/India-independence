import React from 'react';
import { motion } from 'framer-motion';

export default function StoryCard({ story, index }) {
  // Fade-up animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 }
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      className="flex flex-col space-y-4 text-left group"
    >
      {/* 1. Large Visual Container */}
      <div className="w-full aspect-[4/3] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
        <img
          src={story.image}
          alt={`${story.location} — ${story.title}: ${story.description}`}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Highlight inner border overlay */}
        <div className="absolute inset-0 border border-white/5 pointer-events-none" />
      </div>

      {/* 2. Metadata Captions */}
      <div className="space-y-1">
        <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
          {story.location}
        </span>
        <h4 className="font-serif text-lg md:text-xl text-[#171717] font-normal leading-tight group-hover:text-[#E8752A] transition-colors">
          {story.title}
        </h4>
        <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
          {story.description}
        </p>
      </div>

    </motion.div>
  );
}
