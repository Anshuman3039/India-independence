import React from 'react';
import { motion } from 'framer-motion';
import { peopleAndNature } from '../../data/nature';

export default function NatureAndPeople() {
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

  // Map the local downloaded filenames to the 5 stories
  const imageMap = {
    "rivers": "/images/nature/people-rivers.jpg",
    "coasts": "/images/nature/people-coasts.jpg",
    "forests": "/images/nature/people-forests.jpg",
    "mountains": "/images/nature/people-mountains.jpg",
    "grasslands": "/images/nature/people-grasslands.jpg"
  };

  return (
    <section className="bg-[#F7F4EE] py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#171717]/5 overflow-hidden">
      <div className="flex flex-col space-y-12 md:space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-4 max-w-2xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            HUMAN ECOLOGY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            Nature is not separate from life.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            People live within landscapes, adapt to them, shape them, and depend on them for survival.
          </p>
        </div>

        {/* Asymmetrical grid list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {peopleAndNature.map((item, index) => {
            const isFullWidth = index === 4; // Make the last item span full width for editorial asymmetry
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`flex flex-col space-y-4 text-left group ${
                  isFullWidth ? "md:col-span-2 max-w-3xl" : ""
                }`}
              >
                {/* Photo Frame */}
                <div className={`w-full overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md ${
                  isFullWidth ? "aspect-[21/9]" : "aspect-[16/10]"
                }`}>
                  <img
                    src={imageMap[item.id]}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>

                {/* Details */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-wider block">
                    {item.title}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-[#171717] font-normal group-hover:text-[#E8752A] transition-colors leading-tight">
                    Life in the {item.title}
                  </h3>
                  <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
