import React from 'react';
import { motion } from 'framer-motion';
import { art } from '../../data/culture';

export default function Art() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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
        <div className="text-left space-y-3 max-w-xl">
          <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
            VISUAL TRADITIONS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            India creates.
          </h2>
        </div>

        {/* Asymmetrical Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {art.map((item) => {
            return (
              <motion.div 
                key={item.id} 
                variants={itemVariants}
                className="flex flex-col space-y-4 group text-left"
              >
                {/* Image Frame */}
                <div className="w-full aspect-[4/3] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
                  <img
                    src={item.image}
                    alt={`${item.title} — Region: ${item.region}`}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>

                {/* Info Text */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-[0.2em] block">
                    {item.region}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-[#171717] font-normal group-hover:text-[#E8752A] transition-colors leading-tight">
                    {item.title}
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
