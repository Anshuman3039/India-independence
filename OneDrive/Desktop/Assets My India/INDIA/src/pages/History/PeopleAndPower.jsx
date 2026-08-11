import React from 'react';
import { motion } from 'framer-motion';
import { peopleAndPower } from '../../data/history';

export default function PeopleAndPower() {
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
            SOCIAL TEXTURES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#171717] font-normal leading-tight">
            History is more than rulers.
          </h2>
          <p className="text-[#6B6B6B] font-sans text-sm md:text-base leading-relaxed font-light">
            Historical change was experienced and shaped by many kinds of people—merchants, craftspeople, scholars, and farmers.
          </p>
        </div>

        {/* Roles List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {peopleAndPower.map((role) => (
            <motion.div
              key={role.id}
              variants={itemVariants}
              className="flex flex-col space-y-4 text-left group"
            >
              {/* Photo Frame */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-charcoal/5 border border-charcoal/5 relative shadow-md">
                <img
                  src={role.image}
                  alt={role.name}
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-white/5 pointer-events-none" />
              </div>

              {/* Details */}
              <div className="space-y-2">
                <span className="text-[10px] font-sans font-bold text-[#16734A] uppercase tracking-[0.2em] block">
                  HISTORICAL ROLES
                </span>
                <h3 className="font-serif text-lg md:text-xl text-[#171717] font-normal group-hover:text-[#E8752A] transition-colors leading-tight">
                  {role.name}
                </h3>
                <p className="text-xs md:text-sm font-sans font-light text-[#6B6B6B] leading-relaxed">
                  {role.description}
                </p>
                <span className="text-[9px] font-sans italic text-[#6B6B6B]/60 block pt-1">
                  Context: {role.context}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
