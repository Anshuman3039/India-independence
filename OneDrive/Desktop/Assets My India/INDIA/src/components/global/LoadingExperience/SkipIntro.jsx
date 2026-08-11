import React from 'react';

export default function SkipIntro({ onSkip }) {
  return (
    <button
      onClick={onSkip}
      className="absolute bottom-8 right-8 z-50 font-sans text-xs md:text-sm tracking-[0.2em] text-[#6B6B6B] hover:text-[#171717] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#E8752A] focus-visible:outline-offset-4 cursor-pointer py-2 px-3 border border-transparent hover:border-[#171717]/10 rounded-sm"
      aria-label="Skip introduction sequence and go to home page"
    >
      Skip intro →
    </button>
  );
}
