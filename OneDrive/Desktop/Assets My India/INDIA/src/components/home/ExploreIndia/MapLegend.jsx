import React from 'react';

export default function MapLegend() {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 py-3.5 border-t border-b border-[#171717]/5 max-w-xs mx-auto select-none">
      <span className="text-[10px] font-sans font-semibold text-[#E8752A] uppercase tracking-[0.25em]">
        Explore by Region
      </span>
      <p className="text-xs font-sans text-[#6B6B6B] font-light">
        Hover or tap a state to begin.
      </p>
    </div>
  );
}
