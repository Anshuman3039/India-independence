import React from 'react';
import { motion } from 'framer-motion';

export default function LanguageDetail({ language, onClose }) {
  if (!language) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="w-full bg-[#171717]/5 border border-charcoal/10 p-6 md:p-8 flex flex-col justify-between relative shadow-lg text-left"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-xs font-sans font-semibold text-[#6B6B6B] hover:text-[#171717] transition-colors cursor-pointer focus-visible:outline-[#E8752A] outline-none"
        aria-label={`Close details for ${language.name}`}
      >
        CLOSE ✕
      </button>

      <div className="space-y-6">
        {/* Language Category Eyebrow & Native Script */}
        <div className="space-y-2">
          <span className="text-[10px] font-sans font-bold text-[#E8752A] uppercase tracking-[0.2em] block">
            {language.family} Language
          </span>
          <div className="flex flex-wrap items-baseline gap-4">
            <h3 className="font-serif text-3xl md:text-4xl text-[#171717] font-normal leading-none">
              {language.name}
            </h3>
            <span className="font-serif text-2xl md:text-3xl text-[#16734A] leading-none" aria-label={`Written as ${language.nativeName}`}>
              {language.nativeName}
            </span>
          </div>
        </div>

        {/* Description Text */}
        <p className="text-xs md:text-sm font-sans font-light text-[#171717] leading-relaxed italic border-l-2 border-[#E8752A] pl-3">
          "{language.description}"
        </p>

        {/* Regions Information */}
        <div className="space-y-1">
          <span className="text-[10px] font-sans font-bold text-[#6B6B6B] uppercase tracking-[0.2em] block">
            PRIMARY REGIONS
          </span>
          <span className="text-xs md:text-sm font-sans font-medium text-[#171717]">
            {language.regions.join(" • ")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
