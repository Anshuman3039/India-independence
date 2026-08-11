import React from 'react';
import { motion } from 'framer-motion';
import { festivals } from '../../data/culture';

export default function Festivals() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
          <div className="space-y-2">
            <span className="text-xs font-sans font-bold text-[#E8752A] uppercase tracking-[0.25em]">
              CELEBRATIONS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
              India celebrates in countless ways.
            </h2>
          </div>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            India does not celebrate in one single way. Festivals vary by region, history, community and season.
          </p>
        </div>

        {/* Editorial layout with varied card shapes & sizes */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-start"
        >
          {festivals.map((fest, index) => {
            // Apply varied column spans and heights to break the SaaS grid rhythm
            const layoutClasses = [
              "lg:col-span-2 aspect-[16/10] md:h-[420px]", // Diwali (wide block)
              "lg:col-span-1 aspect-[3/4] md:h-[420px]",  // Durga Puja (tall block)
              "lg:col-span-1 aspect-[3/4] md:h-[380px]",  // Onam (tall block)
              "lg:col-span-1 aspect-[4/3] md:h-[380px]",  // Bihu (wide block)
              "lg:col-span-1 aspect-[3/4] md:h-[380px]",  // Pongal (tall block)
              "lg:col-span-3 aspect-[16/7] md:h-[350px]"   // Hornbill (full panorama)
            ][index] || "lg:col-span-1 aspect-[4/3]";

            return (
              <motion.div 
                key={fest.id} 
                variants={itemVariants}
                className={`flex flex-col space-y-4 group ${layoutClasses.includes("col-span-3") ? "w-full" : ""}`}
              >
                {/* Photo Canvas */}
                <div className={`w-full overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md ${layoutClasses.split(' ')[0]} ${layoutClasses.split(' ').slice(1).join(' ')}`}>
                  <img
                    src={fest.image}
                    alt={`${fest.title} — ${fest.region}: ${fest.description}`}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                </div>

                {/* Text Meta info */}
                <div className="space-y-1 text-left">
                  <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
                    {fest.region}
                  </span>
                  <h3 className="font-serif text-xl text-[#171717] font-normal group-hover:text-[#E8752A] transition-colors leading-tight">
                    {fest.title}
                  </h3>
                  <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed max-w-2xl">
                    {fest.description}
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
