import React from 'react';

export default function StoryChapter({ number }) {
  return (
    <div className="flex items-center space-x-4">
      <span className="font-mono text-xs text-[#E8752A] tracking-widest uppercase">
        CHAPTER {number} / 06
      </span>
      <div className="h-[1px] w-12 bg-white/20" />
      <span className="text-[10px] font-sans text-white/40 uppercase tracking-widest">
        VISUAL DOCUMENTARY
      </span>
    </div>
  );
}
