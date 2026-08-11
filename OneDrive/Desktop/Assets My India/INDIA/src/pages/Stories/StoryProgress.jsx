import React from 'react';

export default function StoryProgress({ activeIndex, totalStories }) {
  const numberStr = String(activeIndex + 1).padStart(2, '0');
  
  return (
    <div className="flex items-center space-x-3 select-none font-mono text-[10px] text-white/50 tracking-wider">
      <span className="text-[#E8752A] font-bold">{numberStr}</span>
      <div className="relative w-16 h-[2px] bg-white/20">
        <div 
          style={{ width: `${((activeIndex) / (totalStories - 1)) * 100}%` }}
          className="absolute top-0 left-0 h-full bg-[#E8752A] transition-all duration-500"
        />
      </div>
      <span>{String(totalStories).padStart(2, '0')}</span>
    </div>
  );
}
